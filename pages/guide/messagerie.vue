<template>
  <DocShell type="guide" title="Guide de la messagerie" description="Maîtriser le système de communication interne">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Guide de la messagerie</h1>
      
      <div class="not-prose bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 mb-12 border border-cyan-200/50 dark:border-cyan-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">💬 Communication moderne</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          La messagerie intégrée facilite la communication entre tous les acteurs de la résidence. 
          Système de conversations avec gestion des participants et historique des messages.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">💬 Messages</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Communication directe entre utilisateurs</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">👥 Groupes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Conversations de groupe organisées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">� Historique</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Conservation de l'historique des échanges</p>
          </div>
        </div>
      </div>

      <!-- Interface messagerie -->
      <h2>Interface de la messagerie</h2>
      
      <h3>Accès à la messagerie</h3>
      <p>La messagerie est accessible depuis le menu principal :</p>
      
      <ol>
        <li>Cliquez sur "Messages" dans le menu latéral</li>
        <li>Consultez vos conversations existantes</li>
        <li>Créez de nouvelles conversations si nécessaire</li>
      </ol>

      <h3>Organisation de l'interface</h3>
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">📋 Liste des conversations</h4>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Vos conversations actives</li>
            <li>• Aperçu du dernier message</li>
            <li>• Nom des participants</li>
            <li>• Date et heure des échanges</li>
          </ul>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">💭 Conversation sélectionnée</h4>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Historique complet des messages</li>
            <li>• Zone de saisie pour répondre</li>
            <li>• Informations sur les participants</li>
            <li>• Envoi et réception des messages</li>
          </ul>
        </div>
      </div>

      <!-- Types de conversations -->
      <h2>Types de conversations</h2>
      
      <h3>Conversations de groupe</h3>
      <p>Principale méthode de communication dans l'application :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">Créer une conversation</h4>
        <ol class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>1. Cliquez sur "Nouvelle conversation" dans la section Messages</li>
          <li>2. Donnez un nom à la conversation</li>
          <li>3. Recherchez et sélectionnez les participants</li>
          <li>4. Créez la conversation</li>
          <li>5. Un message automatique confirme la création</li>
        </ol>
      </div>

      <h3>Gestion des participants</h3>
      <p>Les conversations peuvent inclure plusieurs utilisateurs :</p>
      
      <ul>
        <li><strong>Ajout de membres :</strong> Possibilité d'ajouter de nouveaux participants</li>
        <li><strong>Recherche d'utilisateurs :</strong> Par nom, prénom ou email</li>
        <li><strong>Rôles visibles :</strong> Admin, gardien, résident affichés</li>
        <li><strong>Historique complet :</strong> Tous les messages sont conservés</li>
      </ul>

      <!-- Fonctionnalités de messagerie -->
      <h2>Fonctionnalités de messagerie</h2>
      
      <h3>Envoi et réception de messages</h3>
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">✏️ Rédaction de messages</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• Zone de saisie simple et intuitive</li>
            <li>• Envoi par bouton ou touche Entrée</li>
            <li>• Messages texte principalement</li>
            <li>• Support des caractères spéciaux</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">� Historique des messages</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-2">
            <li>• Conservation complète de l'historique</li>
            <li>• Horodatage des messages</li>
            <li>• Identification de l'auteur</li>
            <li>• Scroll dans l'historique</li>
          </ul>
        </div>
      </div>

      <h3>Gestion des conversations</h3>
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">🎭 Fonctionnalités disponibles</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Actions sur conversations</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• Sélectionner une conversation dans la liste</li>
              <li>• Consulter l'historique complet</li>
              <li>• Ajouter de nouveaux participants</li>
              <li>• Signaler un contenu inapproprié</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Navigation</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• Navigation entre conversations</li>
              <li>• Recherche dans l'historique</li>
              <li>• Vue chronologique des messages</li>
              <li>• Interface responsive mobile/desktop</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Gestion des conversations -->
      <h2>Utilisation pratique</h2>
      
      <h3>Bonnes pratiques de communication</h3>
      <p>Pour une utilisation optimale de la messagerie :</p>
      
      <div class="not-prose space-y-4 my-8">
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">💡 Conseils d'utilisation</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Organisation</h5>
              <ul class="space-y-1 text-indigo-700 dark:text-indigo-300">
                <li>• Donnez des noms clairs aux conversations</li>
                <li>• Invitez uniquement les personnes concernées</li>
                <li>• Utilisez des conversations spécifiques par sujet</li>
                <li>• Gardez l'historique pour référence</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Communication</h5>
              <ul class="space-y-1 text-indigo-700 dark:text-indigo-300">
                <li>• Soyez respectueux dans vos échanges</li>
                <li>• Répondez dans des délais raisonnables</li>
                <li>• Utilisez les conversations de groupe avec modération</li>
                <li>• Consultez régulièrement vos messages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3>Rôles et permissions</h3>
      <p>Selon votre rôle dans l'application, vos capacités dans la messagerie varient :</p>
      
      <div class="not-prose grid md:grid-cols-3 gap-4 my-8">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-3">🔐 Administrateur</h4>
          <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
            <li>• Accès à toutes les conversations</li>
            <li>• Création de conversations avec tous</li>
            <li>• Gestion des participants</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-3">🛡️ Gardien</h4>
          <ul class="text-xs text-orange-700 dark:text-orange-300 space-y-1">
            <li>• Communication avec résidents</li>
            <li>• Messages avec administration</li>
            <li>• Création de conversations</li>
            <li>• Participation aux discussions</li>
          </ul>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
          <h4 class="font-bold text-green-800 dark:text-green-200 mb-3">🏠 Résident</h4>
          <ul class="text-xs text-green-700 dark:text-green-300 space-y-1">
            <li>• Messages entre résidents</li>
            <li>• Communication avec administration</li>
            <li>• Participation aux conversations</li>
            <li>• Création de conversations limitées</li>
          </ul>
        </div>
      </div>

      <!-- Notifications et paramètres -->
      <h2>Notifications et paramètres</h2>
      
      <h3>Configuration des notifications</h3>
      <p>Personnalisez vos notifications pour ne manquer aucun message important :</p>
      
      <div class="not-prose bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 my-6 border border-teal-200 dark:border-teal-800/30">
        <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🔔 Types de notifications</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-teal-900 dark:text-teal-200 mb-2">Notifications push</h5>
            <ul class="space-y-1 text-teal-700 dark:text-teal-300">
              <li>• Messages privés importants</li>
              <li>• Mentions dans les groupes</li>
              <li>• Annonces administratives</li>
              <li>• Alertes urgentes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-teal-900 dark:text-teal-200 mb-2">Notifications email</h5>
            <ul class="space-y-1 text-teal-700 dark:text-teal-300">
              <li>• Résumé quotidien des messages</li>
              <li>• Messages manqués après 1h</li>
              <li>• Notifications administratives</li>
              <li>• Rappels automatiques</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Paramètres de confidentialité</h3>
      <p>Contrôlez qui peut vous contacter et comment :</p>
      
      <ol>
        <li>Accédez aux paramètres via l'icône engrenage</li>
        <li>Section "Confidentialité et sécurité"</li>
        <li>Configurez :
          <ul>
            <li>Qui peut vous envoyer des messages privés</li>
            <li>Qui peut vous ajouter à des groupes</li>
            <li>Visibilité de votre statut en ligne</li>
            <li>Accusés de lecture automatiques</li>
          </ul>
        </li>
      </ol>

      <!-- Cas d'usage pratiques -->
      <h2>Cas d'usage pratiques</h2>
      
      <h3>Communication d'urgence</h3>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Procédure d'urgence</h4>
        <ol class="text-sm text-red-700 dark:text-red-300 space-y-2">
          <li><strong>1. Incident sécurité :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Utilisez le bouton "Urgence" (icône rouge)</li>
              <li>• Message automatique vers gardien et administration</li>
              <li>• Ajoutez localisation et description brève</li>
            </ul>
          </li>
          <li><strong>2. Panne technique :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Groupe "Maintenance" pour signaler</li>
              <li>• Joindre photos du problème</li>
              <li>• Préciser urgence et impact</li>
            </ul>
          </li>
          <li><strong>3. Information importante :</strong>
            <ul class="ml-4 mt-1 space-y-1">
              <li>• Groupe général de l'étage/bâtiment</li>
              <li>• Utiliser @everyone pour notifier tous</li>
              <li>• Marquer comme "Important" si critique</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3>Organisation d'événements</h3>
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎉 Événements résidents</h4>
        <div class="text-sm text-purple-700 dark:text-purple-300">
          <p class="mb-3"><strong>Créer un groupe événement :</strong></p>
          <ol class="space-y-1 mb-4">
            <li>1. Nouveau groupe "Fête des voisins 2025"</li>
            <li>2. Inviter les résidents intéressés</li>
            <li>3. Partager les détails progressivement</li>
            <li>4. Organiser les tâches et participations</li>
            <li>5. Partager photos et remerciements après</li>
          </ol>
          <p><strong>Astuce :</strong> Utilisez les réactions pour les sondages rapides (👍👎 pour oui/non)</p>
        </div>
      </div>

      <h3>Communication avec les prestataires</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">🔧 Coordination travaux</h4>
        <div class="text-sm text-gray-600 dark:text-gray-300">
          <p class="mb-3"><strong>Groupe temporaire travaux :</strong></p>
          <ul class="space-y-1">
            <li>• Administration + résidents affectés + responsable prestataire</li>
            <li>• Planning détaillé et mises à jour temps réel</li>
            <li>• Photos avant/pendant/après les interventions</li>
            <li>• Questions et réponses immédiates</li>
            <li>• Validation finale et clôture du groupe</li>
          </ul>
        </div>
      </div>

      <!-- Bonnes pratiques -->
      <h2>Bonnes pratiques et étiquette</h2>
      
      <h3>Communication efficace</h3>
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
            <h4 class="font-bold text-green-800 dark:text-green-200 mb-2">✅ À faire</h4>
            <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
              <li>• Messages clairs et concis</li>
              <li>• Vérifier l'orthographe</li>
              <li>• Utiliser les groupes appropriés</li>
              <li>• Répondre dans des délais raisonnables</li>
              <li>• Respecter la vie privée</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-200 dark:border-red-800/30">
            <h4 class="font-bold text-red-800 dark:text-red-200 mb-2">❌ À éviter</h4>
            <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• ÉCRIRE TOUT EN MAJUSCULES</li>
              <li>• Spam ou messages répétitifs</li>
              <li>• Contenu inapproprié ou offensant</li>
              <li>• Partager des informations personnelles</li>
              <li>• Ignorer les messages urgents</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gestion du temps et notifications</h3>
      <ul>
        <li><strong>Heures de silence :</strong> Évitez les messages non urgents après 22h</li>
        <li><strong>Week-end :</strong> Respectez le repos, sauf urgence véritable</li>
        <li><strong>Vacances :</strong> Configurez un message d'absence automatique</li>
        <li><strong>Groupage :</strong> Regroupez plusieurs questions en un seul message</li>
      </ul>

      <!-- Dépannage -->
      <h2>Résolution de problèmes</h2>
      
      <h3>Problèmes de synchronisation</h3>
      <div class="not-prose space-y-4 my-6">
        <div class="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/30">
          <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Messages non reçus</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Actualisez la page (F5 ou Ctrl+R)</li>
            <li>• Vérifiez votre connexion internet</li>
            <li>• Déconnectez-vous et reconnectez-vous</li>
            <li>• Videz le cache du navigateur</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-2">📱 Notifications manquées</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
            <li>• Autorisez les notifications dans votre navigateur</li>
            <li>• Vérifiez les paramètres de notification</li>
            <li>• Testez avec un message à vous-même</li>
            <li>• Contactez l'administration si persistant</li>
          </ul>
        </div>
      </div>

      <h3>Support et assistance</h3>
      <p>Si vous rencontrez des difficultés persistantes :</p>
      
      <ol>
        <li>Consultez cette documentation complète</li>
        <li>Utilisez la messagerie pour contacter l'administration</li>
        <li>Décrivez précisément le problème rencontré</li>
        <li>Mentionnez votre navigateur et appareil</li>
        <li>Joignez une capture d'écran si possible</li>
      </ol>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mt-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌟 Maîtrisez la communication</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          La messagerie est un outil puissant pour créer une communauté unie et réactive. 
          Utilisez-la avec respect et efficacité pour améliorer la vie de tous les résidents.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <NuxtLink to="/guide/incidents" class="block bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🚨 Gestion des incidents</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Signaler et suivre les problèmes efficacement</p>
          </NuxtLink>
          <NuxtLink to="/guide/administration" class="block bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">⚙️ Administration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Fonctions avancées pour les administrateurs</p>
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl border border-cyan-200 dark:border-cyan-700">
        <p class="text-sm text-cyan-700 dark:text-cyan-300">
          <strong>Messagerie maîtrisée !</strong> Vous savez maintenant utiliser tous les outils de communication de la plateforme.
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
  useHead({ title: 'Guide de la messagerie - Documentation' })

  onMounted(() => {
    initTheme()
  })
</script>


