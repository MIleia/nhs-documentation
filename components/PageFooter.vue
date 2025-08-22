<template>
  <footer class="relative bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto transition-colors duration-300">
    <!-- Effet de glassmorphisme subtil -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#0097b2]/5 via-transparent to-[#00b4d8]/5 dark:from-[#0097b2]/3 dark:via-transparent dark:to-[#00b4d8]/3 pointer-events-none"></div>
    
    <div class="relative container mx-auto px-4">
      <div class="flex flex-col items-center justify-center">
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-full px-2 transition-colors duration-300">
          {{ t('footer.copyright') || '© 2025 NeoStart.tech' }} 
          <a 
            href="https://neostart.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-[#0097b2] hover:text-[#00b4d8] dark:text-[#26c6da] dark:hover:text-[#4dd0e1] transition-all duration-300 font-medium hover:underline decoration-2 underline-offset-2"
          >
            {{ t('footer.company') || 'NeoStart.tech' }}
          </a> 
          - {{ t('footer.rights') || 'Tous droits réservés.' }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
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
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': 'Tous droits réservés.'
    },
    en: {
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': 'All rights reserved.'
    },
    zh: {
      'footer.copyright': '© 2025',
      'footer.company': 'NeoStart.tech',
      'footer.rights': '版权所有。'
    }
  }
  
  return translations[locale]?.[key] || key
}
</script>
