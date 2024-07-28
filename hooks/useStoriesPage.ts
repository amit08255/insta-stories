import * as React from 'react';

const useStoriesPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeStory, setActiveStory] = React.useState<string>(null);

    const stories = [
        {
            id: '66a5baa70b25a8855f487254',
            name: 'Burgess',
            image: '/users/1.png',
        },
        {
            id: '66a5baa71eb815a82899efac',
            name: 'Margo',
            image: '/users/2.png',
        },
        {
            id: '66a5baa73c0ce80422f14a77',
            name: 'Ophelia',
            image: '/users/3.png',
        },
        {
            id: '66a5baa700a07cbf7b9e8af4',
            name: 'Tyler',
            image: '/users/4.png',
        },
        {
            id: '66a5baa75fae395a61390896',
            name: 'Monique',
            image: '/users/5.png',
        },
        {
            id: '66a5baa7126fd6ecbbaac07b',
            name: 'Walsh',
            image: '/users/6.png',
        },
        {
            id: '66a5baa74398060e686060a4',
            name: 'Kent',
            image: '/users/7.png',
        },
        {
            id: '66a5baa700f3018b38dc5118',
            name: 'Adeline',
            image: '/users/8.png',
        },
        {
            id: '66a5baa718714a184ac1df3d',
            name: 'Brooks',
            image: '/users/9.png',
        },
        {
            id: '66a5baa727482dab04fbb5c1',
            name: 'Rojas',
            image: '/users/10.png',
        },
    ];

    const userStories = {
        '66a5baa70b25a8855f487254': [
            { image: '/stories/1.jpg', tip: 'Do you like this?' },
            { image: '/stories/2.jpg', tip: 'This is a story' },
            { image: '/stories/3.jpg' },
            { image: '/stories/4.jpg' },
        ],
        '66a5baa71eb815a82899efac': [
            { image: '/stories/5.jpg' },
            { image: '/stories/6.jpg', tip: 'My today\'s mood' },
        ],
        '66a5baa73c0ce80422f14a77': [
            { image: '/stories/7.jpg' },
            { image: '/stories/8.jpg', tip: 'I have a great day today' },
            { image: '/stories/9.jpg' },
        ],
        '66a5baa700a07cbf7b9e8af4': [
            { image: '/stories/10.jpg', tip: 'Give me something interesting' },
            { image: '/stories/11.jpg' },
            { image: '/stories/12.jpg' },
            { image: '/stories/13.jpg', tip: 'Random quote' },
        ],
        '66a5baa75fae395a61390896': [
            { image: '/stories/14.jpg' },
            { image: '/stories/15.jpg', tip: 'Run fast' },
            { image: '/stories/16.jpg' },
        ],
        '66a5baa7126fd6ecbbaac07b': [
            { image: '/stories/17.jpg' },
            { image: '/stories/18.jpg', tip: 'I like this' },
        ],
        '66a5baa74398060e686060a4': [
            { image: '/stories/19.jpg' },
            { image: '/stories/20.jpg', tip: 'I can handle this' },
            { image: '/stories/21.jpg' },
        ],
        '66a5baa700f3018b38dc5118': [
            { image: '/stories/22.jpg' },
            { image: '/stories/23.jpg' },
        ],
        '66a5baa718714a184ac1df3d': [
            { image: '/stories/24.jpg' },
            { image: '/stories/25.jpg' },
            { image: '/stories/26.jpg' },
        ],
        '66a5baa727482dab04fbb5c1': [
            { image: '/stories/27.jpg' },
            { image: '/stories/28.jpg' },
        ],
    };

    const onStoryClick = (id:string) => {
        setActiveStory(id);
        setIsOpen(true);
    };

    const onNext = () => {
        const userIds = stories.map((story) => story.id);
        const index = userIds.indexOf(activeStory);

        if (index >= userIds.length - 1) {
            return false;
        }

        setActiveStory(userIds[index + 1]);
        return true;
    };

    const onPrev = () => {
        const userIds = stories.map((story) => story.id);
        const index = userIds.indexOf(activeStory);

        if (index <= 0) {
            return false;
        }

        setActiveStory(userIds[index - 1]);
        return true;
    };

    const onClose = () => {
        setActiveStory(null);
        setIsOpen(false);
    };

    return ({
        onClose, activeStory, isOpen, onStoryClick, stories, userStories, onNext, onPrev,
    });
};

export default useStoriesPage;
