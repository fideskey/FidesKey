import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from './Icons.js';

const Hero = ({ onShowDemo }) => {
  const { t } = useTranslation();

  return (
    React.createElement('section', { className: "relative bg-night-blue text-white text-center overflow-hidden flex items-center justify-center h-[70vh] md:h-[80vh]" },
      React.createElement('div', {
        className: "absolute inset-0 bg-cover bg-center z-0",
        style: { backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }
      }),
      React.createElement('div', { className: "absolute inset-0 bg-night-blue/70 z-10" }),
      
      React.createElement('div', { className: "relative z-20 py-24 px-5" },
        React.createElement('h1', { className: "text-5xl md:text-6xl font-extrabold mb-4 font-playfair leading-tight" }, t('hero.title')),
        React.createElement('p', {
          className: "text-lg md:text-xl max-w-4xl mx-auto mb-12 opacity-90",
          dangerouslySetInnerHTML: { __html: t('hero.subtitle') }
        }),
        React.createElement('div', { className: "flex justify-center" },
          React.createElement('button', {
            onClick: onShowDemo,
            className: "bg-primary text-night-blue border-none px-8 py-4 rounded-lg font-semibold transition-transform transform hover:scale-105 active:scale-95 animate-pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-blue focus-visible:ring-primary"
          },
            t('hero.button')
          )
        )
      ),

      React.createElement('div', { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20" },
        React.createElement(ChevronDown, { className: "w-8 h-8 text-white animate-bounce" })
      )
    )
  );
};

export default Hero;