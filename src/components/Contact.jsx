import { FiArrowUp, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => (
  <footer id="contact" className="contact-section">
    <div className="container">
      <div className="contact-top">
        <span className="section-index section-index--light">05 / Contact</span>
        <div className="contact-title-row">
          <h2>Un projet ambitieux<br />à construire ?</h2>
          <a className="contact-round-button" href="mailto:slama.mahmoud940@gmail.com" aria-label="Envoyer un e-mail à Mahmoud">
            Parlons-en <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="contact-grid">
        <a href="mailto:slama.mahmoud940@gmail.com" className="contact-item">
          <FiMail /><span><small>E-mail</small><strong>slama.mahmoud940@gmail.com</strong></span>
        </a>
        <a href="tel:+21622867764" className="contact-item">
          <FiPhone /><span><small>Téléphone</small><strong>+216 22 867 764</strong></span>
        </a>
        <div className="contact-item">
          <FiMapPin /><span><small>Localisation</small><strong>Nabeul, Tunisie</strong></span>
        </div>
      </div>

      <div className="footer-line">
        <div className="footer-brand"><span className="brand-mark brand-mark--light">MS</span><span>Mahmoud Slama<br /><small>Tech Lead & Software Engineer</small></span></div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/slama-mahmoud-789799251/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          <a href="https://github.com/mahmoud-slama" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          <a href="/cv-mahmoud-slama.pdf" target="_blank" rel="noreferrer"><FiDownload /> CV</a>
        </div>
        <a className="back-to-top" href="#home" aria-label="Retour en haut"><FiArrowUp /></a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Mahmoud Slama. Conçu pour présenter le travail, pas seulement la stack.</p>
    </div>
  </footer>
);

export default Contact;
