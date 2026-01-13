import React from 'react';
import { Layers, CloudLightning, Lock, Activity, CheckCircle, BrainCircuit } from 'lucide-react';

const SolutionLayout: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  details: React.ReactNode;
}> = ({ title, subtitle, icon, features, details }) => (
  <div className="pt-24 pb-12 min-h-screen bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 inline-flex p-4 rounded-2xl bg-slate-900 border border-slate-800">
          {icon}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-violet-400 mb-8">{subtitle}</p>
        
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-slate-300 text-lg leading-relaxed space-y-6">
            {details}
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-6">Caractéristiques Clés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SaasDevelopment: React.FC = () => (
  <SolutionLayout
    title="Développement SaaS Sur-Mesure"
    subtitle="L'architecture logicielle de demain, disponible aujourd'hui."
    icon={<Layers className="w-12 h-12 text-violet-500" />}
    details={
      <>
        <div>
          <h3 className="text-white text-xl font-bold mb-2">La Puissance du Sur-Mesure</h3>
          <p>
            Nous ne nous contentons pas d'assembler des briques existantes. Contrairement aux solutions "No-Code" ou aux CMS standards qui brident votre croissance, nous codons votre vision sans limites. Si vous voulez une fonctionnalité unique au monde, BS-Technologie la crée pour vous.
          </p>
        </div>
        
        <div>
          <h3 className="text-white text-xl font-bold mb-2">React, Node.js & Rust : La Stack 2026</h3>
          <p>
            Nous utilisons le standard industriel <strong>React & Node.js</strong> pour une rapidité et une modernité absolues. Couplé à <strong>Rust</strong>, notre arme secrète, nous garantissons une sécurité mémoire infaillible et la capacité de gérer des millions de requêtes sans ralentissement.
          </p>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-2">Applications Web Progressives (PWA)</h3>
          <p>
            Optimisez votre budget. Nous développons une <strong>PWA</strong> unique : votre logiciel fonctionne comme une application native sur Web, iOS et Android. Une seule maintenance, un déploiement universel et une disponibilité même hors-ligne.
          </p>
        </div>
      </>
    }
    features={[
      "Micro-services modulaires : Évolutivité infinie sans casser l'existant.",
      "UX/UI Futuriste & Accessible : Adoption immédiate par vos équipes.",
      "API RESTful & GraphQL : Intégration totale à votre écosystème (Banque, CRM).",
      "Tests automatisés 24/7 : Stabilité maximale, zéro régression.",
      "Mobile First Native : Performance optimale pour l'usage en mobilité.",
      "Mises à jour Zero-Downtime : Service disponible 100% du temps."
    ]}
  />
);

export const CloudArchitecture: React.FC = () => (
  <SolutionLayout
    title="Architecture Cloud Scalable"
    subtitle="Une infrastructure qui grandit avec votre ambition."
    icon={<CloudLightning className="w-12 h-12 text-blue-500" />}
    details="L'infrastructure est la colonne vertébrale de votre logiciel. Nos architectes cloud certifiés conçoivent des environnements Serverless auto-évolutifs. Que vous ayez 10 ou 10 millions d'utilisateurs, votre plateforme reste performante et vos coûts sont optimisés à l'usage réel."
    features={[
      "Auto-scaling horizontal et vertical",
      "Architecture Serverless (Pay-per-use)",
      "Multi-region failover",
      "Containerisation Docker & Kubernetes",
      "Optimisation des coûts (FinOps)",
      "Monitoring temps réel & Alerting"
    ]}
  />
);

export const DataSecurity: React.FC = () => (
  <SolutionLayout
    title="Sécurité & Souveraineté"
    subtitle="Vos données sont votre actif le plus précieux. Protégez-les."
    icon={<Lock className="w-12 h-12 text-emerald-500" />}
    details="Dans un monde cyber-menacé, la sécurité n'est pas une option. BS-Technologie applique le principe de 'Security by Design'. Nous chiffrons les données au repos et en transit, mettons en place une authentification forte (MFA) et garantissons l'hébergement sur le sol français ou européen pour une conformité RGPD totale."
    features={[
      "Chiffrement AES-256 de bout en bout",
      "Audit de sécurité continu",
      "Hébergement souverain (SecNumCloud)",
      "Conformité RGPD",
      "Gestion des identités (IAM)",
      "Plans de reprise d'activité (PRA)"
    ]}
  />
);

export const TechnicalAudit: React.FC = () => (
  <SolutionLayout
    title="Audit Technique & Conseil"
    subtitle="Comprendre l'existant pour mieux construire le futur."
    icon={<Activity className="w-12 h-12 text-amber-500" />}
    details="Votre logiciel actuel est lent ? Difficile à maintenir ? Avant de tout refaire, il faut comprendre. Nos experts plongent dans votre code et vos processus pour identifier les dettes techniques, les failles de sécurité et les goulots d'étranglement. Nous vous livrons une feuille de route claire et chiffrée."
    features={[
      "Analyse de la qualité du code",
      "Tests de pénétration (Pentest)",
      "Analyse de performance (Web Vitals)",
      "Revue d'architecture",
      "Optimisation des bases de données",
      "Roadmap de modernisation"
    ]}
  />
);

export const ArtificialIntelligence: React.FC = () => (
  <SolutionLayout
    title="Intégration d'IA Métier"
    subtitle="L'intelligence artificielle au service de votre productivité."
    icon={<BrainCircuit className="w-12 h-12 text-pink-500" />}
    details="Transformez vos données brutes en leviers de croissance. Nous intégrons des modèles d'IA sur-mesure (LLM, Prédictif, Vision) directement dans vos flux métiers. Automatisez les tâches répétitives, générez du contenu ou analysez vos données en temps réel avec une confidentialité totale (Modèles Open Source hébergés en privé)."
    features={[
      "Fine-tuning de modèles (Llama 3, Mistral)",
      "RAG (Retrieval Augmented Generation)",
      "Agents autonomes spécialisés",
      "Analyse prédictive & Aide à la décision",
      "Chatbots contextuels intelligents",
      "Automatisation de workflows (n8n/Python)"
    ]}
  />
);