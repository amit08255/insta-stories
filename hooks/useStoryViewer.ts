import * as React from 'react';

type Options = {
    list: Array<{
        image: string;
        tip?: string;
    }>;
    isOpen: boolean;
    onNext: () => boolean;
    onPrev: () => boolean;
    onClose: () => void;
};

const useStoryViewer = ({
    list, isOpen, onPrev, onNext, onClose,
}:Options) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (!isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    const onProgressCompleted = () => {
        if (currentIndex === list.length - 1) {
            if (!onNext()) {
                onClose();
                return;
            }

            setCurrentIndex(0);
            return;
        }

        setCurrentIndex((val) => val + 1);
    };

    const onNavigatePrevious = () => {
        if (currentIndex === 0) {
            onPrev();
            setCurrentIndex(0);
            return;
        }

        setCurrentIndex((val) => val - 1);
    };

    const onNavigateNext = () => {
        if (currentIndex === list.length - 1) {
            onNext();
            setCurrentIndex(0);
            return;
        }

        setCurrentIndex((val) => val + 1);
    };

    return ({
        currentIndex,
        onProgressCompleted,
        onNavigatePrevious,
        onNavigateNext,
    });
};

export default useStoryViewer;
