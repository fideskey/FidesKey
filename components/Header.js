import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FidesKeyIcon, Mic, Building, Bell, Star, Menu, Close } from './Icons.js';
import SurveyModal from './SurveyModal.js';
import ConfirmationModal from './ConfirmationModal.js';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const ESFlag = () => (
    React.createElement('svg', { width: "24", height: "18", viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "block" },
      React.createElement('rect', { width: "24", height: "18", fill: "#C60B1E" }),
      React.createElement('rect', { y: "4.5", width: "24", height: "9", fill: "#FFC400" })
    )
  );

  const ENFlag = () => (
    React.createElement('svg', { width: "24", height: "18", viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "block" },
       React.createElement('rect', { width: "24", height: "18", fill: "#012169" }),
       React.createElement('path', { d: "M0 0L24 18M0 18L24 0", stroke: "white", strokeWidth: "3.6" }),
       React.createElement('path', { d: "M0 0L24 18M0 18L24 0", stroke: "#C8102E", strokeWidth: "2.4" }),
       React.createElement('path', { d: "M12 0V18M0 9H24", stroke: "white", strokeWidth: "6" }),
       React.createElement('path', { d: "M12 0V18M0 9H24", stroke: "#C8102E", strokeWidth: "4" })
    )
  );
  
  const PTFlag = () => (
    React.createElement('svg', { width: "24", height: "18", viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "block" },
      React.createElement('rect', { width: "9.6", height: "18", fill: "#006600" }),
      React.createElement('rect', { x: "9.6", width: "14.4", height: "18", fill: "#FF0000" }),
      React.createElement('circle', { cx: "9.6", cy: "9", r: "3", fill: "#FFC400" }),
      React.createElement('circle', { cx: "9.6", cy: "9", r: "2", fill: "none", stroke: "#C60B1E", strokeWidth: "1" })
    )
  );

  const FRFlag = () => (
    React.createElement('svg', { width: "24", height: "18", viewBox: "0 0 24 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement('rect', { width: "8", height: "18", fill: "#002395" }),
      React.createElement('rect', { x: "8", width: "8", height: "18", fill: "#FFFFFF" }),
      React.createElement('rect', { x: "16", width: "8", height: "18", fill: "#ED2939" })
    )
  );

  const languages = [
    { code: 'es', Flag: ESFlag, name: t('lang.es') },
    { code: 'en', Flag: ENFlag, name: t('lang.en') },
    { code: 'pt', Flag: PTFlag, name: t('lang.pt') },
    { code: 'fr', Flag: FRFlag, name: t('lang.fr') },
  ];

  return (
    React.createElement('div', { className: "flex items-center gap-3" },
      languages.map(({ code, Flag, name }) => (
        React.createElement('button', {
          key: code,
          onClick: () => i18n.changeLanguage(code),
          className: `transition-all duration-200 rounded-sm overflow-hidden active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary ${i18n.language === code ? 'opacity-100 ring-2 ring-primary ring-offset-2 ring-offset-night-blue' : 'opacity-60 hover:opacity-100'}`,
          'aria-label': `${t('header.selectLanguage')}: ${name}`
        },
          React.createElement(Flag, null)
        )
      ))
    )
  );
}

const Logo = ({ onClick }) => {
    const { t } = useTranslation();
    return (
        React.createElement('div', { className: `flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''}`, onClick: onClick },
            React.createElement(FidesKeyIcon, { className: "h-10 w-auto" }),
            React.createElement('div', { className: "flex-shrink-0 items-baseline hidden sm:flex" },
                React.createElement('span', { className: "text-2xl font-bold text-gray-300" }, "Fides"),
                React.createElement('span', { className: "text-2xl font-bold text-primary" }, "Key")
            ),
            React.createElement('div', { className: "hidden md:block border-l-2 border-gray-500 h-6 ml-2" }),
            React.createElement('p', { className: "hidden md:block text-sm text-gray-300" }, t('header.tagline'))
        )
    );
};

const IconButtonWithTooltip = ({ icon: Icon, label, isActive, onClick, animationClass }) => (
  React.createElement('div', { className: "relative group flex flex-col items-center" },
    React.createElement('button', {
      onClick: onClick,
      'aria-label': label,
      className: `p-2 rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary ${
        isActive ? 'text-primary bg-primary/10' : 'text-gray-300 hover:bg-white/10 hover:text-white'
      } ${animationClass || ''}`
    },
      React.createElement(Icon, { className: "w-6 h-6" })
    ),
    React.createElement('div', { className: "absolute top-full mt-2 w-max bg-night-blue border border-gray-600 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10" },
      label
    )
  )
);

