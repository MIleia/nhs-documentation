<template>
  <DocShell type="guide" title="Guide d'administration" description="Fonctions avancées et administration du système">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Guide d'administration</h1>
      
      <div class="not-prose bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-12 border border-violet-200/50 dark:border-violet-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">⚙️ Contrôle total du système</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Ce guide s'adresse aux administrateurs système qui gèrent la plateforme. 
          Configuration avancée, supervision, maintenance et optimisation pour une gestion d'entreprise-résidence optimale.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🎛️ Configuration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Paramétrage système complet</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">📊 Supervision</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Monitoring et analytics avancés</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🔧 Maintenance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Outils de maintenance système</p>
          </div>
        </div>
      </div>

      <!-- Accès aux fonctions admin -->
      <h2>Accès aux fonctions d'administration</h2>
      
      <h3>Tableau de bord administrateur</h3>
      <p>Point central de contrôle et supervision de toute la plateforme :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🖥️ Interface d'administration</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Accès rapide</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Menu "Administration" dans la barre latérale</li>
              <li>• Tableau de bord avec vue d'ensemble</li>
              <li>• Notifications administratives centralisées</li>
              <li>• Raccourcis vers actions fréquentes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Sections principales</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Gestion des utilisateurs et rôles</li>
              <li>• Configuration système générale</li>
              <li>• Supervision et analytics</li>
              <li>• Maintenance et logs système</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Niveaux d'administration</h3>
      <p>Différents niveaux d'accès selon les responsabilités :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🔐 Super Administrateur</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-2">
            <li>• <strong>Accès complet</strong> à toutes les fonctions</li>
            <li>• <strong>Gestion des administrateurs</strong> et permissions</li>
            <li>• <strong>Configuration critique</strong> du système</li>
            <li>• <strong>Accès base de données</strong> et logs</li>
            <li>• <strong>Maintenance système</strong> avancée</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">⚙️ Administrateur Standard</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-2">
            <li>• <strong>Gestion des résidents</strong> et visiteurs</li>
            <li>• <strong>Configuration badges</strong> et accès</li>
            <li>• <strong>Supervision incidents</strong> et messagerie</li>
            <li>• <strong>Rapports et analytics</strong> standards</li>
            <li>• <strong>Paramètres d'interface</strong> utilisateur</li>
          </ul>
        </div>
      </div>

      <!-- Gestion des utilisateurs avancée -->
      <h2>Gestion avancée des utilisateurs</h2>
      
      <h3>Administration des comptes</h3>
      <p>Outils complets pour la gestion des utilisateurs :</p>
      
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-6 border border-emerald-200 dark:border-emerald-800/30">
        <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-4">👥 Gestion en masse</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Import/Export</h5>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• Import CSV pour créations en masse</li>
              <li>• Export données utilisateurs (RGPD)</li>
              <li>• Synchronisation annuaire externe</li>
              <li>• Sauvegarde/restauration permissions</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Actions groupées</h5>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• Modification rôles par sélection</li>
              <li>• Envoi messages à groupes spécifiques</li>
              <li>• Activation/désactivation en masse</li>
              <li>• Réinitialisation mots de passe</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Système de permissions granulaires</h3>
      <p>Contrôle fin des accès et fonctionnalités :</p>
      
      <ol>
        <li><strong>Permissions par module :</strong>
          <ul>
            <li>Messagerie : lecture, écriture, modération</li>
            <li>Incidents : création, traitement, clôture</li>
            <li>Badges : consultation, attribution, configuration</li>
            <li>Visites : validation, programmation, historique</li>
          </ul>
        </li>
        <li><strong>Restrictions temporelles :</strong>
          <ul>
            <li>Horaires d'accès à l'application</li>
            <li>Durée de validité des comptes</li>
            <li>Dates d'expiration des permissions</li>
          </ul>
        </li>
        <li><strong>Limitations fonctionnelles :</strong>
          <ul>
            <li>Quotas (messages, incidents, uploads)</li>
            <li>Zones d'accès physique restreintes</li>
            <li>Niveaux de confidentialité des données</li>
          </ul>
        </li>
      </ol>

      <!-- Configuration système -->
      <h2>Configuration système</h2>
      
      <h3>Paramètres généraux</h3>
      <p>Configuration de base de la plateforme :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">🏢 Informations résidence</h4>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-3">Identité</h5>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Nom de la résidence :</strong> Affiché partout</li>
              <li>• <strong>Adresse complète :</strong> Contact et localisation</li>
              <li>• <strong>Informations légales :</strong> Syndic, gestionnaire</li>
              <li>• <strong>Contacts d'urgence :</strong> Numéros importants</li>
              <li>• <strong>Logos et visuels :</strong> Personnalisation interface</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-3">Paramètres techniques</h5>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>Langue par défaut :</strong> Interface système</li>
              <li>• <strong>Fuseau horaire :</strong> Horodatage des événements</li>
              <li>• <strong>Formats :</strong> Dates, nombres, devises</li>
              <li>• <strong>Limites système :</strong> Tailles fichiers, quotas</li>
              <li>• <strong>URLs personnalisées :</strong> Accès application</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Personnalisation de l'interface</h3>
      <p>Adapter l'apparence selon l'identité de la résidence :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🎨 Thème et branding</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Éléments visuels</h5>
            <ul class="space-y-1 text-indigo-700 dark:text-indigo-300">
              <li>• Couleurs principales et secondaires</li>
              <li>• Logo de la résidence (header, documents)</li>
              <li>• Images de fond et bannières</li>
              <li>• Favicon et icônes application</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Adaptation fonctionnelle</h5>
            <ul class="space-y-1 text-indigo-700 dark:text-indigo-300">
              <li>• Masquer/afficher modules par rôle</li>
              <li>• Textes personnalisés (accueil, aide)</li>
              <li>• Messages automatiques (emails, SMS)</li>
              <li>• Workflow incidents personnalisés</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Configuration des badges et accès</h3>
      <p>Paramétrage du système de contrôle d'accès physique :</p>
      
      <ol>
        <li><strong>Types de badges :</strong>
          <ul>
            <li>Badges résidents permanents</li>
            <li>Badges visiteurs temporaires</li>
            <li>Badges prestataires/maintenance</li>
            <li>Badges urgence/administration</li>
          </ul>
        </li>
        <li><strong>Zones d'accès :</strong>
          <ul>
            <li>Définition des zones contrôlées</li>
            <li>Niveaux de sécurité par zone</li>
            <li>Horaires d'accès autorisés</li>
            <li>Règles d'accompagnement</li>
          </ul>
        </li>
        <li><strong>Lecteurs et équipements :</strong>
          <ul>
            <li>Configuration réseau lecteurs</li>
            <li>Synchronisation base de données</li>
            <li>Monitoring état équipements</li>
            <li>Maintenance préventive</li>
          </ul>
        </li>
      </ol>

      <!-- Supervision et analytics -->
      <h2>Supervision et analytics</h2>
      
      <h3>Tableau de bord temps réel</h3>
      <p>Vue d'ensemble instantanée de l'activité :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">📊 Métriques en temps réel</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Activité utilisateurs</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• Utilisateurs connectés actuellement</li>
              <li>• Sessions actives par type d'appareil</li>
              <li>• Actions réalisées (dernière heure)</li>
              <li>• Taux d'adoption par fonctionnalité</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Incidents et maintenance</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• Incidents ouverts par priorité</li>
              <li>• Délais moyens de résolution</li>
              <li>• Taux de satisfaction résidents</li>
              <li>• Alertes système et matériel</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Rapports analytiques</h3>
      <p>Analyses approfondies pour optimiser la gestion :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">📈 Rapports périodiques</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• <strong>Hebdomadaire :</strong> Activité, incidents nouveaux</li>
            <li>• <strong>Mensuel :</strong> Tendances, satisfaction, coûts</li>
            <li>• <strong>Trimestriel :</strong> ROI, optimisations, projets</li>
            <li>• <strong>Annuel :</strong> Bilan complet, budgets</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🎯 Analytics spécialisés</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>Utilisation :</strong> Pages vues, temps passé</li>
            <li>• <strong>Performance :</strong> Temps chargement, erreurs</li>
            <li>• <strong>Sécurité :</strong> Tentatives intrusion, anomalies</li>
            <li>• <strong>Maintenance :</strong> Prédictif, planification</li>
          </ul>
        </div>
      </div>

      <h3>Alertes et notifications système</h3>
      <p>Surveillance proactive des points critiques :</p>
      
      <ul>
        <li><strong>Seuils configurables :</strong> Déclenchement automatique selon critères</li>
        <li><strong>Canaux multiples :</strong> Email, SMS, push, tableau de bord</li>
        <li><strong>Escalade automatique :</strong> Hiérarchie de notifications</li>
        <li><strong>Acquittement :</strong> Suivi des prises en charge</li>
        <li><strong>Historique :</strong> Journal complet des alertes</li>
      </ul>

      <!-- Maintenance système -->
      <h2>Maintenance et optimisation</h2>
      
      <h3>Maintenance préventive</h3>
      <p>Garder le système en parfait état de fonctionnement :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔧 Tâches de maintenance</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Automatisées</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• Sauvegarde quotidienne des données</li>
              <li>• Nettoyage logs anciens (>90 jours)</li>
              <li>• Optimisation base de données</li>
              <li>• Vérification intégrité fichiers</li>
              <li>• Test des sauvegardes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Manuelles</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• Mise à jour sécurité système</li>
              <li>• Révision des permissions utilisateurs</li>
              <li>• Audit logs d'accès</li>
              <li>• Test procédures d'urgence</li>
              <li>• Formation équipes support</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gestion des logs système</h3>
      <p>Suivi détaillé de l'activité pour diagnostic et sécurité :</p>
      
      <ol>
        <li><strong>Types de logs :</strong>
          <ul>
            <li>Connexions et authentifications</li>
            <li>Actions utilisateurs critiques</li>
            <li>Erreurs système et applications</li>
            <li>Accès physiques (badges)</li>
            <li>Modifications configuration</li>
          </ul>
        </li>
        <li><strong>Analyse et recherche :</strong>
          <ul>
            <li>Filtres avancés par date, utilisateur, action</li>
            <li>Recherche textuelle dans les événements</li>
            <li>Export pour analyse externe</li>
            <li>Corrélation d'événements</li>
          </ul>
        </li>
      </ol>

      <h3>Optimisation des performances</h3>
      <p>Maintenir des temps de réponse optimaux :</p>
      
      <ul>
        <li><strong>Monitoring performances :</strong> Temps réponse, charge serveur</li>
        <li><strong>Optimisation base :</strong> Index, requêtes, archivage</li>
        <li><strong>Cache intelligent :</strong> Mise en cache données fréquentes</li>
        <li><strong>Ressources système :</strong> CPU, mémoire, stockage</li>
        <li><strong>Réseau :</strong> Bande passante, latence, CDN</li>
      </ul>

      <!-- Sécurité avancée -->
      <h2>Sécurité et conformité</h2>
      
      <h3>Politique de sécurité</h3>
      <p>Protection multicouche des données et accès :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🔒 Mesures de sécurité</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Accès et authentification</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Authentification forte (2FA optionnelle)</li>
              <li>• Politique mots de passe renforcée</li>
              <li>• Verrouillage après tentatives échouées</li>
              <li>• Sessions sécurisées avec timeout</li>
              <li>• Audit trail complet</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Protection des données</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Chiffrement données sensibles</li>
              <li>• Sauvegarde chiffrée hors site</li>
              <li>• Anonymisation données analytiques</li>
              <li>• Purge automatique données expirées</li>
              <li>• Conformité RGPD</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Conformité RGPD</h3>
      <p>Respect de la réglementation sur la protection des données :</p>
      
      <ol>
        <li><strong>Droits des personnes :</strong>
          <ul>
            <li>Accès aux données personnelles</li>
            <li>Rectification et suppression</li>
            <li>Portabilité des données</li>
            <li>Opposition au traitement</li>
          </ul>
        </li>
        <li><strong>Gestion des consentements :</strong>
          <ul>
            <li>Collecte explicite du consentement</li>
            <li>Révocation facilitée</li>
            <li>Traçabilité des consentements</li>
            <li>Information claire sur l'usage</li>
          </ul>
        </li>
      </ol>

      <!-- Support et formation -->
      <h2>Support et formation</h2>
      
      <h3>Formation des équipes</h3>
      <p>Assurer la montée en compétences de tous les utilisateurs :</p>
      
      <div class="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
          <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">👥 Résidents</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <li>• Sessions d'onboarding</li>
            <li>• Guides pratiques illustrés</li>
            <li>• FAQ et support en ligne</li>
            <li>• Formations thématiques</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🛡️ Gardiens</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-2">
            <li>• Formation interface complète</li>
            <li>• Procédures d'urgence</li>
            <li>• Gestion incidents complexes</li>
            <li>• Mise à jour compétences</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">⚙️ Administrateurs</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• Formation technique avancée</li>
            <li>• Certification administration</li>
            <li>• Veille technologique</li>
            <li>• Échange bonnes pratiques</li>
          </ul>
        </div>
      </div>

      <h3>Documentation et ressources</h3>
      <p>Maintenir une base de connaissances à jour :</p>
      
      <ul>
        <li><strong>Documentation technique :</strong> Architecture, API, base de données</li>
        <li><strong>Guides utilisateurs :</strong> Par rôle et fonctionnalité</li>
        <li><strong>Procédures :</strong> Maintenance, urgence, escalade</li>
        <li><strong>FAQ dynamique :</strong> Questions fréquentes actualisées</li>
        <li><strong>Changelog :</strong> Historique des évolutions</li>
      </ul>

      <!-- Évolution et amélioration -->
      <h2>Évolution et amélioration continue</h2>
      
      <h3>Collecte de feedback</h3>
      <p>Écouter les utilisateurs pour améliorer l'expérience :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">💬 Mécanismes de retour</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Collecte passive</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Analytics comportementaux</li>
              <li>• Temps d'utilisation par fonction</li>
              <li>• Taux d'abandon des processus</li>
              <li>• Erreurs utilisateur fréquentes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Collecte active</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Sondages satisfaction périodiques</li>
              <li>• Boîte à suggestions intégrée</li>
              <li>• Interviews utilisateurs ciblées</li>
              <li>• Tests d'usabilité nouvelles fonctions</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Roadmap et planification</h3>
      <p>Évolution stratégique de la plateforme :</p>
      
      <ol>
        <li><strong>Analyse des besoins :</strong> Priorisation selon impact et effort</li>
        <li><strong>Planification versions :</strong> Releases régulières et majeures</li>
        <li><strong>Tests et validation :</strong> Environnement de pré-production</li>
        <li><strong>Déploiement progressif :</strong> Rollout contrôlé des nouveautés</li>
        <li><strong>Suivi post-déploiement :</strong> Monitoring adoption et satisfaction</li>
      </ol>

      <!-- Conclusion et ressources -->
      <div class="not-prose bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 mt-12 border border-indigo-200/50 dark:border-indigo-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚀 Excellence opérationnelle</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Une administration efficace nécessite vigilance, formation continue et amélioration permanente. 
          Ces outils vous donnent le contrôle total pour offrir la meilleure expérience à tous les résidents.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">📞 Support technique</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Équipe dédiée pour assistance avancée</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">🎓 Formation continue</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Mise à niveau régulière des compétences</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-xl border border-violet-200 dark:border-violet-700">
        <p class="text-sm text-violet-700 dark:text-violet-300">
          <strong>Administration maîtrisée !</strong> Vous disposez maintenant de tous les outils pour une gestion optimale de la plateforme.
        </p>
      </div>
    </div>
  </DocShell>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '../../composables/useTheme'
  
  // Import du système de thème
  const { initTheme } = useTheme()
  useHead({ title: 'Guide d\'administration - Documentation' })

  onMounted(() => {
    initTheme()
  })
</script>


