<template>
  <DocShell type="tech" :title="t('conventions.title')" :description="t('conventions.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Conventions de développement</h1>
      
      <div class="not-prose bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-12 border border-violet-200/50 dark:border-violet-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">📏 Standards et bonnes pratiques</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Conventions strictes pour maintenabilité, lisibilité et collaboration efficace. 
          Standards PSR-12, ESLint strict et conventions spécifiques au domaine métier de gestion d'entreprise-résidence.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🎨 Code Style</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">PSR-12 + ESLint Strict</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">📁 Structure</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Organisation modulaire</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🏷️ Naming</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Conventions métier claires</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">📝 Documentation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">PHPDoc + JSDoc</p>
          </div>
        </div>
      </div>

      <!-- Conventions Backend -->
      <h2>Conventions Backend (PHP/Laravel)</h2>
      
      <h3>Standards PSR et Laravel</h3>
      <p>Respect strict des standards PHP et conventions Laravel :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🔧 PHP Standards</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">PSR-12 Code Style</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

declare(strict_types=1);

namespace App\Services\Badge;

use App\Models\Badge;
use App\Models\User;
use App\Contracts\BadgeServiceInterface;
use Illuminate\Support\Carbon;

/**
 * Service de gestion des badges d'accès résidence
 * 
 * Gère la création, modification et révocation des badges
 * avec validation des permissions et audit trail complet
 */
class BadgeService implements BadgeServiceInterface
{
    /**
     * Génère un nouveau badge pour un utilisateur
     * 
     * @param User $user Utilisateur destinataire
     * @param string $type Type de badge (résident|visiteur|prestataire)
     * @param array&lt;string, mixed&gt; $options Options de configuration
     * @return Badge Badge créé avec numéro unique
     * 
     * @throws \InvalidArgumentException Si type badge invalide
     * @throws \App\Exceptions\BadgeCreationException Si création échoue
     */
    public function createBadge(User $user, string $type, array $options = []): Badge
    {
        $this->validateBadgeType($type);
        
        $badge = new Badge([
            'user_id' => $user->id,
            'numero_badge' => $this->generateBadgeNumber($type),
            'type_badge' => $type,
            'statut' => BadgeStatus::ACTIF,
            'date_emission' => Carbon::now(),
            'date_expiration' => $this->calculateExpiration($type, $options),
            'zones_acces' => $this->determineAccessZones($user, $type),
        ]);
        
        $badge->save();
        
        $this->logBadgeCreation($badge);
        
        return $badge;
    }
    
    /**
     * Valide le type de badge selon enum autorisé
     */
    private function validateBadgeType(string $type): void
    {
        if (!in_array($type, BadgeType::getValues(), true)) {
            throw new \InvalidArgumentException("Type de badge invalide: {$type}");
        }
    }
}</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Organisation des classes</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>Strict types</strong> : declare(strict_types=1) obligatoire</li>
              <li>• <strong>Namespace</strong> : Respect structure App\Domain\Module</li>
              <li>• <strong>Imports</strong> : Alphabétique, groupés par type</li>
              <li>• <strong>Méthodes</strong> : Public → Protected → Private</li>
              <li>• <strong>Constants</strong> : UPPERCASE avec underscore</li>
              <li>• <strong>Properties</strong> : camelCase avec visibilité explicite</li>
            </ul>
          </div>

        </div>
      </div>

      <h3>Conventions de nommage PHP</h3>
      <p>Nomenclature précise pour le domaine métier :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🏷️ Naming Conventions PHP</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Classes et interfaces</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Models</strong> : Singulier PascalCase (User, Badge)</li>
              <li>• <strong>Controllers</strong> : ResourceController (UserController)</li>
              <li>• <strong>Services</strong> : DomainService (BadgeService)</li>
              <li>• <strong>Repositories</strong> : ModelRepository (UserRepository)</li>
              <li>• <strong>Interfaces</strong> : SuffixeInterface (BadgeServiceInterface)</li>
              <li>• <strong>Exceptions</strong> : DomainException (BadgeCreationException)</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Méthodes et variables</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Méthodes</strong> : camelCase verbe + objet</li>
              <li>• <strong>Getters</strong> : getPropertyName() ou isPropertyName()</li>
              <li>• <strong>Actions</strong> : verbeAction (createBadge, validateAccess)</li>
              <li>• <strong>Prédicats</strong> : has/is/can + condition</li>
              <li>• <strong>Variables</strong> : camelCase descriptif</li>
              <li>• <strong>Constantes</strong> : UPPER_SNAKE_CASE</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Structure des modules Laravel</h3>
      <p>Organisation par domaine métier avec séparation claire :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">📁 Module Structure</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Exemple module Badge</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code>app/
