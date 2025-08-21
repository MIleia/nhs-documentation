<template>
  <header class="relative z-10 backdrop-blur-xl bg-white dark:bg-slate-900/90 border-b border-gray-200 dark:border-slate-700/50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo et titre -->
  <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl ring-1 ring-inset ring-white/20 group-hover:scale-105 transition-all duration-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ title || 'Documentation' }}
          </span>
          <span v-if="subtitle" class="text-xs text-gray-500 dark:text-slate-400 font-medium -mt-1">
            {{ subtitle }}
          </span>
        </div>
      </NuxtLink>

      <!-- Actions de droite -->
      <div class="flex items-center gap-4">
        <!-- Fil d'Ariane (optionnel) -->
        <nav v-if="breadcrumb" class="hidden md:flex items-center gap-2 text-sm">
          <NuxtLink 
            v-for="(crumb, index) in breadcrumb" 
            :key="index"
            :to="crumb.to" 
            class="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors duration-200"
            :class="{ 'text-gray-900 dark:text-white font-semibold': index === breadcrumb.length - 1 }"
          >
            {{ crumb.label }}
            <svg v-if="index < breadcrumb.length - 1" class="w-4 h-4 inline ml-2 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </nav>

        <!-- Bouton de thème -->
        <div class="hidden sm:flex">
          <ThemeToggle variant="small" :show-text="true" />
        </div>
        
        <!-- Version mobile -->
        <div class="flex sm:hidden">
          <ThemeToggle variant="large" :show-text="false" />
        </div>

        <!-- Indicateur de version -->
        <div class="hidden lg:flex px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-slate-800/80 rounded-full border border-gray-200 dark:border-slate-700/50 backdrop-blur-sm">
          v2.1.0
        </div>

        <!-- Indicateur de statut -->
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
          <div class="w-2 h-2 bg-white dark:bg-gray-800 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '../composables/useTheme'

  // Import du système de thème
  const { initTheme } = useTheme()
  interface BreadcrumbItem {
    label: string
    to: string
  }

  interface Props {
    title?: string
    subtitle?: string
    breadcrumb?: BreadcrumbItem[]
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'Documentation',
    subtitle: undefined,
    breadcrumb: undefined
  })

  // Initialisation du thème
  onMounted(() => {
    initTheme()
  })
</script>

<style scoped>
  /* Styles additionnels si nécessaire */
</style>


