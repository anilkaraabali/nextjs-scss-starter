/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageProps } from 'next/image';
import { ScriptProps } from 'next/script';
import React from 'react';

// e.g. import * as nextImageUtils from 'next/image';
// nextImageUtils['triggerError']();
jest.mock('next/image', () => {
  let errorHandler: any;

  const Component: React.FC<ImageProps> = (props) => {
    errorHandler = props.onError;

    return (
      <img {...props} alt={props.alt || 'alt'} src={props.src as string} />
    );
  };

  return {
    __esModule: true,
    default: Component,
    triggerError: (): void => errorHandler && errorHandler(),
  };
});

// e.g. import * as nextScriptUtils from 'next/script';
// nextScriptUtils['triggerLoad']();
jest.mock('next/script', () => {
  let loadHandler: any;
  let errorHandler: any;

  const Component: React.FC<ScriptProps> = (props) => {
    loadHandler = props.onLoad;
    errorHandler = props.onError;

    return <script {...props} />;
  };

  return {
    __esModule: true,
    default: Component,
    triggerError: (): void => errorHandler && errorHandler(),
    triggerLoad: (): void => loadHandler && loadHandler(),
  };
});

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({
    children,
  }: {
    children: Array<React.ReactElement>;
  }): React.ReactElement => <>{children}</>,
}));

jest.mock(
  'next/link',
  () =>
    ({ children }: { children: JSX.Element }): JSX.Element =>
      children
);

export {};
