import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, CheckmarkCircle } from './Icons.js';

const FeaturedStory = ({ video, onVideoSelect }) => {
    const { t, i18n } = useTranslation();
    const SourceIcon = video.sourceIcon;

    return (
        React.createElement('section', { 
            className: "group relative rounded-xl overflow-hidden cursor-pointer shadow-2xl shadow-primary/10",
            onClick: () => onVideoSelect(video) 
        },
            React.createElement('img', {
                src: `${video.thumbnail}&w=1200&h=600`,
                alt: t(video.title),
                className: "w-full h-auto md:h-[450px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            }),
            React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" }),
            React.createElement('div', { className: "absolute inset-0 flex items-center justify-center" },
                React.createElement('div', { className: "w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100" },
                    React.createElement(Play, { className: "w-10 h-10 text-white ml-2" })
                )
            ),
            React.createElement('div', { className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white" },
                React.createElement('span', { className: "text-sm font-bold text-primary mb-2 inline-block" }, t('demo.featuredStory')),
                React.createElement('h1', { className: "text-2xl md:text-4xl font-bold font-playfair mb-3 leading-tight" }, t(video.title)),
                React.createElement('div', { className: "flex items-center gap-4 text-sm text-gray-300" },
                    React.createElement('div', { className: "flex items-center" },
                        React.createElement(SourceIcon, { className: "w-4 h-4 mr-2" }),
                        video.source
                    ),
                    React.createElement(CheckmarkCircle, { className: "w-5 h-5 text-secondary" }),
                     React.createElement('span', null, "|"),
                    React.createElement('span', null, new Date(video.publishDate).toLocaleDateString(i18n.language, { year: 'numeric', month: 'long', day: 'numeric' }))
                ),
                React.createElement('ul', { className: "hidden md:flex gap-4 mt-4 text-sm text-gray-300" },
                    video.highlights.map((h, i) => React.createElement('li', { key: i, className: "flex items-center gap-2" },
                        React.createElement('span', { className: "w-1.5 h-1.5 bg-primary rounded-full" }),
                        t(h)
                    ))
                )
            )
        )
    );
};

export default FeaturedStory;
