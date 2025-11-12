import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { videoData } from '../data/demoData.js';
import { ClipboardCheck } from './Icons.js';
import ArchiveCard from './ArchiveCard.js';

const LoadingSpinner = () => (
    React.createElement('div', { className: "flex items-center justify-center space-x-2" },
        React.createElement('div', { className: "w-4 h-4 rounded-full bg-primary animate-pulse" }),
        React.createElement('div', { className: "w-4 h-4 rounded-full bg-primary animate-pulse", style: { animationDelay: '200ms' } }),
        React.createElement('div', { className: "w-4 h-4 rounded-full bg-primary animate-pulse", style: { animationDelay: '400ms' } })
    )
);

const FactChecker = () => {
    const { t } = useTranslation();
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const handleVerify = async () => {
        if (!inputText.trim()) return;
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('/.netlify/functions/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: `Request failed with status ${response.status}` }));
                throw new Error(errorData.error);
            }

            const jsonResponse = await response.json();

            const summaryKeywords = jsonResponse.summary.toLowerCase().split(/\s+/).slice(0, 10);
            const relatedContent = videoData.filter(video => {
                const videoTitle = t(video.title).toLowerCase();
                return summaryKeywords.some(keyword => videoTitle.includes(keyword) && keyword.length > 3);
            }).slice(0, 4);

            setResult({ ...jsonResponse, relatedContent });

        } catch (err) {
            console.error(err);
            setError(err.message || t('factChecker.error'));
        } finally {
            setIsLoading(false);
        }
    };

    const ResultCard = ({ title, children }) => (
        React.createElement('div', { className: "bg-white/5 p-6 rounded-lg border border-gray-700" },
            React.createElement('h4', { className: "text-lg font-bold text-primary mb-3" }, title),
            children
        )
    );

    return (
        React.createElement('section', { className: "py-20 bg-night-blue" },
            React.createElement('div', { className: "container mx-auto px-4" },
                React.createElement('div', { className: "text-center max-w-3xl mx-auto" },
                    React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-4 text-white font-playfair" }, t('factChecker.title')),
                    React.createElement('p', { className: "text-lg text-gray-300 mb-8" }, t('factChecker.description'))
                ),
                React.createElement('div', { className: "max-w-3xl mx-auto" },
                    React.createElement('div', { className: "bg-white/5 p-4 rounded-xl border border-gray-700" },
                        React.createElement('textarea', {
                            value: inputText,
                            onChange: (e) => setInputText(e.target.value),
                            placeholder: t('factChecker.placeholder'),
                            rows: 8,
                            className: "w-full bg-transparent text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        }),
                        React.createElement('button', {
                            onClick: handleVerify,
                            disabled: isLoading || !inputText.trim(),
                            className: "w-full mt-2 bg-primary text-night-blue font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        },
                            isLoading ? t('factChecker.loading') : t('factChecker.button')
                        )
                    ),

                    React.createElement('div', { className: "mt-10 min-h-[10rem]" },
                        isLoading && React.createElement(LoadingSpinner, null),
                        error && React.createElement('p', { className: "text-center text-red-400" }, error),
                        !isLoading && !error && !result && (
                             React.createElement('div', { className: "text-center text-gray-500" },
                                React.createElement(ClipboardCheck, {className: "w-16 h-16 mx-auto mb-4"}),
                                React.createElement('p', null, "Los resultados de tu análisis aparecerán aquí.")
                            )
                        ),
                        result && (
                            React.createElement('div', { className: "space-y-6 animate-fade-in" },
                                React.createElement('h3', { className: "text-2xl font-bold text-white text-center font-playfair" }, t('factChecker.results.title')),
                                React.createElement(ResultCard, { title: t('factChecker.results.summary') },
                                    React.createElement('p', { className: "text-gray-300" }, result.summary)
                                ),
                                React.createElement(ResultCard, { title: t('factChecker.results.claims') },
                                    React.createElement('ul', { className: "list-disc list-inside text-gray-300 space-y-2" },
                                        result.claims.map((claim, index) => React.createElement('li', { key: index }, claim))
                                    )
                                ),
                                React.createElement(ResultCard, { title: t('factChecker.results.analysis') },
                                    React.createElement('p', { className: "text-gray-300" }, result.analysis)
                                ),
                                React.createElement(ResultCard, { title: t('factChecker.results.related') },
                                    result.relatedContent.length > 0 ? (
                                        React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                                            result.relatedContent.map(video => React.createElement(ArchiveCard, { key: video.id, video: video, onVideoSelect: () => {} }))
                                        )
                                    ) : (
                                        React.createElement('p', { className: "text-gray-400" }, t('factChecker.results.noRelated'))
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

export default FactChecker;
