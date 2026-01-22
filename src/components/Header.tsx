import React, { useState, useEffect } from 'react';
import { Menu, X, Dna, Binary } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
        // C'est une ancre sur la page d'accueil
        onNavigate('home');
        // Petit délai pour laisser le temps au composant Home de se monter si on est ailleurs
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        // C'est une page
        onNavigate(href);
        window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Expertise', href: '#why-custom' },
    { name: 'Processus', href: '#process' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick('#root', e)}
          className="flex items-center gap-2 group"
        >
          <div className="relative p-2 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-shadow duration-300 overflow-hidden">
            <Binary className="absolute inset-0 w-full h-full text-white/20 rotate-12 scale-150" />
            <Dna className="relative w-6 h-6 text-white z-10" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            BS-Technologie
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick('#contact', e)}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-full hover:bg-violet-600 hover:border-violet-600 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
          >
            Demander un Audit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white"
              onClick={(e) => handleNavClick(link.href, e)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="w-full text-center px-5 py-3 text-base font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
            onClick={(e) => handleNavClick('#contact', e)}
          >
            Demander un Audit
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;