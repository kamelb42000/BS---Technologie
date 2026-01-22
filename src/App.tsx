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
import SEO from "./components/SEO";

type Page = 'home' | 'about' | 'legal-notice' | 'privacy' | 'terms' | 'sol-saas' | 'sol-cloud' | 'sol-security' | 'sol-audit' | 'sol-ia';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    // Gestion générique des ancres sur la page d'accueil (ex: home#contact, home#services)
    if (page.startsWith('home#')) {
      const targetId = page.split('#')[1];
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about': 
        return <>
          <SEO title="À propos – BS-Technologie" pathname="/about" description="Découvrez notre entreprise et notre expertise en développement web et solutions digitales." />
          <About />
        </>;
      case 'legal-notice': 
        return <>
          <SEO title="Mentions légales – BS-Technologie" pathname="/legal-notice" />
          <LegalNotice />
        </>;
      case 'privacy': 
        return <>
          <SEO title="Politique de confidentialité – BS-Technologie" pathname="/privacy" />
          <PrivacyPolicy />
        </>;
      case 'terms': 
        return <>
          <SEO title="Conditions générales – BS-Technologie" pathname="/terms" />
          <TermsOfService />
        </>;
      case 'sol-saas': 
        return <>
          <SEO title="Développement SaaS – BS-Technologie" pathname="/sol-saas" />
          <SaasDevelopment />
        </>;
      case 'sol-cloud': 
        return <>
          <SEO title="Architecture Cloud – BS-Technologie" pathname="/sol-cloud" />
          <CloudArchitecture />
        </>;
      case 'sol-security': 
        return <>
          <SEO title="Sécurité des données – BS-Technologie" pathname="/sol-security" />
          <DataSecurity />
        </>;
      case 'sol-audit': 
        return <>
          <SEO title="Audit technique – BS-Technologie" pathname="/sol-audit" />
          <TechnicalAudit />
        </>;
      case 'sol-ia': 
        return <>
          <SEO title="Intelligence Artificielle – BS-Technologie" pathname="/sol-ia" />
          <ArtificialIntelligence />
        </>;
      case 'home':
      default:
        return (
          <>
            <SEO 
              title="Accueil – BS-Technologie" 
              pathname="/" 
              description="BS-Technologie : développement web, audits SEO, optimisation des performances et solutions digitales sur mesure." 
            />
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