├── Http/
│   └── Controllers/
│       └── BadgeController.php          # API endpoints badges
├── Models/
│   ├── Badge.php                        # Eloquent model
│   └── Enums/
│       ├── BadgeType.php               # Types de badges
│       └── BadgeStatus.php             # Statuts badges
├── Services/
│   ├── BadgeService.php                # Logique métier badges
│   └── Contracts/
│       └── BadgeServiceInterface.php   # Interface service
├── Repositories/
│   ├── BadgeRepository.php             # Accès données badges
│   └── Contracts/
│       └── BadgeRepositoryInterface.php
├── Policies/
│   └── BadgePolicy.php                 # Autorisations badges
├── Requests/
│   ├── CreateBadgeRequest.php          # Validation création
│   └── UpdateBadgeRequest.php          # Validation modification
├── Resources/
│   ├── BadgeResource.php               # Transformation API
│   └── BadgeCollection.php             # Collection badges
├── Events/
│   ├── BadgeCreated.php                # Événement création
│   └── BadgeRevoked.php                # Événement révocation
├── Listeners/
│   ├── SendBadgeNotification.php       # Notification badges
│   └── LogBadgeActivity.php            # Audit trail
└── Exceptions/
    ├── BadgeNotFoundException.php       # Badge non trouvé
    └── BadgeCreationException.php       # Erreur création</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Responsabilités par couche</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>Controllers</strong> : Validation, transformation, réponse HTTP</li>
              <li>• <strong>Services</strong> : Logique métier, orchestration, règles business</li>
              <li>• <strong>Repositories</strong> : Accès données, requêtes, persistance</li>
              <li>• <strong>Models</strong> : Structure données, relations, accesseurs</li>
              <li>• <strong>Policies</strong> : Règles autorisation, permissions</li>
              <li>• <strong>Events/Listeners</strong> : Effets de bord, notifications</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Conventions Frontend -->
      <h2>Conventions Frontend (Nuxt/Vue/TypeScript)</h2>
      
      <h3>Standards TypeScript et Vue</h3>
      <p>Configuration ESLint stricte et conventions Vue 3 Composition API :</p>
      
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-6 border border-emerald-200 dark:border-emerald-800/30">
        <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-4">⚛️ Vue/TypeScript Standards</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Composant Vue type-safe</h5>
            <pre class="text-xs bg-emerald-50 dark:bg-emerald-950/50 p-3 rounded overflow-x-auto"><code>&lt;template&gt;
  &lt;div class="badge-card" :class="badgeStatusClass"&gt;
    &lt;!-- Header avec statut --&gt;
    &lt;div class="badge-header"&gt;
      &lt;h3 class="badge-title"&gt;&#123;&#123; badge.numero_badge &#125;&#125;&lt;/h3&gt;
      &lt;BadgeStatusIndicator :status="badge.statut" /&gt;
    &lt;/div&gt;
    
    &lt;!-- Informations utilisateur --&gt;
    &lt;div class="badge-user-info"&gt;
      &lt;UserAvatar :user="badge.user" size="sm" /&gt;
      &lt;span class="user-name"&gt;&#123;&#123; badge.user.fullName &#125;&#125;&lt;/span&gt;
    &lt;/div&gt;
    
    &lt;!-- Actions disponibles --&gt;
    &lt;div class="badge-actions"&gt;
      &lt;UButton 
        v-if="canEdit" 
        variant="outline" 
        @click="$emit('edit', badge)"
      &gt;
        Modifier
      &lt;/UButton&gt;
      &lt;UButton 
        v-if="canRevoke" 
        variant="danger" 
        @click="handleRevoke"
      &gt;
        Révoquer
      &lt;/UButton&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import type { Badge, BadgeStatus } from '~/types/badge'
