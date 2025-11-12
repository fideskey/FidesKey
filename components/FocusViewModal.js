import React from 'react';
import { useTranslation } from 'react-i18next';
import { videoData } from '../data/demoData.js';
import { Close, Heart, Share, Bookmark, CheckmarkCircle } from './Icons.js';
import RelatedVideoCard from './RelatedVideoCard.js';

const FocusViewModal = ({ video, onClose }) => {
    const { t, i18n } = useTranslation();
    const SourceIcon = video.sourceIcon;
    const relatedVideos = videoData.filter(v => v.category === video.category && v.id !== video.id).slice(0, 4);

    return (
        React.createElement('div', {
            className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fade-in",
            onClick: onClose
        },
            React.createElement('div', {
                className: "bg-night-blue w-full max-w-5xl h-full max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-scale-up border border-primary/20",
                onClick: e => e.stopPropagation()
            },
                React.createElement('div', { className: "relative bg-black aspect-video" },
                    React.createElement('img', {
                        src: `${video.thumbnail}&w=1280`,
                        alt: t(video.title),
                        className: "w-full h-full object-contain"
                    }),
                    React.createElement('div', { className: "absolute top-4 right-4" },
                        React.createElement('button', {
                            onClick: onClose,
                            'aria-label': t('close'),
                            className: "bg-black/50 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                        }, React.createElement(Close, { className: "w-6 h-6" }))
                    )
                ),
                React.createElement('div', { className: "flex-grow flex flex-col md:flex-row min-h-0" },
                    React.createElement('div', { className: "flex-grow p-6 overflow-y-auto" },
                        React.createElement('h1', { className: "text-2xl font-bold text-white mb-2" }, t(video.title)),
                        React.createElement('div', { className: "flex items-center gap-4 text-sm text-gray-400 mb-4" },
                            React.createElement('span', null, video.views, " ", t('demo.views_other')),
                            React.createElement('span', null, "•"),
                            React.createElement('span', null, new Date(video.publishDate).toLocaleDateString(i18n.language, { year: 'numeric', month: 'long' }))
                        ),
                         React.createElement('div', { className: "flex items-center gap-4 py-4 border-y border-gray-700" },
                            React.createElement(SourceIcon, { className: "w-8 h-8 text-primary" }),
                            React.createElement('span', { className: "font-semibold text-white" }, video.source),
                            React.createElement(CheckmarkCircle, { className: "w-6 h-6 text-secondary" })
                        ),
                        React.createElement('div', { className: "flex items-center gap-4 py-4 text-gray-300" },
                            React.createElement('button', { className: "flex items-center gap-2 hover:text-white" }, React.createElement(Heart, null), video.likes),
                            React.createElement('button', { className: "flex items-center gap-2 hover:text-white" }, React.createElement(Share, null), t('videoActions.share')),
                            React.createElement('button', { className: "flex items-center gap-2 hover:text-white" }, React.createElement(Bookmark, null), t('videoActions.save'))
                        ),
                        React.createElement('ul', { className: "text-sm text-gray-300 space-y-2 mt-4" },
                            video.highlights.map((h, i) => React.createElement('li', { key: i, className: "flex items-start" }, React.createElement('span', { className: "text-secondary mr-2 mt-1" }, "✓"), t(h)))
                        )
                    ),
                    React.createElement('aside', { className: "w-full md:w-80 bg-white/5 p-4 overflow-y-auto flex-shrink-0" },
                        React.createElement('h3', { className: "text-lg font-semibold text-white mb-4" }, t('demo.relatedContent')),
                        React.createElement('div', { className: "space-y-3" },
                            relatedVideos.map(v => React.createElement(RelatedVideoCard, { key: v.id, video: v }))
                        )
                    )
                )
            )
        )
    );
};

export default FocusViewModal;
