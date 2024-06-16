import { render, screen } from '@testing-library/react';

import { Layout } from '../Layout';

describe('<Layout/>', () => {
  it('renders layout components', () => {
    render(<Layout>Children</Layout>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
