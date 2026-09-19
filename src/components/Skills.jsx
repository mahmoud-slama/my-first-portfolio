import { FiCloud, FiCode, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi';

const experiences = [
  {
    period: 'Août 2025 — Aujourd’hui',
    company: 'Devwise',
    role: 'Chef de Projet Technique / Ingénieur Logiciel',
    text: 'Pilotage technique de Speedline, coordination d’une équipe multidisciplinaire, architecture microservices, suivi des livraisons et développement de fonctionnalités temps réel.',
    current: true,
  },
  {
    period: 'Fév. 2025 — Mai 2025',
    company: 'Devwise',
    role: 'Projet de fin d’études',
    text: 'Conception et déploiement d’une plateforme associative avec paiement, messagerie, dashboards et chaîne CI/CD sur AWS.',
  },
  {
    period: 'Juin 2024 — Août 2024',
    company: 'Dotcom',
    role: 'Stage d’ingénieur',
    text: 'Application de gestion d’événements, tableaux de bord temps réel, authentification multi-rôles et gestion des inscriptions.',
  },
  {
    period: 'Juil. 2023 — Août 2023',
    company: 'Devwise',
    role: 'Stage d’initiation',
    text: 'Développement et optimisation d’une application de gestion de bâtiments avec Spring Boot, Angular et MySQL.',
  },
];

const education = [
  { school: 'ENISo', degree: 'Diplôme National d’Ingénieur en Informatique Appliquée', period: '2022 — 2025' },
  { school: 'IPEIN', degree: 'Cycle préparatoire aux études d’ingénieur', period: '2020 — 2022' },
  { school: 'Lycée Mahmoud El Messadi', degree: 'Baccalauréat', period: '2020' },
];

const expertise = [
  { icon: <FiCode />, title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { icon: <FiServer />, title: 'Backend', items: ['Spring Boot', 'Node.js', 'Express.js', 'API REST', 'Microservices'] },
  { icon: <FiDatabase />, title: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Modélisation', 'Performance'] },
  { icon: <FiCloud />, title: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS · GCP · OVH', 'Observabilité'] },
  { icon: <FiGitBranch />, title: 'Leadership', items: ['Planning', 'Découpage des tâches', 'Suivi d’avancement', 'Code review', 'Agile / Scrum'] },
];

const Skills = () => (
  <>
    <section id="experience" className="section section--cream">
      <div className="container experience-layout">
        <div className="experience-sticky">
          <span className="section-index">03 / Parcours</span>
          <h2>Construire,<br />apprendre,<br /><em>prendre le lead.</em></h2>
          <p>Un parcours progressif, de l’ingénierie logicielle au pilotage de produits numériques.</p>
          <div className="education-list">
            <span className="education-label">Formation</span>
            {education.map((item) => (
              <article key={item.school}>
                <div><strong>{item.school}</strong><small>{item.period}</small></div>
                <p>{item.degree}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-period">
                {experience.period}
                {experience.current && <span className="current-badge">En poste</span>}
              </div>
              <div className="timeline-content">
                <span>{experience.company}</span>
                <h3>{experience.role}</h3>
                <p>{experience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="expertise" className="section section--light">
      <div className="container">
        <div className="section-heading section-heading--split expertise-heading">
          <div><span className="section-index">04 / Expertise</span><h2>Une stack au service du produit.</h2></div>
          <p>Je choisis les outils selon le problème à résoudre, avec une priorité constante : qualité, maintenabilité et vitesse de livraison.</p>
        </div>

        <div className="expertise-grid">
          {expertise.map((group) => (
            <article className="expertise-card" key={group.title}>
              <div className="expertise-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Skills;
