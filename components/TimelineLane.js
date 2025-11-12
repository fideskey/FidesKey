import React, { useRef } from 'react';
import ArchiveCard from './ArchiveCard.js';

const TimelineLane = ({ id, title, videos, onVideoSelect, index }) => {
    const scrollContainerRef = useRef(null);

    const animationDelay = `${index * 100}ms`;

    return (
        React.createElement('section', { 
            id: id, 
            className: "space-y-4 animate-slide-up",
            style: { animationDelay }
        },
            React.createElement('h2', { className: "text-2xl font-bold text-white font-playfair" }, title),
            React.createElement('div', {
                ref: scrollContainerRef,
                className: "flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            },
                videos.map(video => (
                    React.createElement(ArchiveCard, { key: video.id, video: video, onVideoSelect: onVideoSelect })
                ))
            )
        )
    );
};

export default TimelineLane;
