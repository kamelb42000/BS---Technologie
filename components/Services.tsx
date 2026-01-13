import React from 'react';
import { Layers, CloudLightning, Lock, BrainCircuit } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services: Service[] = [
  {
    id: 1,
    title: "Conception SaaS de bout en bout",
    description: "De l'idéation au déploiement. Nous développons des architectures modulaires réactives (React, Node, Rust) adaptées à vos règles métier.",
    icon: Layers,
    link: 'sol-saas'
  },
  {
    id: 2,
    title: "Architecture Cloud Scalable",
    description: "Infrastructure auto-évolutive. Nous construisons sur AWS/Azure avec une approche Serverless pour garantir performance et coûts maîtrisés.",
    icon: CloudLightning,
    link: 'sol-cloud'
  },
  {
    id: 3,
    title: "Sécurité & Souveraineté",
    description: "Vos données vous appartiennent. Chiffrement de bout en bout, conformité RGPD 2026 et hébergement sur serveurs souverains sécurisés.",
    icon: Lock,
    link: 'sol-security'
  },
  {
    id: 4,
    title: "Intégration d'IA Métier",
    description: "Boostez votre SaaS avec des modèles prédictifs et génératifs personnalisés pour automatiser vos processus internes complexes.",
    icon: BrainCircuit,
    link: 'sol-ia'
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Nos Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Une stack technique d'avant-garde pour propulser votre entreprise dans l'ère numérique de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => service.link && onNavigate(service.link)}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-violet-500/50 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-violet-900/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-white group-hover:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;