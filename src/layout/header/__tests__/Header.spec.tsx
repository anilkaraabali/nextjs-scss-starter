import { Header } from '../Header';

describe('<Header/>', () => {
  it('renders without throwing any errors', () => {
    expect(() => <Header />).not.toThrow();
  });
});
