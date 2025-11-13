import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from './Icons.js';

const ArchiveCard = ({ video, onVideoSelect }) => {
    const { t } = useTranslation();

    return (
        React.createElement('article', {
            className: "group relative flex-shrink-0 w-full xs:w-56 sm:w-64 md:w-72 bg-night-blue border border-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 shadow-lg",
            onClick: () => onVideoSelect(video)
        },
            React.createElement('div', { className: "relative h-32 xs:h-36 sm:h-40 md:h-44 bg-gray-800" },
                React.createElement('img', {
                    src: `${video.thumbnail}&w=300&h=200`,
                    alt: t(video.title),
                    loading: "lazy",
                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                }),
                React.createElement('div', { className: "absolute inset-0 bg-black/40" }),
                React.createElement('span', { className: "absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-1.5 py-0.5 rounded" }, video.duration),
                React.createElement('div', { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" },
                    React.createElement('div', { className: "w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm" },
                        React.createElement(Play, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" })
                    )
                )
            ),
            React.createElement('div', { className: "p-3 sm:p-4" },
                React.createElement('h3', { className: "text-xs sm:text-sm font-semibold text-white group-hover:text-primary transition-colors line-clamp-2 h-8 sm:h-10 mb-1 sm:mb-2" }, t(video.title)),
                React.createElement('p', { className: "text-xs text-gray-400 truncate" }, video.source)
            )
        )
    );
};

export default ArchiveCard;
