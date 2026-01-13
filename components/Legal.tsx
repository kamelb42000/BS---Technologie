import React from 'react';
import { Shield, FileText, Scale } from 'lucide-react';

const LegalLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
  <div className="pt-24 pb-12 min-h-screen bg-slate-950">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-slate-500 text-sm mb-12">Dernière mise à jour : {lastUpdated}</p>
      <div className="prose prose-invert prose-slate max-w-none">
        {children}
      </div>
    </div>
  </div>
);

export const LegalNotice: React.FC = () => (
  <LegalLayout title="Mentions Légales" lastUpdated="1 Janvier 2026">
    <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Édition du site</h3>
    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>bs-technologie.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
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

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout title="Politique de Confidentialité" lastUpdated="13 janvier 2026">
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

    <h3 className="text-white text-xl font-bold mt-8 mb-4">5. Conservation des Données</h3>
    <p>Nous ne conservons vos données que le temps nécessaire :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Prospects :</strong> 3 ans après le dernier contact.</li>
      <li><strong>Clients :</strong> Pendant toute la durée de la relation contractuelle, puis 5 ans au titre des obligations légales (archivage).</li>
      <li><strong>Données SaaS :</strong> En cas de résiliation, vos données sont supprimées ou restituées sous 30 jours, conformément à nos CGV.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">6. Destinataires et Transferts</h3>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Hébergement :</strong> Vos données sont stockées sur des serveurs sécurisés situés au sein de l'Union Européenne (Souveraineté numérique).</li>
      <li><strong>Tiers :</strong> Nous ne vendons jamais vos données. Elles ne sont partagées qu'avec nos sous-traitants techniques strictement nécessaires (hébergeur, outil d'envoi d'email, processeur de paiement).</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">7. Sécurité</h3>
    <p>En tant qu'experts tech, nous appliquons les standards de sécurité les plus stricts de 2026 :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li>Chiffrement des données au repos et en transit (TLS/SSL).</li>
      <li>Protocoles d'authentification forte (MFA) pour les accès administrateurs.</li>
      <li>Audits de sécurité réguliers de nos infrastructures Cloud.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">8. Vos Droits</h3>
    <p>Vous disposez des droits suivants sur vos données :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li>Droit d'accès et de rectification.</li>
      <li>Droit à l'effacement (droit à l'oubli).</li>
      <li>Droit à la limitation du traitement.</li>
      <li>Droit à la portabilité de vos données (format JSON/CSV).</li>
      <li>Droit d'opposition au traitement.</li>
    </ul>
    <p className="mt-4">Pour exercer vos droits, contactez-nous simplement à : <a href="mailto:Contact@bs-technologie.fr" className="text-violet-400 hover:text-white">Contact@bs-technologie.fr</a>.</p>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">9. Cookies</h3>
    <p>Notre site utilise des cookies pour améliorer votre navigation. Vous pouvez configurer vos préférences via le bandeau de cookies lors de votre première visite.</p>
  </LegalLayout>
);

