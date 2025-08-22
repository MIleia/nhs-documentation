<template>
  <div :class="['min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-slate-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/90 text-slate-800 dark:text-slate-200', fontReady?'font-loaded':'']">
    <!-- Mobile overlay -->
    <transition name="fade">
      <div v-if="mobileOpen" class="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-md lg:hidden" @click="mobileOpen=false" />
    </transition>
    
    <!-- Sidebar raffinée -->
    <aside :class="['fixed z-50 top-0 left-0 h-screen w-72 shrink-0 border-r border-gray-200/70 dark:border-slate-700/70 bg-gradient-to-b from-white via-gray-50/80 to-white dark:from-slate-900 dark:via-slate-800/70 dark:to-slate-900/90 flex flex-col shadow-2xl lg:shadow-xl backdrop-blur-xl transform transition-all duration-300', mobileOpen?'translate-x-0':'-translate-x-full lg:translate-x-0']">
      <!-- Header + Sélecteur de langue en haut du menu latéral -->
      <div class="flex flex-col items-stretch border-b border-gray-200/60 dark:border-slate-700/60 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-slate-900/80 dark:to-slate-800/80 backdrop-blur-sm" style="min-height:90px;">
        <div class="flex items-center justify-between px-6 pt-2 pb-1">
          <NuxtLink to="/" class="group flex items-center gap-3 font-bold text-gray-700 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white transition-all duration-200">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="text-left">
              <div class="text-xs font-black tracking-wider uppercase text-blue-600 dark:text-blue-400">Hub</div>
              <div class="text-[10px] text-gray-500 dark:text-slate-400 -mt-0.5">Documentation</div>
            </div>
          </NuxtLink>
          <button class="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200" @click="mobileOpen=false">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="px-6 pb-2 pt-1">
          <LanguageSelector />
        </div>
      </div>
      
      <!-- Recherche stylisée -->
      <div class="p-6 pb-4">
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
          <input 
            v-model="query" 
            placeholder="Rechercher dans la documentation…" 
            class="relative w-full rounded-xl bg-gradient-to-r from-white via-gray-50/80 to-white dark:from-slate-800/80 dark:via-slate-700/80 dark:to-slate-800/80 border border-gray-200/70 dark:border-slate-600/70 px-4 py-3 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 dark:focus:border-blue-500 shadow-lg backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-slate-400" 
          />
          <div class="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md group-focus-within:shadow-lg group-focus-within:scale-110 transition-all duration-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"/>
            </svg>
          </div>
        </div>
      </div>
      <!-- Navigation sophistiquée -->
      <nav class="px-6 pb-6 overflow-y-auto scrolling-touch space-y-8 text-sm" :class="{'pt-2':true,'thin-scrollbar':true}">
        <div v-if="isGuide" class="space-y-6" v-for="section in filteredGuide" :key="section.title">
          <div class="relative">
            <h3 class="text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400 select-none mb-4 flex items-center gap-2">
              <div class="w-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              {{ section.title }}
              <div class="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-slate-700"></div>
            </h3>
            <ul class="space-y-2">
              <li v-for="item in section.items" :key="item.to">
                <NuxtLink :to="item.to" class="nav-link-enhanced" :class="linkClass(item.to)" @click="closeMobile">
                  <div class="flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-current opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125"></div>
                    <span class="flex-1">{{ item.label }}</span>
                    <svg class="w-3 h-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div v-else class="space-y-8">
          <div v-for="section in filteredTech" :key="section.title" class="space-y-4">
            <div class="relative">
              <h3 class="text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-slate-400 select-none mb-4 flex items-center gap-2">
                <div class="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                {{ section.title }}
                <div class="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-slate-700"></div>
              </h3>
              <ul class="space-y-2">
                <li v-for="item in section.items" :key="item.to">
                  <NuxtLink :to="item.to" class="nav-link-enhanced" :class="linkClass(item.to)" @click="closeMobile">
                    <div class="flex items-center gap-3">
                      <div class="w-1.5 h-1.5 rounded-full bg-current opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125"></div>
                      <span class="flex-1">{{ item.label }}</span>
                      <svg class="w-3 h-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Footer amélioré -->
      <div class="mt-auto p-6 border-t border-gray-200/60 dark:border-slate-700/60 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm">
        <div class="flex items-center justify-between text-xs">
          <button @click="toggleTheme" class="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 dark:hover:from-slate-600 dark:hover:via-slate-500 dark:hover:to-slate-600 text-gray-700 dark:text-slate-300 font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 border border-gray-200/60 dark:border-slate-600/60">
            <div class="relative w-4 h-4">
              <svg v-if="isDark" class="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg v-else class="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
              </svg>
            </div>
            <span>{{ isDark? 'Mode clair' : 'Mode sombre' }}</span>
          </button>
          <div class="flex items-center gap-2 text-gray-500 dark:text-slate-400 font-medium">
            <div class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span>v2.1.0</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content area -->
    <div class="flex-1 min-w-0 flex flex-col ml-0 lg:ml-72">
      <!-- Header raffiné -->
      <header class="h-16 flex items-center backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-950/80 bg-gradient-to-r from-white/90 via-white/95 to-white/90 dark:from-slate-950/90 dark:via-slate-950/95 dark:to-slate-950/90 border-b border-gray-200/60 dark:border-slate-700/60 px-4 sm:px-8 gap-4 shadow-sm">
        <button class="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200" @click="mobileOpen=true">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        
        <div class="min-w-0 flex-1">
          <h1 class="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">{{ title }}</h1>
          <p v-if="description" class="text-xs text-gray-500 dark:text-slate-400 mt-1 line-clamp-1 font-medium">{{ description }}</p>
        </div>
        
        <!-- Tabs sophistiqués -->
        <div class="ml-auto flex items-center gap-3">
          <!-- Tabs de navigation -->
          <div class="flex items-center gap-1 p-1 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl border border-gray-200/60 dark:border-slate-600/60 shadow-lg backdrop-blur-sm">
            <NuxtLink to="/guide" class="tab-btn-enhanced" :class="{active:isGuide}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Guide utilisateur
            </NuxtLink>
            <NuxtLink to="/technique" class="tab-btn-enhanced" :class="{active:!isGuide}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Documentation technique
            </NuxtLink>
          </div>
        </div>
      </header>
      
      <!-- Content area amélioré -->
      <main class="px-4 sm:px-8 py-12 relative bg-gradient-to-br from-transparent via-gray-50/30 to-transparent dark:from-transparent dark:via-slate-900/30 dark:to-transparent">
        <!-- Search results sophistiqués -->
        <div v-if="searchResultsVisible" class="absolute z-10 top-24 right-4 left-4 sm:right-auto sm:w-96 bg-gradient-to-br from-white via-white to-gray-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/80 border border-gray-200/70 dark:border-slate-600/70 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
          <div class="p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50 border-b border-gray-200/60 dark:border-slate-700/60">
            <p class="text-xs font-bold text-gray-700 dark:text-slate-300 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"/>
              </svg>
              {{ searchResults.length }} résultat{{ searchResults.length > 1 ? 's' : '' }} trouvé{{ searchResults.length > 1 ? 's' : '' }}
            </p>
          </div>
          <div class="max-h-80 overflow-y-auto divide-y divide-gray-100/60 dark:divide-slate-700/60 thin-scrollbar">
            <button v-for="r in searchResults" :key="r.to" @click="navigate(r.to)" class="group w-full text-left px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/80 dark:hover:from-slate-800/60 dark:hover:to-slate-700/60 transition-all duration-200">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                <p class="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">{{ r.section }}</p>
              </div>
              <p class="text-sm font-semibold text-gray-800 dark:text-slate-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">{{ r.label }}</p>
              <p class="text-xs text-gray-500 dark:text-slate-400 line-clamp-2 mt-1 font-medium" v-if="r.snippet">{{ r.snippet }}</p>
            </button>
          </div>
        </div>
        <slot />
        
        <!-- Footer de page -->
        <PageFooter />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'