const Header = ({ onLogoClick, variant = 'simple', activeIcon, onIconSelect, onMenuToggle, searchTerm, onSearchChange }) => {
    const [isSurveyModalOpen, setIsSurveyModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const { t } = useTranslation();

    const handleSurveySuccess = () => {
        setIsSurveyModalOpen(false);
        setIsConfirmationModalOpen(true);
    };

    return (
    React.createElement(React.Fragment, null,
        React.createElement('header', { className: "bg-night-blue/80 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-50" },
          React.createElement('div', { className: "container mx-auto px-4" },
            React.createElement('div', { className: "flex items-center justify-between h-20" },
              React.createElement('div', { className: "flex items-center gap-4" },
                  variant === 'demo' && (
                    React.createElement('button', { onClick: onMenuToggle, className: "lg:hidden text-white p-2 -ml-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" },
                        React.createElement(Menu, { className: "w-6 h-6" }),
                        React.createElement('span', { className: "sr-only" }, t('mobileNav.open'))
                    )
                  ),
                  React.createElement(Logo, { onClick: onLogoClick })
              ),

              variant === 'demo' && (
                React.createElement('div', { className: "hidden lg:flex flex-1 justify-center px-8" },
                    React.createElement('div', { className: "w-full max-w-lg relative" },
                        React.createElement('input', {
                            type: "search", 
                            placeholder: t('header.searchPlaceholder'), 
                            className: "w-full bg-night-blue border border-gray-600 rounded-full py-2 pl-5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary",
                            value: searchTerm,
                            onChange: (e) => onSearchChange?.(e.target.value)
                         }),
                        searchTerm ? (
                            React.createElement('button', { onClick: () => onSearchChange?.(''), className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", 'aria-label': t('header.clearSearch') },
                               React.createElement(Close, { className: "w-5 h-5" })
                            )
                        ) : (
                            React.createElement(Mic, { className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 opacity-50" })
                        )
                    )
                )
              ),

              React.createElement('div', { className: "flex items-center gap-2 sm:gap-4" },
                React.createElement('div', { className: "hidden lg:flex items-center gap-4" },
                    variant === 'demo' && onIconSelect && (
                        React.createElement(React.Fragment, null,
                            React.createElement(IconButtonWithTooltip, {
                                icon: Building,
                                label: t('header.institutions'),
                                isActive: activeIcon === 'institutions',
                                onClick: () => onIconSelect('institutions'),
                                animationClass: "animate-pulse-glow"
                            }),
                            React.createElement(IconButtonWithTooltip, {
                                icon: Bell,
                                label: t('header.notifications'),
                                isActive: activeIcon === 'notifications',
                                onClick: () => onIconSelect('notifications')
                            }),
                            React.createElement(IconButtonWithTooltip, {
                                icon: Star,
                                label: t('header.favorites'),
                                isActive: activeIcon === 'favorites',
                                onClick: () => onIconSelect('favorites')
                            }),
                            React.createElement('div', { className: "border-l-2 border-gray-700 h-6" })
                        )
                    ),
                    React.createElement(LanguageSelector, null),
                    React.createElement('div', { className: "border-l-2 border-gray-700 h-6" }),
                    React.createElement('button', { className: "text-sm font-bold text-white transition-colors opacity-75 pointer-events-none" }, t('header.login'))
                ),
                React.createElement('button', {
                    onClick: () => setIsSurveyModalOpen(true),
                    className: "px-5 py-2 text-sm font-bold bg-primary text-night-blue rounded-full transition-all animate-pulse-glow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary"
                },
                    React.createElement('span', { className: "hidden sm:inline" }, t('header.register')),
                    React.createElement('span', { className: "sm:hidden" }, t('header.registerShort'))
                )
              )
            )
          )
        ),
        React.createElement(SurveyModal, {
            isOpen: isSurveyModalOpen,
            onClose: () => setIsSurveyModalOpen(false),
            onSuccess: handleSurveySuccess
        }),
        React.createElement(ConfirmationModal, {
            isOpen: isConfirmationModalOpen,
            onClose: () => setIsConfirmationModalOpen(false)
        })
    )
    );
};

export default Header;