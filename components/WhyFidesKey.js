import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Trophy, Globe } from './Icons.js';

const useInView = (ref, options) => {
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return isInView;
};

const FeatureCard = ({ icon: Icon, title, description, quote, isInView, animationDelay }) => (
  React.createElement('div', {
    className: `group bg-[#1A202C] p-8 rounded-xl text-center shadow-lg transition-all duration-500 ease-out transform
               hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-3 hover:scale-105
               border-t-4 border-transparent hover:border-primary
               ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`,
    style: { transitionDelay: animationDelay }
  },
    React.createElement('div', { className: "flex justify-center items-center mb-4" },
      React.createElement(Icon, {
        className: `w-12 h-12 text-primary transition-transform duration-500 ease-out group-hover:scale-110`
      })
    ),
    React.createElement('h3', { className: "text-white mb-4 text-xl font-bold font-playfair" }, title),
    React.createElement('p', { className: "text-gray-300 mb-4" }, description),
    quote && React.createElement('small', { className: "text-primary font-semibold italic" }, `"${quote}"`)
  )
);


const WhyFidesKey = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const { t } = useTranslation();

    return (
    React.createElement('section', { className: "bg-night-blue py-20 px-5" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('div', { className: "text-center mb-16" },
            React.createElement('h2', { className: "text-4xl md:text-5xl font-bold mb-4 text-white font-playfair" }, t('why.title'))
        ),
        React.createElement('div', { ref: ref, className: "grid md:grid-cols-3 gap-8" },
            React.createElement(FeatureCard, {
              icon: Shield,
              title: t('why.card1.title'),
              description: t('why.card1.description'),
              quote: t('why.card1.quote'),
              isInView: isInView,
              animationDelay: "100ms"
            }),
            React.createElement(FeatureCard, {
              icon: Trophy,
              title: t('why.card2.title'),
              description: t('why.card2.description'),
              isInView: isInView,
              animationDelay: "200ms"
            }),
            React.createElement(FeatureCard, {
              icon: Globe,
              title: t('why.card3.title'),
              description: t('why.card3.description'),
              isInView: isInView,
              animationDelay: "300ms"
            })
        )
      )
    )
)};

export default WhyFidesKey;