import type { NextPage } from 'next';

import { ErrorView } from '@/views/error/view';

const Custom404: NextPage = () => (
  <ErrorView statusCode={404} title='This page is not found' />
);

export default Custom404;
