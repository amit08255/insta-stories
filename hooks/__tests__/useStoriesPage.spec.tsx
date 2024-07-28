import { renderHook, act } from '@testing-library/react';
import useStoriesPage from '../useStoriesPage';

describe('useStoriesPage', () => {
    test('useStoriesPage should return correct data and states in default state', () => {
        const { result } = renderHook(useStoriesPage);

        expect(result.current.activeStory).toBe(null);
        expect(result.current.isOpen).toBe(false);
        expect(result.current.stories).toHaveLength(10);

        act(() => {
            result.current.onStoryClick('66a5baa70b25a8855f487254');
        });

        expect(result.current.activeStory).toBe('66a5baa70b25a8855f487254');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onClose();
        });

        expect(result.current.activeStory).toBe(null);
        expect(result.current.isOpen).toBe(false);
    });

    test('useStoriesPage next and previous should work correctly', () => {
        const { result } = renderHook(useStoriesPage);

        act(() => {
            result.current.onStoryClick('66a5baa70b25a8855f487254');
        });

        expect(result.current.activeStory).toBe('66a5baa70b25a8855f487254');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onPrev();
        });

        expect(result.current.activeStory).toBe('66a5baa70b25a8855f487254');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onNext();
        });

        expect(result.current.activeStory).toBe('66a5baa71eb815a82899efac');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onPrev();
        });

        expect(result.current.activeStory).toBe('66a5baa70b25a8855f487254');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        expect(result.current.activeStory).toBe('66a5baa74398060e686060a4');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        act(() => {
            result.current.onNext();
        });

        expect(result.current.activeStory).toBe('66a5baa727482dab04fbb5c1');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onPrev();
        });

        expect(result.current.activeStory).toBe('66a5baa718714a184ac1df3d');
        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.onClose();
        });

        expect(result.current.activeStory).toBe(null);
        expect(result.current.isOpen).toBe(false);
    });
});
