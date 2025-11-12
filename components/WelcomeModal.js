import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FidesKeyIcon, Close } from './Icons.js';

const WelcomeModal = ({ isOpen, onClose, onContinue }) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    React.createElement('div', {
      className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in",
      onClick: onClose
    },
      React.createElement('div', {
        className: "bg-white rounded-2xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl relative transform animate-scale-up",
        onClick: e => e.stopPropagation()
      },
        React.createElement('button', {
          onClick: onClose, 
          className: "absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors rounded-full p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          'aria-label': t('close')
        },
          React.createElement(Close, { className: "w-6 h-6" })
        ),
        React.createElement('div', { className: "mb-6" },
          React.createElement(FidesKeyIcon, { className: "w-20 h-auto mx-auto" })
        ),
        React.createElement('h2', { className: "font-playfair text-3xl font-bold text-night-blue mb-4" },
          t('welcome.titlePrefix'), ' ',
          React.createElement('span', null, "Fides"), React.createElement('span', { className: "text-primary" }, "Key"),
          t('welcome.titleSuffix')
        ),
        React.createElement('p', { className: "text-text-secondary mb-6" },
          t('welcome.description')
        ),
        React.createElement('div', { className: "text-left text-xs text-text-secondary p-3 bg-off-white rounded-lg mb-8 border border-gray-200" },
            React.createElement('p', null, React.createElement('strong', null, t('welcome.disclaimer.title'), ":"), " ", t('welcome.disclaimer.text'))
        ),
        React.createElement('button', {
          onClick: onContinue,
          className: "w-full bg-primary text-night-blue font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        },
          t('welcome.button')
        )
      )
    )
  );
};

export default WelcomeModal;