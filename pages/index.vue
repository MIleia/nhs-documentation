<template>
  <!-- Hub pour choisir le type de documentation -->
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-slate-900 dark:to-slate-800/50">
    <!-- Advanced geometric background with neostart.tech inspiration -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <!-- Primary gradient orbs -->
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/25 via-indigo-500/20 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/3 -right-48 w-[32rem] h-[32rem] bg-gradient-to-bl from-purple-400/20 via-pink-400/15 to-blue-400/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-400/15 via-teal-400/12 to-cyan-400/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
      
      <!-- Refined grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <!-- Floating elements inspired by neostart -->
      <div class="absolute top-20 right-20 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-20 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping" style="animation-delay: 3s;"></div>
      <div class="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-ping" style="animation-delay: 5s;"></div>
    </div>

    <header class="relative z-10 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-b border-gray-200/50 dark:border-slate-700/50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl ring-1 ring-inset ring-white/20 group-hover:scale-105 transition-all duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          <span class="font-bold text-lg text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Documentation</span>
        </NuxtLink>
        <div class="hidden sm:flex items-center gap-4">
          <!-- Sélecteur de langue -->
          <LanguageSelector />
          <!-- Bouton de basculement de thème -->
          <ThemeToggle variant="small" :show-text="true" />
          <div class="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-gray-100/80 dark:bg-slate-800/80 rounded-full border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm">v2.1.0</div>
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <!-- Version mobile du bouton thème -->
        <div class="flex sm:hidden items-center gap-3">
          <LanguageSelector />
          <ThemeToggle variant="large" :show-text="false" />
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>

    <main class="relative z-10">
      <div class="max-w-5xl mx-auto px-6 py-20">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <div class="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/50 dark:via-indigo-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-8 border border-blue-200/60 dark:border-blue-800/60 shadow-lg backdrop-blur-sm">
            <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            {{ t('home.badge') }}
            <div class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.05]">
            {{ t('home.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            {{ t('home.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Guide d'utilisation -->
          <NuxtLink to="/guide" class="group relative block rounded-3xl p-1.5 bg-gradient-to-br from-blue-500/50 via-indigo-500/40 to-transparent hover:from-blue-500/70 hover:via-indigo-500/60 hover:to-purple-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/25">
            <div class="relative rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-10 h-full flex flex-col shadow-2xl ring-1 ring-gray-200/50 dark:ring-slate-700/50 group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <!-- Subtle background pattern -->
              <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style="background-image: radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0); background-size: 16px 16px;"></div>
              
              <div class="relative flex items-start gap-6 mb-8">
                <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"/>
                  </svg>
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div class="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('home.guide.title') }}</h2>
                  <p class="text-sm font-semibold text-blue-600/90 dark:text-blue-400/90 uppercase tracking-wider">{{ t('home.guide.subtitle') }}</p>
                </div>
              </div>
              <p class="relative text-gray-600 dark:text-slate-300 leading-relaxed flex-1 text-base mb-8">
                {{ t('home.guide.description') }}
              </p>
              <div class="relative space-y-3 mb-10">
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"></div>
                  <span>Onboarding & configuration initiale</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"></div>
                  <span>Gestion des utilisateurs & système de droits</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm"></div>
                  <span>Messagerie, planification & gestion d'incidents</span>
                </div>
              </div>
              <div class="relative flex items-center gap-3 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-500">
                <span>{{ t('home.guide.action') }}</span>
                <svg class="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Référence technique -->
          <NuxtLink to="/technique" class="group relative block rounded-3xl p-1.5 bg-gradient-to-br from-purple-500/50 via-indigo-500/40 to-transparent hover:from-purple-500/70 hover:via-indigo-500/60 hover:to-blue-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/25">
            <div class="relative rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-10 h-full flex flex-col shadow-2xl ring-1 ring-gray-200/50 dark:ring-slate-700/50 group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <!-- Subtle background pattern -->
              <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style="background-image: radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0); background-size: 16px 16px;"></div>
              
              <div class="relative flex items-start gap-6 mb-8">
                <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div class="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ t('home.technique.title') }}</h2>
                  <p class="text-sm font-semibold text-purple-600/90 dark:text-purple-400/90 uppercase tracking-wider">{{ t('home.technique.subtitle') }}</p>
                </div>
              </div>
              <p class="relative text-gray-600 dark:text-slate-300 leading-relaxed flex-1 text-base mb-8">
                {{ t('home.technique.description') }}
              </p>
              <div class="relative space-y-3 mb-10">
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-sm"></div>
                  <span>Architecture & diagrammes de flux</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-sm"></div>
                  <span>Endpoints API & authentification</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-400">
                  <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-sm"></div>
                  <span>Base de données, migrations & runbooks</span>
                </div>
              </div>
              <div class="relative flex items-center gap-3 text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-500">
                <span>{{ t('home.technique.action') }}</span>
                <svg class="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Changelog moderne avec design neostart.tech -->
        <div class="mt-32 max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-6 border border-emerald-200/60 dark:border-emerald-800/60">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              {{ t('home.changelog.badge') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ t('home.changelog.title') }}</h2>
            <p class="text-gray-600 dark:text-slate-300 text-lg">{{ t('home.changelog.subtitle') }}</p>
          </div>
          <div class="grid sm:grid-cols-2 gap-8">
            <div class="group relative rounded-3xl border border-gray-200/70 dark:border-slate-700/70 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <!-- Background pattern -->
              <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%); background-size: 8px 8px; background-position: 0 0, 4px 4px;"></div>
              
              <div class="relative flex items-center justify-between mb-6">
                <span class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white shadow-lg">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  v2.1.0
                </span>
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ t('home.changelog.v21.date') }}
                </div>
              </div>
              <h3 class="relative text-xl font-bold text-gray-800 dark:text-white mb-4">{{ t('home.changelog.v21.title') }}</h3>
              <p class="relative text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                {{ t('home.changelog.v21.description') }}
              </p>
              <div class="relative flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ t('home.changelog.v21.feature') }}
              </div>
            </div>
            
            <div class="group relative rounded-3xl border border-gray-200/70 dark:border-slate-700/70 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-800/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <!-- Background pattern -->
              <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #8b5cf6 25%, transparent 25%), linear-gradient(-45deg, #8b5cf6 25%, transparent 25%); background-size: 8px 8px; background-position: 0 0, 4px 4px;"></div>
              
              <div class="relative flex items-center justify-between mb-6">
                <span class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-white shadow-lg">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                  </svg>
                  v2.0.0
                </span>
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ t('home.changelog.v20.date') }}
                </div>
              </div>
              <h3 class="relative text-xl font-bold text-gray-800 dark:text-white mb-4">{{ t('home.changelog.v20.title') }}</h3>
              <p class="relative text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                {{ t('home.changelog.v20.description') }}
              </p>
              <div class="relative flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                {{ t('home.changelog.v20.feature') }}
              </div>
            </div>
          </div>
          
          <!-- Call to action amélioré -->
          <div class="mt-20 text-center">
            <div class="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-3xl border border-gray-200/80 dark:border-slate-600/80 shadow-xl backdrop-blur-sm">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="font-bold text-gray-900 dark:text-white text-lg">{{ t('home.changelog.cta.ready') }}</p>
                <p class="text-sm text-gray-600 dark:text-slate-300">{{ t('home.changelog.cta.subtitle') }}</p>
              </div>
              <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Section support raffinée avec style neostart.tech -->
        <div class="mt-32 max-w-6xl mx-auto">
          <div class="relative rounded-4xl bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/70 dark:to-slate-800/50 border border-gray-200/60 dark:border-slate-700/60 shadow-2xl p-12 md:p-16 overflow-hidden">
            <!-- Background sophisticated pattern -->
            <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]">
              <div class="absolute top-0 left-0 w-full h-full" style="background-image: linear-gradient(60deg, #3b82f6 25%, transparent 25%), linear-gradient(120deg, #3b82f6 25%, transparent 25%); background-size: 32px 32px; background-position: 0 0, 16px 16px;"></div>
            </div>
            
            <!-- Floating elements for depth -->
            <div class="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
            
            <div class="relative text-center">
              <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold mb-8 border border-blue-200/60 dark:border-blue-800/60 shadow-lg">
                <div class="relative">
                  <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div class="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                </div>
                {{ t('home.support.badge') }}
              </div>
              
              <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {{ t('home.support.title') }}
              </h2>
              <p class="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                {{ t('home.support.subtitle') }}
              </p>
              
              <!-- Support options grid améliorée -->
              <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                <div class="group relative rounded-3xl bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 dark:from-slate-800 dark:via-slate-700/50 dark:to-slate-700/30 border border-gray-200/70 dark:border-slate-600/70 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] overflow-hidden">
                  <!-- Background pattern -->
                  <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #10b981 25%, transparent 25%), linear-gradient(-45deg, #10b981 25%, transparent 25%); background-size: 6px 6px; background-position: 0 0, 3px 3px;"></div>
                  
                  <div class="relative">
                    <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center shadow-xl transform group-hover:rotate-3 transition-transform duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Chat en temps réel</h3>
                    <p class="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      Support instantané via notre plateforme de chat intégrée pour des réponses rapides à vos questions
                    </p>
                    <div class="inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold">
                      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Disponible 24/7
                    </div>
                  </div>
                </div>
                
                <div class="group relative rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-slate-800 dark:via-slate-700/50 dark:to-slate-700/30 border border-gray-200/70 dark:border-slate-600/70 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] overflow-hidden">
                  <!-- Background pattern -->
                  <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%); background-size: 6px 6px; background-position: 0 0, 3px 3px;"></div>
                  
                  <div class="relative">
                    <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center shadow-xl transform group-hover:rotate-3 transition-transform duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Support par email</h3>
                    <p class="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      Assistance détaillée par email avec documentation complète et guides personnalisés
                    </p>
                    <div class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Réponse sous 24h
                    </div>
                  </div>
                </div>
                
                <div class="group relative rounded-3xl bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-slate-800 dark:via-slate-700/50 dark:to-slate-700/30 border border-gray-200/70 dark:border-slate-600/70 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] overflow-hidden">
                  <!-- Background pattern -->
                  <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #8b5cf6 25%, transparent 25%), linear-gradient(-45deg, #8b5cf6 25%, transparent 25%); background-size: 6px 6px; background-position: 0 0, 3px 3px;"></div>
                  
                  <div class="relative">
                    <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-xl transform group-hover:rotate-3 transition-transform duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Sessions de formation</h3>
                    <p class="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      Formations personnalisées en visioconférence pour maîtriser toutes les fonctionnalités avancées
                    </p>
                    <div class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      Sur rendez-vous
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- CTA contact premium -->
              <div class="relative">
                <a href="mailto:support@neostart.tech" class="group inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white text-lg font-bold rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </div>
                  <div class="text-left">
                    <div class="font-black text-xl">Contactez notre équipe</div>
                    <div class="text-blue-100 text-sm font-medium">support@neostart.tech</div>
                  </div>
                  <svg class="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Footer de page -->
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

