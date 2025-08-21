<template>
  <DocShell type="tech" title="Performances" description="Optimisation et tuning pour hautes performances">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Optimisation des performances</h1>
      
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 mb-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">⚡ Performance maximale</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Stratégies complètes d'optimisation pour la plateforme de gestion d'entreprise-résidence. 
          Cache intelligent, optimisation base de données, CDN et techniques avancées pour une expérience utilisateur fluide.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">💾 Cache</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Redis multi-layer</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🗄️ Base de données</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Index et optimisation</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🌐 Frontend</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">SSR + Code splitting</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📊 Monitoring</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Métriques temps réel</p>
          </div>
        </div>
      </div>

      <!-- Architecture de cache -->
      <h2>Stratégie de cache</h2>
      
      <h3>Configuration Redis multi-layer</h3>
      <p>Cache intelligent avec plusieurs niveaux pour optimisation maximale :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">💾 Multi-Layer Caching</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Configuration Redis Laravel</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
// config/cache.php

return [
    'default' => env('CACHE_DRIVER', 'redis'),
    
    'stores' => [
        // Cache principal (données fréquemment utilisées)
        'redis' => [
            'driver' => 'redis',
            'connection' => 'cache',
            'serializer' => 'igbinary', // Plus rapide que PHP serialize
        ],
        
        // Cache sessions (données utilisateur)
        'redis_sessions' => [
            'driver' => 'redis',
            'connection' => 'sessions',
            'prefix' => 'session:',
        ],
        
        // Cache tags (pour invalidation groupée)
        'redis_tags' => [
            'driver' => 'redis',
            'connection' => 'cache',
            'prefix' => 'tag:',
        ],
        
        // Cache long terme (données statiques)
        'redis_long' => [
            'driver' => 'redis',
            'connection' => 'cache_long',
            'prefix' => 'long:',
        ],
    ],
    
    'prefix' => env('CACHE_PREFIX', 'gestion_residence'),
];

