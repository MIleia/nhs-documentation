<template>
  <DocShell type="guide" title="Gestion des incidents" description="Système de déclaration et suivi des incidents en résidence">
    <section class="prose prose-slate max-w-none">
      
      <h1>🚨 Gestion des incidents</h1>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h2 class="text-lg font-bold text-red-800 dark:text-red-200 mb-4">Vue d'ensemble</h2>
        <p class="text-red-700 dark:text-red-300">
          Le système d'incidents permet aux résidents, gardiens et administration de déclarer, suivre et résoudre 
          tous types d'incidents survenant dans la résidence avec un workflow complet de traitement.
        </p>
      </div>

      <h2>Types d'incidents pris en charge</h2>
      
      <div class="grid md:grid-cols-2 gap-6 not-prose my-6">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <h3 class="font-bold text-blue-800 dark:text-blue-200 mb-2">🔧 Incidents techniques</h3>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Pannes d'ascenseur</li>
            <li>• Problèmes de chauffage/climatisation</li>
            <li>• Fuites d'eau ou de gaz</li>
            <li>• Dysfonctionnements électriques</li>
            <li>• Problèmes d'accès (badges, portes)</li>
          </ul>
        </div>
        
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <h3 class="font-bold text-orange-800 dark:text-orange-200 mb-2">🛡️ Incidents sécurité</h3>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
            <li>• Intrusions ou tentatives</li>
            <li>• Vandalisme</li>
            <li>• Problèmes d'éclairage sécuritaire</li>
            <li>• Dysfonctionnements caméras</li>
            <li>• Situations suspectes</li>
          </ul>
        </div>
        
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <h3 class="font-bold text-green-800 dark:text-green-200 mb-2">🧹 Incidents entretien</h3>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Problèmes de propreté</li>
            <li>• Dysfonctionnements équipements</li>
            <li>• Espaces verts à traiter</li>
            <li>• Réparations mineures</li>
            <li>• Nuisances sonores</li>
          </ul>
        </div>
        
        <div class="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800/30">
          <h3 class="font-bold text-red-800 dark:text-red-200 mb-2">🏥 Incidents médicaux</h3>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Urgences médicales</li>
            <li>• Chutes ou accidents</li>
            <li>• Malaises</li>
            <li>• Situations nécessitant assistance</li>
            <li>• Problèmes d'accessibilité</li>
          </ul>
        </div>
      </div>

      <h2>Processus de déclaration</h2>
      
      <h3>1. Création de l'incident</h3>
      <p>Depuis l'interface résidents ou gardiens, accédez à la section "Incidents" :</p>
      
      <ol>
        <li><strong>Titre clair :</strong> Résumé en quelques mots (max 255 caractères)</li>
        <li><strong>Description détaillée :</strong> Circonstances, impact observé (max 2000 caractères)</li>
        <li><strong>Type d'incident :</strong> Sélection parmi technique/sécurité/entretien/médical</li>
        <li><strong>Niveau d'urgence :</strong> Faible, Normale, Haute ou Critique</li>
        <li><strong>Localisation précise :</strong> Bâtiment, étage, appartement, zone commune</li>
        <li><strong>Résident concerné :</strong> Si applicable, sélection du résident impacté</li>
        <li><strong>Pièces jointes :</strong> Photos, documents (max 5 fichiers de 5MB chacun)</li>
      </ol>

      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-3">💡 Bonnes pratiques pour la déclaration</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <li>• <strong>Photos :</strong> Prenez plusieurs angles, montrez l'étendue du problème</li>
          <li>• <strong>Précision :</strong> Plus l'information est précise, plus l'intervention sera rapide</li>
          <li>• <strong>Contact :</strong> Assurez-vous que vos coordonnées sont à jour pour le suivi</li>
          <li>• <strong>Urgence :</strong> Réservez "Critique" aux vraies urgences (sécurité, santé)</li>
        </ul>
      </div>

      <h3>2. Attribution automatique</h3>
      <p>Le système attribue automatiquement l'incident selon :</p>
      
      <ul>
        <li><strong>Type d'incident :</strong> Technique → équipe maintenance, Sécurité → gardiens, etc.</li>
        <li><strong>Niveau d'urgence :</strong> Les incidents critiques déclenchent des notifications immédiates</li>
        <li><strong>Disponibilité :</strong> Répartition équitable entre les intervenants disponibles</li>
        <li><strong>Compétences :</strong> Spécialisation (plomberie, électricité, etc.)</li>
      </ul>

      <h2>Workflow de traitement</h2>
      
      <div class="not-prose my-8">
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30 text-center">
            <div class="text-2xl mb-2">📝</div>
            <h4 class="font-bold text-yellow-800 dark:text-yellow-200">OUVERT</h4>
            <p class="text-xs text-yellow-700 dark:text-yellow-300 mt-2">Incident déclaré, en attente de prise en charge</p>
          </div>
          
          <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30 text-center">
            <div class="text-2xl mb-2">🔧</div>
            <h4 class="font-bold text-blue-800 dark:text-blue-200">EN COURS</h4>
            <p class="text-xs text-blue-700 dark:text-blue-300 mt-2">Intervention en cours, technicien sur place</p>
          </div>
          
          <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 text-center">
            <div class="text-2xl mb-2">✅</div>
            <h4 class="font-bold text-green-800 dark:text-green-200">RÉSOLU</h4>
            <p class="text-xs text-green-700 dark:text-green-300 mt-2">Problème corrigé, en attente de validation</p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-950/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800/30 text-center">
            <div class="text-2xl mb-2">📋</div>
            <h4 class="font-bold text-gray-800 dark:text-gray-200">FERMÉ</h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 mt-2">Incident clos, satisfaction confirmée</p>
          </div>
        </div>
      </div>

      <h2>Suivi et communication</h2>
      
      <h3>Notifications automatiques</h3>
      <ul>
        <li><strong>Création :</strong> Confirmation de réception avec numéro d'incident (INC-2024-XXXX)</li>
        <li><strong>Prise en charge :</strong> Assignation d'un responsable avec ses coordonnées</li>
        <li><strong>Mises à jour :</strong> Commentaires de progression de l'intervention</li>
        <li><strong>Résolution :</strong> Demande de validation avec détails de l'intervention</li>
      </ul>

      <h3>Suivi en temps réel</h3>
      <p>Depuis votre tableau de bord :</p>
      
      <ul>
        <li><strong>Mes incidents :</strong> Liste complète avec statuts en temps réel</li>
        <li><strong>Historique complet :</strong> Timeline détaillée de chaque action</li>
        <li><strong>Photos avant/après :</strong> Documentation visuelle de l'intervention</li>
        <li><strong>Temps d'intervention :</strong> Durée réelle et coût si applicable</li>
      </ul>

      <h2>Niveaux d'urgence et délais</h2>
      
      <div class="overflow-x-auto my-6">
        <table class="min-w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <thead class="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th class="px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Niveau</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Délai de prise en charge</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Délai de résolution</th>
              <th class="px-4 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Exemples</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td class="px-4 py-2 font-medium text-red-600 dark:text-red-400">CRITIQUE</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">Immédiat (15 min)</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">2h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">Urgences médicales, fuites majeures</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50">
              <td class="px-4 py-2 font-medium text-orange-600 dark:text-orange-400">HAUTE</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">1h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">24h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">Panne ascenseur, chauffage en hiver</td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium text-yellow-600 dark:text-yellow-400">NORMALE</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">4h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">72h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">Réparations courantes, nettoyage</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50">
              <td class="px-4 py-2 font-medium text-green-600 dark:text-green-400">FAIBLE</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">24h maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">1 semaine maximum</td>
              <td class="px-4 py-2 text-slate-700 dark:text-slate-300">Améliorations, maintenance préventive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Accès selon les rôles</h2>
      
      <div class="grid md:grid-cols-3 gap-6 not-prose my-6">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <h3 class="font-bold text-blue-800 dark:text-blue-200 mb-3">👥 Résidents</h3>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Déclarer incidents</li>
            <li>• Suivre leurs incidents</li>
            <li>• Ajouter commentaires</li>
            <li>• Valider résolutions</li>
            <li>• Consulter historique personnel</li>
          </ul>
        </div>
        
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <h3 class="font-bold text-orange-800 dark:text-orange-200 mb-3">🛡️ Gardiens</h3>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
            <li>• Déclarer incidents</li>
            <li>• Prendre en charge</li>
            <li>• Mettre à jour statuts</li>
            <li>• Voir tous incidents</li>
            <li>• Réassigner si besoin</li>
          </ul>
        </div>
        
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <h3 class="font-bold text-green-800 dark:text-green-200 mb-3">⚙️ Administration</h3>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Vue globale incidents</li>
            <li>• Statistiques et rapports</li>
            <li>• Gestion des assignations</li>
            <li>• Configuration workflow</li>
            <li>• Export données</li>
          </ul>
        </div>
      </div>

      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-8 border border-emerald-200 dark:border-emerald-800/30">
        <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-3">🎯 Système proactif</h3>
        <p class="text-emerald-700 dark:text-emerald-300 mb-4">
          Le système d'incidents NHS ne se contente pas de traiter les problèmes, il aide à les prévenir grâce à :
        </p>
        <ul class="text-sm text-emerald-700 dark:text-emerald-300 space-y-2">
          <li>• <strong>Analyses de tendances :</strong> Identification des problèmes récurrents</li>
          <li>• <strong>Maintenance préventive :</strong> Planification d'interventions avant panne</li>
          <li>• <strong>Indicateurs qualité :</strong> Mesure de la satisfaction et des délais</li>
          <li>• <strong>Rapports périodiques :</strong> Vision d'ensemble pour l'amélioration continue</li>
        </ul>
      </div>

    </section>
  </DocShell>
</template>


