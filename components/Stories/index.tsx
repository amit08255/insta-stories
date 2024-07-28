import './stories.style.css';
import * as React from 'react';

type Props = {
    stories: Array<{ id: string, name: string, image: string }>,
    onClick: (id:string) => void,
};

function Stories({ stories, onClick }:Props) {
    return (
        <div className="storiesWrapper">
            {
                stories.map((story) => (
                    <button type="button" key={story.id} className="story" onClick={() => onClick(story.id)}>
                        <div className="item-link">
                            <div className="item-preview">
                                <img alt="preview" src={`${story.image}?userid=${story.id}`} />
                            </div>
                            <div className="info">
                                {story.name}
                            </div>
                        </div>
                    </button>
                ))
            }
        </div>
    );
}

export default Stories;