// config/database.php - Connexions Redis
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'),
    
    'options' => [
        'cluster' => env('REDIS_CLUSTER', 'redis'),
        'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
    ],
    
    'default' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_DB', '0'),
        'read_write_timeout' => 60,
        'context' => [
            'stream' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
            ],
        ],
    ],
    
    'cache' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_CACHE_DB', '1'),
    ],
    
    'sessions' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_SESSION_DB', '2'),
    ],
    
    'cache_long' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD'),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_LONG_DB', '3'),
    ],
],</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Service de cache intelligent</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class CacheService
{
    // Cache levels avec TTL différents
    const CACHE_FOREVER = 'redis_long';
    const CACHE_MEDIUM = 'redis';
    const CACHE_SHORT = 'redis_sessions';
    
    /**
     * Cache avec stratégie adaptive selon le type de données
     */
    public function remember(string $key, $ttl, callable $callback, string $level = 'medium')
    {
        $store = $this->getStoreByLevel($level);
        
        return Cache::store($store)->remember($key, $ttl, $callback);
    }
    
    /**
     * Cache avec tags pour invalidation groupée
     */
    public function rememberWithTags(string $key, array $tags, $ttl, callable $callback): mixed
    {
        return Cache::tags($tags)->remember($key, $ttl, $callback);
    }
    
    /**
     * Cache des utilisateurs avec invalidation intelligente
     */
    public function cacheUser(int $userId): array
    {
        return $this->rememberWithTags(
            "user:{$userId}",
            ['users', "user:{$userId}"],
            3600, // 1 heure
            fn() => User::with(['roles', 'permissions'])->find($userId)->toArray()
        );
    }
    
    /**
     * Cache des badges avec stratégie par statut
     */
    public function cacheBadges(string $status = 'all'): array
    {
        $ttl = match($status) {
            'actif' => 300,      // 5 minutes pour badges actifs
            'suspendu' => 1800,  // 30 minutes pour badges suspendus  
            'révoqué' => 3600,   // 1 heure pour badges révoqués
            default => 600       // 10 minutes pour tous
        };
        
        return $this->rememberWithTags(
            "badges:status:{$status}",
            ['badges', "badges:status"],
            $ttl,
            fn() => Badge::when($status !== 'all', 
                fn($q) => $q->where('statut', $status)
            )->get()->toArray()
        );
    }
    
    /**
     * Cache des statistiques avec refresh automatique
     */
    public function cacheStats(string $period = 'daily'): array
    {
        $ttl = match($period) {
            'hourly' => 300,   // 5 minutes
            'daily' => 3600,   // 1 heure
            'weekly' => 7200,  // 2 heures
            'monthly' => 14400 // 4 heures
        };
        
        return $this->remember(
            "stats:{$period}",
            $ttl,
            fn() => $this->generateStats($period),
            'medium'
        );
    }
    
    /**
     * Invalidation intelligente par événement
     */
    public function invalidateByEvent(string $event, array $data = []): void
    {
        match($event) {
            'user.updated' => $this->invalidateUserCache($data['user_id']),
            'badge.created', 'badge.updated', 'badge.revoked' => $this->invalidateBadgeCache(),
            'incident.created', 'incident.resolved' => $this->invalidateStatsCache(),
            'permissions.changed' => $this->invalidatePermissionsCache(),
            default => null
        };
    }
    
    /**
     * Cache warming pour données critiques
     */
    public function warmCache(): void
    {
        // Préchauffer cache des permissions
        $this->remember(
            'permissions:all',
            7200,
            fn() => Permission::all()->pluck('name')->toArray(),
            'long'
        );
        
        // Préchauffer statistiques courantes
        $this->cacheStats('daily');
        $this->cacheStats('weekly');
        
        // Préchauffer badges actifs
        $this->cacheBadges('actif');
        
        Log::info('Cache warming completed');
    }
    
    /**
     * Monitoring de performance cache
     */
    public function getCacheMetrics(): array
    {
        $redis = Redis::connection();
        $info = $redis->info();
        
        return [
            'memory_used' => $info['used_memory_human'],
            'memory_peak' => $info['used_memory_peak_human'],
            'hit_rate' => $this->calculateHitRate(),
            'connected_clients' => $info['connected_clients'],
            'total_commands' => $info['total_commands_processed'],
            'keyspace_hits' => $info['keyspace_hits'],
            'keyspace_misses' => $info['keyspace_misses'],
        ];
    }
    
    private function getStoreByLevel(string $level): string
    {
        return match($level) {
            'short' => self::CACHE_SHORT,
            'medium' => self::CACHE_MEDIUM,
            'long' => self::CACHE_FOREVER,
            default => self::CACHE_MEDIUM
        };
    }
    
    private function calculateHitRate(): float
    {
        $redis = Redis::connection();
        $info = $redis->info();
        
        $hits = (int) $info['keyspace_hits'];
        $misses = (int) $info['keyspace_misses'];
        
        return $hits + $misses > 0 ? ($hits / ($hits + $misses)) * 100 : 0;
    }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Optimisation base de données -->
      <h2>Optimisation base de données</h2>
      
      <h3>Index et requêtes optimisées</h3>
      <p>Stratégies d'indexation et optimisation des requêtes MySQL :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🗄️ Database Optimization</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Index strategiques</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
// database/migrations/add_performance_indexes.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Index composites pour recherches fréquentes
        Schema::table('users', function (Blueprint $table) {
            // Index pour recherche par email + statut
            $table->index(['email', 'statut'], 'idx_users_email_status');
            
            // Index pour recherche par rôle + dernière activité
            $table->index(['role', 'last_activity'], 'idx_users_role_activity');
            
            // Index pour soft deletes avec date
            $table->index(['deleted_at', 'created_at'], 'idx_users_deleted_created');
        });
        
        Schema::table('badges', function (Blueprint $table) {
            // Index composite principal pour requêtes badge
            $table->index(['user_id', 'statut', 'date_expiration'], 'idx_badges_user_status_exp');
            
            // Index pour recherche par numéro de badge
            $table->unique('numero_badge', 'idx_badges_numero_unique');
            
            // Index pour recherche par type et zones d'accès
            $table->index(['type_badge', 'zones_acces'], 'idx_badges_type_zones');
            
            // Index pour badges actifs non expirés
            $table->index(['statut', 'date_expiration'], 'idx_badges_active_valid');
        });
        
        Schema::table('incidents', function (Blueprint $table) {
            // Index composite pour tableau de bord incidents
            $table->index(['statut', 'severite', 'created_at'], 'idx_incidents_status_severity_date');
            
            // Index pour incidents par utilisateur et période
            $table->index(['user_id', 'created_at'], 'idx_incidents_user_date');
            
            // Index pour recherche par catégorie et statut
            $table->index(['categorie', 'statut'], 'idx_incidents_category_status');
        });
        
        Schema::table('messages', function (Blueprint $table) {
            // Index pour conversation thread
            $table->index(['conversation_id', 'created_at'], 'idx_messages_conversation_date');
            
            // Index pour messages non lus par utilisateur
            $table->index(['destinataire_id', 'lu', 'created_at'], 'idx_messages_unread');
            
            // Index pour recherche full-text (si supporté)
            $table->fullText(['objet', 'contenu'], 'idx_messages_fulltext');
        });
        
        Schema::table('visites', function (Blueprint $table) {
            // Index pour visites par résident et période
            $table->index(['resident_id', 'date_visite'], 'idx_visites_resident_date');
            
            // Index pour visites par statut et date
            $table->index(['statut', 'date_visite'], 'idx_visites_status_date');
            
            // Index pour visiteur récurrent
            $table->index(['visiteur_nom', 'visiteur_prenom'], 'idx_visites_visiteur');
        });
        
        Schema::table('audit_logs', function (Blueprint $table) {
            // Index pour audit par utilisateur et action
            $table->index(['user_id', 'action', 'created_at'], 'idx_audit_user_action_date');
            
            // Index pour audit par modèle et ID
            $table->index(['auditable_type', 'auditable_id'], 'idx_audit_model');
            
            // Index partitionné par date (pour purge automatique)
            $table->index(['created_at'], 'idx_audit_date');
        });
    }
    
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex('idx_users_email_status');
            $table->dropIndex('idx_users_role_activity');
            $table->dropIndex('idx_users_deleted_created');
        });
        
        Schema::table('badges', function (Blueprint $table) {
            $table->dropIndex('idx_badges_user_status_exp');
            $table->dropIndex('idx_badges_numero_unique');
            $table->dropIndex('idx_badges_type_zones');
            $table->dropIndex('idx_badges_active_valid');
        });
        
        Schema::table('incidents', function (Blueprint $table) {
            $table->dropIndex('idx_incidents_status_severity_date');
            $table->dropIndex('idx_incidents_user_date');
            $table->dropIndex('idx_incidents_category_status');
        });
        
        Schema::table('messages', function (Blueprint $table) {
            $table->dropIndex('idx_messages_conversation_date');
            $table->dropIndex('idx_messages_unread');
            $table->dropIndex('idx_messages_fulltext');
        });
        
        Schema::table('visites', function (Blueprint $table) {
            $table->dropIndex('idx_visites_resident_date');
            $table->dropIndex('idx_visites_status_date');
            $table->dropIndex('idx_visites_visiteur');
        });
        
        Schema::table('audit_logs', function (Blueprint $table) {
            $table->dropIndex('idx_audit_user_action_date');
            $table->dropIndex('idx_audit_model');
            $table->dropIndex('idx_audit_date');
        });
    }
};</code></pre>
          </div>

          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Requêtes optimisées avec Repository</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Repositories;

