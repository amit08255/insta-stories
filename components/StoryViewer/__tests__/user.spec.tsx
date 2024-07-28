import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StoryViewerUser from '../user';

describe('StoryViewerUser', () => {
    test('StoryViewerUser should render correctly', async () => {
        render(
            <StoryViewerUser
                user={{
                    name: 'John Doe',
                    image: 'https://via.placeholder.com/150',
                }}
            />,
        );

        const name = screen.getByText('John Doe');
        const image = screen.getByAltText('preview');

        expect(name).toBeInTheDocument();
        expect(image).toBeInTheDocument();
    });
});
