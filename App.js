import React, { useState } from 'react';
import DemoPage from './components/DemoPage.js';
import HomePage from './components/HomePage.js';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  const handleGoHome = () => setShowDemo(false);

  if (showDemo) {
    return (
      React.createElement('div', { className: "bg-background text-text-primary min-h-screen flex flex-col font-sans" },
        React.createElement(DemoPage, { onGoHome: handleGoHome })
      )
    );
  }

  return (
    React.createElement('div', { className: "bg-background text-text-primary min-h-screen flex flex-col font-sans" },
      React.createElement(HomePage, { onShowDemo: () => setShowDemo(true) })
    )
  );
}

export default App;