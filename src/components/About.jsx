import { FiCheck, FiCode, FiLayers, FiUsers } from 'react-icons/fi';

const pillars = [
  { number: '01', icon: <FiUsers />, title: 'Piloter', text: 'Planifier les sprints, répartir les tâches et rendre l’avancement visible pour toute l’équipe.' },
  { number: '02', icon: <FiLayers />, title: 'Concevoir', text: 'Transformer les enjeux métier en architectures modulaires, maintenables et scalables.' },
  { number: '03', icon: <FiCode />, title: 'Livrer', text: 'Développer les fonctionnalités critiques, garantir la qualité et automatiser le déploiement.' },
];

const About = () => (
  <section id="about" className="section section--light">
    <div className="container">
      <div className="section-heading section-heading--split">
        <div><span className="section-index">01 / À propos</span><h2>Du code à la coordination.</h2></div>
        <div className="section-intro">
          <p>Mon rôle ne s’arrête pas à développer. Je crée le cadre qui permet à une équipe de construire vite, proprement et dans la bonne direction.</p>
          <p>Spécialisé en développement full-stack et DevOps, j’interviens sur des produits à forte contrainte métier : livraison à la demande, plateformes éducatives et systèmes de gestion.</p>
          <div className="proof-line"><FiCheck /> Architecture · Exécution · Livraison</div>
        </div>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.title}>
            <div className="pillar-top"><span className="pillar-icon">{pillar.icon}</span><span className="pillar-number">{pillar.number}</span></div>
            <h3>{pillar.title}</h3><p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
