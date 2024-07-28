import './storyViewer.style.css';
import * as React from 'react';
import useStoryViewer from 'hooks/useStoryViewer';
import StoryViewerProgress from 'components/StoryViewer/progress';
import StoryViewerUser from './user';

type Props = {
    user: {
        name: string;
        image: string;
    };
    list: Array<{
        image: string;
        tip: string;
    }>;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => boolean;
    onPrev: () => boolean;
};

function StoryViewer({
    user, list, isOpen, onClose, onPrev, onNext,
}: Props) {
    const {
        currentIndex,
        onNavigateNext,
        onNavigatePrevious,
        onProgressCompleted,
    } = useStoryViewer({
        list, onNext, onPrev, onClose, isOpen,
    });

    return (
        <div className={`story-container ${isOpen ? 'open' : ''}`}>
            {
                isOpen ? (
                    <>
                        <button data-testid="next-button" type="button" className="story-previous" onClick={onNavigatePrevious}>Prev</button>
                        <button data-testid="prev-button" type="button" className="story-next" onClick={onNavigateNext}>Next</button>
                        <StoryViewerUser user={user} />
                        <StoryViewerProgress
                            list={list}
                            onProgressCompleted={onProgressCompleted}
                            currentIndex={currentIndex}
                        />
                        <div key={`user-${user.name}-${currentIndex}`} className="fadeIn">
                            <img src={list[currentIndex].image} alt="Slide" className="story-image" />
                        </div>
                        {
                            list[currentIndex].tip ? (
                                <div className="story-tip">
                                    {list[currentIndex].tip}
                                </div>
                            ) : null
                        }
                        <button data-testid="close-button" type="button" className="story-close" onClick={onClose}>×</button>
                    </>
                ) : null
            }
        </div>
    );
}

export default StoryViewer;
