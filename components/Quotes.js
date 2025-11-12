import React from 'react';
import { useTranslation } from 'react-i18next';

// Fix: Made the 'children' prop optional to resolve a spurious TypeScript error.
const Quote = ({ children }) => (
    React.createElement('blockquote', { className: "text-center text-2xl font-semibold leading-snug text-white italic max-w-4xl mx-auto" },
        React.createElement('span', { className: "text-primary text-4xl leading-none" }, "\""),
        children,
        React.createElement('span', { className: "text-primary text-4xl leading-none" }, "\"")
    )
);

const Quotes = () => {
    const { t } = useTranslation();
    return (
    React.createElement('section', { className: "py-20 bg-night-blue" },
        React.createElement('div', { className: "container mx-auto px-4" },
            React.createElement('div', { className: "space-y-12" },
                React.createElement(Quote, null,
                    t('quotes.q1')
                ),
                React.createElement(Quote, null,
                    t('quotes.q2')
                )
            )
        )
    )
)};

export default Quotes;