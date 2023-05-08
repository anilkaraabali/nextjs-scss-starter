import type { NextPage } from 'next';

import { ErrorView } from '@/views/error/view';

const Custom404: NextPage = () => {
  return <ErrorView title='This page is not found' statusCode={404} />;
};

export default Custom404;