import type { User } from '~/types/user'

// Props avec validation TypeScript
interface Props {
  badge: Badge
  canEdit?: boolean
  canRevoke?: boolean
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  canEdit: false,
  canRevoke: false,
})

// Events typés
interface Emits {
  edit: [badge: Badge]
  revoke: [badge: Badge]
}

const emit = defineEmits&lt;Emits&gt;()

// Computed properties typées
const badgeStatusClass = computed(() =&gt; {
  const baseClass = 'badge-card'
  const statusClasses: Record&lt;BadgeStatus, string&gt; = {
    actif: 'badge-card--active',
    suspendu: 'badge-card--suspended', 
    révoqué: 'badge-card--revoked',
  }
  
  return [baseClass, statusClasses[props.badge.statut]]
})

// Méthodes avec gestion d'erreur
const handleRevoke = async (): Promise&lt;void&gt; =&gt; {
  try {
    const confirmed = await $confirm({
      title: 'Révoquer le badge',
      message: `Confirmer la révocation du badge ${props.badge.numero_badge} ?`,
    })
    
    if (confirmed) {
      emit('revoke', props.badge)
    }
  } catch (error) {
    console.error('Erreur révocation badge:', error)
  }
}
&lt;/script&gt;</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Configuration ESLint stricte</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>// .eslintrc.js
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    // TypeScript strict
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    
    // Vue conventions
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style']
    }],
    
    // Code quality
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
  }
}</code></pre>
          </div>

        </div>
      </div>

      <h3>Structure des composables</h3>
      <p>Logique réutilisable avec composables typés :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎣 Composables Pattern</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Composable useApi typé</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code>// composables/useApi.ts
import type { UseFetchOptions } from 'nuxt/app'

interface ApiResponse&lt;T = any&gt; {
  success: boolean
  data: T
  meta?: {
    message?: string
    timestamp: string
  }
}

interface ApiError {
  success: false
  error: {
    code: string
    message: string
    details?: Record&lt;string, string[]&gt;
  }
}

/**
 * Composable pour appels API typés avec gestion d'erreur
 */
export const useApi = () =&gt; {
  const { $fetch } = useNuxtApp()
  const { token } = useAuth()
  
  /**
   * Requête GET typée avec cache et gestion d'erreur
   */
  const get = async &lt;T&gt;(
    url: string, 
    options: UseFetchOptions&lt;ApiResponse&lt;T&gt;&gt; = {}
  ): Promise&lt;T&gt; =&gt; {
    try {
      const response = await $fetch&lt;ApiResponse&lt;T&gt;&gt;(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        },
      })
      
      if (!response.success) {
        throw new ApiError(response as ApiError)
      }
      
      return response.data
    } catch (error) {
      handleApiError(error)
      throw error
    }
  }
  
  /**
   * Requête POST typée pour création
   */
  const post = async &lt;T, D = any&gt;(
    url: string,
    data: D,
    options: UseFetchOptions&lt;ApiResponse&lt;T&gt;&gt; = {}
  ): Promise&lt;T&gt; =&gt; {
    return await request&lt;T&gt;('POST', url, data, options)
  }
  
  /**
   * Gestion centralisée des erreurs API
   */
  const handleApiError = (error: unknown): void =&gt; {
    if (error instanceof ApiError) {
      const toast = useToast()
      toast.add({
        title: 'Erreur API',
        description: error.error.message,
        color: 'red'
      })
    }
  }
  
  return {
    get,
    post,
    put: &lt;T, D = any&gt;(url: string, data: D) =&gt; request&lt;T&gt;('PUT', url, data),
    delete: &lt;T&gt;(url: string) =&gt; request&lt;T&gt;('DELETE', url),
  }
}</code></pre>
          </div>

          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Composable métier useBadges</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>// composables/useBadges.ts
