<template>
  <button
    @click="toggleDarkMode"
    :class="[
      'group relative inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      props.variant === 'small' 
        ? 'w-9 h-9 bg-gray-100/80 hover:bg-gray-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-gray-200/50 dark:border-slate-700/50' 
        : 'w-10 h-10 bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-gray-200/50 dark:border-slate-700/50 shadow-sm'
    ]"
    :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
  >
    <!-- Sun icon for light mode -->
    <svg
      v-if="!isDark"
      class="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-yellow-500 transition-colors"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    
    <!-- Moon icon for dark mode -->
    <svg
      v-else
      class="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-400 transition-colors"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    
    <!-- Optional text -->
    <span
      v-if="props.showText"
      class="ml-2 text-xs font-medium text-gray-600 dark:text-gray-300"
    >
      {{ isDark ? 'Clair' : 'Sombre' }}
    </span>
  </button>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useTheme } from '../composables/useTheme'

    const props = defineProps({
    variant: {
        type: String,
        default: 'small',
        validator: (value: string) => ['small', 'large'].includes(value)
    },
    showText: {
        type: Boolean,
        default: false
    }
    })

    // Utilisation du composable useTheme
    const { isDark, toggleTheme, initTheme } = useTheme()

    const toggleDarkMode = () => {
    toggleTheme()
    }

    onMounted(() => {
    initTheme()
    })
</script>


