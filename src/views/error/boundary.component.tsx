import React from 'react';

import { ErrorView } from './view';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundaryComponent extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return <ErrorView statusCode={400} title='Oops, an unexpected error occurred!' />;
    }

    return this.props.children;
  }
}
