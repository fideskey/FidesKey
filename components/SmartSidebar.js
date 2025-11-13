import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sidebarData } from '../data/demoData.js';
import { ChevronDown } from './Icons.js';

const SmartSidebar = ({ 
  activeCategoryKey, 
  onCategorySelect, 
  activeSubcategoryKey, 
  onSubcategorySelect,
  className = ""  // ← AGREGAR ESTO
}) => {
  const { t } = useTranslation();
  const [openCategories, setOpenCategories] = useState(() => {
    const initialState = {};
    if (activeCategoryKey && activeCategoryKey !== 'sidebar.allTopics') {
        initialState[activeCategoryKey] = true;
    }
    return initialState;
  });

  const toggleCategory = (key) => {
    setOpenCategories(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const NavItem = ({ titleKey, subcategoryKeys, icon: Icon, isActive, onSelect, onSubSelect, activeSubKey }) => {
    const isOpen = openCategories[titleKey];
    
    return (
      React.createElement('li', null,
        React.createElement('button', {
          onClick: () => onSelect(titleKey),
          className: `w-full flex items-center justify-between text-left px-4 py-2.5 rounded-md transition-colors duration-200 ${
            isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-300 hover:bg-white/5 hover:text-white'
          }`
        },
          React.createElement('span', { className: "flex items-center gap-3" },
            React.createElement(Icon, { className: "w-5 h-5" }),
            t(titleKey)
          ),
          React.createElement(ChevronDown, {
            onClick: (e) => { e.stopPropagation(); toggleCategory(titleKey); },
            className: `w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
          })
        ),
        isOpen && (
          React.createElement('ul', { className: "pl-8 pr-2 py-1 space-y-1" },
            subcategoryKeys.map(subKey => (
              React.createElement('li', { key: subKey },
                React.createElement('button', {
                  onClick: () => onSubSelect(titleKey, subKey),
                  className: `w-full text-left text-sm px-4 py-1.5 rounded-md transition-colors duration-200 ${
                    activeSubKey === subKey ? 'text-primary font-medium' : 'text-gray-400 hover:text-white'
                  }`
                }, t(subKey))
              )
            ))
          )
        )
      )
    );
  };

  return (
    React.createElement('aside', { 
      className: `hidden lg:block w-72 bg-night-blue/50 border-r border-gray-700 flex-shrink-0 ${className}`  // ← AGREGAR ${className}
    },
      React.createElement('div', { className: "h-full flex flex-col" },
        React.createElement('div', { className: "flex-grow overflow-y-auto p-4" },
          React.createElement('nav', null,
            React.createElement('ul', { className: "space-y-1" },
              React.createElement('li', null,
                React.createElement('button', {
                  onClick: () => onCategorySelect('sidebar.allTopics'),
                  className: `w-full text-left font-semibold px-4 py-2.5 rounded-md transition-colors duration-200 ${
                    activeCategoryKey === 'sidebar.allTopics' ? 'bg-primary text-night-blue' : 'text-white hover:bg-white/10'
                  }`
                }, t('sidebar.allTopics'))
              ),
              sidebarData.map(item => (
                React.createElement(NavItem, {
                  key: item.titleKey,
                  ...item,
                  isActive: activeCategoryKey === item.titleKey,
                  onSelect: onCategorySelect,
                  onSubSelect: onSubcategorySelect,
                  activeSubKey: activeSubcategoryKey
                })
              ))
            )
          )
        ),
        React.createElement('div', { className: "p-4 border-t border-gray-700" },
          React.createElement('div', { className: "bg-white/5 rounded-lg p-4 text-center" },
            React.createElement('h4', { className: "font-bold text-white" }, t('sidebar.promo.title')),
            React.createElement('p', { className: "text-sm text-gray-400 mt-1 mb-3" }, t('sidebar.promo.description')),
            React.createElement('button', { className: "w-full bg-primary text-night-blue text-sm font-bold py-2 rounded-md transition-transform hover:scale-105" }, t('sidebar.promo.button'))
          )
        )
      )
    )
  );
};

export default SmartSidebar;
