import { render, screen } from '@testing-library/react';

import { Footer } from '../element';

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
