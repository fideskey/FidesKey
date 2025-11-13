import React from 'react'; // FidesKey v2
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Sección de Propuesta de Valor */}
      <section className="value-proposition">
        <div className="container">
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Contenido 100% Verificado</h3>
              <p>Cada video proviene exclusivamente de instituciones pre-validadas en nuestro riguroso proceso de 24-48 horas.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🏛️</div>
              <h3>Fuentes Confiables</h3>
              <p>Gobiernos, universidades, medios certificados y ONGs verificadas. Zero redes sociales, zero fake news.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Información sin Ruido</h3>
              <p>Encuentra exactamente lo que buscas sin algoritmos manipuladores. Contenido puro, sin desinformación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Para Instituciones */}
      <section className="for-institutions">
        <div className="container">
          <div className="institution-content">
            <div className="institution-text">
              <h2>Para Instituciones</h2>
              <p>Únase al ecosistema de confianza digital. Como institución verificada en FidesKey, usted podrá:</p>
              <ul>
                <li>Publicar contenido directamente a una audiencia que valora la veracidad</li>
                <li>Monetizar su expertise mediante suscripciones y cursos certificados</li>
                <li>Fortalecer su reputación como fuente confiable</li>
                <li>Acceder a analytics detallados de su audiencia</li>
              </ul>
              <button className="cta-button">Solicitar Verificación</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Para Usuarios */}
      <section className="for-users">
        <div className="container">
          <div className="users-content">
            <div className="users-text">
              <h2>Para Usuarios</h2>
              <p>En un mundo saturado de desinformación, FidesKey es su puerto seguro digital. Disfrute de:</p>
              <ul>
                <li>Acceso a contenido exclusivo de instituciones de primer nivel</li>
                <li>Certificados de cursos verificados que potencian su carrera</li>
                <li>Experiencia sin publicidad intrusiva (en plan Premium)</li>
                <li>La tranquilidad de saber que cada fuente está verificada</li>
              </ul>
              <div className="user-buttons">
                <button className="primary-button">Registrarse Gratis</button>
                <button className="secondary-button">Conocer Plan Premium</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">de usuarios desconfían del contenido online (Reuters 2024)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$12B</div>
              <div className="stat-label">mercado de verificación de contenido</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">78%</div>
              <div className="stat-label">prefiere marcas transparentes (Edelman 2024)</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
