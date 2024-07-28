import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import StoryViewerProgress from '../progress';

describe('StoryViewerProgress', () => {
    test('StoryViewerProgress should render correctly', async () => {
        const onProgressCompleted = jest.fn();

        const list = [
            {
                image: 'https://via.placeholder.com/150',
                tip: 'Tip 1',
            },
            {
                image: 'https://via.placeholder.com/150',
                tip: 'Tip 2',
            },
            {
                image: 'https://via.placeholder.com/150',
                tip: 'Tip 3',
            },
        ];

        render(
            <StoryViewerProgress
                list={list}
                onProgressCompleted={onProgressCompleted}
                currentIndex={0}
            />,
        );

        const progressBars = screen.getAllByRole('progressbar');

        fireEvent.animationEnd(progressBars[0]);

        expect(progressBars).toHaveLength(3);
        expect(onProgressCompleted).toHaveBeenCalledTimes(1);
    });
});
