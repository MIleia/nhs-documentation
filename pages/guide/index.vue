<template>
  <DocShell type="guide" title="Guide d'utilisation" description="Utilisation fonctionnelle de la plateforme">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Guide d'utilisation</h1>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Vue d'ensemble</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
          Bienvenue dans le guide d'utilisation de la plateforme de gestion de résidence. 
          Ce guide se concentre sur les cas d'usage fonctionnels et la prise en main quotidienne 
          avec des explications détaillées et des exemples pratiques.
        </p>
      </div>

      <h2>Navigation rapide</h2>

      <div class="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <NuxtLink to="/guide/onboarding" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Premier pas</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Découverte de l'interface et premières actions essentielles</p>
          <div class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
            Commencer →
          </div>
        </NuxtLink>

        <NuxtLink to="/guide/utilisateurs" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Utilisateurs</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Gestion des comptes, rôles et permissions dans le système</p>
          <div class="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            Gérer →
          </div>
        </NuxtLink>

        <NuxtLink to="/guide/messagerie" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.667-.4c-.654-.31-1.2-.692-1.6-1.116L3 21l2.516-5.733c-.424-.4-.806-.946-1.116-1.6A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Messagerie</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Communication interne et système de notifications intelligent</p>
          <div class="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            Communiquer →
          </div>
        </NuxtLink>

        <NuxtLink to="/guide/visites" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Visites</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Planification et organisation des interventions terrain</p>
          <div class="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
            Planifier →
          </div>
        </NuxtLink>

        <NuxtLink to="/guide/incidents" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Incidents</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Signalement, suivi et résolution des problèmes</p>
          <div class="flex items-center text-red-600 dark:text-red-400 text-sm font-medium">
            Gérer →
          </div>
        </NuxtLink>

        <NuxtLink to="/guide/administration" class="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Administration</h3>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Configuration système et gestion avancée</p>
          <div class="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium">
            Configurer →
          </div>
        </NuxtLink>
      </div>

      <!-- Quick Start Guide -->
      <h2>🚀 Guide de démarrage rapide</h2>
      
      <div class="not-prose bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 my-8 border border-green-200/50 dark:border-green-800/30">
        <h3 class="text-xl font-bold text-green-900 dark:text-green-200 mb-6">Premiers pas en 5 minutes</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 class="font-semibold text-green-800 dark:text-green-300">Connexion</h4>
                <p class="text-sm text-green-700 dark:text-green-400">Accédez avec vos identifiants : admin@residence.com / 1234</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 class="font-semibold text-green-800 dark:text-green-300">Navigation</h4>
                <p class="text-sm text-green-700 dark:text-green-400">Explorez le tableau de bord et les menus principaux</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 class="font-semibold text-green-800 dark:text-green-300">Personnalisation</h4>
                <p class="text-sm text-green-700 dark:text-green-400">Configurez le thème et les paramètres de base</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 class="font-semibold text-green-800 dark:text-green-300">Utilisateurs</h4>
                <p class="text-sm text-green-700 dark:text-green-400">Ajoutez vos premiers résidents et gardiens</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <div>
                <h4 class="font-semibold text-green-800 dark:text-green-300">Test</h4>
                <p class="text-sm text-green-700 dark:text-green-400">Envoyez votre premier message et créez un incident test</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Functional Guides -->
      <h2>📖 Guides fonctionnels détaillés</h2>

      <h3>👤 Gestion des utilisateurs</h3>
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-900 dark:text-blue-200 mb-4">Créer un nouvel utilisateur</h4>
        <ol class="space-y-3 text-sm text-blue-800 dark:text-blue-300">
          <li><strong>1.</strong> Accédez à "Administration" → "Gestion des résidents"</li>
          <li><strong>2.</strong> Cliquez sur "Ajouter un résident" (bouton + en haut à droite)</li>
          <li><strong>3.</strong> Remplissez les informations obligatoires :
            <ul class="ml-4 mt-2 space-y-1">
              <li>• Email (unique dans le système)</li>
              <li>• Nom et prénom</li>
              <li>• Numéro de téléphone</li>
              <li>• Adresse du logement</li>
              <li>• Mot de passe temporaire</li>
            </ul>
          </li>
          <li><strong>4.</strong> Sélectionnez le rôle approprié (Résident, Gardien, Admin)</li>
          <li><strong>5.</strong> Validez avec "Créer le compte"</li>
        </ol>
        <div class="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <p class="text-xs text-blue-700 dark:text-blue-400"><strong>💡 Astuce :</strong> L'utilisateur recevra un email avec ses identifiants de connexion</p>
        </div>
      </div>

      <h4>Modifier un utilisateur existant</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <ol class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>1.</strong> Dans la liste des résidents, cliquez sur l'icône "éditer" (crayon)</li>
          <li><strong>2.</strong> Modifiez les informations nécessaires</li>
          <li><strong>3.</strong> Pour changer le mot de passe : cochez "Réinitialiser le mot de passe"</li>
          <li><strong>4.</strong> Sauvegardez avec "Mettre à jour"</li>
        </ol>
      </div>

      <h3>🎫 Gestion des badges</h3>
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-900 dark:text-purple-200 mb-4">Attribuer un badge</h4>
        <ol class="space-y-3 text-sm text-purple-800 dark:text-purple-300">
          <li><strong>1.</strong> Accédez à "Administration" → "Gestion des badges"</li>
          <li><strong>2.</strong> Recherchez un badge libre (statut "en_attente" ou "nouveau")</li>
          <li><strong>3.</strong> Cliquez sur "Attribuer" pour ce badge</li>
          <li><strong>4.</strong> Sélectionnez l'utilisateur destinataire</li>
          <li><strong>5.</strong> Définissez les droits d'accès :
            <ul class="ml-4 mt-2 space-y-1">
              <li>• Accès total (admins)</li>
              <li>• Accès bâtiment A/B/C (résidents)</li>
              <li>• Accès maintenance (gardiens)</li>
              <li>• Accès limité (invités)</li>
            </ul>
          </li>
          <li><strong>6.</strong> Le badge devient automatiquement "actif"</li>
        </ol>
      </div>

      <h4>Gérer les statuts de badges</h4>
      <div class="not-prose space-y-4 my-6">
        <div class="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800/30">
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <div class="flex-1">
            <strong class="text-green-700 dark:text-green-300">Actif :</strong>
            <span class="text-sm text-green-600 dark:text-green-400">Badge fonctionnel et autorisé</span>
          </div>
        </div>
        <div class="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800/30">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="flex-1">
            <strong class="text-red-700 dark:text-red-300">Suspendu :</strong>
            <span class="text-sm text-red-600 dark:text-red-400">Badge temporairement désactivé</span>
          </div>
        </div>
        <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="flex-1">
            <strong class="text-gray-700 dark:text-gray-300">Inactif :</strong>
            <span class="text-sm text-gray-600 dark:text-gray-400">Badge définitivement désactivé</span>
          </div>
        </div>
      </div>

      <h3>💬 Système de messagerie</h3>
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-900 dark:text-indigo-200 mb-4">Créer une nouvelle conversation</h4>
        <ol class="space-y-3 text-sm text-indigo-800 dark:text-indigo-300">
          <li><strong>1.</strong> Cliquez sur "Messages" dans le menu principal</li>
          <li><strong>2.</strong> Sélectionnez "Nouvelle conversation" (icône +)</li>
          <li><strong>3.</strong> Choisissez les participants :
            <ul class="ml-4 mt-2 space-y-1">
              <li>• Tapez le nom pour rechercher</li>
              <li>• Sélectionnez plusieurs utilisateurs si nécessaire</li>
              <li>• Donnez un nom au groupe (optionnel)</li>
            </ul>
          </li>
          <li><strong>4.</strong> Rédigez votre premier message</li>
          <li><strong>5.</strong> Joignez des fichiers si besoin (images, PDF, documents)</li>
          <li><strong>6.</strong> Envoyez avec "Entrée" ou le bouton d'envoi</li>
        </ol>
      </div>

      <h4>Fonctionnalités avancées de messagerie</h4>
      <div class="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div class="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-slate-900 dark:text-white mb-3">✨ Réactions</h5>
          <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>• Cliquez sur un message</li>
            <li>• Sélectionnez un emoji</li>
            <li>• Voyez qui a réagi</li>
          </ul>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h5 class="font-bold text-slate-900 dark:text-white mb-3">↩️ Citations</h5>
          <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>• Maintenez un message</li>
            <li>• Sélectionnez "Répondre"</li>
            <li>• Rédigez votre réponse</li>
          </ul>
        </div>
      </div>

      <h3>🚨 Gestion des incidents</h3>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-900 dark:text-red-200 mb-4">Signaler un incident</h4>
        <ol class="space-y-3 text-sm text-red-800 dark:text-red-300">
          <li><strong>1.</strong> Accédez à "Incidents" depuis le menu</li>
          <li><strong>2.</strong> Cliquez sur "Nouveau signalement"</li>
          <li><strong>3.</strong> Décrivez l'incident :
            <ul class="ml-4 mt-2 space-y-1">
              <li>• Description claire et détaillée</li>
              <li>• Localisation précise</li>
              <li>• Niveau d'urgence</li>
              <li>• Date et heure d'observation</li>
            </ul>
          </li>
          <li><strong>4.</strong> Ajoutez des photos si nécessaire</li>
          <li><strong>5.</strong> Soumettez le signalement</li>
        </ol>
        <div class="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
          <p class="text-xs text-red-700 dark:text-red-400"><strong>⚠️ Important :</strong> Les incidents critiques (sécurité, urgence) sont automatiquement signalés aux gardiens</p>
        </div>
      </div>

      <h4>Suivi des incidents</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30">
          <strong class="text-yellow-700 dark:text-yellow-300">À venir :</strong>
          <span class="text-sm text-yellow-600 dark:text-yellow-400">Incident programmé mais pas encore traité</span>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <strong class="text-orange-700 dark:text-orange-300">En cours :</strong>
          <span class="text-sm text-orange-600 dark:text-orange-400">Intervention en cours de traitement</span>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">Résolu :</strong>
          <span class="text-sm text-green-600 dark:text-green-400">Problème corrigé et validé</span>
        </div>
      </div>

      <h3>⚙️ Personnalisation et administration</h3>
      <div class="not-prose bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 my-6 border border-slate-200 dark:border-slate-700">
        <h4 class="font-bold text-slate-900 dark:text-white mb-4">Paramètres d'application</h4>
        <ol class="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>1.</strong> Accédez à "Administration" → "Paramètres"</li>
          <li><strong>2.</strong> Configurez l'identité visuelle :
            <ul class="ml-4 mt-2 space-y-1">
              <li>• Nom de l'application</li>
              <li>• Logo personnalisé (format PNG/JPG)</li>
              <li>• Couleurs principales et secondaires</li>
              <li>• Nom de votre société</li>
            </ul>
          </li>
          <li><strong>3.</strong> Personnalisez les messages d'accueil</li>
          <li><strong>4.</strong> Sauvegardez les modifications</li>
        </ol>
      </div>

      <h4>Gestion des rôles et permissions</h4>
      <div class="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800/30">
          <h5 class="font-bold text-purple-900 dark:text-purple-200 mb-3">👑 Super Admin</h5>
          <ul class="text-xs text-purple-700 dark:text-purple-400 space-y-1">
            <li>• Accès complet système</li>
            <li>• Gestion utilisateurs</li>
            <li>• Configuration globale</li>
            <li>• Logs et statistiques</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
          <h5 class="font-bold text-blue-900 dark:text-blue-200 mb-3">🔧 Gardien</h5>
          <ul class="text-xs text-blue-700 dark:text-blue-400 space-y-1">
            <li>• Gestion incidents</li>
            <li>• Messagerie résidents</li>
            <li>• Planification visites</li>
            <li>• Rapports activité</li>
          </ul>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
          <h5 class="font-bold text-green-900 dark:text-green-200 mb-3">🏠 Résident</h5>
          <ul class="text-xs text-green-700 dark:text-green-400 space-y-1">
            <li>• Signalement incidents</li>
            <li>• Messagerie interne</li>
            <li>• Gestion profil</li>
            <li>• Consultations badges</li>
          </ul>
        </div>
      </div>

      <!-- Best Practices -->
      <h2>✨ Bonnes pratiques</h2>
      
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 my-8 border border-emerald-200/50 dark:border-emerald-800/30">
        <h3 class="text-xl font-bold text-emerald-900 dark:text-emerald-200 mb-6">🎯 Recommandations d'usage</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Sécurité</h4>
            <ul class="text-sm text-emerald-700 dark:text-emerald-400 space-y-2">
              <li>• Changez les mots de passe par défaut</li>
              <li>• Utilisez des mots de passe forts</li>
              <li>• Déconnectez-vous après usage</li>
              <li>• Suspendez les badges perdus immédiatement</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Communication</h4>
            <ul class="text-sm text-emerald-700 dark:text-emerald-400 space-y-2">
              <li>• Soyez précis dans vos messages</li>
              <li>• Utilisez les groupes appropriés</li>
              <li>• Joignez des photos pour les incidents</li>
              <li>• Répondez rapidement aux urgences</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Troubleshooting -->
      <h2>🔍 Dépannage utilisateur</h2>
      
      <h3>Problèmes de connexion</h3>
      <div class="not-prose space-y-4 my-6">
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">❌ "Email ou mot de passe incorrect"</h4>
          <ul class="text-sm text-red-700 dark:text-red-400 space-y-1">
            <li>• Vérifiez que Caps Lock n'est pas activé</li>
            <li>• Contactez un administrateur pour réinitialiser</li>
            <li>• Essayez avec un autre navigateur</li>
          </ul>
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800/30">
          <h4 class="font-bold text-orange-800 dark:text-orange-300 mb-2">⚠️ Page qui ne charge pas</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-400 space-y-1">
            <li>• Actualisez la page (F5)</li>
            <li>• Videz le cache du navigateur</li>
            <li>• Vérifiez votre connexion internet</li>
          </ul>
        </div>
      </div>

      <h3>Problèmes de fonctionnalités</h3>
      <div class="not-prose space-y-4 my-6">
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 mb-2">📱 Messages qui n'arrivent pas</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <li>• Vérifiez la sélection des destinataires</li>
            <li>• Assurez-vous d'être dans le bon groupe</li>
            <li>• Rechargez la conversation</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-300 mb-2">📄 Upload de fichier impossible</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-400 space-y-1">
            <li>• Vérifiez la taille du fichier (max 10MB)</li>
            <li>• Formats acceptés : images, PDF, documents</li>
            <li>• Réessayez après quelques secondes</li>
          </ul>
        </div>
      </div>

      <!-- Support -->
      <h2>📞 Obtenir de l'aide</h2>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 my-8 border border-blue-200/50 dark:border-blue-800/30">
        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-200 mb-6">Support utilisateur</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-3">🏠 Support interne</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-2">
              <li>• Contactez votre administrateur de résidence</li>
              <li>• Utilisez la messagerie interne</li>
              <li>• Consultez cette documentation</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-3">🛠️ Support technique</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-2">
              <li>• Email : support@neostart.tech</li>
              <li>• Disponible en semaine 9h-17h</li>
              <li>• Décrivez précisément le problème</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200 dark:border-blue-700">
        <p class="text-sm text-blue-700 dark:text-blue-300">
          <strong>Version du guide :</strong> 2.1.0 • 
          <strong>Dernière mise à jour :</strong> Août 2025 •
          <strong>Niveau :</strong> Utilisateur final
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
  useHead({ title: 'Guide d\'utilisation - Documentation' })

  // Initialisation du thème
  onMounted(() => {
    initTheme()
  })
</script>


