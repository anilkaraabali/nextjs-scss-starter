import Custom404 from '@/pages/404';
import { render, screen } from '@testing-library/react';

describe('<Custom404/>', () => {
  it('renders with 404 status code', () => {
    render(<Custom404 />);

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
