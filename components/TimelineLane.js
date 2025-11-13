import React, { useRef } from 'react';
import ArchiveCard from './ArchiveCard.js';

const TimelineLane = ({ id, title, videos, onVideoSelect, index }) => {
    const scrollContainerRef = useRef(null);

    const animationDelay = `${index * 100}ms`;

    return (
        React.createElement('section', { 
            id: id, 
            className: "space-y-3 sm:space-y-4 animate-slide-up",
            style: { animationDelay }
        },
            React.createElement('h2', { className: "text-lg sm:text-xl md:text-2xl font-bold text-white font-playfair px-2 sm:px-0" }, title),
            React.createElement('div', {
                ref: scrollContainerRef,
                className: "flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 -mx-2 sm:-mx-4 px-2 sm:px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            },
                videos.map(video => (
                    React.createElement('div', { 
                        key: video.id, 
                        className: "w-4/5 xs:w-56 sm:w-64 md:w-72 flex-shrink-0" 
                    },
                        React.createElement(ArchiveCard, { video: video, onVideoSelect: onVideoSelect })
                    )
                ))
            )
        )
    );
};

export default TimelineLane;
