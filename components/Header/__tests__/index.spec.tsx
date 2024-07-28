import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../index';

describe('Header', () => {
    test('Header should render correctly', async () => {
        render(<Header />);

        const image = screen.getByAltText('logo');

        expect(image).toBeInTheDocument();
    });
});