import type { Badge, CreateBadgeRequest, BadgeFilters } from '~/types/badge'

/**
 * Composable pour gestion des badges d'accès
 */
export const useBadges = () =&gt; {
  const api = useApi()
  
  // État réactif
  const badges = ref&lt;Badge[]&gt;([])
  const loading = ref(false)
  const error = ref&lt;string | null&gt;(null)
  
  /**
   * Récupère la liste des badges avec filtres
   */
  const fetchBadges = async (filters: BadgeFilters = {}): Promise&lt;void&gt; =&gt; {
    loading.value = true
    error.value = null
    
    try {
      const response = await api.get&lt;Badge[]&gt;('/api/badges', {
        query: filters
      })
      
      badges.value = response
    } catch (err) {
      error.value = 'Erreur lors du chargement des badges'
      console.error('Fetch badges error:', err)
    } finally {
      loading.value = false
    }
  }
  
  /**
   * Crée un nouveau badge avec validation
   */
  const createBadge = async (data: CreateBadgeRequest): Promise&lt;Badge&gt; =&gt; {
    loading.value = true
    
    try {
      const newBadge = await api.post&lt;Badge&gt;('/api/badges', data)
      
      // Mise à jour locale
      badges.value.push(newBadge)
      
      // Notification succès
      const toast = useToast()
      toast.add({
        title: 'Badge créé',
        description: `Badge ${newBadge.numero_badge} créé avec succès`,
        color: 'green'
      })
      
      return newBadge
    } catch (err) {
      error.value = 'Erreur lors de la création du badge'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  /**
   * Computed pour badges actifs seulement
   */
  const activeBadges = computed(() =&gt; 
    badges.value.filter(badge =&gt; badge.statut === 'actif')
  )
  
  return {
    // État
    badges: readonly(badges),
    loading: readonly(loading), 
    error: readonly(error),
    
    // Actions
    fetchBadges,
    createBadge,
    
    // Computed
    activeBadges,
  }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Conventions générales -->
      <h2>Conventions générales</h2>
      
      <h3>Documentation code</h3>
      <p>Standards de documentation pour maintenir la lisibilité :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">📝 Documentation Standards</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">PHPDoc (Backend)</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• <strong>Classes</strong> : Description rôle et responsabilités</li>
              <li>• <strong>Méthodes publiques</strong> : @param, @return, @throws</li>
              <li>• <strong>Propriétés</strong> : @var avec type précis</li>
              <li>• <strong>Exemples</strong> : @example pour cas complexes</li>
              <li>• <strong>Deprecated</strong> : @deprecated avec migration</li>
              <li>• <strong>Since/Version</strong> : @since pour traçabilité</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">JSDoc (Frontend)</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• <strong>Fonctions</strong> : Description, @param, @returns</li>
              <li>• <strong>Types complexes</strong> : @typedef pour interfaces</li>
              <li>• <strong>Composants</strong> : Props, events, slots</li>
              <li>• <strong>Composables</strong> : Usage patterns et exemples</li>
              <li>• <strong>Modules</strong> : @module avec overview</li>
              <li>• <strong>TODO</strong> : @todo pour améliorations futures</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gestion des erreurs</h3>
      <p>Conventions pour handling d'erreurs cohérent :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Error Handling Patterns</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Exceptions métier PHP</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Exceptions\Badge;

use App\Exceptions\BusinessException;

/**
 * Exception lancée lors d'erreur de création de badge
 * 
 * Encapsule les erreurs métier liées aux badges:
 * - Utilisateur non autorisé
 * - Quota badges dépassé  
 * - Type badge invalide
 */
class BadgeCreationException extends BusinessException
{
    public const ERROR_QUOTA_EXCEEDED = 'BADGE_QUOTA_EXCEEDED';
    public const ERROR_INVALID_TYPE = 'BADGE_INVALID_TYPE';
    public const ERROR_UNAUTHORIZED = 'BADGE_UNAUTHORIZED';
    
    public static function quotaExceeded(int $currentCount, int $maxAllowed): self
    {
        return new self(
            "Quota de badges dépassé: {$currentCount}/{$maxAllowed}",
            self::ERROR_QUOTA_EXCEEDED,
            ['current' =&gt; $currentCount, 'max' =&gt; $maxAllowed]
        );
    }
    
    public static function invalidType(string $type, array $allowedTypes): self
    {
        return new self(
            "Type de badge invalide: {$type}",
            self::ERROR_INVALID_TYPE,
            ['type' =&gt; $type, 'allowed' =&gt; $allowedTypes]
        );
    }
}</code></pre>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Gestion d'erreurs TypeScript</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code>// types/errors.ts
export interface ApiError {
  code: string
  message: string
  details?: Record&lt;string, any&gt;
}

export class BusinessError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly details?: Record&lt;string, any&gt;
  ) {
    super(message)
    this.name = 'BusinessError'
  }
}

// utils/errorHandler.ts
export const handleError = (error: unknown): ApiError =&gt; {
  if (error instanceof BusinessError) {
    return {
      code: error.code,
      message: error.message,
      details: error.details
    }
  }
  
  if (error instanceof Error) {
    return {
      code: 'GENERIC_ERROR',
      message: error.message
    }
  }
  
  return {
    code: 'UNKNOWN_ERROR',
    message: 'Une erreur inattendue s\'est produite'
  }
}</code></pre>
          </div>

        </div>
      </div>

      <h3>Logging et debugging</h3>
      <p>Conventions pour logs structurés et debugging efficace :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">📊 Logging Standards</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Backend Logging</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Structured logs</strong> : JSON avec contexte</li>
              <li>• <strong>Log levels</strong> : DEBUG → INFO → WARNING → ERROR</li>
              <li>• <strong>Request ID</strong> : Traçabilité requêtes</li>
              <li>• <strong>User context</strong> : ID utilisateur quand disponible</li>
              <li>• <strong>Performance</strong> : Temps exécution opérations</li>
              <li>• <strong>Business events</strong> : Actions métier importantes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Frontend Logging</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Console levels</strong> : log, warn, error appropriés</li>
              <li>• <strong>User actions</strong> : Tracking interactions importantes</li>
              <li>• <strong>API errors</strong> : Détails erreurs avec contexte</li>
              <li>• <strong>Performance</strong> : Web Vitals et navigation</li>
              <li>• <strong>No sensitive data</strong> : Jamais de données sensibles</li>
              <li>• <strong>Production</strong> : Logs minimaux en production</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tests et qualité -->
      <h2>Conventions de test</h2>
      
      <h3>Nomenclature des tests</h3>
      <p>Convention claire pour identification et organisation :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🧪 Test Naming</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Structure des tests PHP</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>tests/
├── Unit/                               # Tests unitaires
│   ├── Models/
│   │   ├── UserTest.php               # test_user_can_have_multiple_roles
│   │   └── BadgeTest.php              # test_badge_expiration_is_calculated
│   ├── Services/
│   │   └── BadgeServiceTest.php       # test_creates_badge_with_valid_data
│   └── Repositories/
│       └── UserRepositoryTest.php     # test_finds_users_by_role
├── Feature/                           # Tests d'intégration
│   ├── Auth/
│   │   └── AuthenticationTest.php     # test_user_can_login_with_valid_credentials
│   ├── Api/
│   │   ├── BadgeApiTest.php          # test_admin_can_create_badge
│   │   └── IncidentApiTest.php       # test_resident_can_report_incident
│   └── Web/
│       └── DashboardTest.php         # test_authenticated_user_sees_dashboard

// Convention nommage méthodes
class BadgeServiceTest extends TestCase
{
    /** @test */
    public function it_creates_badge_with_auto_generated_number(): void
    
    /** @test */ 
    public function it_throws_exception_when_user_quota_exceeded(): void
    
    /** @test */
    public function it_calculates_expiration_date_for_visitor_badge(): void
}</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Tests JavaScript/TypeScript</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>// tests/components/BadgeCard.test.ts
describe('BadgeCard', () =&gt; {
  describe('rendering', () =&gt; {
    it('displays badge number and user name', () =&gt; {
      // Test affichage informations de base
    })
    
    it('shows correct status indicator for active badge', () =&gt; {
      // Test indicateur statut
    })
  })
  
  describe('interactions', () =&gt; {
    it('emits edit event when edit button is clicked', () =&gt; {
      // Test événement édition  
    })
    
    it('shows confirmation dialog before revoking badge', () =&gt; {
      // Test confirmation révocation
    })
  })
  
  describe('permissions', () =&gt; {
    it('hides edit button when user cannot edit', () =&gt; {
      // Test permissions interface
    })
  })
})

// Convention nommage fichiers
BadgeCard.test.ts           # Composant BadgeCard
useBadges.test.ts          # Composable useBadges  
badge-service.test.ts      # Service badge (kebab-case)
auth.e2e.test.ts          # Test E2E authentification</code></pre>
          </div>

        </div>
      </div>

      <!-- Versioning et releases -->
      <h2>Versioning et releases</h2>
      
      <h3>Semantic Versioning</h3>
      <p>Convention SemVer stricte pour versioning cohérent :</p>
      
      <div class="not-prose bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 my-6 border border-teal-200 dark:border-teal-800/30">
        <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🏷️ Semantic Versioning</h4>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">MAJOR (X.0.0)</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• Breaking changes API</li>
              <li>• Changements architecture</li>
              <li>• Migration base de données</li>
              <li>• Incompatibilité versions</li>
            </ul>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">MINOR (x.Y.0)</h5>
            <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Nouvelles fonctionnalités</li>
              <li>• Améliorations interface</li>
              <li>• Optimisations performance</li>
              <li>• Rétrocompatibilité maintenue</li>
            </ul>
          </div>
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">PATCH (x.y.Z)</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• Corrections bugs</li>
              <li>• Patches sécurité</li>
              <li>• Améliorations mineures</li>
              <li>• Pas de nouvelles features</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Conventional Commits</h3>
      <p>Format standardisé pour messages de commit lisibles :</p>
      
      <ul>
        <li><strong>feat:</strong> Nouvelle fonctionnalité (MINOR bump)</li>
        <li><strong>fix:</strong> Correction de bug (PATCH bump)</li>
        <li><strong>docs:</strong> Documentation uniquement</li>
        <li><strong>style:</strong> Formatage, pas de changement logique</li>
        <li><strong>refactor:</strong> Refactoring sans changement fonctionnel</li>
        <li><strong>test:</strong> Ajout ou modification tests</li>
        <li><strong>chore:</strong> Maintenance, outils, configuration</li>
        <li><strong>BREAKING CHANGE:</strong> Dans le footer (MAJOR bump)</li>
      </ul>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-2xl p-8 mt-12 border border-violet-200/50 dark:border-violet-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">📏 Code de qualité professionnelle</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Ces conventions strictes garantissent un code maintenable, lisible et professionnel pour la gestion d'entreprise-résidence. 
          L'automatisation des vérifications via ESLint/PHPStan assure le respect des standards en continu.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">📋 Standards</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">PSR-12 + ESLint strict</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🏗️ Architecture</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Modules métier clairs</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">📝 Documentation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">PHPDoc + JSDoc complets</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-violet-900 dark:text-violet-200 mb-2">🔄 Versioning</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">SemVer + Conventional Commits</p>
          </div>
        </div>
      </div>
    </div>
  </DocShell>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Import du système de thème
const { initTheme } = useTheme()

// Fonction de traduction utilisant les fichiers JSON i18n
const route = useRoute()
const getCurrentLocale = () => {
  const path = route.path
  if (path.startsWith('/en')) return 'en'
  if (path.startsWith('/zh')) return 'zh'
  return 'fr'
}
const locale = getCurrentLocale()

// Fonction de traduction simple
const t = (key: string) => {
  const translations: Record<string, Record<string, any>> = {
    fr: {
      'conventions': {
        'title': 'Conventions',
        'description': 'Standards de développement et conventions'
      }
    }
  }
  
  const keys = key.split('.')
  let value = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}

useHead({ title: t('conventions.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