interface NavItem { to: string; label: string }
interface NavSection { title: string; items: NavItem[] }
const props = defineProps<{ type: 'guide'|'tech'; title: string; description?: string }>()
const route = useRoute()
const router = useRouter()
const isGuide = computed(()=> props.type === 'guide')
const query = ref('')
const mobileOpen = ref(false)
const fontReady = ref(false)

// Utilisation du composable useTheme
const { isDark, initTheme, toggleTheme } = useTheme()

onMounted(()=> {
  document.fonts?.ready.then(()=> fontReady.value = true).catch(()=>{})
  // Initialisation du thème avec le composable
  initTheme()
})

const guideSections: NavSection[] = [
  { title: 'Général', items:[
    { to: '/guide', label: 'Introduction' },
    { to: '/guide/onboarding', label: 'Onboarding' }
  ]},
  { title: 'Fonctionnalités', items:[
    { to: '/guide/utilisateurs', label: 'Utilisateurs & rôles' },
    { to: '/guide/messagerie', label: 'Messagerie' },
    { to: '/guide/visites', label: 'Visites' },
    { to: '/guide/incidents', label: 'Incidents' },
    { to: '/guide/administration', label: 'Administration' }
  ]}
]

const techSections: NavSection[] = [
  { title: 'Base', items:[
    { to: '/technique', label: 'Vue d\'ensemble' },
    { to: '/technique/architecture', label: 'Architecture' },
    { to: '/technique/base-donnees', label: 'Base de données' },
  ]},
  { title: 'API & Domaine', items:[
    { to: '/technique/api', label: 'API' },
    { to: '/technique/securite', label: 'Sécurité' },
    { to: '/technique/tests', label: 'Tests' },
    { to: '/technique/conventions', label: 'Conventions' },
  ]},
  { title: 'Opérations', items:[
    { to: '/technique/deploiement', label: 'Déploiement' },
    { to: '/technique/observabilite', label: 'Observabilité' },
    { to: '/technique/performances', label: 'Performances' },
    { to: '/technique/maintenance', label: 'Maintenance' },
    { to: '/technique/runbook', label: 'Runbook' },
  ]}
]

