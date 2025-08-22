<template>
    <!-- Sélecteur de langue avec approche native -->
    <div class="relative w-full max-w-[160px]" ref="languageSelector">
        <button
        class="flex items-center w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0097b2] dark:focus:ring-[#26c6da] transition-all duration-200 group"
        :aria-expanded="open"
        :aria-haspopup="true"
        type="button"
        ref="langBtnRef"
        >
        <span class="mr-2 flex items-center justify-center w-5 h-5 text-lg">
            {{ langs.find((l: typeof langs[0]) => l.value === currentLocale)?.icon }}
        </span>
        <span class="text-xs font-medium text-gray-700 dark:text-gray-200">{{ langs.find((l: typeof langs[0]) => l.value === currentLocale)?.label }}</span>
        <svg class="ml-auto w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-[#0097b2] dark:group-hover:text-[#26c6da] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
    <div v-if="open" class="absolute z-[12000] mt-2 w-full top-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-2xl animate-fade-in-down" tabindex="-1" ref="langMenuRef">
        <ul>
            <li v-for="lang in langs" :key="lang.value">
            <button
                class="flex items-center w-full px-3 py-2 hover:bg-[#f0f9fa] dark:hover:bg-gray-700 focus:bg-[#e0f7fa] dark:focus:bg-gray-600 rounded transition"
                :aria-current="currentLocale === lang.value ? 'true' : 'false'"
                type="button"
                :data-lang="lang.value"
            >
                <span class="mr-2 flex items-center justify-center w-5 h-5 text-lg">
                {{ lang.icon }}
                </span>
                <span class="text-xs font-medium text-gray-700 dark:text-gray-200">{{ lang.label }}</span>
            </button>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

    const route = useRoute()

    // État pour le menu déroulant des langues
    const open = ref(false)
    const langBtnRef = ref<HTMLElement | null>(null)
    const langMenuRef = ref<HTMLElement | null>(null)
    const languageSelector = ref<HTMLElement | null>(null)

    // Configuration des langues disponibles
    const langs = [
        { value: 'fr', label: 'Français', icon: '🇫🇷' },
        { value: 'en', label: 'English', icon: '🇺🇸' },
        { value: 'zh', label: '中文', icon: '🇨🇳' }
    ]

    // Détection de la langue actuelle basée sur l'URL
    const currentLocale = computed(() => {
        const path = route.path
        if (path.startsWith('/en')) return 'en'
        if (path.startsWith('/zh')) return 'zh'
        return 'fr'
    })

    // Initialisation au montage du composant avec événements natifs
    onMounted(() => {
        if (languageSelector.value) {
            languageSelector.value.addEventListener('click', handleNativeClick, true)
            document.addEventListener('click', handleClickOutside)
        }
    })

    // Gestion native des clics
    function handleNativeClick(event: Event) {
        event.preventDefault()
        event.stopPropagation()
        
        const target = event.target as HTMLElement
        
        // Si c'est le bouton principal ou un de ses enfants
        if (langBtnRef.value?.contains(target)) {
            toggleLangMenu()
            return
        }
        
        // Si c'est un bouton de langue
        const langButton = target.closest('[data-lang]') as HTMLElement
        if (langButton) {
            const lang = langButton.getAttribute('data-lang')
            if (lang) {
                selectLang(lang)
            }
            return
        }
    }

    // Fonctions pour la gestion du menu des langues
    function toggleLangMenu() {
        open.value = !open.value
        if (open.value) {
            setTimeout(() => langMenuRef.value?.focus(), 0)
        }
    }

    function closeLangMenu() {
        open.value = false
        langBtnRef.value?.focus()
    }

    function normalizePath(p: string) {
        if (!p) return '/'
        let np = p.replace(/\\+/g, '/').replace(/\/\/+/, '/')
        if (np.length > 1 && np.endsWith('/')) np = np.slice(0, -1)
        return np || '/'
    }

    async function selectLang(val: string) {
        let newPath = route.path
        
        // Remove current locale prefix
        if (newPath.startsWith('/en/')) newPath = newPath.substring(3)
        else if (newPath === '/en') newPath = '/'
        else if (newPath.startsWith('/zh/')) newPath = newPath.substring(3)
        else if (newPath === '/zh') newPath = '/'
        
        // Add new locale prefix
        if (val === 'en') newPath = '/en' + (newPath === '/' ? '' : newPath)
        else if (val === 'zh') newPath = '/zh' + (newPath === '/' ? '' : newPath)
        
        newPath = normalizePath(newPath)
        
        if (newPath !== route.path) {
            await navigateTo(newPath)
        }
        
        closeLangMenu()
    }

    function handleClickOutside(event: MouseEvent) {
        if (!open.value) return
        const target = event.target as Node
        if (languageSelector.value && !languageSelector.value.contains(target)) {
            closeLangMenu()
        }
    }

    onBeforeUnmount(() => {
        if (languageSelector.value) {
            languageSelector.value.removeEventListener('click', handleNativeClick, true)
        }
        document.removeEventListener('click', handleClickOutside)
    })
</script>

<style scoped>
    /*
    | Styles spécifiques au composant LanguageSelector
    | Menu déroulant moderne et épuré pour la sélection de langue
    */
    .animate-fade-in-down {
        animation: fadeInDown 0.18s cubic-bezier(.4,0,.2,1);
    }
    @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>


