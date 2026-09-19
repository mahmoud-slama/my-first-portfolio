import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi';
import profile from '../assests/profil.jpg';

const Home = () => (
  <section id="home" className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="container hero-inner">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" />Tech Lead · Full-stack · DevOps</div>
        <h1>Je transforme des besoins complexes en <span>produits fiables.</span></h1>
        <p className="hero-lead">
          Ingénieur logiciel basé en Tunisie. Je pilote des équipes et conçois des plateformes web
          distribuées, de l’architecture jusqu’à la mise en production.
        </p>

        <div className="hero-actions">
          <a className="button button--primary" href="#projects">Découvrir mes projets <FiArrowDown aria-hidden="true" /></a>
          <a className="button button--ghost" href="/cv-mahmoud-slama.pdf" target="_blank" rel="noreferrer">
            Télécharger mon CV <FiDownload aria-hidden="true" />
          </a>
        </div>

        <div className="hero-meta">
          <span><FiMapPin aria-hidden="true" /> Nabeul, Tunisie</span>
          <span><span className="status-dot" /> Disponible pour de nouveaux défis</span>
        </div>
      </div>

      <div className="hero-visual reveal reveal--delay">
        <div className="portrait-frame">
          <img src={profile} alt="Mahmoud Slama, ingénieur logiciel et Tech Lead" />
          <div className="portrait-gradient" />
          <div className="portrait-caption">
            <span>Actuellement</span>
            <strong>Chef de Projet Technique</strong>
            <small>Devwise · depuis août 2025</small>
          </div>
        </div>
        <a className="hero-link-card" href="https://speedlineapp.tn" target="_blank" rel="noreferrer">
          <span>Dernier produit livré</span><strong>Speedline</strong><FiArrowUpRight aria-hidden="true" />
        </a>
        <span className="orbit-label orbit-label--one">Architecture</span>
        <span className="orbit-label orbit-label--two">Leadership</span>
      </div>
    </div>

    <div className="container hero-stats" aria-label="Chiffres clés">
      <div><strong>3</strong><span>produits en ligne</span></div>
      <div><strong>4</strong><span>interfaces dans l’écosystème Speedline</span></div>
      <div><strong>360°</strong><span>du planning au déploiement</span></div>
      <div><strong>2025</strong><span>Diplômé ingénieur ENISo</span></div>
    </div>
  </section>
);

export default Home;
