import React from 'react';
import { Terminal, Target, Zap } from 'lucide-react';
import SEO from './SEO'; // Assure-toi que le chemin est correct : About et SEO sont dans le même dossier

const About: React.FC = () => {
  return (
    <>
      {/* Balises SEO spécifiques à la page About */}
      <SEO
        title="À propos – BS-Technologie"
        description="Découvrez notre entreprise et notre expertise en développement web et solutions digitales. Notre ADN : précision, vélocité et souveraineté des données."
        canonical="/about"
      />

      <div className="pt-24 pb-12 min-h-screen bg-slate-950">
        <div className="container mx-auto px-6">
          {/* Hero Section of About */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Façonner le futur numérique</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                depuis 2026
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              BS-Technologie est née de la rencontre de deux architectes logiciels visionnaires, frustrés par les limitations des outils standards. Notre mission : redonner le pouvoir aux entreprises grâce au code sur-mesure.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Terminal className="w-12 h-12 text-violet-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Notre ADN</h2>
              <p className="text-slate-400 mb-4">
                Nous sommes avant tout des ingénieurs passionnés par l'excellence technique. Basés à Saint-Étienne, au cœur d'un hub d'innovation français, nous cultivons une approche artisanale du code appliquée à des échelles industrielles.
              </p>
              <p className="text-slate-400">
                Chaque ligne de code que nous écrivons est pensée pour la performance, la sécurité et la durabilité. Pas de "Low-code", pas de compromis. Du pur ingénierie logicielle.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 blur-3xl opacity-20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="relative rounded-2xl border border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-800 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors">
              <Target className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Précision</h3>
              <p className="text-slate-500">Nous ne devinons pas vos besoins, nous les analysons mathématiquement pour construire la solution exacte.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Vélocité</h3>
              <p className="text-slate-500">Grâce à notre stack propriétaire développée en 2026, nous déployons des MVP complexes en temps record.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors">
              <Terminal className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Souveraineté</h3>
              <p className="text-slate-500">Vos données restent vos données. Nous garantissons une indépendance totale vis-à-vis des GAFAM.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
