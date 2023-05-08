import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '@/pages/_app';

describe('App', () => {
  it('should render default layout', () => {
    const pageProps = {
      Component: () => {
        return <>test</>;
      },
      pageProps: {},
      router: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    render(<App {...pageProps} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render custom layout', () => {
    const pageProps = {
      Component: () => {
        return <>test</>;
      },
      pageProps: {},
      router: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    pageProps.Component.getLayout = () => <div>custom layout</div>;

    render(<App {...pageProps} />);
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
    expect(screen.getByText('custom layout')).toBeInTheDocument();
  });
});
