import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Example from 'components/Example';

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<Example />);

    // ASSERT
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
