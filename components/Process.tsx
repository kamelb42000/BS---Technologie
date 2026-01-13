import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Audit & Stratégie",
    description: "Analyse approfondie de vos flux métiers et définition de l'architecture technique.",
    number: "01"
  },
  {
    id: 2,
    title: "Prototypage UX/UI",
    description: "Conception d'interfaces futuristes et ergonomiques centrées sur l'expérience utilisateur.",
    number: "02"
  },
  {
    id: 3,
    title: "Développement Agile",
    description: "Sprints itératifs avec React & Node.js, livraisons régulières et tests automatisés.",
    number: "03"
  },
  {
    id: 4,
    title: "Déploiement Cloud",
    description: "Mise en production sécurisée, formation des équipes et maintenance évolutive.",
    number: "04"
  }
];

const icons = [Search, PenTool, Code2, Rocket];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Le Processus BS</h2>
          <p className="text-slate-400">Une méthodologie éprouvée pour transformer l'idée en réalité.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.id} className="relative group">
                {/* Connecting Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-800 z-0">
                    <div className="h-full bg-violet-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-violet-500 flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg shadow-black/50">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  
                  <span className="text-5xl font-bold text-slate-800 absolute top-0 -z-10 opacity-50 group-hover:text-violet-900/50 transition-colors select-none">
                    {step.number}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-3 mt-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;