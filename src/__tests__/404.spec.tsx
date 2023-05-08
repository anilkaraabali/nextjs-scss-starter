import { render, screen } from '@testing-library/react';

import Custom404 from '@/pages/404';

describe('Custom404', () => {
  it('should render with 404 status code', () => {
    render(<Custom404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
