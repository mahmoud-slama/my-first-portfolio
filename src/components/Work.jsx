import { FiArrowUpRight } from 'react-icons/fi';
import speedlineScreen from '../assests/brands/speedline-screen.webp';
import helpifyScreen from '../assests/brands/helpify-screen.webp';
import examBuilderScreen from '../assests/brands/exambuilder-screen.webp';

const projectScreens = {
  speedline: speedlineScreen,
  exam: examBuilderScreen,
  helpify: helpifyScreen,
};

const ProjectVisual = ({ type, name }) => (
  <div className={`project-visual ${type}-visual`}>
    <span className="live-product"><i /> Produit en ligne</span>
    <div className="screen-shell">
      <div className="screen-bar" aria-hidden="true"><span /><span /><span /></div>
      <img src={projectScreens[type]} alt={`Capture de l’interface ${name}`} />
    </div>
  </div>
);

const projects = [
  {
    name: 'Speedline',
    type: 'speedline',
    url: 'https://speedlineapp.tn',
    domain: 'speedlineapp.tn',
    category: 'Livraison à la demande · Produit en ligne',
    description: 'Un écosystème complet qui connecte clients, livreurs, partenaires et équipe opérationnelle en temps réel.',
    scope: ['Admin & Partner panels', 'Apps Client & Livreur', 'Commandes et suivi temps réel', 'Architecture microservices'],
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    featured: true,
  },
  {
    name: 'ExamBuilder',
    type: 'exam',
    url: 'https://exambuilder.tn',
    domain: 'exambuilder.tn',
    category: 'EdTech · Plateforme éducative',
    description: 'Une expérience numérique dédiée à la création d’examens et à l’accès à une bibliothèque d’exercices en Tunisie.',
    scope: ['Cadrage fonctionnel', 'Planification des livraisons', 'Développement full-stack'],
    stack: ['Web app', 'API REST', 'Cloud'],
  },
  {
    name: 'Helpify',
    type: 'helpify',
    url: 'https://helpify.tn',
    domain: 'helpify.tn',
    category: 'Impact social · Gestion associative',
    description: 'Une plateforme centralisée pour gérer donateurs, bénéficiaires, familles, dons et échanges au sein d’associations.',
    scope: ['Paiement en ligne', 'Messagerie instantanée', 'Tableaux de bord', 'Pipeline CI/CD'],
    stack: ['Angular', 'Spring Boot', 'MySQL', 'GitLab CI/CD'],
  },
];

const ProjectCard = ({ project, index }) => (
  <article className={`project-card project-card--${project.type} ${project.featured ? 'project-card--featured' : ''}`}>
    <ProjectVisual type={project.type} name={project.name} />
    <div className="project-content">
      <div className="project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="role-badge">Mon rôle · Tech Lead & Développeur</div>
      <ul className="project-scope">{project.scope.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
        Voir le produit <span>{project.domain}</span> <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </article>
);

const Work = () => (
  <section id="projects" className="section section--dark">
    <div className="container">
      <div className="section-heading projects-heading">
        <span className="section-index">02 / Projets sélectionnés</span>
        <h2>Des produits réels.<br /><em>Un impact mesurable.</em></h2>
        <p>De l’idée à la production, je pilote l’avancement tout en restant impliqué dans le développement.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </div>
  </section>
);

export default Work;
