import React, { useState } from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import WhyFidesKey from './WhyFidesKey.js';
import VerificationProcess from './VerificationProcess.js';
import VideoShowcase from './VideoShowcase.js';
import Footer from './Footer.js';
import WelcomeModal from './WelcomeModal.js';
import AssistantWidget from './AssistantWidget.js';

const HomePage = ({ onShowDemo }) => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);

  return (
    React.createElement('div', { className: "bg-background text-text-primary min-h-screen flex flex-col font-sans" },
      React.createElement(WelcomeModal, { 
        isOpen: isWelcomeModalOpen, 
        onClose: () => setIsWelcomeModalOpen(false),
        onContinue: () => setIsWelcomeModalOpen(false)
      }),
      React.createElement(Header, { onLogoClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }),
      React.createElement('main', null,
        React.createElement(Hero, { onShowDemo: onShowDemo }),
        React.createElement(WhyFidesKey, null),
        React.createElement(VerificationProcess, null),
        React.createElement(VideoShowcase, null)
      ),
      React.createElement(Footer, null),
      React.createElement(AssistantWidget, null)
    )
  );
};

export default HomePage;
