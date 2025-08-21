// Auto-imports globaux pour Nuxt
declare global {
  const definePageMeta: typeof import('#app/composables/router')['definePageMeta']
  const useHead: typeof import('#app/composables/head')['useHead']
  const usePage: typeof import('#app/composables/router')['usePage']
  const useRoute: typeof import('#app/composables/router')['useRoute']
  const useRouter: typeof import('#app/composables/router')['useRouter']
  const navigateTo: typeof import('#app/composables/router')['navigateTo']
  const onMounted: typeof import('vue')['onMounted']
  const ref: typeof import('vue')['ref']
  const reactive: typeof import('vue')['reactive']
  const computed: typeof import('vue')['computed']
  const watch: typeof import('vue')['watch']
  const nextTick: typeof import('vue')['nextTick']
  
  // Composables personnalisés
  const useTheme: typeof import('../composables/useTheme')['useTheme']
}

export {}
