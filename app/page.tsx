'use client';

import * as React from 'react';
import Header from 'components/Header';
import Stories from 'components/Stories';
import StoryViewer from 'components/StoryViewer';
import useStoriesPage from 'hooks/useStoriesPage';

export default function Page() {
    const {
        stories,
        userStories,
        activeStory,
        isOpen,
        onClose,
        onNext,
        onPrev,
        onStoryClick,
    } = useStoriesPage();

    return (
        <>
            <Header />
            <Stories stories={stories} onClick={onStoryClick} />
            <StoryViewer
                user={stories.find((story) => story.id === activeStory)}
                list={userStories[activeStory]}
                isOpen={isOpen}
                onClose={onClose}
                onNext={onNext}
                onPrev={onPrev}
            />
        </>
    );
}
