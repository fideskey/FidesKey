import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sidebarData } from '../data/demoData.js';
import { Close, ChevronDown } from './Icons.js';

const MobileNav = ({ isOpen, onClose, activeCategoryKey, onCategorySelect, activeSubcategoryKey, onSubcategorySelect }) => {
    const { t } = useTranslation();
    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = (key) => {
        setOpenCategories(prev => ({ ...prev, [key]: !prev[key] }));
    };

    if (!isOpen) return null;

    return (
        React.createElement('div', {
            className: "fixed inset-0 z-[60] bg-black/50 animate-fade-in lg:hidden",
            onClick: onClose
        },
            React.createElement('div', {
                className: "absolute top-0 left-0 h-full w-4/5 max-w-sm bg-night-blue shadow-2xl transform animate-slide-in-left",
                onClick: e => e.stopPropagation()
            },
                React.createElement('div', { className: "p-4 flex justify-between items-center border-b border-gray-700" },
                    React.createElement('h2', { className: "text-lg font-bold text-white" }, "Menu"),
                    React.createElement('button', { onClick: onClose, 'aria-label': t('mobileNav.close') },
                        React.createElement(Close, { className: "w-6 h-6 text-white" })
                    )
                ),
                React.createElement('nav', { className: "p-4 overflow-y-auto h-[calc(100%-4.5rem)]" },
                    React.createElement('ul', { className: "space-y-1" },
                        React.createElement('li', null,
                            React.createElement('button', {
                                onClick: () => onCategorySelect('sidebar.allTopics'),
                                className: `w-full text-left font-semibold p-3 rounded-md ${activeCategoryKey === 'sidebar.allTopics' ? 'bg-primary text-night-blue' : 'text-white'}`
                            }, t('sidebar.allTopics'))
                        ),
                        sidebarData.map(item => {
                            const isActive = activeCategoryKey === item.titleKey;
                            const isOpen = openCategories[item.titleKey];
                            return (
                                React.createElement('li', { key: item.titleKey },
                                    React.createElement('button', {
                                        onClick: () => onCategorySelect(item.titleKey),
                                        className: `w-full flex items-center justify-between text-left p-3 rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-300'}`
                                    },
                                        React.createElement('span', { className: "flex items-center gap-3" },
                                            React.createElement(item.icon, { className: "w-5 h-5" }),
                                            t(item.titleKey)
                                        ),
                                        React.createElement(ChevronDown, {
                                            onClick: (e) => { e.stopPropagation(); toggleCategory(item.titleKey); },
                                            className: `w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`
                                        })
                                    ),
                                    isOpen && React.createElement('ul', { className: "pl-8 pt-1" },
                                        item.subcategoryKeys.map(subKey => (
                                            React.createElement('li', { key: subKey },
                                                React.createElement('button', {
                                                    onClick: () => onSubcategorySelect(item.titleKey, subKey),
                                                    className: `w-full text-left py-2 text-sm ${activeSubcategoryKey === subKey ? 'text-primary font-semibold' : 'text-gray-400'}`
                                                }, t(subKey))
                                            )
                                        ))
                                    )
                                )
                            );
                        })
                    )
                )
            )
        )
    );
};

export default MobileNav;
