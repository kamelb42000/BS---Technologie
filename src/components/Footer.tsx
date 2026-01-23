import React from 'react';
import { Dna, Binary, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative p-1.5 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg overflow-hidden flex-shrink-0">
                <Binary className="absolute inset-0 w-full h-full text-white/20 rotate-12 scale-150" />
                <Dna className="relative w-5 h-5 text-white z-10" />
              </div>
              <span className="text-xl font-bold text-white">BS-Technologie</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              L'expertise SaaS au service de votre vision. Nous construisons les outils numériques de demain pour les entreprises ambitieuses.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/bs-technologie" target="_blank"rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={(e) => handleLinkClick('sol-saas', e)} className="hover:text-violet-400 transition-colors text-left">Développement SaaS</button></li>
              <li><button onClick={(e) => handleLinkClick('sol-cloud', e)} className="hover:text-violet-400 transition-colors text-left">Architecture Cloud</button></li>
              <li><button onClick={(e) => handleLinkClick('sol-security', e)} className="hover:text-violet-400 transition-colors text-left">Sécurité des données</button></li>
              <li><button onClick={(e) => handleLinkClick('sol-audit', e)} className="hover:text-violet-400 transition-colors text-left">Audit Technique</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={(e) => handleLinkClick('about', e)} className="hover:text-violet-400 transition-colors text-left">À propos</button></li>
              <li><button onClick={(e) => handleLinkClick('home#contact', e)} className="hover:text-violet-400 transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Légal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={(e) => handleLinkClick('legal-notice', e)} className="hover:text-violet-400 transition-colors text-left">Mentions Légales</button></li>
              <li><button onClick={(e) => handleLinkClick('privacy', e)} className="hover:text-violet-400 transition-colors text-left">Politique de confidentialité</button></li>
              <li><button onClick={(e) => handleLinkClick('terms', e)} className="hover:text-violet-400 transition-colors text-left">CGV</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>© 2026 BS-Technologie. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Designed for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
