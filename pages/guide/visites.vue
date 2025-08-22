<template>
  <DocShell type="guide" title="Gestion des visites" description="Organiser et contrôler les visites dans la résidence">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Gestion des visites</h1>
      
      <div class="not-prose bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 rounded-2xl p-8 mb-12 border border-teal-200/50 dark:border-teal-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚶 Contrôle d'accès moderne</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Le système de gestion des visites assure sécurité et fluidité des entrées. 
          De la planification à la validation finale, chaque étape est optimisée pour tous les acteurs.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-teal-900 dark:text-teal-200 mb-2">📋 Planification</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Visites programmées et spontanées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-teal-900 dark:text-teal-200 mb-2">🔍 Validation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Contrôle en temps réel par le gardien</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-teal-900 dark:text-teal-200 mb-2">📊 Suivi</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Historique et statistiques complètes</p>
          </div>
        </div>
      </div>

      <!-- Types de visites -->
      <h2>Types de visites</h2>
      
      <h3>Visites personnelles</h3>
      <p>Visites de famille, amis, ou connaissances chez un résident :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
          <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">📅 Visites programmées</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li>• <strong>Planifiées à l'avance</strong> par le résident</li>
            <li>• <strong>Validation automatique</strong> si paramètres OK</li>
            <li>• <strong>Notification au gardien</strong> avant l'arrivée</li>
            <li>• <strong>Durée définie</strong> et contrôlée</li>
            <li>• <strong>Accès direct</strong> avec badge temporaire</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🚪 Visites spontanées</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-2">
            <li>• <strong>Arrivée impromptue</strong> d'un visiteur</li>
            <li>• <strong>Validation manuelle</strong> par le gardien</li>
            <li>• <strong>Contact avec le résident</strong> pour autorisation</li>
            <li>• <strong>Badge temporaire</strong> si accepté</li>
            <li>• <strong>Enregistrement</strong> dans le système</li>
          </ul>
        </div>
      </div>

      <h3>Types de visites supportés</h3>
      <p>Le système reconnaît trois types principaux de visites :</p>
      
      <div class="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
          <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">👨‍👩‍👧‍👦 Famille</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li>• <strong>Visites régulières</strong> de proches</li>
            <li>• <strong>Événements familiaux</strong> (anniversaires, fêtes)</li>
            <li>• <strong>Durée flexible</strong> selon besoins</li>
            <li>• <strong>Accès facilité</strong> pour visiteurs connus</li>
            <li>• <strong>Planification récurrente</strong> possible</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">� Professionnel</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• <strong>Prestataires de service</strong> autorisés</li>
            <li>• <strong>Livraisons spécialisées</strong> (médical, équipement)</li>
            <li>• <strong>Contrôles renforcés</strong> identité et raison</li>
            <li>• <strong>Badge professionnel</strong> avec zones définies</li>
            <li>• <strong>Traçabilité complète</strong> intervention</li>
          </ul>
        </div>
        
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🏥 Médical</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-2">
            <li>• <strong>Personnel soignant</strong> (infirmières, médecins)</li>
            <li>• <strong>Services d'urgence</strong> (SAMU, pompiers)</li>
            <li>• <strong>Accès prioritaire</strong> avec validation rapide</li>
            <li>• <strong>Protocole d'urgence</strong> 24h/24</li>
            <li>• <strong>Historique médical</strong> confidentiel</li>
          </ul>
        </div>
      </div>

      <h3>Système de badges intégré</h3>
      <p>Chaque visite autorisée déclenche l'attribution automatique d'un badge temporaire :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🏷️ Gestion automatique des badges</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Attribution</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Badge disponible</strong> sélectionné automatiquement</li>
              <li>• <strong>Zones d'accès</strong> selon type de visite</li>
              <li>• <strong>Durée limitée</strong> à la durée prévue de visite</li>
              <li>• <strong>Désactivation auto</strong> en fin de créneau</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Suivi en temps réel</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Localisation visiteur</strong> dans la résidence</li>
              <li>• <strong>Historique des accès</strong> par zone</li>
              <li>• <strong>Alertes de dépassement</strong> de zones autorisées</li>
              <li>• <strong>Retour badge</strong> obligatoire en fin de visite</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Export et planification avancée</h3>
      <p>Pour faciliter la gestion administrative, le système propose des exports complets :</p>
      
      <div class="not-prose bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 my-6 border border-amber-200 dark:border-amber-800/30">
        <h4 class="font-bold text-amber-800 dark:text-amber-200 mb-4">📊 Planning PDF exportable</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-amber-900 dark:text-amber-200 mb-2">Formats disponibles</h5>
            <ul class="space-y-1 text-amber-700 dark:text-amber-300">
              <li>• <strong>Planning journalier</strong>: Visites du jour</li>
              <li>• <strong>Vue hebdomadaire</strong>: Semaine complète</li>
              <li>• <strong>Rapport mensuel</strong>: Synthèse du mois</li>
              <li>• <strong>Planning par résident</strong>: Focus individuel</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-amber-900 dark:text-amber-200 mb-2">Contenu détaillé</h5>
            <ul class="space-y-1 text-amber-700 dark:text-amber-300">
              <li>• <strong>Informations complètes</strong> visiteurs</li>
              <li>• <strong>Créneaux et durées</strong> prévues</li>
              <li>• <strong>Type et motif</strong> de chaque visite</li>
              <li>• <strong>Instructions spéciales</strong> pour gardien</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pour les résidents -->
      <h2>Guide pour les résidents</h2>
      
      <h3>Programmer une visite</h3>
      <p>Anticipez les visites pour faciliter l'accès de vos invités :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">📝 Étapes de programmation</h4>
        <ol class="text-sm text-green-700 dark:text-green-300 space-y-2">
          <li><strong>1. Accès au formulaire :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Menu "Visites" → "Programmer une visite"</li>
              <li>• Ou bouton "+" dans la section visites</li>
            </ul>
          </li>
          <li><strong>2. Informations visiteur :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Nom et prénom complets</li>
              <li>• Numéro de téléphone</li>
              <li>• Email (optionnel, pour notification)</li>
              <li>• Pièce d'identité (numéro)</li>
            </ul>
          </li>
          <li><strong>3. Détails de la visite :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Date et heure d'arrivée prévue</li>
              <li>• Durée estimée de la visite</li>
              <li>• Motif (personnel, professionnel, etc.)</li>
              <li>• Nombre de personnes</li>
            </ul>
          </li>
          <li><strong>4. Options avancées :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Accès parking (si disponible)</li>
              <li>• Visite récurrente (même créneau)</li>
              <li>• Instructions spéciales</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3>Gérer ses visites en cours</h3>
      <p>Suivez et modifiez vos visites planifiées :</p>
      
      <ol>
        <li><strong>Consulter la liste :</strong> Section "Mes visites" avec statuts en temps réel</li>
        <li><strong>Modifier une visite :</strong> Clic sur la visite → "Modifier" (jusqu'à 1h avant)</li>
        <li><strong>Annuler :</strong> Bouton "Annuler" avec notification automatique au gardien</li>
        <li><strong>Prolonger :</strong> Demande d'extension via l'interface (sous réserve)</li>
      </ol>

      <h3>Notifications et alertes</h3>
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">📱 Notifications reçues</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>Arrivée visiteur</strong> (validation gardien)</li>
            <li>• <strong>Visite prolongée</strong> au-delà de l'horaire</li>
            <li>• <strong>Départ confirmé</strong> du visiteur</li>
            <li>• <strong>Problème d'accès</strong> ou refus d'entrée</li>
          </ul>
        </div>
        <div class="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800/30">
          <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">🔔 Rappels automatiques</h4>
          <ul class="text-sm text-cyan-700 dark:text-cyan-300 space-y-2">
            <li>• <strong>24h avant</strong> : Confirmation de la visite</li>
            <li>• <strong>2h avant</strong> : Rappel avec détails d'accès</li>
            <li>• <strong>Fin prévue</strong> : Notification de fin de créneau</li>
            <li>• <strong>Dépassement</strong> : Alerte après +15 minutes</li>
          </ul>
        </div>
      </div>

      <!-- Pour les gardiens -->
      <h2>Guide pour les gardiens</h2>
      
      <h3>Interface de contrôle</h3>
      <p>Le tableau de bord gardien centralise toutes les informations de contrôle d'accès :</p>
      
      <div class="not-prose bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 my-6 border border-amber-200 dark:border-amber-800/30">
        <h4 class="font-bold text-amber-800 dark:text-amber-200 mb-4">🖥️ Vue d'ensemble temps réel</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-amber-900 dark:text-amber-200 mb-2">Visites du jour</h5>
            <ul class="space-y-1 text-amber-700 dark:text-amber-300">
              <li>• Liste chronologique des visites prévues</li>
              <li>• Statuts : En attente, En cours, Terminée</li>
              <li>• Détails visiteur et résident</li>
              <li>• Actions rapides (valider, refuser, noter)</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-amber-900 dark:text-amber-200 mb-2">Alertes et incidents</h5>
            <ul class="space-y-1 text-amber-700 dark:text-amber-300">
              <li>• Visiteurs en retard ou en avance</li>
              <li>• Tentatives d'accès non autorisées</li>
              <li>• Problèmes techniques (badges, lecteurs)</li>
              <li>• Demandes d'assistance résidents</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Validation d'une visite spontanée</h3>
      <p>Procédure pour autoriser une visite non programmée :</p>
      
      <ol>
        <li><strong>Identification visiteur :</strong>
          <ul>
            <li>Demander une pièce d'identité officielle</li>
            <li>Noter le nom, prénom, numéro ID</li>
            <li>Vérifier la correspondance avec la personne</li>
          </ul>
        </li>
        <li><strong>Contact avec le résident :</strong>
          <ul>
            <li>Appeler via l'interphone ou téléphone</li>
            <li>Confirmer l'identité du visiteur</li>
            <li>Obtenir l'autorisation explicite</li>
          </ul>
        </li>
        <li><strong>Enregistrement dans le système :</strong>
          <ul>
            <li>Créer une nouvelle visite "spontanée"</li>
            <li>Saisir les informations visiteur</li>
            <li>Définir une durée maximale</li>
            <li>Générer un badge temporaire</li>
          </ul>
        </li>
        <li><strong>Consignes au visiteur :</strong>
          <ul>
            <li>Expliquer l'utilisation du badge</li>
            <li>Rappeler les zones autorisées</li>
            <li>Informer de l'heure limite</li>
            <li>Donner les consignes de sortie</li>
          </ul>
        </li>
      </ol>

      <h3>Gestion des incidents</h3>
      <div class="not-prose space-y-4 my-8">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Situations problématiques</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Refus d'accès</h5>
              <ul class="space-y-1 text-red-700 dark:text-red-300">
                <li>• Visiteur sans autorisation</li>
                <li>• Résident injoignable</li>
                <li>• Comportement suspect</li>
                <li>• Document d'identité invalide</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Actions à prendre</h5>
              <ul class="space-y-1 text-red-700 dark:text-red-300">
                <li>• Enregistrer l'incident dans le système</li>
                <li>• Photographier les documents (si autorisé)</li>
                <li>• Contacter l'administration si nécessaire</li>
                <li>• Rédiger un rapport détaillé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Pour les administrateurs -->
      <h2>Guide pour les administrateurs</h2>
      
      <h3>Configuration du système</h3>
      <p>Paramétrage global des règles de visite :</p>
      
      <div class="not-prose bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-4">⚙️ Paramètres système</h4>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 class="font-semibold text-slate-900 dark:text-slate-200 mb-3">Règles générales</h5>
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li>• <strong>Horaires autorisés :</strong> Début/fin des visites</li>
              <li>• <strong>Durée maximum :</strong> Limite par type de visite</li>
              <li>• <strong>Nombre simultané :</strong> Visiteurs max par résident</li>
              <li>• <strong>Zones d'accès :</strong> Parties communes autorisées</li>
              <li>• <strong>Validation automatique :</strong> Conditions d'auto-approbation</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-slate-900 dark:text-slate-200 mb-3">Notifications</h5>
            <ul class="space-y-2 text-slate-600 dark:text-slate-300">
              <li>• <strong>Templates email :</strong> Messages automatiques</li>
              <li>• <strong>Rappels :</strong> Délais et fréquence</li>
              <li>• <strong>Alertes gardien :</strong> Seuils et conditions</li>
              <li>• <strong>Rapports :</strong> Fréquence et destinataires</li>
              <li>• <strong>Escalade :</strong> Procédures en cas de problème</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gestion des accès spéciaux</h3>
      <p>Configuration d'accès permanents ou privilégiés :</p>
      
      <ol>
        <li><strong>Visiteurs réguliers :</strong>
          <ul>
            <li>Famille proche avec accès facilité</li>
            <li>Personnel soignant à domicile</li>
            <li>Prestataires récurrents</li>
          </ul>
        </li>
        <li><strong>Accès professionnel :</strong>
          <ul>
            <li>Entreprises sous contrat</li>
            <li>Services d'urgence</li>
            <li>Agents immobiliers</li>
          </ul>
        </li>
        <li><strong>Gestion des exceptions :</strong>
          <ul>
            <li>Événements spéciaux</li>
            <li>Travaux importants</li>
            <li>Situations d'urgence</li>
          </ul>
        </li>
      </ol>

      <h3>Rapports et analytics</h3>
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-6 border border-emerald-200 dark:border-emerald-800/30">
        <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-4">📊 Tableau de bord analytique</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Statistiques temps réel</h5>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• Nombre de visiteurs présents</li>
              <li>• Visites en attente de validation</li>
              <li>• Taux d'occupation par zone</li>
              <li>• Incidents et alertes actives</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Rapports périodiques</h5>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• Analyse hebdomadaire/mensuelle</li>
              <li>• Tendances et patterns de visite</li>
              <li>• Performance des gardiens</li>
              <li>• Optimisations suggérées</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Sécurité et conformité -->
      <h2>Sécurité et conformité</h2>
      
      <h3>Protection des données personnelles</h3>
      <p>Le système respecte les réglementations RGPD :</p>
      
      <ul>
        <li><strong>Collecte minimale :</strong> Seulement les données nécessaires au contrôle d'accès</li>
        <li><strong>Durée de conservation :</strong> Suppression automatique après période légale</li>
        <li><strong>Accès contrôlé :</strong> Seuls les gardiens et administrateurs autorisés</li>
        <li><strong>Chiffrement :</strong> Données sensibles cryptées en base</li>
        <li><strong>Audit trail :</strong> Traçabilité complète des accès aux données</li>
      </ul>

      <h3>Procédures d'urgence</h3>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Protocoles d'urgence</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Évacuation d'urgence</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Déverrouillage automatique des accès</li>
              <li>• Liste temps réel des présents</li>
              <li>• Guidage vers points de rassemblement</li>
              <li>• Communication avec services d'urgence</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Incident sécuritaire</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Verrouillage immédiat des accès</li>
              <li>• Alerte automatique forces de l'ordre</li>
              <li>• Enregistrement vidéo automatique</li>
              <li>• Protocole de confinement</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Optimisation et conseils -->
      <h2>Optimisation du système</h2>
      
      <h3>Bonnes pratiques pour les résidents</h3>
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
            <h4 class="font-bold text-green-800 dark:text-green-200 mb-2">✅ Recommandé</h4>
            <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Programmer les visites à l'avance</li>
              <li>• Informer précisément vos visiteurs</li>
              <li>• Respecter les horaires annoncés</li>
              <li>• Mettre à jour en cas de changement</li>
              <li>• Accompagner lors de la première visite</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800/30">
            <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-2">⚠️ À éviter</h4>
            <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
              <li>• Visites trop longues sans préavis</li>
              <li>• Informations visiteur incomplètes</li>
              <li>• Annulations tardives répétées</li>
              <li>• Prêt de badge d'accès</li>
              <li>• Non-respect des zones autorisées</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Indicateurs de performance</h3>
      <p>Métriques pour évaluer l'efficacité du système :</p>
      
      <ul>
        <li><strong>Temps de traitement :</strong> Délai moyen validation gardien</li>
        <li><strong>Taux de satisfaction :</strong> Feedback résidents et visiteurs</li>
        <li><strong>Incidents sécuritaires :</strong> Nombre et gravité des problèmes</li>
        <li><strong>Utilisation du système :</strong> Adoption par les résidents</li>
        <li><strong>Optimisation des flux :</strong> Réduction des temps d'attente</li>
      </ul>

      <!-- Support et formation -->
      <div class="not-prose bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 mt-12 border border-indigo-200/50 dark:border-indigo-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎓 Formation et support</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Un système de visite efficace nécessite une formation appropriée de tous les utilisateurs.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">👥 Résidents</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Formation à la programmation et gestion des visites</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">🛡️ Gardiens</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Protocoles de sécurité et utilisation de l'interface</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">⚙️ Administrateurs</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Configuration avancée et gestion des incidents</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl border border-teal-200 dark:border-teal-700">
        <p class="text-sm text-teal-700 dark:text-teal-300">
          <strong>Système de visites maîtrisé !</strong> Vous connaissez maintenant tous les aspects de la gestion des visites.
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
  useHead({ title: 'Gestion des visites - Documentation' })

  onMounted(() => {
    initTheme()
  })
</script>