use App\Models\Badge;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class OptimizedBadgeRepository
{
    /**
     * Badges actifs avec eager loading optimisé
     */
    public function getActiveBadges(): Collection
    {
        return Badge::select([
                'id', 'user_id', 'numero_badge', 'type_badge', 
                'statut', 'date_expiration', 'zones_acces'
            ])
            ->with([
                'user:id,nom,prenom,email', // Sélection spécifique des colonnes
                'accessLogs' => function($query) {
                    $query->select('badge_id', 'created_at')
                          ->latest()
                          ->limit(5); // Limiter les logs récents
                }
            ])
            ->where('statut', 'actif')
            ->where('date_expiration', '>', now())
            ->orderBy('numero_badge')
            ->get();
    }
    
    /**
     * Recherche avec pagination et filtres optimisés
     */
    public function searchBadges(array $filters, int $perPage = 15)
    {
        $query = Badge::query()
            ->select([
                'badges.id', 'badges.numero_badge', 'badges.type_badge',
                'badges.statut', 'badges.date_expiration',
                'users.nom', 'users.prenom', 'users.email'
            ])
            ->join('users', 'badges.user_id', '=', 'users.id');
        
        // Filtres avec index
        if (!empty($filters['statut'])) {
            $query->where('badges.statut', $filters['statut']);
        }
        
        if (!empty($filters['type'])) {
            $query->where('badges.type_badge', $filters['type']);
        }
        
        if (!empty($filters['search'])) {
            $query->where(function($q) use ($filters) {
                $q->where('badges.numero_badge', 'like', $filters['search'] . '%')
                  ->orWhere('users.nom', 'like', $filters['search'] . '%')
                  ->orWhere('users.prenom', 'like', $filters['search'] . '%');
            });
        }
        
        // Filtre de date avec index
        if (!empty($filters['date_from'])) {
            $query->where('badges.created_at', '>=', $filters['date_from']);
        }
        
        if (!empty($filters['date_to'])) {
            $query->where('badges.created_at', '<=', $filters['date_to']);
        }
        
        return $query->orderBy('badges.created_at', 'desc')
                    ->paginate($perPage);
    }
    
    /**
     * Statistiques avec requêtes optimisées
     */
    public function getBadgeStats(): array
    {
        // Une seule requête avec groupement
        $stats = Badge::selectRaw('
                statut,
                type_badge,
                COUNT(*) as total,
                COUNT(CASE WHEN date_expiration > NOW() THEN 1 END) as non_expires
            ')
            ->groupBy(['statut', 'type_badge'])
            ->get();
        
        // Transformation en structure lisible
        $result = [
            'total' => $stats->sum('total'),
            'by_status' => $stats->groupBy('statut')->map->sum('total'),
            'by_type' => $stats->groupBy('type_badge')->map->sum('total'),
            'expires_soon' => Badge::where('date_expiration', '<=', now()->addDays(30))
                                  ->where('statut', 'actif')
                                  ->count()
        ];
        
        return $result;
    }
    
    /**
     * Badges expirant bientôt avec notification
     */
    public function getExpiringBadges(int $days = 30): Collection
    {
        return Badge::select([
                'badges.id', 'badges.numero_badge', 'badges.date_expiration',
                'users.email', 'users.nom', 'users.prenom'
            ])
            ->join('users', 'badges.user_id', '=', 'users.id')
            ->where('badges.statut', 'actif')
            ->whereBetween('badges.date_expiration', [
                now(),
                now()->addDays($days)
            ])
            ->orderBy('badges.date_expiration')
            ->get();
    }
    
    /**
     * Analyse des accès par badge avec agrégation
     */
    public function getAccessAnalytics(int $badgeId, int $days = 30): array
    {
        $analytics = DB::table('access_logs')
            ->select([
                DB::raw('DATE(created_at) as date'),
                DB::raw('COUNT(*) as access_count'),
                DB::raw('COUNT(DISTINCT HOUR(created_at)) as unique_hours'),
                'zone_acces'
            ])
            ->where('badge_id', $badgeId)
            ->where('created_at', '>=', now()->subDays($days))
            ->groupBy(['date', 'zone_acces'])
            ->orderBy('date', 'desc')
            ->get();
        
        return [
            'daily_access' => $analytics->groupBy('date'),
            'total_access' => $analytics->sum('access_count'),
            'zones_used' => $analytics->pluck('zone_acces')->unique()->values(),
            'avg_daily' => $analytics->avg('access_count'),
        ];
    }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Optimisation frontend -->
      <h2>Optimisation frontend</h2>
      
      <h3>Performance Nuxt.js</h3>
      <p>Configuration avancée pour performance maximale du frontend :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🌐 Frontend Performance</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Configuration Nuxt optimisée</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>// nuxt.config.ts
export default defineNuxtConfig({
  // SSR et prérendu optimisé
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/guide', '/technique']
    },
    compressPublicAssets: true,
    storage: {
      redis: {
        driver: 'redis',
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        db: 4, // Cache Nuxt séparé
      }
    }
  },
  
  // Optimisation bundle
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  },
  
  // Configuration des modules de performance
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-security',
  ],
  
  // Image optimization
  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
          quality: 80
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 200,
          quality: 75
        }
      }
    }
  },
  
  // Configuration PWA et caching
  pwa: {
    workbox: {
      navigateFallback: null,
      runtimeCaching: [
        {
          urlPattern: '/api/.*',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 300 // 5 minutes
            }
          }
        },
        {
          urlPattern: '/_nuxt/.*',
          handler: 'CacheFirst',
          options: {
            cacheName: 'nuxt-cache',
            expiration: {
              maxEntries: 1000,
              maxAgeSeconds: 86400 // 24 heures
            }
          }
        }
      ]
    }
  },
  
  // Headers de performance
  routeRules: {
    '/': { prerender: true },
    '/guide/**': { prerender: true },
    '/technique/**': { prerender: true },
    '/api/**': { 
      headers: { 
        'Cache-Control': 's-maxage=300',
        'X-Cache-Status': 'MISS'
      } 
    },
    '/admin/**': { ssr: false }, // SPA pour admin
  },
  
  // Optimisation runtime
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
      enableServiceWorker: true,
    }
  },
  
  // Optimisation CSS
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    viewer: false, // Disable en production
  },
  
  // Hooks d'optimisation
  hooks: {
    'render:setupMiddleware'(app) {
      // Compression gzip/brotli
      app.use(compression({
        threshold: 1024,
        level: 6,
        memLevel: 8,
      }))
    },
    
    'build:before'() {
      console.log('🚀 Starting optimized build...')
    }
  },
  
  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            ui: ['@headlessui/vue', '@heroicons/vue'],
            utils: ['lodash-es', 'date-fns'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@headlessui/vue']
    }
  }
})</code></pre>
          </div>

          <div class="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Composable de performance</h5>
            <pre class="text-xs bg-cyan-50 dark:bg-cyan-950/50 p-3 rounded overflow-x-auto"><code>// composables/usePerformance.ts
