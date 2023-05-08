import { render, screen } from '@testing-library/react';

import { Header } from '../element';

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
