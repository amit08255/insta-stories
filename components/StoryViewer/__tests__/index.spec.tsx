import * as React from 'react';
import {
    screen, render, fireEvent, act,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import StoryViewer from '../index';

describe('StoryViewer', () => {
    test('StoryViewer should render correctly', async () => {
        const onClose = jest.fn();
        const onNext = jest.fn();
        const onPrev = jest.fn();

        const stories = [
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
            <StoryViewer
                user={{
                    name: 'John Doe',
                    image: 'https://via.placeholder.com/150',
                }}
                list={stories}
                stories={stories}
                onClose={onClose}
                onNext={onNext}
                onPrev={onPrev}
                isOpen
            />,
        );

        const name = screen.getByText('John Doe');
        const image = screen.getByAltText('preview');
        const progressBars = screen.getAllByRole('progressbar');
        const nextButton = screen.getByTestId('next-button');
        const prevButton = screen.getByTestId('prev-button');
        const closeButton = screen.getByTestId('close-button');

        expect(name).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(progressBars).toHaveLength(3);
        expect(nextButton).toBeInTheDocument();
        expect(prevButton).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();

        fireEvent.animationEnd(progressBars[0]);
        await act(async () => {});
        fireEvent.animationEnd(progressBars[1]);
        await act(async () => {});
        fireEvent.animationEnd(progressBars[2]);
        await act(async () => {});

        expect(onNext).toHaveBeenCalled();
    });
});
