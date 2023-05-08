import { render, screen } from '@testing-library/react';

import { Layout } from '../element';

describe('Layout', () => {
  it('should accept children', () => {
    render(<Layout>Children</Layout>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render layout components', () => {
    render(<Layout>Children</Layout>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
