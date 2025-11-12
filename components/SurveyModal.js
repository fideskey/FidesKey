import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Close } from './Icons.js';

const SurveyModal = ({ isOpen, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate success
    setIsSubmitting(false);
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    React.createElement('div', {
      className: "fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 animate-fade-in",
      onClick: onClose,
      'aria-modal': "true",
      role: "dialog"
    },
      React.createElement('div', {
        className: "bg-night-blue text-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transform animate-scale-up border border-primary/20",
        onClick: e => e.stopPropagation()
      },
        React.createElement('button', {
          onClick: onClose,
          className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors rounded-full p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          'aria-label': t('survey.close')
        },
          React.createElement(Close, { className: "w-6 h-6" })
        ),
        React.createElement('div', { className: "text-center mb-6" },
          React.createElement('h2', { className: "text-2xl sm:text-3xl font-bold font-playfair text-white" }, t('survey.title')),
          React.createElement('p', { className: "text-primary font-semibold mt-2" }, t('survey.offer')),
          React.createElement('p', { className: "text-gray-400 text-sm mt-1" }, t('survey.disclaimer'))
        ),
        React.createElement('form', { onSubmit: handleSubmit, className: "space-y-6" },
          React.createElement('div', null,
            React.createElement('h3', { className: "font-bold text-lg text-primary mb-3" }, t('survey.section1.title')),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
              React.createElement('input', { type: "text", placeholder: t('survey.institutionName.label'), required: true, className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" }),
              React.createElement('input', { type: "text", placeholder: t('survey.location.placeholder'), required: true, className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" })
            )
          ),
           React.createElement('div', null,
            React.createElement('h3', { className: "font-bold text-lg text-primary mb-3" }, t('survey.section2.title')),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
              React.createElement('input', { type: "text", placeholder: t('survey.contactName.label'), required: true, className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" }),
              React.createElement('input', { type: "text", placeholder: t('survey.contactRole.label'), required: true, className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" }),
              React.createElement('input', { type: "email", placeholder: t('survey.contactEmail.placeholder'), required: true, className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" }),
              React.createElement('input', { type: "tel", placeholder: t('survey.contactPhone.label'), className: "bg-white/5 border border-gray-600 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" })
            )
          ),
          error && React.createElement('p', { className: "text-red-400 text-sm text-center" }, error),
          React.createElement('button', {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full bg-primary text-night-blue font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          },
            isSubmitting ? t('survey.submitting') : t('survey.button')
          )
        )
      )
    )
  );
};

export default SurveyModal;
