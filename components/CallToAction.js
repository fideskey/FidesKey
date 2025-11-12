import React from 'react';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
    const { t } = useTranslation();
    return (
    React.createElement('section', { className: "py-20 bg-white" },
        React.createElement('div', { className: "container mx-auto px-4 text-center" },
            React.createElement('h2', { className: "text-4xl font-bold mb-4 text-text-primary" }, t('cta.title')),
            React.createElement('p', { className: "text-lg text-text-secondary max-w-3xl mx-auto mb-8" },
                t('cta.description')
            ),
            React.createElement('button', { className: "px-8 py-3 text-lg font-bold bg-primary text-night-blue rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105" },
                t('cta.button')
            ),
            React.createElement('p', { className: "text-sm text-text-secondary mt-4" },
                t('cta.disclaimer')
            )
        )
    )
)};

export default CallToAction;