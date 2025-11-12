import React from 'react';
import { useTranslation } from 'react-i18next';
import { Close, CheckmarkCircle } from './Icons.js';

const ConfirmationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    React.createElement('div', {
      className: "fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 animate-fade-in",
      onClick: onClose,
      'aria-modal': "true",
      role: "dialog"
    },
      React.createElement('div', {
        className: "bg-night-blue text-white rounded-2xl p-8 sm:p-10 max-w-md w-full text-center shadow-2xl relative transform animate-scale-up border border-primary/20",
        onClick: e => e.stopPropagation()
      },
        React.createElement('button', {
          onClick: onClose,
          className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors rounded-full p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          'aria-label': t('close')
        },
          React.createElement(Close, { className: "w-6 h-6" })
        ),
        React.createElement('div', { className: "mb-6" },
            React.createElement(CheckmarkCircle, { className: "w-16 h-16 mx-auto text-secondary" })
        ),
        React.createElement('h2', { className: "font-playfair text-2xl sm:text-3xl font-bold text-white mb-4" },
          t('confirmation.title')
        ),
        React.createElement('p', { className: "text-gray-300 mb-8" },
          t('confirmation.description')
        ),
        React.createElement('button', {
          onClick: onClose,
          className: "w-full bg-primary text-night-blue font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary"
        },
          t('confirmation.button')
        )
      )
    )
  );
};

export default ConfirmationModal;
