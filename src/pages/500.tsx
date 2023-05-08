import type { NextPage } from 'next';

import { ErrorView } from '@/views/error/view';

const Custom500: NextPage = () => {
  return <ErrorView title='Internal server error' statusCode={500} />;
};

export default Custom500;
