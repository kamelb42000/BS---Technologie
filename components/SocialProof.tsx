import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-2">Fondé en 2026 par deux architectes du logiciel.</h2>
            <p className="text-slate-400">
              Plus de 15 ans d'expertise cumulée dans la transformation numérique et le développement de logiciels critiques pour les entreprises du CAC 40.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-8">
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-cyan-400" />
                <span className="text-xs text-slate-500 font-mono">SÉCURITÉ MAX</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Award className="w-8 h-8 text-violet-400" />
                <span className="text-xs text-slate-500 font-mono">EXCELLENCE</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-indigo-400" />
                <span className="text-xs text-slate-500 font-mono">PARTENARIAT</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;