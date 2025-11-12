import React from 'react';
import { useTranslation } from 'react-i18next';

const RelatedVideoCard = ({ video }) => {
    const { t } = useTranslation();

    return (
        React.createElement('article', {
            className: "group flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        },
            React.createElement('img', {
                src: `${video.thumbnail}&w=160&h=90`,
                alt: t(video.title),
                loading: "lazy",
                className: "w-28 h-16 object-cover rounded flex-shrink-0"
            }),
            React.createElement('div', null,
                React.createElement('h4', { className: "text-sm font-semibold text-white group-hover:text-primary transition-colors line-clamp-2" }, t(video.title)),
                React.createElement('p', { className: "text-xs text-gray-400 mt-1" }, video.source),
                React.createElement('p', { className: "text-xs text-gray-500 mt-0.5" }, video.views, " views")
            )
        )
    );
};

export default RelatedVideoCard;
