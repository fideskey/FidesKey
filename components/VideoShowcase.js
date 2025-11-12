import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { videoData } from '../data/demoData.js';
import { Heart, Share, Bookmark, CheckmarkCircle, Play, Volume, Subtitles, Settings, Expand } from './Icons.js';

// Helper to generate a single optimized Unsplash URL
const generateOptimizedSrc = (baseUrl, width = 400) => {
    if (!baseUrl.includes('unsplash.com')) return baseUrl;
    const url = new URL(baseUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', '75');
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('auto', 'format');
    return url.toString();
};

// Helper to generate srcset for Unsplash images
const generateSrcSet = (baseUrl, widths = [400, 800]) => {
  if (!baseUrl.includes('unsplash.com')) return '';
  const url = new URL(baseUrl);
  url.searchParams.delete('w');
  url.searchParams.set('q', '75');
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('auto', 'format');

  return widths.map(width => {
    url.searchParams.set('w', width.toString());
    return `${url.toString()} ${width}w`;
  }).join(', ');
};

const VideoCard = ({ video }) => {
    const { t, i18n } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);
    const SourceIcon = video.sourceIcon;
    const viewsCount = parseInt(video.views.replace('K', '000').replace('.', ''), 10);
    const videoCardSizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";


    const PlayerIconButton = ({ icon: Icon, label }) => (
        React.createElement('div', { className: "relative group/button" },
            React.createElement('button', { className: "text-white transition-colors opacity-50 pointer-events-none" },
                React.createElement(Icon, { className: "w-5 h-5" }) 
            ),
            React.createElement('div', { className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-night-blue border border-gray-600 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 pointer-events-none z-10" },
                label
            )
        )
    );

    const ActionIconButton = ({ icon: Icon, label, children }) => (
        React.createElement('div', { className: "relative group/button" },
            React.createElement('button', { 'aria-label': label, className: "flex items-center gap-1.5 text-gray-400 opacity-50 pointer-events-none" },
                React.createElement(Icon, { className: "w-4 h-4" }),
                children
            ),
            React.createElement('div', { className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-night-blue border border-gray-600 text-white text-xs rounded py-1 px-2 opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 pointer-events-none z-10" },
                label
            )
        )
    );


    return (
        React.createElement('article', { className: "group bg-night-blue border border-white/10 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2" },
            React.createElement('div', { className: "relative bg-gray-800 aspect-video" },
                React.createElement('img', {
                    src: generateOptimizedSrc(video.thumbnail),
                    srcSet: generateSrcSet(video.thumbnail),
                    sizes: videoCardSizes,
                    alt: t(video.title), 
                    loading: "lazy", 
                    onLoad: () => setIsLoaded(true),
                    onError: (e) => { e.currentTarget.style.visibility = 'hidden'; },
                    className: `w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`
                }),
                React.createElement('div', { className: `absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}` }),
                React.createElement('span', { className: "absolute top-3 left-3 bg-primary text-night-blue text-xs font-bold px-2 py-1 rounded" }, t(video.category)),
                React.createElement('span', { className: "absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded" }, video.duration),
                
                React.createElement('div', { className: "absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" },
                    React.createElement('button', { className: "w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-secondary opacity-50 pointer-events-none" },
                        React.createElement(CheckmarkCircle, { className: "w-10 h-10" })
                    ),
                    React.createElement('div', { className: "absolute bottom-0 left-0 right-0 p-3 space-y-2" },
                        React.createElement('div', { className: "w-full bg-white/20 h-1 rounded-full" },
                            React.createElement('div', { className: "bg-primary h-1 rounded-full", style: {width: '40%'} })
                        ),
                        React.createElement('div', { className: "flex justify-between items-center" },
                            React.createElement('div', { className: "flex items-center gap-3" },
                                React.createElement(PlayerIconButton, { icon: Volume, label: t('videoPlayer.volume') })
                            ),
                            React.createElement('div', { className: "flex items-center gap-3" },
                                React.createElement(PlayerIconButton, { icon: Subtitles, label: t('videoPlayer.subtitles') }),
                                React.createElement(PlayerIconButton, { icon: Settings, label: t('videoPlayer.settings') }),
                                React.createElement(PlayerIconButton, { icon: Expand, label: t('videoPlayer.fullscreen') })
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: "p-5 flex flex-col flex-grow bg-night-blue text-white" },
                React.createElement('h3', { className: "font-bold text-lg mb-2 leading-tight text-white group-hover:text-primary transition-colors line-clamp-2 h-14" }, t(video.title)),
                React.createElement('div', { className: "flex items-center justify-between text-sm text-gray-400 mb-3" },
                    React.createElement('div', { className: "flex items-center truncate" },
                        React.createElement(SourceIcon, { className: "w-4 h-4 mr-2 text-primary flex-shrink-0" }),
                        React.createElement('span', { className: "truncate" }, video.source),
                        React.createElement(CheckmarkCircle, { className: "w-4 h-4 ml-2 text-secondary flex-shrink-0" })
                    ),
                    React.createElement('span', { className: "text-xs text-gray-500 flex-shrink-0 ml-2" },
                        new Date(video.publishDate).toLocaleDateString(i18n.language, { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '')
                    )
                ),
                React.createElement('ul', { className: "text-xs text-gray-400 space-y-1.5 mb-4 flex-grow" },
                    video.highlights.map((h, i) => React.createElement('li', { key: i, className: "flex items-start" }, React.createElement('span', { className: "text-secondary mr-2 mt-0.5" }, "✓"), React.createElement('span', null, t(h))))
                ),
                React.createElement('div', { className: "flex justify-between items-center text-gray-400 border-t border-white/10 pt-4 text-sm" },
                    React.createElement('div', { className: "flex items-center gap-4" },
                        React.createElement(ActionIconButton, { icon: Heart, label: t('videoActions.like') },
                            video.likes
                        )
                    ),
                    React.createElement('div', { className: "flex items-center gap-4" },
                        React.createElement(ActionIconButton, { icon: Share, label: t('videoActions.share') }),
                        React.createElement(ActionIconButton, { icon: Bookmark, label: t('videoActions.save') }),
                        React.createElement('span', { className: "font-semibold text-white" }, t('demo.views', { count: viewsCount, postProcess: 'interval' }))
                    )
                )
            )
        )
    );
};

const VideoShowcase = () => {
    const { t } = useTranslation();
    const featuredVideos = videoData.slice(0, 3);

    return (
        React.createElement('section', { className: "py-20 bg-night-blue" },
            React.createElement('div', { className: "container mx-auto px-4" },
                React.createElement('div', { className: "text-center mb-12" },
                    React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-4 text-white font-playfair" }, t('showcase.title')),
                    React.createElement('p', { className: "text-lg text-gray-300 max-w-2xl mx-auto" }, t('showcase.subtitle'))
                ),
                React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:auto-rows-fr" },
                    featuredVideos.map(video => React.createElement(VideoCard, { key: video.id, video: video }))
                )
            )
        )
    );
};

export default VideoShowcase;