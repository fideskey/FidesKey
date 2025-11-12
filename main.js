import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App.js';
import i18n from './i18n.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(
        I18nextProvider,
        { i18n: i18n },
        React.createElement(App, null)
      )
    )
  );
}