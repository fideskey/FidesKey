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
        React.createElement('div', { className: "fixed inset-0 z-40 bg-black/50 animate-fade-in flex items-center justify-center p-4", onClick: onClose },
            React.createElement('div', { 
                className: "w-full max-w-4xl max-h-[90vh] bg-night-blue border border-gray-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform animate-scale-in",
                onClick: e => e.stopPropagation()
            },
                // HEADER FIJADO
                React.createElement('div', { className: "flex justify-between items-center p-6 border-b border-gray-700 bg-night-blue/95 backdrop-blur-sm sticky top-0 z-10" },
                    React.createElement('h2', { className: "text-2xl font-bold text-white" }, t('dashboard.title')),
                    React.createElement('button', { onClick: onClose, 'aria-label': t('dashboard.close'), className: "text-gray-400 hover:text-white transition-colors" },
                        React.createElement(Close, { className: "w-6 h-6" })
                    )
                ),

                // CONTENIDO CON SCROLL
                React.createElement('div', { className: "flex-1 overflow-y-auto" },
                    React.createElement('div', { className: "p-6 space-y-6" },
                        // KPIs
                        React.createElement('div', { className: "grid grid-cols-2 lg:grid-cols-4 gap-4" },
                            React.createElement(KPI, { title: t('dashboard.kpi_videos'), value: "1,204" }),
                            React.createElement(KPI, { title: t('dashboard.kpi_views'), value: "2.1M", change: "+15% 30d" }),
                            React.createElement(KPI, { title: t('dashboard.kpi_likes'), value: "89K" }),
                            React.createElement(KPI, { title: t('dashboard.kpi_engagement'), value: "4.2%" })
                        ),
                        
                        // TÍTULO Y BOTÓN EXPORTAR
                        React.createElement('div', { className: "flex justify-between items-center" },
                            React.createElement('h3', { className: "text-xl font-bold text-white" }, t('dashboard.content_title')),
                            React.createElement('button', { className: "flex items-center gap-2 text-sm text-primary hover:underline transition-colors" }, 
                                React.createElement(Download, {className: "w-4 h-4"}), 
                                t('dashboard.action_export')
                            )
                        ),

                        // TABLA DE CONTENIDOS - CABECERA FIJADA
                        React.createElement('div', { className: "bg-white/5 rounded-lg overflow-hidden" },
                            // CABECERA DE LA TABLA (STICKY)
                            React.createElement('div', { className: "grid grid-cols-12 gap-4 p-4 bg-white/10 border-b border-white/20 sticky top-0 z-5" },
                                React.createElement('div', { className: "col-span-5 text-sm font-semibold text-gray-300" }, t('dashboard.table_header_content')),
                                React.createElement('div', { className: "col-span-2 text-sm font-semibold text-gray-300 text-center" }, t('dashboard.table_header_views')),
                                React.createElement('div', { className: "col-span-2 text-sm font-semibold text-gray-300 text-center" }, t('dashboard.table_header_likes')),
                                React.createElement('div', { className: "col-span-2 text-sm font-semibold text-gray-300 text-center" }, t('dashboard.table_header_status')),
                                React.createElement('div', { className: "col-span-1 text-sm font-semibold text-gray-300 text-center" }, t('dashboard.table_header_actions'))
                            ),
                            
                            // FILAS DE CONTENIDO
                            React.createElement('div', { className: "max-h-96 overflow-y-auto" },
                                institutionVideos.map(video => (
                                    React.createElement('div', { 
                                        key: video.id, 
                                        className: "grid grid-cols-12 gap-4 p-4 border-b border-white/10 hover:bg-white/5 transition-colors items-center" 
                                    },
                                        // CONTENIDO (thumbnail + título)
                                        React.createElement('div', { className: "col-span-5 flex items-center gap-3" },
                                            React.createElement('img', { 
                                                src: video.thumbnail, 
                                                alt: t(video.title), 
                                                className: "w-16 h-10 object-cover rounded flex-shrink-0" 
                                            }),
                                            React.createElement('p', { 
                                                className: "text-sm font-medium text-white line-clamp-2" 
                                            }, t(video.title))
                                        ),
                                        // VISTAS
                                        React.createElement('div', { className: "col-span-2 text-center text-sm text-gray-300" }, video.views),
                                        // LIKES
                                        React.createElement('div', { className: "col-span-2 text-center text-sm text-gray-300" }, video.likes),
                                        // ESTADO
                                        React.createElement('div', { 
                                            className: `col-span-2 text-center text-xs font-medium flex items-center justify-center gap-1 ${
                                                video.id % 2 === 0 ? 'text-secondary' : 'text-amber-400'
                                            }` 
                                        }, 
                                            video.id % 2 === 0 ? React.createElement(CheckmarkCircle, {className: "w-3 h-3"}) : React.createElement(BarChart, {className: "w-3 h-3"}),
                                            video.id % 2 === 0 ? t('dashboard.status_verified') : t('dashboard.status_in_review')
                                        ),
                                        // ACCIONES
                                        React.createElement('div', { className: "col-span-1 text-center" },
                                            React.createElement('button', { 
                                                className: "text-primary hover:text-primary/80 transition-colors" 
                                            }, 
                                                React.createElement(BarChart, { className: "w-4 h-4" })
                                            )
                                        )
                                    )
                                ))
                            )
                        ),

                        // BOTÓN PUBLICAR
                        React.createElement('button', { 
                            className: "w-full bg-primary text-night-blue font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors" 
                        }, 
                            React.createElement(Upload, {className: "w-5 h-5"}), 
                            t('dashboard.action_publish')
                        )
                    )
                )
            )
        )
    );
};

export default InstitutionsDashboard;
