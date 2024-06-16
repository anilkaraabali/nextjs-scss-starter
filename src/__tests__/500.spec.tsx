import Custom500 from '@/pages/500';
import { render, screen } from '@testing-library/react';

describe('<Custom500/>', () => {
  it('renders with 500 status code', () => {
    render(<Custom500 />);

    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
