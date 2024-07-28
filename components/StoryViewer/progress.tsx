/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';

type Props = {
    list: Array<{
        image: string;
        tip: string;
    }>;
    onProgressCompleted: () => void;
    currentIndex: number;
}

function StoryViewerProgress({ list, onProgressCompleted, currentIndex }:Props) {
    return (
        <div className="progress-container">
            {
                list.map((_, index) => (
                    <div role="progressbar" onAnimationEnd={onProgressCompleted} key={`progress-${index + 1}`} className={`progress ${currentIndex > index ? 'passed' : ''} ${currentIndex === index ? 'active' : ''}`} />
                ))
            }
        </div>
    );
}

export default StoryViewerProgress;
