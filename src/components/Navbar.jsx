import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-container">
        <a className="brand" href="#home" aria-label="Accueil - Mahmoud Slama" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">MS</span>
          <span className="brand-copy">
            <strong>Mahmoud Slama</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="nav-cta" href="#contact">Me contacter <FiArrowUpRight aria-hidden="true" /></a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)}><span>05</span>Me contacter</a>
      </div>
    </header>
  );
};

export default Navbar;
