import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { videoData } from '../data/demoData.js';

const FilterCheckbox = ({ id, label, checked, onChange }) => (
    React.createElement('div', { className: "flex items-center" },
        React.createElement('input', {
            type: "checkbox",
            id: id,
            checked: checked,
            onChange: onChange,
            className: "h-4 w-4 rounded border-gray-600 bg-white/10 text-primary focus:ring-primary"
        }),
        React.createElement('label', { htmlFor: id, className: "ml-3 text-sm text-gray-300" }, label)
    )
);

const FilterPanel = ({ durationFilter, setDurationFilter, sourceFilter, setSourceFilter, sortBy, setSortBy, onClear }) => {
    const { t } = useTranslation();

    const allSources = useMemo(() => [...new Set(videoData.map(v => v.source))].sort(), []);

    const handleDurationChange = (e) => {
        const { value, checked } = e.target;
        setDurationFilter(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
    };
    
    const handleSourceChange = (e) => {
        const { value, checked } = e.target;
        setSourceFilter(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
    };

    return (
        React.createElement('div', { className: "bg-white/5 p-6 rounded-xl border border-gray-700 mb-8 animate-fade-in" },
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8" },
                React.createElement('div', null,
                    React.createElement('h4', { className: "font-semibold text-white mb-3" }, t('demo.duration')),
                    React.createElement('div', { className: "space-y-2" },
                        React.createElement(FilterCheckbox, { id: "d-short", label: t('demo.duration.short'), value: "short", checked: durationFilter.includes('short'), onChange: handleDurationChange }),
                        React.createElement(FilterCheckbox, { id: "d-medium", label: t('demo.duration.medium'), value: "medium", checked: durationFilter.includes('medium'), onChange: handleDurationChange }),
                        React.createElement(FilterCheckbox, { id: "d-long", label: t('demo.duration.long'), value: "long", checked: durationFilter.includes('long'), onChange: handleDurationChange }),
                        React.createElement(FilterCheckbox, { id: "d-xlong", label: t('demo.duration.extraLong'), value: "extraLong", checked: durationFilter.includes('extraLong'), onChange: handleDurationChange })
                    )
                ),
                React.createElement('div', { className: "lg:col-span-2" },
                    React.createElement('h4', { className: "font-semibold text-white mb-3" }, t('demo.source')),
                    React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto pr-2" },
                        allSources.map(source => React.createElement(FilterCheckbox, { key: source, id: `s-${source}`, label: source, value: source, checked: sourceFilter.includes(source), onChange: handleSourceChange }))
                    )
                ),
                React.createElement('div', null,
                    React.createElement('h4', { className: "font-semibold text-white mb-3" }, t('demo.sortBy')),
                    React.createElement('div', { className: "space-y-2" },
                       React.createElement('div', { className: "flex items-center" },
                            React.createElement('input', { type: "radio", id: "sort-rel", name: "sort", value: "relevance", checked: sortBy === 'relevance', onChange: (e) => setSortBy(e.target.value), className: "h-4 w-4 border-gray-600 bg-white/10 text-primary focus:ring-primary" }),
                            React.createElement('label', { htmlFor: "sort-rel", className: "ml-3 text-sm text-gray-300" }, t('demo.sort.relevance'))
                        ),
                        React.createElement('div', { className: "flex items-center" },
                            React.createElement('input', { type: "radio", id: "sort-date", name: "sort", value: "date", checked: sortBy === 'date', onChange: (e) => setSortBy(e.target.value), className: "h-4 w-4 border-gray-600 bg-white/10 text-primary focus:ring-primary" }),
                            React.createElement('label', { htmlFor: "sort-date", className: "ml-3 text-sm text-gray-300" }, t('demo.sort.date'))
                        )
                    )
                )
            ),
            React.createElement('div', { className: "text-right mt-6 border-t border-gray-700 pt-4" },
                React.createElement('button', { onClick: onClear, className: "text-sm text-primary hover:underline" }, t('demo.clearFilters'))
            )
        )
    );
};

export default FilterPanel;