export const usePerformance = () => {
  // Lazy loading intelligent
  const lazyLoad = (importFn: () => Promise&lt;any&gt;) => {
    return defineAsyncComponent({
      loader: importFn,
      loadingComponent: () => h('div', { class: 'animate-pulse bg-gray-200 rounded' }),
      errorComponent: () => h('div', { class: 'text-red-500' }, 'Erreur de chargement'),
      delay: 200,
      timeout: 3000,
    })
  }
  
  // Debounce pour recherche
  const debouncedSearch = (fn: Function, delay = 300) => {
    let timeoutId: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn.apply(null, args), delay)
    }
  }
  
  // Infinite scroll optimisé
  const useInfiniteScroll = (fetchFn: Function, options = {}) => {
    const { threshold = 100, disabled = false } = options
    const items = ref([])
    const loading = ref(false)
    const hasMore = ref(true)
    const page = ref(1)
    
    const loadMore = async () => {
      if (loading.value || !hasMore.value || disabled) return
      
      loading.value = true
      try {
        const newItems = await fetchFn(page.value)
        if (newItems.length === 0) {
          hasMore.value = false
        } else {
          items.value.push(...newItems)
          page.value++
        }
      } catch (error) {
        console.error('Error loading more items:', error)
      } finally {
        loading.value = false
      }
    }
    
    // Observer pour détecter le scroll
    const targetRef = ref&lt;HTMLElement&gt;()
    const { stop } = useIntersectionObserver(targetRef, ([{ isIntersecting }]) => {
      if (isIntersecting) loadMore()
    }, { threshold: 0.1 })
    
    onUnmounted(stop)
    
    return { items, loading, hasMore, targetRef, loadMore }
  }
  
  // Cache local avec TTL
  const useLocalCache = (key: string, ttl = 300000) => { // 5 minutes par défaut
    const get = () => {
      const item = localStorage.getItem(key)
      if (!item) return null
      
      const { data, timestamp } = JSON.parse(item)
      if (Date.now() - timestamp > ttl) {
        localStorage.removeItem(key)
        return null
      }
      
      return data
    }
    
    const set = (data: any) => {
      localStorage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now()
      }))
    }
    
    const remove = () => localStorage.removeItem(key)
    
    return { get, set, remove }
  }
  
  // Preload crítico
  const preloadCriticalData = async () => {
    const { $api } = useNuxtApp()
    
    // Preload données utilisateur si connecté
    const { user } = useAuth()
    if (user.value) {
      // Cache permissions utilisateur
      await $api('/api/user/permissions')
      
      // Cache notifications non lues
      await $api('/api/notifications/unread')
      
      // Cache statistiques dashboard si admin
      if (user.value.role === 'admin') {
        await $api('/api/dashboard/stats')
      }
    }
  }
  
  // Optimisation images
  const optimizeImage = (src: string, options: any = {}) => {
    const { width, height, quality = 80, format = 'webp' } = options
    
    // Utiliser Nuxt Image avec optimisation
    return $img(src, {
      width,
      height,
      quality,
      format,
      loading: 'lazy',
      placeholder: true,
    })
  }
  
  // Web Vitals monitoring
  const trackWebVitals = () => {
    if (process.client) {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => sendMetric('CLS', metric))
        onFID((metric) => sendMetric('FID', metric))
        onFCP((metric) => sendMetric('FCP', metric))
        onLCP((metric) => sendMetric('LCP', metric))
        onTTFB((metric) => sendMetric('TTFB', metric))
      })
    }
  }
  
  const sendMetric = (name: string, metric: any) => {
    $fetch('/api/metrics/web-vitals', {
      method: 'POST',
      body: {
        name,
        value: metric.value,
        id: metric.id,
        url: window.location.href,
      }
    }).catch(console.error)
  }
  
  return {
    lazyLoad,
    debouncedSearch,
    useInfiniteScroll,
    useLocalCache,
    preloadCriticalData,
    optimizeImage,
    trackWebVitals,
  }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- CDN et assets -->
      <h2>CDN et optimisation assets</h2>
      
      <h3>Configuration CDN</h3>
      <p>Distribution globale des assets avec cache intelligent :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🌍 CDN Configuration</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Configuration CloudFlare</h5>
            <div class="space-y-2 text-orange-700 dark:text-orange-300">
              <h6 class="font-semibold">🚀 Page Rules optimisées</h6>
              <ul class="space-y-1 ml-4">
                <li>• <strong>*assets/*</strong> : Cache Everything, Edge TTL 1 mois</li>
                <li>• <strong>*_nuxt/*</strong> : Cache Everything, Edge TTL 1 an</li>
                <li>• <strong>*/api/*</strong> : Bypass Cache, Security Level High</li>
                <li>• <strong>*.js, *.css</strong> : Cache Everything, Minification Auto</li>
                <li>• <strong>*.jpg, *.png, *.webp</strong> : Cache Everything, Polish Lossy</li>
              </ul>
              
              <h6 class="font-semibold">⚡ Speed optimizations</h6>
              <ul class="space-y-1 ml-4">
                <li>• <strong>Auto Minify</strong> : JS, CSS, HTML activé</li>
                <li>• <strong>Brotli Compression</strong> : Activé pour tous assets</li>
                <li>• <strong>HTTP/2 Server Push</strong> : Activé pour ressources critiques</li>
                <li>• <strong>Early Hints</strong> : Preload CSS et JS critiques</li>
                <li>• <strong>Rocket Loader</strong> : Désactivé (conflit Nuxt)</li>
              </ul>
              
              <h6 class="font-semibold">🔒 Security features</h6>
              <ul class="space-y-1 ml-4">
                <li>• <strong>SSL/TLS</strong> : Full (Strict) avec HSTS</li>
                <li>• <strong>WAF</strong> : Activé avec règles OWASP</li>
                <li>• <strong>Bot Fight Mode</strong> : Activé avec whitelist API</li>
                <li>• <strong>Rate Limiting</strong> : 100 req/min par IP pour API</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <!-- Monitoring performance -->
      <h2>Monitoring performance</h2>
      
      <h3>Métriques de performance</h3>
      <p>Surveillance continue des performances avec alertes proactives :</p>
      
      <div class="not-prose bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 my-6 border border-teal-200 dark:border-teal-800/30">
        <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">📊 Performance Monitoring</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
            <h5 class="font-semibold text-teal-900 dark:text-teal-200 mb-2">Service de monitoring performance</h5>
            <pre class="text-xs bg-teal-50 dark:bg-teal-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Services;

use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Log;

class PerformanceMonitoringService
{
    private string $redisPrefix = 'perf:';
    
    /**
     * Enregistre métriques de performance
     */
    public function recordMetric(string $metric, float $value, array $tags = []): void
    {
        $timestamp = time();
        $key = $this->redisPrefix . $metric . ':' . date('Y-m-d-H', $timestamp);
        
        // Stocker valeur avec tags
        Redis::zadd($key, $timestamp, json_encode([
            'value' => $value,
            'timestamp' => $timestamp,
            'tags' => $tags
        ]));
        
        // TTL de 7 jours pour métriques
        Redis::expire($key, 604800);
        
        // Vérifier seuils d'alerte
        $this->checkThresholds($metric, $value, $tags);
    }
    
    /**
     * Analyse temps de réponse API
     */
    public function analyzeApiPerformance(): array
    {
        $metrics = [];
        $endpoints = ['users', 'badges', 'incidents', 'messages'];
        
        foreach ($endpoints as $endpoint) {
            $key = $this->redisPrefix . "api_response_time:{$endpoint}";
            $values = $this->getRecentValues($key, 3600); // Dernière heure
            
            if (!empty($values)) {
                $metrics[$endpoint] = [
                    'avg' => array_sum($values) / count($values),
                    'p95' => $this->percentile($values, 95),
                    'p99' => $this->percentile($values, 99),
                    'count' => count($values),
                    'max' => max($values),
                    'min' => min($values),
                ];
            }
        }
        
        return $metrics;
    }
    
    /**
     * Métriques base de données
     */
    public function getDatabaseMetrics(): array
    {
        // Requêtes lentes
        $slowQueries = DB::select("
            SELECT query_time, sql_text, lock_time 
            FROM mysql.slow_log 
            WHERE start_time >= DATE_SUB(NOW(), INTERVAL 1 HOUR)
            ORDER BY query_time DESC 
            LIMIT 10
        ");
        
        // Connexions actives
        $connections = DB::select("SHOW STATUS LIKE 'Threads_connected'")[0];
        
        // Cache hit ratio
        $cacheStats = DB::select("
            SELECT 
                (Qcache_hits / (Qcache_hits + Qcache_inserts)) * 100 as hit_ratio
            FROM (
                SELECT 
                    VARIABLE_VALUE as Qcache_hits 
                FROM information_schema.GLOBAL_STATUS 
                WHERE VARIABLE_NAME = 'Qcache_hits'
            ) a,
            (
                SELECT 
                    VARIABLE_VALUE as Qcache_inserts 
                FROM information_schema.GLOBAL_STATUS 
                WHERE VARIABLE_NAME = 'Qcache_inserts'
            ) b
        ");
        
        return [
            'slow_queries' => count($slowQueries),
            'active_connections' => $connections->Value,
            'cache_hit_ratio' => $cacheStats[0]->hit_ratio ?? 0,
            'recent_slow_queries' => $slowQueries,
        ];
    }
    
    /**
     * Métriques cache Redis
     */
    public function getCacheMetrics(): array
    {
        $info = Redis::info();
        
        $hitRate = 0;
        if (($info['keyspace_hits'] + $info['keyspace_misses']) > 0) {
            $hitRate = ($info['keyspace_hits'] / 
                       ($info['keyspace_hits'] + $info['keyspace_misses'])) * 100;
        }
        
        return [
            'hit_rate' => round($hitRate, 2),
            'memory_used' => $info['used_memory_human'],
            'memory_peak' => $info['used_memory_peak_human'],
            'connected_clients' => $info['connected_clients'],
            'total_commands' => $info['total_commands_processed'],
            'keys' => Redis::dbSize(),
            'expired_keys' => $info['expired_keys'],
        ];
    }
    
    /**
     * Optimisations automatiques
     */
    public function runAutoOptimizations(): array
    {
        $optimizations = [];
        
        // Purge cache expiré
        $expiredKeys = Redis::keys($this->redisPrefix . '*:' . date('Y-m-d-H', time() - 86400));
        if (!empty($expiredKeys)) {
            Redis::del($expiredKeys);
            $optimizations[] = "Purged " . count($expiredKeys) . " expired cache keys";
        }
        
        // Optimisation tables MySQL si nécessaire
        $fragmentation = $this->checkTableFragmentation();
        if ($fragmentation > 10) { // Plus de 10% fragmentation
            DB::statement('OPTIMIZE TABLE users, badges, incidents, messages');
            $optimizations[] = "Optimized database tables (fragmentation: {$fragmentation}%)";
        }
        
        // Warmup cache si hit rate faible
        $cacheMetrics = $this->getCacheMetrics();
        if ($cacheMetrics['hit_rate'] < 80) {
            $this->warmupCache();
            $optimizations[] = "Warmed up cache (hit rate was {$cacheMetrics['hit_rate']}%)";
        }
        
        return $optimizations;
    }
    
    /**
     * Recommandations performance
     */
    public function getPerformanceRecommendations(): array
    {
        $recommendations = [];
        
        // Analyse API performance
        $apiMetrics = $this->analyzeApiPerformance();
        foreach ($apiMetrics as $endpoint => $metrics) {
            if ($metrics['avg'] > 1000) { // Plus de 1 seconde
                $recommendations[] = [
                    'type' => 'warning',
                    'category' => 'API',
                    'message' => "Endpoint /{$endpoint} lent (avg: {$metrics['avg']}ms)",
                    'suggestion' => 'Ajouter cache ou optimiser requêtes'
                ];
            }
        }
        
        // Analyse base de données
        $dbMetrics = $this->getDatabaseMetrics();
        if ($dbMetrics['cache_hit_ratio'] < 80) {
            $recommendations[] = [
                'type' => 'critical',
                'category' => 'Database',
                'message' => "Cache hit ratio faible ({$dbMetrics['cache_hit_ratio']}%)",
                'suggestion' => 'Augmenter query_cache_size ou revoir les requêtes'
            ];
        }
        
        if ($dbMetrics['slow_queries'] > 10) {
            $recommendations[] = [
                'type' => 'warning',
                'category' => 'Database',
                'message' => "{$dbMetrics['slow_queries']} requêtes lentes détectées",
                'suggestion' => 'Optimiser les index ou requêtes problématiques'
            ];
        }
        
        return $recommendations;
    }
    
    private function checkThresholds(string $metric, float $value, array $tags): void
    {
        $thresholds = [
            'api_response_time' => 2000, // 2 secondes
            'memory_usage' => 85, // 85%
            'cpu_usage' => 80, // 80%
            'disk_usage' => 90, // 90%
        ];
        
        if (isset($thresholds[$metric]) && $value > $thresholds[$metric]) {
            Log::warning("Performance threshold exceeded", [
                'metric' => $metric,
                'value' => $value,
                'threshold' => $thresholds[$metric],
                'tags' => $tags
            ]);
            
            // Envoyer alerte via notification service
            app(NotificationService::class)->sendPerformanceAlert($metric, $value);
        }
    }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8 mt-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">⚡ Performance optimale</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Configuration complète pour performance maximale de la plateforme de gestion d'entreprise-résidence. 
          Cache intelligent, optimisation base de données, CDN et monitoring proactif pour expérience utilisateur optimale.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">💾 Cache</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Multi-layer intelligent</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🗄️ Database</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Index et optimisation</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🌐 Frontend</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">SSR + Code splitting</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📊 Monitoring</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Métriques temps réel</p>
          </div>
        </div>
      </div>
    </div>
  </DocShell>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '../../composables/useTheme'
  
  // Import du système de thème
  const { initTheme } = useTheme()
  useHead({ title: 'Performances - Documentation technique' })

  onMounted(() => {
    initTheme()
  })
</script>


