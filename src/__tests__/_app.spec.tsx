import App from '@/pages/_app';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('<App/>', () => {
  it('renders app with default layout', () => {
    const pageProps = {
      Component: () => <>test</>,
      pageProps: {},
      router: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    render(<App {...pageProps} />);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders app with custom layout', () => {
    const pageProps = {
      Component: () => <>test</>,
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
