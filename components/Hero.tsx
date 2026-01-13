import React from 'react';
import { ArrowRight, Cpu, Cloud, Database } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] animate-float delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm mb-8 animate-[fadeIn_1s_ease-out]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Expert Tech 2026</span>
        </div>

        {/* Headings */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-slate-100">L'expertise SaaS</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
            au service de votre vision
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          BS-Technologie transforme vos besoins métiers en logiciels puissants, évolutifs et 100% personnalisés.
          Architecture souveraine et intelligence artificielle intégrée.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('home#contact')}
            className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            Démarrer votre projet
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 rounded-full blur-lg bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button 
            onClick={() => onNavigate('home#services')}
            className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Découvrir nos solutions
          </button>
        </div>

        {/* Floating Icons Visualization */}
        <div className="mt-20 flex justify-center gap-12 grayscale opacity-40">
           <Cpu className="w-12 h-12 text-indigo-400 animate-pulse" />
           <Cloud className="w-12 h-12 text-violet-400 animate-pulse delay-75" />
           <Database className="w-12 h-12 text-cyan-400 animate-pulse delay-150" />
        </div>
      </div>
    </section>
  );
};

export default Hero;