export const TermsOfService: React.FC = () => (
  <LegalLayout title="Conditions Générales de Vente et d’Utilisation (CGV/CGU)" lastUpdated="Janvier 2026">
    <div className="mb-8 p-4 bg-slate-900 border border-slate-800 rounded-lg">
      <p className="text-slate-400 font-mono text-sm">Version 1.0 (Janvier 2026)</p>
    </div>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 1 : Objet</h3>
    <p>Les présentes CGV régissent les relations contractuelles entre la société BS-Technologie et ses clients (professionnels ou particuliers) pour :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li>La conception et le développement de solutions logicielles sur-mesure.</li>
      <li>La mise à disposition de ces solutions sous forme de logiciel en tant que service (SaaS).</li>
      <li>La maintenance et l'hébergement des outils créés.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 2 : Devis et Commande</h3>
    <p>Toute prestation fait l'objet d'un devis détaillé ou d'un cahier des charges. La commande est considérée comme ferme et définitive dès la signature du devis ("Bon pour accord") et le versement de l'éventuel acompte.</p>
    <p className="mt-4"><strong>Flexibilité :</strong> BS-Technologie accepte les modifications de périmètre en cours de projet, sous réserve d'un avenant tarifaire signé par les deux parties.</p>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 3 : Tarifs et Modalités de Paiement</h3>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Développement :</strong> Facturation au forfait (jalons de livraison) ou à la régie (temps passé).</li>
      <li><strong>SaaS (Abonnement) :</strong> Les frais d'accès au service sont facturés mensuellement ou annuellement. Tout retard de paiement de plus de 15 jours peut entraîner la suspension de l'accès au service après mise en demeure.</li>
      <li><strong>Révision :</strong> BS-Technologie se réserve le droit de réviser ses tarifs d'abonnement une fois par an, avec un préavis de 2 mois.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 4 : Propriété Intellectuelle</h3>
    <p>Il s'agit d'un point stratégique pour le sur-mesure :</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Le Code Spécifique :</strong> Sauf mention contraire au devis, la propriété intellectuelle des fonctionnalités développées exclusivement pour le Client lui est transférée intégralement après paiement total du prix.</li>
      <li><strong>Le "Cœur" BS-Technologie :</strong> BS-Technologie conserve la propriété des composants de base, frameworks et bibliothèques préexistants utilisés pour construire la solution. Le Client dispose d'une licence d'utilisation perpétuelle et non exclusive sur ces éléments.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 5 : Hébergement et Disponibilité (SLA)</h3>
    <p>BS-Technologie s'engage à une disponibilité du service SaaS de 99,5% (hors maintenance planifiée).</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li>L'hébergement est assuré sur des serveurs sécurisés répondant aux normes de souveraineté numérique en vigueur en 2026.</li>
      <li>Les sauvegardes sont effectuées quotidiennement.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 6 : Responsabilité et Garantie</h3>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Garantie de conformité :</strong> BS-Technologie garantit que le logiciel est conforme au cahier des charges signé pendant une durée de 3 mois après la livraison (correction des bugs gratuite).</li>
      <li><strong>Limites :</strong> La responsabilité de BS-Technologie ne peut être engagée en cas de mauvaise utilisation par le client, d'intrusion malveillante tierce ou d'interruption des réseaux de télécommunication. Dans tous les cas, la responsabilité financière est limitée au montant payé par le Client sur les 12 derniers mois.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 7 : Protection des Données (RGPD)</h3>
    <p>Conformément aux réglementations de 2026, BS-Technologie agit en tant que sous-traitant des données pour le compte du client.</p>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li>Les données appartiennent exclusivement au Client.</li>
      <li>BS-Technologie s'engage à ne jamais revendre ou utiliser les données à des fins publicitaires.</li>
      <li>En fin de contrat, une procédure de réversibilité permet au Client de récupérer l'intégralité de ses données dans un format standard (JSON, CSV ou SQL).</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 8 : Confidentialité</h3>
    <p>Les deux parties s'engagent à garder strictement confidentielles toutes les informations (techniques, commerciales ou stratégiques) échangées durant la collaboration.</p>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 9 : Résiliation</h3>
    <ul className="list-disc pl-6 text-slate-400 space-y-2 mt-4">
      <li><strong>Prestation de dev :</strong> Résiliation possible par lettre recommandée avec préavis, les heures déjà travaillées restant dues.</li>
      <li><strong>SaaS :</strong> Sauf engagement spécifique, l'abonnement est résiliable à chaque date anniversaire avec un préavis de 30 jours.</li>
    </ul>

    <h3 className="text-white text-xl font-bold mt-8 mb-4">Article 10 : Droit Applicable et Litiges</h3>
    <p>Les présentes CGV sont soumises au droit français. En cas de litige, une phase de médiation amiable sera systématiquement privilégiée avant toute action devant les tribunaux de Saint-Étienne.</p>
  </LegalLayout>
);