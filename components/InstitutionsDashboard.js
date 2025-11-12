import React from 'react';
import { useTranslation } from 'react-i18next';
import { videoData } from '../data/demoData.js';
import { Close, BarChart, Download, Edit, Upload, CheckmarkCircle, TrendingUp } from './Icons.js';

const KPI = ({ title, value, change }) => (
    React.createElement('div', { className: "bg-white/5 p-4 rounded-lg" },
        React.createElement('h3', { className: "text-sm text-gray-400" }, title),
        React.createElement('p', { className: "text-2xl font-bold text-white" }, value),
        change && React.createElement('p', { className: "text-xs text-secondary flex items-center gap-1" }, React.createElement(TrendingUp, {className: "w-4 h-4"}), change)
    )
);

const InstitutionsDashboard = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const institutionVideos = videoData.slice(0, 5);

    if (!isOpen) return null;

    return (
        React.createElement('div', { className: "fixed inset-0 z-40 bg-black/50 animate-fade-in", onClick: onClose },
            React.createElement('div', { 
                className: "absolute top-20 right-0 h-[calc(100vh-5rem)] w-full max-w-sm md:max-w-md lg:max-w-lg bg-night-blue border-l border-gray-700 shadow-2xl overflow-y-auto transform animate-slide-in-right",
                onClick: e => e.stopPropagation()
            },
                React.createElement('div', { className: "p-6" },
                    React.createElement('div', { className: "flex justify-between items-center mb-6" },
                        React.createElement('h2', { className: "text-2xl font-bold text-white" }, t('dashboard.title')),
                        React.createElement('button', { onClick: onClose, 'aria-label': t('dashboard.close'), className: "text-gray-400 hover:text-white" },
                            React.createElement(Close, { className: "w-6 h-6" })
                        )
                    ),

                    React.createElement('div', { className: "grid grid-cols-2 gap-4 mb-8" },
                        React.createElement(KPI, { title: t('dashboard.kpi_videos'), value: "1,204" }),
                        React.createElement(KPI, { title: t('dashboard.kpi_views'), value: "2.1M", change: "+15% 30d" }),
                        React.createElement(KPI, { title: t('dashboard.kpi_likes'), value: "89K" }),
                        React.createElement(KPI, { title: t('dashboard.kpi_engagement'), value: "4.2%" })
                    ),
                    
                    React.createElement('div', { className: "flex justify-between items-center mb-4" },
                      React.createElement('h3', { className: "text-xl font-bold text-white" }, t('dashboard.content_title')),
                      React.createElement('button', { className: "flex items-center gap-2 text-sm text-primary hover:underline" }, React.createElement(Download, {className: "w-4 h-4"}), t('dashboard.action_export'))
                    ),

                    React.createElement('div', { className: "space-y-3" },
                        institutionVideos.map(video => (
                            React.createElement('div', { key: video.id, className: "bg-white/5 p-3 rounded-lg flex items-center gap-4" },
                                React.createElement('img', { src: video.thumbnail, alt: t(video.title), className: "w-20 h-12 object-cover rounded" }),
                                React.createElement('div', { className: "flex-grow" },
                                    React.createElement('p', { className: "text-sm font-semibold text-white truncate" }, t(video.title)),
                                    React.createElement('div', { className: "flex items-center text-xs text-gray-400 gap-4 mt-1" },
                                        React.createElement('span', null, t('dashboard.table_header_views'), ": ", video.views),
                                        React.createElement('span', null, t('dashboard.table_header_likes'), ": ", video.likes),
                                        React.createElement('span', { className: `flex items-center gap-1 ${video.id % 2 === 0 ? 'text-secondary' : 'text-amber-400'}` }, 
                                            video.id % 2 === 0 ? React.createElement(CheckmarkCircle, {className: "w-3 h-3"}) : React.createElement(BarChart, {className: "w-3 h-3"}),
                                            video.id % 2 === 0 ? t('dashboard.status_verified') : t('dashboard.status_in_review')
                                        )
                                    )
                                ),
                                React.createElement('button', { className: "text-primary hover:text-primary/80" }, React.createElement(BarChart, { className: "w-5 h-5" }))
                            )
                        ))
                    ),
                    React.createElement('button', { className: "w-full mt-6 bg-primary text-night-blue font-bold py-2 rounded-lg flex items-center justify-center gap-2" }, React.createElement(Upload, {className: "w-5 h-5"}), t('dashboard.action_publish'))
                )
            )
        )
    );
};

export default InstitutionsDashboard;
