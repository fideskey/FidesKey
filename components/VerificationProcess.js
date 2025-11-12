import React from 'react';
import { useTranslation } from 'react-i18next';

const Step = ({ number, title, description }) => (
  React.createElement('div', { className: "text-center" },
    React.createElement('div', { className: "bg-primary text-night-blue w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4 border-2 border-primary/50" }, number),
    React.createElement('h4', { className: "mb-2 text-xl font-bold font-playfair" }, title),
    React.createElement('p', { className: "opacity-80 max-w-xs mx-auto" }, description)
  )
);

const VerificationProcess = () => {
    const { t } = useTranslation();
    return (
        React.createElement('section', { className: "bg-night-blue text-white py-20 px-5" },
           React.createElement('div', { className: "text-center mb-16" },
              React.createElement('h2', { className: "text-4xl md:text-5xl font-bold text-white font-playfair" }, t('process.title'))
          ),
          React.createElement('div', { className: "flex flex-col md:flex-row justify-center items-center gap-16 max-w-4xl mx-auto" },
            React.createElement(Step, {
              number: "1",
              title: t('process.step1.title'),
              description: t('process.step1.description')
            }),
            React.createElement('div', { className: "hidden md:block w-32 h-1 bg-primary/30 rounded-full" }),
            React.createElement(Step, {
              number: "2",
              title: t('process.step2.title'),
              description: t('process.step2.description')
            })
          )
        )
    );
}

export default VerificationProcess;