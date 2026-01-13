import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyCustom from './components/WhyCustom';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { LegalNotice, PrivacyPolicy, TermsOfService } from './components/Legal';
import { SaasDevelopment, CloudArchitecture, DataSecurity, TechnicalAudit, ArtificialIntelligence } from './components/SolutionPages';

type Page = 'home' | 'about' | 'legal-notice' | 'privacy' | 'terms' | 'sol-saas' | 'sol-cloud' | 'sol-security' | 'sol-audit' | 'sol-ia';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    // Gestion générique des ancres sur la page d'accueil (ex: home#contact, home#services)
    if (page.startsWith('home#')) {
      const targetId = page.split('#')[1];
      setCurrentPage('home');
      // Petit délai pour laisser le DOM se mettre à jour si on n'était pas sur home
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <About />;
      case 'legal-notice': return <LegalNotice />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'sol-saas': return <SaasDevelopment />;
      case 'sol-cloud': return <CloudArchitecture />;
      case 'sol-security': return <DataSecurity />;
      case 'sol-audit': return <TechnicalAudit />;
      case 'sol-ia': return <ArtificialIntelligence />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <SocialProof />
            <Services onNavigate={handleNavigate} />
            <WhyCustom />
            <Process />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-violet-500/30 selection:text-violet-200 flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;