import React from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      {/* Header con selector de idiomas */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">FK</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FidesKey</span>
            </div>

            {/* Selector de idiomas */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ES
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('pt')}
                className={`px-3 py-1 rounded ${i18n.language === 'pt' ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                PT
              </button>
              <button 
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 rounded ${i18n.language === 'fr' ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                FR
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.1.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.1.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.2.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.2.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.3.title')}
              </h3>
              <p className="text-gray-600">
                {t('features.3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
