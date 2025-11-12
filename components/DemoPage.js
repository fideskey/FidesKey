import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { videoData, sidebarData, trendingTopics } from '../data/demoData.js';
import SmartSidebar from './SmartSidebar.js';
import Footer from './Footer.js';
import Header from './Header.js';
import InstitutionsDashboard from './InstitutionsDashboard.js';
import MobileNav from './MobileNav.js';
import FeaturedStory from './FeaturedStory.js';
import TimelineLane from './TimelineLane.js';
import FocusViewModal from './FocusViewModal.js';
import FilterPanel from './FilterPanel.js';
import { Filter, SearchX } from './Icons.js';
import SkeletonLoader from './SkeletonLoader.js';

const DemoPage = ({ onGoHome }) => {
    const { t } = useTranslation();
    const [activeCategoryKey, setActiveCategoryKey] = useState('sidebar.allTopics');
    const [activeSubcategoryKey, setActiveSubcategoryKey] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimatingIn, setIsAnimatingIn] = useState(false);
    
    const [activeDashboard, setActiveDashboard] = useState(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [focusedVideo, setFocusedVideo] = useState(null);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Filter states
    const [durationFilter, setDurationFilter] = useState([]);
    const [sourceFilter, setSourceFilter] = useState([]);
    const [sortBy, setSortBy] = useState('relevance');

    const handleIconSelect = (iconName) => {
        setActiveDashboard(prev => (prev === iconName ? null : iconName));
    };
    
    const clearFilters = () => {
        setDurationFilter([]);
        setSourceFilter([]);
        setSortBy('relevance');
        setActiveCategoryKey('sidebar.allTopics');
        setActiveSubcategoryKey(null);
        setSearchTerm('');
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        // If the user starts searching, reset category filters for a global search experience.
        if (term.trim() !== '') {
            setActiveCategoryKey('sidebar.allTopics');
            setActiveSubcategoryKey(null);
        }
    };

    const filteredVideos = useMemo(() => {
        let videos = [...videoData];

        // Search filter (APPLY FIRST)
        if (searchTerm.trim() !== '') {
            const lowercasedTerm = searchTerm.toLowerCase();
            videos = videos.filter(video => {
                const title = t(video.title).toLowerCase();
                const source = video.source.toLowerCase();
                const category = t(video.category).toLowerCase();
                const subcategory = t(video.subcategoryKey).toLowerCase();
                const highlights = video.highlights.map(h => t(h).toLowerCase()).join(' ');

                return title.includes(lowercasedTerm) ||
                       source.includes(lowercasedTerm) ||
                       category.includes(lowercasedTerm) ||
                       subcategory.includes(lowercasedTerm) ||
                       highlights.includes(lowercasedTerm);
            });
        }

        // Sidebar category filter
        if (activeCategoryKey !== 'sidebar.allTopics') {
            videos = videos.filter(video => video.category === activeCategoryKey);
        }

        // Sidebar subcategory filter
        if (activeSubcategoryKey) {
            videos = videos.filter(video => video.subcategoryKey === activeSubcategoryKey);
        }

        // Advanced duration filter
        if (durationFilter.length > 0) {
            videos = videos.filter(video => {
                const [min, sec] = video.duration.split(':').map(Number);
                const totalSeconds = min * 60 + sec;
                return durationFilter.some(filter => {
                    if (filter === 'short') return totalSeconds <= 180;
                    if (filter === 'medium') return totalSeconds > 180 && totalSeconds <= 600;
                    if (filter === 'long') return totalSeconds > 600 && totalSeconds <= 1800;
                    if (filter === 'extraLong') return totalSeconds > 1800;
                    return false;
                });
            });
        }

        // Advanced source filter
        if (sourceFilter.length > 0) {
            videos = videos.filter(video => sourceFilter.includes(video.source));
        }

        // Sorting
        if (sortBy === 'relevance') {
            videos.sort((a, b) => b.relevance - a.relevance);
        } else if (sortBy === 'date') {
            videos.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        }

        return videos;
    }, [searchTerm, durationFilter, sourceFilter, sortBy, activeCategoryKey, activeSubcategoryKey, t]);

    const videosByCategory = useMemo(() => {
        const grouped = {};
        filteredVideos.forEach(video => {
            if (!grouped[video.category]) {
                grouped[video.category] = [];
            }
            grouped[video.category].push(video);
        });
        return grouped;
    }, [filteredVideos]);

    const featuredVideo = useMemo(() => {
        if (filteredVideos.length > 0) {
            return filteredVideos[0];
        }
        return null;
    }, [filteredVideos]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setIsAnimatingIn(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    
    const handleCategorySelect = (key) => {
        setActiveCategoryKey(key);
        setActiveSubcategoryKey(null); // Reset subcategory when main category changes
        const element = document.getElementById(key);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (key === 'sidebar.allTopics') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubcategorySelect = (catKey, subcatKey) => {
        setActiveCategoryKey(catKey);
        setActiveSubcategoryKey(subcatKey);
    };

    return (
        React.createElement('div', { className: "bg-night-blue min-h-screen flex flex-col" },
            React.createElement(Header, {
              variant: "demo", 
              onLogoClick: onGoHome, 
              activeIcon: activeDashboard,
              onIconSelect: handleIconSelect,
              onMenuToggle: () => setIsMobileNavOpen(!isMobileNavOpen),
              searchTerm: searchTerm,
              onSearchChange: handleSearchChange
            }),
            
            React.createElement(MobileNav, {
                isOpen: isMobileNavOpen, 
                onClose: () => setIsMobileNavOpen(false),
                activeCategoryKey: activeCategoryKey, 
                onCategorySelect: (key) => {
                    handleCategorySelect(key);
                    setIsMobileNavOpen(false);
                },
                activeSubcategoryKey: activeSubcategoryKey,
                onSubcategorySelect: (catKey, subcatKey) => {
                    handleSubcategorySelect(catKey, subcatKey);
                    setIsMobileNavOpen(false);
                }
            }),

            activeDashboard === 'institutions' && (
                React.createElement(InstitutionsDashboard, {
                    isOpen: true, 
                    onClose: () => setActiveDashboard(null)
                })
            ),
            
            focusedVideo && (
                React.createElement(FocusViewModal, {
                    video: focusedVideo,
                    onClose: () => setFocusedVideo(null)
                })
            ),

            React.createElement('div', { className: "flex-grow flex flex-row" },
                React.createElement(SmartSidebar, {
                    activeCategoryKey: activeCategoryKey, 
                    onCategorySelect: handleCategorySelect,
                    activeSubcategoryKey: activeSubcategoryKey,
                    onSubcategorySelect: handleSubcategorySelect
                }),
                React.createElement('main', { className: "flex-1 min-w-0 flex flex-col" },
                    React.createElement('div', { className: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow" },
                        isLoading ? (
                            React.createElement(SkeletonLoader, null)
                        ) : (
                           React.createElement('div', { className: `space-y-12 transition-opacity duration-500 ${isAnimatingIn ? 'opacity-100' : 'opacity-0'}` },
                                featuredVideo && React.createElement(FeaturedStory, { video: featuredVideo, onVideoSelect: setFocusedVideo }),

                                React.createElement('div', { className: "border-b border-white/10 pb-6" },
                                    React.createElement('button', {
                                        onClick: () => setIsFilterPanelOpen(!isFilterPanelOpen),
                                        className: "flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    },
                                        React.createElement(Filter, { className: "w-5 h-5" }),
                                        React.createElement('span', null, t('demo.filter'))
                                    )
                                ),

                                isFilterPanelOpen && (
                                    React.createElement(FilterPanel, {
                                        durationFilter: durationFilter,
                                        setDurationFilter: setDurationFilter,
                                        sourceFilter: sourceFilter,
                                        setSourceFilter: setSourceFilter,
                                        sortBy: sortBy,
                                        setSortBy: setSortBy,
                                        onClear: clearFilters
                                    })
                                ),
                                
                                filteredVideos.length > 0 ? (
                                    sidebarData
                                        .filter(cat => videosByCategory[cat.titleKey] && videosByCategory[cat.titleKey].length > 0)
                                        .map((cat, index) => (
                                        React.createElement(TimelineLane, {
                                            id: cat.titleKey,
                                            key: cat.titleKey,
                                            title: t(cat.titleKey),
                                            videos: videosByCategory[cat.titleKey],
                                            onVideoSelect: setFocusedVideo,
                                            index: index
                                        })
                                    ))
                                ) : (
                                    React.createElement('div', { className: "text-center py-16 text-gray-400" },
                                        React.createElement(SearchX, { className: "w-16 h-16 mx-auto text-gray-600 mb-4" }),
                                        React.createElement('h3', { className: "text-xl font-bold text-white mb-2" }, t('demo.noResults.title')),
                                        React.createElement('p', { className: "mb-6" }, t('demo.noResults.description')),
                                        React.createElement('button', {
                                            onClick: clearFilters,
                                            className: "bg-primary text-night-blue px-6 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary"
                                        },
                                            t('demo.noResults.action')
                                        ),
                                        React.createElement('div', { className: "mt-10 max-w-lg mx-auto" },
                                            React.createElement('h4', { className: "text-sm font-semibold text-gray-500 mb-4" }, t('demo.noResults.suggestions')),
                                            React.createElement('div', { className: "flex flex-wrap justify-center gap-2" },
                                                trendingTopics.slice(0, 5).map(topicKey => (
                                                    React.createElement('button', {
                                                        key: topicKey,
                                                        onClick: () => handleSearchChange(t(topicKey)),
                                                        className: "px-3 py-1.5 text-sm rounded-full transition-colors bg-white/10 text-gray-300 hover:bg-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                                    },
                                                        t(topicKey)
                                                    )
                                                ))
                                            )
                                        )
                                    )
                                )
                           )
                        )
                    )
                )
            ),
            React.createElement(Footer, null)
        )
    );
};

export default DemoPage;