import { renderHook, act } from '@testing-library/react';
import useStoryViewer from '../useStoryViewer';

describe('useStoryViewer', () => {
    test('useStoryViewer should return correct data and states in default state', () => {
        const onClose = jest.fn();
        const onNext = jest.fn();
        const onPrev = jest.fn();

        const { result } = renderHook(() => useStoryViewer({
            list: [
                {
                    image: 'https://picsum.photos/200/300',
                },
                {
                    image: 'https://picsum.photos/200/300',
                },
            ],
            isOpen: true,
            onClose,
            onNext,
            onPrev,
        }));

        expect(result.current.currentIndex).toBe(0);

        act(() => {
            result.current.onNavigatePrevious();
        });

        expect(result.current.currentIndex).toBe(0);
        expect(onPrev).toHaveBeenCalled();
        onPrev.mockReset();

        act(() => {
            result.current.onProgressCompleted();
        });

        expect(result.current.currentIndex).toBe(1);

        act(() => {
            result.current.onNavigateNext();
        });

        expect(result.current.currentIndex).toBe(0);
        expect(onNext).toHaveBeenCalled();
        onNext.mockReset();

        act(() => {
            result.current.onNavigatePrevious();
        });

        expect(result.current.currentIndex).toBe(0);
        expect(onPrev).toHaveBeenCalled();
        onPrev.mockReset();

        act(() => {
            result.current.onNavigateNext();
        });

        expect(result.current.currentIndex).toBe(1);
        expect(onNext).not.toHaveBeenCalled();

        act(() => {
            result.current.onNavigatePrevious();
        });

        expect(onPrev).not.toHaveBeenCalled();
    });
});
