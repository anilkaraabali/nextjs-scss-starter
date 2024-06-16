import type { AppProps, NextWebVitalsMetric } from 'next/app';

import { Layout } from '@/layout/Layout';
import '@/styles/index.scss';
import { ErrorBoundaryComponent } from '@/views/error/boundary.component';
import { NextPage } from 'next';

export type NextPageWithLayout<P = object, IP = P> = {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
} & NextPage<P, IP>;

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
} & AppProps;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ErrorBoundaryComponent>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundaryComponent>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const name = metric.name.replace('Next.js-', '');
  const value = metric.value.toFixed(name === 'CLS' ? 1 : 0);
  console.info(
    `CWV-${name}:${value}:${
      metric.startTime ? Math.round(metric.startTime) : 0
    }`
  );
}
