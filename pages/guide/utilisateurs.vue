<template>
  <DocShell type="guide" title="Gestion des utilisateurs" description="Gérer les résidents, rôles et permissions selon votre niveau d'accès">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Gestion des utilisateurs & rôles</h1>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">👥 Système de rôles</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          La plateforme utilise un système de rôles pour adapter les fonctionnalités selon le niveau de responsabilité. 
          Chaque rôle a ses propres permissions et accès aux données.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔐 Administrateur</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Accès complet à toutes les fonctionnalités</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-orange-900 dark:text-orange-200 mb-2">🛡️ Gardien</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Contrôle d'accès et sécurité</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🏠 Résident</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Accès aux services résidents</p>
          </div>
        </div>
      </div>

      <!-- Rôles et permissions -->
      <h2>Rôles et permissions</h2>
      
      <h3>Administrateur (Super utilisateur)</h3>
      <p>L'administrateur a un accès complet à toutes les fonctionnalités de la plateforme :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">Permissions administrateur</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Gestion des utilisateurs</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Créer, modifier des comptes existants</li>
              <li>• Assigner et modifier les rôles</li>
              <li>• Consulter la liste des utilisateurs</li>
              <li>• Modifier les informations personnelles</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Accès aux données</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• Gestion des badges attribués</li>
              <li>• Consultation des incidents</li>
              <li>• Accès à la messagerie globale</li>
              <li>• Vue d'ensemble du tableau de bord</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gardien (Sécurité et contrôle)</h3>
      <p>Le gardien se concentre sur la sécurité et le contrôle d'accès :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">Permissions gardien</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Surveillance</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• Consultation des badges</li>
              <li>• Suivi des incidents signalés</li>
              <li>• Accès aux informations résidents</li>
              <li>• Communication via messagerie</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Gestion des incidents</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• Signalement d'incidents</li>
              <li>• Consultation du statut</li>
              <li>• Communication avec administration</li>
              <li>• Accès au tableau de bord gardien</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Résident (Utilisateur standard)</h3>
      <p>Le résident a accès aux services essentiels :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">Permissions résident</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Services personnels</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• Gestion du profil personnel</li>
              <li>• Messagerie interne</li>
              <li>• Signalement d'incidents</li>
              <li>• Consultation des badges attribués</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Communication</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• Messages avec administration</li>
              <li>• Messages avec autres résidents</li>
              <li>• Suivi des incidents signalés</li>
              <li>• Accès au tableau de bord résident</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Gestion des utilisateurs (Admin) -->
      <h2>Gestion des utilisateurs (Administrateur)</h2>
      
      <h3>Créer un nouvel utilisateur</h3>
      <ol>
        <li>Connectez-vous en tant qu'administrateur</li>
        <li>Accédez au tableau de bord et cliquez sur "Ajouter un utilisateur"</li>
        <li>Sélectionnez les rôles à attribuer (admin, gardien, résident)</li>
        <li>Remplissez les informations obligatoires :
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email (unique)</li>
            <li>Numéro de téléphone</li>
            <li>Mot de passe initial</li>
            <li>Adresse de logement (pour les résidents)</li>
          </ul>
        </li>
        <li>Validez la création</li>
      </ol>

      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-2">💡 Bonnes pratiques</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• L'email doit être unique dans le système</li>
          <li>• Un utilisateur peut avoir plusieurs rôles</li>
          <li>• Le mot de passe peut être modifié ultérieurement</li>
          <li>• Vérifiez les informations avant validation</li>
        </ul>
      </div>

      <h3>Modifier un utilisateur existant</h3>
      <ol>
        <li>Dans la liste des utilisateurs, cliquez sur l'utilisateur à modifier</li>
        <li>Utilisez l'option "Modifier" dans les actions disponibles</li>
        <li>Modifiez les informations nécessaires (nom, prénom, email, téléphone)</li>
        <li>Changez les rôles attribués si besoin</li>
        <li>Modifiez l'adresse de logement pour les résidents</li>
        <li>Sauvegardez les modifications</li>
      </ol>

      <h3>Consulter les badges d'accès</h3>
      <ol>
        <li>Accédez à la section "Badges" depuis le menu admin</li>
        <li>Consultez la liste des badges attribués</li>
        <li>Vérifiez le statut de chaque badge (actif/inactif)</li>
        <li>Consultez les informations d'attribution</li>
      </ol>

      <!-- Gestion de profil (Tous rôles) -->
      <h2>Gestion de profil personnel</h2>
      
      <h3>Mettre à jour ses informations</h3>
      <p>Tous les utilisateurs peuvent gérer certaines informations de leur profil :</p>
      
      <ol>
        <li>Connectez-vous à votre compte</li>
        <li>Accédez aux paramètres de profil</li>
        <li>Modifiez vos informations personnelles accessibles</li>
        <li>Changez votre mot de passe si nécessaire</li>
        <li>Sauvegardez les modifications</li>
      </ol>

      <h3>Changer son mot de passe</h3>
      <ol>
        <li>Accédez aux paramètres de sécurité</li>
        <li>Saisissez votre mot de passe actuel</li>
        <li>Entrez le nouveau mot de passe</li>
        <li>Validez le changement</li>
      </ol>

      <div class="not-prose bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 my-6 border border-amber-200 dark:border-amber-800/30">
        <h4 class="font-bold text-amber-800 dark:text-amber-200 mb-2">🔒 Sécurité du mot de passe</h4>
        <ul class="text-sm text-amber-700 dark:text-amber-300 space-y-1">
          <li>• Minimum 8 caractères</li>
          <li>• Mélange de lettres, chiffres et symboles</li>
          <li>• Évitez les informations personnelles</li>
          <li>• Changez régulièrement votre mot de passe</li>
        </ul>
      </div>

      <!-- Communication et notifications -->
      <h2>Communication entre utilisateurs</h2>
      
      <h3>Annuaire et contacts</h3>
      <p>L'annuaire adapte son contenu selon votre rôle :</p>
      
      <ul>
        <li><strong>Administrateur :</strong> Voit tous les utilisateurs avec détails complets</li>
        <li><strong>Gardien :</strong> Accès aux résidents et autres gardiens</li>
        <li><strong>Résident :</strong> Contacts administration et autres résidents (selon paramètres)</li>
      </ul>

      <h3>Messagerie interne</h3>
      <ol>
        <li>Accédez à la section "Messages"</li>
        <li>Consultez vos conversations existantes</li>
        <li>Créez une nouvelle conversation avec d'autres utilisateurs</li>
        <li>Rédigez et envoyez votre message</li>
        <li>Suivez les réponses dans l'interface de messagerie</li>
      </ol>

      <!-- Cas d'usage pratiques -->
      <h2>Cas d'usage pratiques</h2>
      
      <h3>Scenario 1 : Nouveau résident</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">Étapes pour l'administrateur :</h4>
        <ol class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>1. Créer le compte résident avec email et informations de base</li>
          <li>2. Saisir l'adresse de logement dans le formulaire</li>
          <li>3. Attribuer le rôle "résident"</li>
          <li>4. Définir un mot de passe initial</li>
          <li>5. Communiquer les identifiants au nouveau résident</li>
        </ol>
      </div>

      <h3>Scenario 2 : Changement de rôle</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">Promotion gardien → administrateur :</h4>
        <ol class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>1. Modifier le profil utilisateur existant</li>
          <li>2. Ajouter le rôle "admin" en plus de "gardien"</li>
          <li>3. Sauvegarder les modifications</li>
          <li>4. Notifier l'utilisateur du changement</li>
          <li>5. Vérifier l'accès aux nouvelles fonctionnalités</li>
        </ol>
      </div>

      <h3>Scenario 3 : Gestion des badges</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">Consultation des badges attribués :</h4>
        <ol class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>1. Accéder à la section "Badges" depuis l'administration</li>
          <li>2. Consulter la liste des badges avec leur statut</li>
          <li>3. Vérifier l'attribution à chaque utilisateur</li>
          <li>4. Consulter l'historique si nécessaire</li>
        </ol>
      </div>

      <!-- Dépannage -->
      <h2>Dépannage courant</h2>
      
      <h3>Problèmes de connexion</h3>
      <div class="not-prose space-y-4 my-6">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-2">❌ "Email ou mot de passe incorrect"</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Vérifier l'orthographe de l'email</li>
            <li>• Essayer la réinitialisation de mot de passe</li>
            <li>• Contacter l'administrateur si compte bloqué</li>
          </ul>
        </div>
        <div class="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/30">
          <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ "Accès refusé à cette section"</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Vérifier que votre rôle permet l'accès</li>
            <li>• Demander une mise à jour de permissions si nécessaire</li>
            <li>• Signaler le problème à l'administrateur</li>
          </ul>
        </div>
      </div>

      <h3>Badge non reconnu</h3>
      <ul>
        <li>Vérifier le statut du badge dans l'application (actif/inactif)</li>
        <li>Consulter les informations d'attribution</li>
        <li>Contacter l'administration via la messagerie</li>
        <li>Signaler le problème dans la section incidents si nécessaire</li>
      </ul>

      <!-- Support et assistance -->
      <div class="not-prose bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 mt-12 border border-violet-200/50 dark:border-violet-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🆘 Besoin d'aide ?</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Plusieurs options s'offrent à vous pour obtenir de l'assistance :
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">💬 Support interne</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Utilisez la messagerie pour contacter l'administration</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">� Incidents</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Signalez les problèmes via la section incidents</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200 dark:border-blue-700">
        <p class="text-sm text-blue-700 dark:text-blue-300">
          <strong>Guide utilisateurs :</strong> Pour plus de détails sur chaque fonctionnalité, consultez les guides spécialisés.
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
  useHead({ title: 'Gestion des utilisateurs - Documentation' })

  onMounted(() => {
    initTheme()
  })
</script>


