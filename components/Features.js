import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Leaf, Trophy, Compass } from './Icons.js';

const FeatureItem = ({ icon: Icon, title, description }) => (
    React.createElement('div', null,
        React.createElement('div', { className: "flex items-center mb-2" },
            React.createElement('div', { className: "bg-primary/10 p-2 rounded-md mr-4" },
                React.createElement(Icon, { className: "w-6 h-6 text-primary" })
            ),
            React.createElement('h3', { className: "text-xl font-bold text-night-blue" }, title)
        ),
        React.createElement('p', { className: "text-gray-600 pl-14" }, description)
    )
);


const Features = () => {
    const { t } = useTranslation();
    return (
        React.createElement('section', { className: "py-20 bg-white" },
            React.createElement('div', { className: "container mx-auto px-4" },
                React.createElement('div', { className: "grid md:grid-cols-2 gap-x-12 gap-y-10" },
                    React.createElement(FeatureItem, {
                        icon: Shield, 
                        title: t('features.item1.title'), 
                        description: t('features.item1.description')
                    }),
                    React.createElement(FeatureItem, {
                        icon: Leaf, 
                        title: t('features.item2.title'), 
                        description: t('features.item2.description')
                    }),
                    React.createElement(FeatureItem, {
                        icon: Trophy, 
                        title: t('features.item3.title'), 
                        description: t('features.item3.description')
                    }),
                    React.createElement(FeatureItem, {
                        icon: Compass, 
                        title: t('features.item4.title'), 
                        description: t('features.item4.description')
                    })
                )
            )
        )
    )
}

export default Features;