const guideNav = computed(()=> guideSections.flatMap(s=> s.items))
const techNav = computed(()=> techSections.flatMap(s=> s.items))

const filteredGuide = computed(()=> filterSections(guideSections))
const filteredTech = computed(()=> filterSections(techSections))

function filterSections(sections: NavSection[]): NavSection[] {
  if(!query.value.trim()) return sections
  const q = query.value.toLowerCase()
  return sections.map(sec => ({
    title: sec.title,
    items: sec.items.filter(i=> i.label.toLowerCase().includes(q))
  })).filter(sec=> sec.items.length)
}

function linkClass(to: string){
  return route.path === to ? 'active' : ''
}
function closeMobile(){ mobileOpen.value = false }
function navigate(to:string){ router.push(to); searchBlur(); }

// Search index (lazy, minimal – could be replaced by fuse.js)
interface SearchEntry { to:string; label:string; section:string; snippet?:string }
const index = computed<SearchEntry[]>(()=> {
  const build = (items:NavItem[], section:string):SearchEntry[] => items.map(i=> ({...i, section}))
  return [
    ...build(guideNav.value,'Guide'),
    ...build(techNav.value,'Technique')
  ]
})
const searchResults = computed(()=> {
  if(!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return index.value.filter(e=> e.label.toLowerCase().includes(q)).slice(0,30)
})
const searchResultsVisible = computed(()=> searchResults.value.length>0 && document.activeElement instanceof HTMLElement && document.activeElement.tagName==='INPUT')
function searchBlur(){ (document.activeElement as HTMLElement)?.blur?.() }
</script>

<style scoped>
/* Navigation links sophistiqués */
.nav-link-enhanced {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-weight: 600;
  color: #64748b;
  position: relative;
  line-height: 1.3;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border: 1px solid transparent;
}

.dark .nav-link-enhanced { 
  color: #94a3b8; 
}

.nav-link-enhanced:hover { 
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #1e293b;
  border-color: #e2e8f0;
  transform: translateX(4px);
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
}

.dark .nav-link-enhanced:hover { 
  background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
  color: #f1f5f9;
  border-color: #475569;
}

.nav-link-enhanced.active { 
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-color: #6366f1;
  box-shadow: 0 8px 25px -5px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  transform: translateX(4px);
}

/* Tabs sophistiqués */
.tab-btn-enhanced { 
  font-size: 0.75rem;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  border-radius: 1rem;
  color: #64748b;
  background: transparent;
  border: 1px solid transparent;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.dark .tab-btn-enhanced { 
  color: #94a3b8; 
}

.tab-btn-enhanced:hover { 
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #1e293b;
  border-color: #e2e8f0;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.1);
}

.dark .tab-btn-enhanced:hover { 
  background: linear-gradient(135deg, #475569 0%, #334155 100%);
  color: #f1f5f9;
  border-color: #64748b;
}

.tab-btn-enhanced.active { 
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-color: #6366f1;
  box-shadow: 0 8px 25px -5px rgba(99, 102, 241, 0.4);
  transform: translateY(-1px);
}

/* Scrollbar personnalisée */
.thin-scrollbar::-webkit-scrollbar { 
  width: 6px; 
}

.thin-scrollbar::-webkit-scrollbar-track { 
  background: transparent; 
}

.thin-scrollbar::-webkit-scrollbar-thumb { 
  background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
  border-radius: 3px;
  transition: background 0.2s;
}

.thin-scrollbar::-webkit-scrollbar-thumb:hover { 
  background: linear-gradient(to bottom, #94a3b8, #64748b);
}

.dark .thin-scrollbar::-webkit-scrollbar-thumb { 
  background: linear-gradient(to bottom, #475569, #334155);
}

.dark .thin-scrollbar::-webkit-scrollbar-thumb:hover { 
  background: linear-gradient(to bottom, #64748b, #475569);
}

/* Animations de transition */
.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from, .fade-leave-to { 
  opacity: 0;
}

/* Typographie avec features avancées */
.font-loaded { 
  font-feature-settings: 'cv11', 'ss01', 'ss02', 'liga', 'kern';
  font-variant-ligatures: common-ligatures;
}

/* Focus states accessibles */
.nav-link-enhanced:focus-visible,
.tab-btn-enhanced:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
  border-radius: 1rem;
}

/* Optimisations performance */
.nav-link-enhanced,
.tab-btn-enhanced {
  will-change: transform;
}

/* Responsive enhancements */
@media (max-width: 768px) {
  .tab-btn-enhanced {
    padding: 0.625rem 1rem;
    font-size: 0.6875rem;
  }
}
</style>
