import { render, screen } from '@testing-library/react';

import Custom500 from '@/pages/500';

describe('Custom500', () => {
  it('should render with 500 status code', () => {
    render(<Custom500 />);
    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
