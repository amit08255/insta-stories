import * as React from 'react';

type Props = {
    user: {
        name: string;
        image: string;
    };
};

function StoryViewerUser({ user }:Props) {
    return (
        <div className="user-info">
            <div className="item-preview">
                <img alt="preview" src={user.image} />
            </div>
            <div className="info">
                <div className="name">{user.name}</div>
                <div className="time">2 hours ago</div>
            </div>
        </div>
    );
}

export default StoryViewerUser;
