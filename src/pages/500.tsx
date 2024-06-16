import type { NextPage } from 'next';

import { ErrorView } from '@/views/error/view';

const Custom500: NextPage = () => (
  <ErrorView statusCode={500} title='Internal server error' />
);

export default Custom500;