// Fonction de traduction simple basée sur l'URL
const route = useRoute()

const getCurrentLocale = () => {
  const path = route.path
  if (path.startsWith('/en')) return 'en'
  if (path.startsWith('/zh')) return 'zh'
  return 'fr'
}

const t = (key: string) => {
  const locale = getCurrentLocale()
  const translations = {
    fr: {
      'home.badge': 'Plateforme moderne et évolutive',
      'home.title': 'Choisissez votre espace de documentation',
      'home.subtitle': 'Deux parcours complémentaires conçus pour optimiser votre expérience. Un guide fonctionnel pour les utilisateurs finaux et une référence technique détaillant architecture, API et processus de maintenance.',
      'home.guide.title': 'Guide d\'utilisation',
      'home.guide.subtitle': 'Pour les utilisateurs et administrateurs fonctionnels',
      'home.guide.description': 'Parcours guidé avec cas d\'usage concrets, captures d\'écran annotées, bonnes pratiques quotidiennes et résolution rapide des problèmes courants. Une approche progressive pour maîtriser toutes les fonctionnalités.',
      'home.guide.action': 'Accéder au guide',
      'home.technique.title': 'Référence technique',
      'home.technique.subtitle': 'Pour développeurs & équipes de maintenance',
      'home.technique.description': 'Vision système complète avec architecture dual backend, documentation API exhaustive, modèles de données, sécurité, déploiement et procédures opérationnelles de support technique.',
      'home.technique.action': 'Accéder à la référence',
      'home.changelog.badge': 'Mises à jour récentes',
      'home.changelog.title': 'Évolution de la plateforme',
      'home.changelog.subtitle': 'Suivi des dernières améliorations et fonctionnalités',
      'home.changelog.v21.title': 'Personnalisation complète',
      'home.changelog.v21.description': 'Système de personnalisation avancé permettant la modification des logos, couleurs principales et textes personnalisés directement depuis l\'interface d\'administration.',
      'home.changelog.v21.feature': 'Fonctionnalité majeure',
      'home.changelog.v21.date': '12 Août 2025',
      'home.changelog.v20.title': 'Architecture révolutionnaire',
      'home.changelog.v20.description': 'Refactorisation complète vers une architecture dual backend. Séparation claire entre proxy d\'orchestration et logique métier pour une performance et maintenabilité optimales.',
      'home.changelog.v20.feature': 'Refonte architecturale',
      'home.changelog.v20.date': '10 Août 2025',
      'home.changelog.cta.ready': 'Prêt à démarrer ?',
      'home.changelog.cta.subtitle': 'Explorez nos guides détaillés et commencez dès maintenant',
      'home.support.title': 'Besoin d\'aide ou d\'accompagnement ?',
      'home.support.subtitle': 'Notre équipe d\'experts est à votre disposition pour vous accompagner dans votre montée en compétences et résoudre tous vos défis techniques.',
      'home.support.badge': 'Support & Assistance',
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': 'Tous droits réservés.'
    },
    en: {
      'home.badge': 'Modern and scalable platform',
      'home.title': 'Choose your documentation space',
      'home.subtitle': 'Two complementary paths designed to optimize your experience. A functional guide for end users and a technical reference detailing architecture, API, and maintenance processes.',
      'home.guide.title': 'User Guide',
      'home.guide.subtitle': 'For users and functional administrators',
      'home.guide.description': 'Guided journey with concrete use cases, annotated screenshots, daily best practices, and quick resolution of common issues. A progressive approach to master all features.',
      'home.guide.action': 'Access guide',
      'home.technique.title': 'Technical Reference',
      'home.technique.subtitle': 'For developers & maintenance teams',
      'home.technique.description': 'Complete system overview with dual backend architecture, comprehensive API documentation, data models, security, deployment, and technical support operational procedures.',
      'home.technique.action': 'Access reference',
      'home.changelog.badge': 'Recent updates',
      'home.changelog.title': 'Platform Evolution',
      'home.changelog.subtitle': 'Track latest improvements and features',
      'home.changelog.v21.title': 'Complete Customization',
      'home.changelog.v21.description': 'Advanced customization system allowing modification of logos, main colors, and custom texts directly from the administration interface.',
      'home.changelog.v21.feature': 'Major feature',
      'home.changelog.v21.date': 'August 12, 2025',
      'home.changelog.v20.title': 'Revolutionary Architecture',
      'home.changelog.v20.description': 'Complete refactoring to a dual backend architecture. Clear separation between orchestration proxy and business logic for optimal performance and maintainability.',
      'home.changelog.v20.feature': 'Architectural overhaul',
      'home.changelog.v20.date': 'August 10, 2025',
      'home.changelog.cta.ready': 'Ready to get started?',
      'home.changelog.cta.subtitle': 'Explore our detailed guides and start now',
      'home.support.title': 'Need help or support?',
      'home.support.subtitle': 'Our team of experts is at your disposal to accompany you in your skill development and solve all your technical challenges.',
      'home.support.badge': 'Support & Assistance',
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': 'All rights reserved.'
    },
    zh: {
      'home.badge': '现代化可扩展平台',
      'home.title': '选择您的文档空间',
      'home.subtitle': '两条互补路径，旨在优化您的体验。为最终用户提供功能指南，为技术人员提供详细的架构、API 和维护流程参考。',
      'home.guide.title': '使用指南',
      'home.guide.subtitle': '面向用户和功能管理员',
      'home.guide.description': '通过具体使用案例、注释截图、日常最佳实践和常见问题快速解决方案的引导式学习。渐进式方法掌握所有功能。',
      'home.guide.action': '访问指南',
      'home.technique.title': '技术参考',
      'home.technique.subtitle': '面向开发人员和维护团队',
      'home.technique.description': '包含双后端架构的完整系统概述、全面的 API 文档、数据模型、安全性、部署和技术支持操作程序。',
      'home.technique.action': '访问参考',
      'home.changelog.badge': '最近更新',
      'home.changelog.title': '平台演进',
      'home.changelog.subtitle': '跟踪最新改进和功能',
      'home.changelog.v21.title': '完整定制',
      'home.changelog.v21.description': '高级定制系统，允许直接从管理界面修改徽标、主要颜色和自定义文本。',
      'home.changelog.v21.feature': '主要功能',
      'home.changelog.v21.date': '2025年8月12日',
      'home.changelog.v20.title': '革命性架构',
      'home.changelog.v20.description': '完全重构为双后端架构。编排代理和业务逻辑之间的清晰分离，实现最佳性能和可维护性。',
      'home.changelog.v20.feature': '架构改革',
      'home.changelog.v20.date': '2025年8月10日',
      'home.changelog.cta.ready': '准备开始了吗？',
      'home.changelog.cta.subtitle': '探索我们的详细指南并立即开始',
      'home.support.title': '需要帮助或支持？',
      'home.support.subtitle': '我们的专家团队随时为您提供技能发展指导，解决所有技术挑战。',
      'home.support.badge': '支持与协助',
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': '版权所有。'
    }
  }
  
  return translations[locale]?.[key] || key
}

definePageMeta({ layout: false })

// Utilisation du composable useTheme
const { isDark, initTheme, toggleTheme } = useTheme()

onMounted(() => {
  // Initialisation du thème
  initTheme()
})

useHead({
  title: 'Hub Documentation - Gestion Résidence',
  meta: [
    { name: 'description', content: 'Choisissez entre le guide d\'utilisation et la documentation technique de la plateforme de gestion de résidence moderne.' },
    { name: 'theme-color', content: '#3b82f6' }
  ]
})
</script>