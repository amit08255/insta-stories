import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Stories from '../index';

describe('Stories', () => {
    test('Stories should render correctly', async () => {
        const onClick = jest.fn();

        const stories = [
            {
                id: '1',
                name: 'John Doe',
                image: 'https://via.placeholder.com/150',
            },
            {
                id: '2',
                name: 'Jane Doe',
                image: 'https://via.placeholder.com/150',
            },
            {
                id: '3',
                name: 'John Smith',
                image: 'https://via.placeholder.com/150',
            },
        ];

        render(
            <Stories
                stories={stories}
                onClick={onClick}
            />,
        );

        const storyButtons = screen.getAllByRole('button');

        expect(storyButtons).toHaveLength(3);

        fireEvent.click(storyButtons[0]);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
