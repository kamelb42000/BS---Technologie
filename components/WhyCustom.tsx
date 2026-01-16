import React from 'react';
import { Check, X } from 'lucide-react';
import { ComparisonPoint } from '../types';

const comparisonData: ComparisonPoint[] = [
  {
    feature: "Adaptabilité aux processus",
    generic: "Limitée, vous devez vous adapter à l'outil",
    custom: "Totale, l'outil s'adapte à votre métier"
  },
  {
    feature: "Propriété du code & IP",
    generic: "Aucune (Licence mensuelle)",
    custom: "100% Propriétaire (Actif valorisable)"
  },
  {
    feature: "Scalabilité & Coûts",
    generic: "Coûts exponentiels par utilisateur",
    custom: "Coûts d'infra maîtrisés, utilisateurs illimités"
  },
  {
    feature: "Sécurité des données",
    generic: "Mutualisée (Cible attractive)",
    custom: "Isolée & Renforcée (Private Cloud)"
  }
];

const WhyCustom: React.FC = () => {
  return (
    <section id="why-custom" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pourquoi choisir le <span className="text-indigo-400">Sur-Mesure</span> ?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto md:mx-0">
            Les solutions génériques brident votre croissance. BS-Technologie conçoit des actifs numériques qui valorisent votre entreprise.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px] grid grid-cols-3 gap-6">
            {/* Headers */}
            <div className="col-span-1 p-6 flex items-end">
              <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Comparatif</span>
            </div>
            <div className="col-span-1 p-6 bg-slate-900/50 rounded-t-2xl border-x border-t border-slate-800/50">
              <h3 className="text-xl font-bold text-slate-400">Logiciels Génériques</h3>
            </div>
            <div className="col-span-1 p-6 bg-gradient-to-b from-violet-900/20 to-slate-900/20 rounded-t-2xl border-x border-t border-violet-500/30">
              <h3 className="text-xl font-bold text-white">SaaS BS-Technologie</h3>
            </div>

            {/* Rows */}
            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1 p-6 border-b border-slate-800/50 flex items-center">
                  <span className="font-semibold text-slate-300">{item.feature}</span>
                </div>
                
                <div className="col-span-1 p-6 bg-slate-900/30 border-x border-b border-slate-800/50 flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-slate-400 text-sm">{item.generic}</span>
                </div>

                <div className="col-span-1 p-6 bg-violet-900/10 border-x border-b border-violet-500/20 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-violet-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-white font-medium text-sm">{item.custom}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustom;
