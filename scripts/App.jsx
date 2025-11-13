import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

// Componente optimizado para imágenes externas
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-container ${className}`}>
      {isLoading && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`optimized-image ${isLoading ? 'hidden' : 'visible'} ${
          hasError ? 'error' : ''
        }`}
      />
      {hasError && (
        <div className="image-fallback">
          <span>🔍 Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="loading-spinner large"></div>
          <p className="mt-4 text-gray-600">Cargando FidesKey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* SECCIÓN DE NOTICIAS OPTIMIZADA */}
      <section className="news-section">
        <div className="container">
          <h2>Noticias Verificadas</h2>
          <div className="news-grid">
            {/* EJEMPLO - Reemplaza con tus noticias reales */}
            <article className="news-card">
              <OptimizedImage
                src="https://ejemplo.com/imagen-noticia.jpg"
                alt="Noticia verificada"
                className="news-image"
              />
              <div className="news-content">
                <h3>Título de noticia verificada</h3>
                <p>Descripción breve de la noticia de fuente confiable.</p>
                <span className="news-source">Fuente: Medio Verificado</span>
              </div>
            </article>
            
            {/* Añade más noticias aquí */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
