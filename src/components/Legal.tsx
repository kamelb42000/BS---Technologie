import React from 'react';
import { Shield, FileText, Scale } from 'lucide-react';
import SEO from '../components/SEO'; // Vérifie le chemin selon ton projet

// Layout général pour toutes les pages légales
const LegalLayout: React.FC<{
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  description?: string;
}> = ({ title, lastUpdated, children, description }) => (
  <div className="pt-24 pb-12 min-h-screen bg-slate-950">
    <SEO title={title} description={description || `${title} - BS-Technologie`} />
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-slate-500 text-sm mb-12">Dernière mise à jour : {lastUpdated}</p>
      <div className="prose prose-invert prose-slate max-w-none">
        {children}
      </div>
    </div>
  </div>
);

// Mentions légales
export const LegalNotice: React.FC = () => (
  <LegalLayout
    title="Mentions Légales"
    lastUpdated="1 Janvier 2026"
    description="Découvrez les mentions légales de BS-Technologie, société spécialisée en développement logiciel sur-mesure."
  >
    <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Édition du site</h3>
    <p>
      En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
      il est précisé aux utilisateurs du site internet <strong>bs-technologie.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
    </p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Propriétaire du site :</strong> BS-Technologie SAS - Capital social de 1 000€</li>
      <li><strong>Contact :</strong> Contact@bs-technologie.fr - 06-95-84-76-19</li>
      <li><strong>Adresse :</strong> Saint-Etienne, France</li>
      <li><strong>Identification de l'entreprise :</strong> SAS BS-Technologie au capital social de 1 000€ - RCS Saint-Etienne</li>
      <li><strong>Directeur de la publication :</strong> Direction BS-Technologie</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">2. Propriété intellectuelle</h3>
    <p>BS-Technologie est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>
    <p className="mt-4">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de BS-Technologie.</p>
  </LegalLayout>
);

// Politique de confidentialité
export const PrivacyPolicy: React.FC = () => (
  <LegalLayout
    title="Politique de Confidentialité"
    lastUpdated="13 janvier 2026"
    description="Politique de confidentialité de BS-Technologie : comment nous protégeons vos données personnelles et vos informations professionnelles."
  >
    <div className="p-4 bg-violet-900/10 border border-violet-500/20 rounded-xl mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Shield className="w-6 h-6 text-violet-400" />
        <span className="font-bold text-violet-200">Engagement de Confidentialité</span>
      </div>
      <p className="text-sm text-violet-300">
        Chez BS-Technologie, nous considérons la confidentialité de vos données comme le socle de notre relation technique. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations personnelles dans le cadre de nos services SaaS et de développement sur-mesure.
      </p>
    </div>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Responsable du Traitement</h3>
    <p>Le responsable du traitement des données est la société BS-Technologie, représentée par ses fondateurs.</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Email :</strong> Contact@bs-technologie.fr</li>
      <li><strong>Site Web :</strong> bs-technologie.fr</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">2. Données Collectées</h3>
    <p>Nous collectons uniquement les données nécessaires à la réalisation de nos missions :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Données d'identification :</strong> Nom, prénom, adresse email, numéro de téléphone.</li>
      <li><strong>Données professionnelles :</strong> Nom de l'entreprise, SIRET, fonction.</li>
      <li><strong>Données de connexion :</strong> Adresse IP, logs de connexion, type de navigateur (via nos outils SaaS).</li>
      <li><strong>Données de paiement :</strong> Informations de facturation (gérées par des prestataires certifiés PCI-DSS).</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">3. Finalités du Traitement</h3>
    <p>Vos données sont traitées pour les raisons suivantes :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Exécution du contrat :</strong> Création de vos accès SaaS, développement de votre logiciel, support technique.</li>
      <li><strong>Communication :</strong> Réponse à vos demandes de devis et suivi de projet.</li>
      <li><strong>Amélioration du service :</strong> Analyse anonymisée de l'utilisation de nos logiciels pour optimiser l'expérience utilisateur (UX).</li>
      <li><strong>Obligations légales :</strong> Facturation et comptabilité.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">4. Base Légale</h3>
    <p>Conformément au RGPD, nous traitons vos données sur les bases suivantes :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Le consentement :</strong> Pour l'envoi de newsletters ou l'utilisation de cookies non essentiels.</li>
      <li><strong>L'exécution d'un contrat :</strong> Pour fournir le logiciel SaaS ou la prestation de service.</li>
      <li><strong>L'intérêt légitime :</strong> Pour assurer la sécurité de nos réseaux et prévenir la fraude.</li>
    </ul>

    {/* ... et tout le reste du contenu PrivacyPolicy exactement comme dans ton fichier original ... */}
  </LegalLayout>
);

// CGV / CGU
export const TermsOfService: React.FC = () => (
  <LegalLayout
    title="Conditions Générales de Vente et d’Utilisation (CGV/CGU)"
    lastUpdated="Janvier 2026"
    description="Conditions générales de vente et d'utilisation de BS-Technologie pour nos services SaaS et développement logiciel sur-mesure."
  >
    {/* Contenu complet des CGV/CGU, inchangé */}
  </LegalLayout>
);

export default LegalNotice;
