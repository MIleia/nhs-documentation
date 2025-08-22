<template>
  <DocShell type="guide" title="Guide de la messagerie" description="Système de messagerie par groupes avec fonctionnalités avancées">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>📱 Guide de la messagerie</h1>
      
      <div class="not-prose bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 mb-12 border border-cyan-200/50 dark:border-cyan-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">💬 Messagerie par groupes avancée</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Le système de messagerie NHS organise la communication en groupes thématiques ou géographiques. 
          Chaque utilisateur appartient à plusieurs groupes selon ses rôles et besoins de communication.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">👥 Groupes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Conversations organisées par thème</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">📎 Fichiers</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Partage de documents intégré</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">😊 Réactions</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Emojis de réaction aux messages</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">💬 Réponses</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Réponses en fil de discussion</p>
          </div>
        </div>
      </div>

      <h2>Organisation en groupes de message</h2>
      
      <h3>Types de groupes disponibles</h3>
      <p>Les groupes sont créés automatiquement selon l'organisation de la résidence :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
          <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🏢 Groupes géographiques</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li>• <strong>Résidents Bâtiment A</strong>: Communication entre voisins</li>
            <li>• <strong>Résidents Bâtiment B</strong>: Informations spécifiques au bâtiment</li>
            <li>• <strong>Étage 1</strong>, <strong>Étage 2</strong>: Questions de proximité</li>
            <li>• <strong>Appartements Sud</strong>: Problématiques d'exposition</li>
            <li>• <strong>Résidents avec parking</strong>: Gestion stationnement</li>
          </ul>
        </div>
        
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
          <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Groupes thématiques</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <li>• <strong>Équipe gardiennage</strong>: Coordination des gardiens</li>
            <li>• <strong>Maintenance technique</strong>: Incidents et réparations</li>
            <li>• <strong>Informations générales</strong>: Annonces importantes</li>
            <li>• <strong>Vie sociale</strong>: Événements et activités</li>
            <li>• <strong>Administration</strong>: Questions administratives</li>
          </ul>
        </div>
      </div>

      <h3>Appartenance automatique aux groupes</h3>
      <p>Votre participation aux groupes est déterminée par :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎭 Attribution par rôle</h4>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">👤 Résidents</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• Groupe de leur bâtiment</li>
              <li>• Groupe de leur étage</li>
              <li>• Groupes thématiques choisis</li>
              <li>• Informations générales</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">🛡️ Gardiens</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• Équipe gardiennage</li>
              <li>• Maintenance technique</li>
              <li>• Tous groupes résidents (lecture)</li>
              <li>• Urgences et incidents</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">⚙️ Administration</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• Accès à tous les groupes</li>
              <li>• Groupe administration privé</li>
              <li>• Modération et gestion</li>
              <li>• Statistiques d'usage</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Fonctionnalités avancées</h2>
      
      <h3>Partage de fichiers intégré</h3>
      <p>Chaque message peut inclure des pièces jointes :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">📎 Types de fichiers supportés</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Documents</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <strong>PDF</strong>: Règlements, procédures, factures</li>
              <li>• <strong>Word/Excel</strong>: Documents administratifs</li>
              <li>• <strong>Images</strong>: Photos de problèmes, plans</li>
              <li>• <strong>Maximum 5 fichiers</strong> par message</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Gestion</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <strong>Taille limitée</strong>: 10MB par fichier</li>
              <li>• <strong>Aperçu automatique</strong>: Images et PDF</li>
              <li>• <strong>Téléchargement direct</strong>: Un clic</li>
              <li>• <strong>Historique accessible</strong>: Recherche dans fichiers</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Système de réactions aux messages</h3>
      <p>Réagissez rapidement aux messages avec des emojis :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/30">
          <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">😊 Emojis populaires</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>• <strong>👍 Pouce levé</strong>: Approbation, accord</li>
            <li>• <strong>❤️ Cœur</strong>: Appréciation, remerciement</li>
            <li>• <strong>😮 Surprise</strong>: Étonnement, information importante</li>
            <li>• <strong>🔥 Flamme</strong>: Urgence, priorité</li>
            <li>• <strong>✅ Check</strong>: Confirmation, validation</li>
          </ul>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">📊 Compteurs et visibilité</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>Compteur par emoji</strong>: Nombre de réactions</li>
            <li>• <strong>Liste des utilisateurs</strong>: Qui a réagi</li>
            <li>• <strong>Réaction multiple</strong>: Plusieurs emojis possibles</li>
            <li>• <strong>Retrait facile</strong>: Re-clic pour annuler</li>
          </ul>
        </div>
      </div>

      <h3>Messages en réponse (threads)</h3>
      <p>Organisez les discussions avec des réponses en fil :</p>
      
      <ol>
        <li><strong>Répondre à un message :</strong> Clic sur "Répondre" sous le message</li>
        <li><strong>Fil de discussion :</strong> Les réponses s'organisent en arbre</li>
        <li><strong>Context visuel :</strong> Message original toujours visible</li>
        <li><strong>Notifications ciblées :</strong> Seuls les participants du fil alertés</li>
      </ol>

      <h2>Utilisation quotidienne</h2>
      
      <h3>Interface de navigation</h3>
      <p>La messagerie s'organise en trois panneaux principaux :</p>
      
      <div class="not-prose bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-4">🖥️ Organisation de l'écran</h4>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-slate-900 dark:text-slate-200 mb-2">📋 Liste des groupes</h5>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Vos groupes avec badges de non-lus</li>
              <li>• Recherche rapide par nom</li>
              <li>• Tri par activité récente</li>
              <li>• Statut en ligne des membres</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-slate-900 dark:text-slate-200 mb-2">💬 Conversation active</h5>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Messages chronologiques</li>
              <li>• Réactions et réponses visibles</li>
              <li>• Indicateur "en train d'écrire"</li>
              <li>• Zone de saisie avec options</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-slate-900 dark:text-slate-200 mb-2">👥 Détails du groupe</h5>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• Liste des membres connectés</li>
              <li>• Fichiers partagés récents</li>
              <li>• Paramètres de notification</li>
              <li>• Historique de recherche</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Notifications intelligentes</h3>
      <p>Le système adapte les notifications selon vos préférences :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🔔 Notifications push</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-2">
            <li>• <strong>Messages directs</strong>: Toujours notifiés</li>
            <li>• <strong>Mentions @nom</strong>: Notification immédiate</li>
            <li>• <strong>Groupes prioritaires</strong>: Selon vos paramètres</li>
            <li>• <strong>Mode silencieux</strong>: Temporaire ou permanent</li>
          </ul>
        </div>
        
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">📱 Badges et compteurs</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>Badge rouge</strong>: Nombre de messages non lus</li>
            <li>• <strong>Point vert</strong>: Nouveau message dans groupe</li>
            <li>• <strong>Surbrillance</strong>: Groupes avec mentions</li>
            <li>• <strong>Résumé quotidien</strong>: Email optionnel</li>
          </ul>
        </div>
      </div>

      <h3>Recherche et historique</h3>
      <p>Retrouvez facilement vos échanges passés :</p>
      
      <ul>
        <li><strong>Recherche globale :</strong> Dans tous vos groupes simultanément</li>
        <li><strong>Recherche par groupe :</strong> Limitée à une conversation</li>
        <li><strong>Filtres avancés :</strong> Par auteur, date, type de fichier</li>
        <li><strong>Mots-clés :</strong> Recherche dans le contenu des messages</li>
        <li><strong>Historique complet :</strong> Conservation illimitée</li>
      </ul>

      <h2>Bonnes pratiques</h2>
      
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-8 border border-emerald-200 dark:border-emerald-800/30">
        <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-200 mb-4">✨ Conseils d'utilisation</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Communication efficace</h4>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• <strong>Choisir le bon groupe</strong>: Message au public approprié</li>
              <li>• <strong>Sujets clairs</strong>: Titre explicite dans le message</li>
              <li>• <strong>Réponses en fil</strong>: Organiser les discussions</li>
              <li>• <strong>Pièces jointes pertinentes</strong>: Documents utiles seulement</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Respect et courtoisie</h4>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• <strong>Ton respectueux</strong>: Communication bienveillante</li>
              <li>• <strong>Pas de spam</strong>: Messages utiles uniquement</li>
              <li>• <strong>Urgences vraies</strong>: Réserver les alertes au nécessaire</li>
              <li>• <strong>Confidentialité</strong>: Informations personnelles protégées</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl border border-cyan-200 dark:border-cyan-700">
        <p class="text-sm text-cyan-700 dark:text-cyan-300">
          <strong>Messagerie maîtrisée !</strong> Vous savez maintenant utiliser efficacement le système de communication NHS.
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


