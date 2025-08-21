<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span class="font-bold text-xl text-gray-900 dark:text-white">Documentation</span>
            </NuxtLink>
          </div>
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/technique/installation" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors">Installation</NuxtLink>
            <NuxtLink to="/technique/api-auth" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors">API</NuxtLink>
            <NuxtLink to="/guide/utilisateurs" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors">Guide</NuxtLink>
            <NuxtLink to="/technique/architecture" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors">Architecture</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="flex">
      <!-- Sidebar Navigation -->
      <aside class="w-64 bg-white dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 min-h-screen sticky top-16">
        <nav class="p-6">
          <div class="space-y-8">
            <!-- Introduction -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Introduction</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/technique/introduction" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/introduction' }">Vue d'ensemble</NuxtLink></li>
                <li><NuxtLink to="/technique/installation" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/installation' }">Installation</NuxtLink></li>
                <li><NuxtLink to="/technique/architecture" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/architecture' }">Architecture</NuxtLink></li>
              </ul>
            </div>

            <!-- Guide d'utilisation -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Guide d'utilisation</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/guide/authentification" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/authentification' }">Authentification</NuxtLink></li>
                <li><NuxtLink to="/guide/utilisateurs" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/utilisateurs' }">Gestion des utilisateurs</NuxtLink></li>
                <li><NuxtLink to="/guide/messagerie" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/messagerie' }">Messagerie</NuxtLink></li>
                <li><NuxtLink to="/guide/planification-visites" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/planification-visites' }">Planification des visites</NuxtLink></li>
                <li><NuxtLink to="/guide/incidents" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/incidents' }">Gestion des incidents</NuxtLink></li>
                <li><NuxtLink to="/guide/administration" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/guide/administration' }">Administration</NuxtLink></li>
              </ul>
            </div>

            <!-- API Reference -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">API Reference</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/technique/api-auth" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-auth' }">Authentification API</NuxtLink></li>
                <li><NuxtLink to="/technique/api-users" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-users' }">API Utilisateurs</NuxtLink></li>
                <li><NuxtLink to="/technique/api-messages" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-messages' }">API Messages</NuxtLink></li>
                <li><NuxtLink to="/technique/api-visites" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-visites' }">API Visites</NuxtLink></li>
                <li><NuxtLink to="/technique/api-incidents" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-incidents' }">API Incidents</NuxtLink></li>
                <li><NuxtLink to="/technique/api-admin" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/api-admin' }">API Administration</NuxtLink></li>
              </ul>
            </div>

            <!-- Développement -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Développement</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/technique/frontend" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/frontend' }">Frontend (Nuxt.js)</NuxtLink></li>
                <li><NuxtLink to="/technique/backend-client" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/backend-client' }">Backend Client</NuxtLink></li>
                <li><NuxtLink to="/technique/backend-nhs" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/backend-nhs' }">Backend NHS</NuxtLink></li>
                <li><NuxtLink to="/technique/base-donnees" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/base-donnees' }">Base de données</NuxtLink></li>
                <li><NuxtLink to="/technique/deployment" class="text-gray-600 dark:text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors text-sm" :class="{ 'text-blue-600 font-medium': $route.path === '/technique/deployment' }">Déploiement</NuxtLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 max-w-none">
        <div class="max-w-4xl mx-auto px-6 py-12">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '../composables/useTheme'

  // Import du système de thème
  const { initTheme } = useTheme()
  // Layout component for documentation pages

  // Initialisation du thème
  onMounted(() => {
    initTheme()
  })
</script>

<style scoped>
  /* Custom scrollbar for sidebar */
  aside {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f8fafc;
  }

  aside::-webkit-scrollbar {
    width: 6px;
  }

  aside::-webkit-scrollbar-track {
    background: #f8fafc;
  }

  aside::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  aside::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
</style>


