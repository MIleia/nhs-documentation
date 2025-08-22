<template>
  <DocShell type="tech" :title="t('technique.title')" :description="t('technique.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>{{ t('technique.title') }}</h1>
      
      <div class="not-prose bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-purple-200/50 dark:border-purple-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏗️ {{ t('technique.overview.title') }}</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {{ t('technique.overview.description') }}
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🎯 {{ t('technique.overview.architecture.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('technique.overview.architecture.description') }}</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🔧 {{ t('technique.overview.technologies.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('technique.overview.technologies.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Architecture Section -->
      <h2>🏗️ {{ t('technique.architecture.title') }}</h2>
      
      <h3>{{ t('technique.architecture.overview.title') }}</h3>
      <p>{{ t('technique.architecture.overview.description') }}</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm overflow-x-auto"><code>Frontend (Nuxt.js) :3000
        ↓
Backend-Client :8000 (Proxy + Database)
        ↓
Backend-NHS :8001 (Business Logic)</code></pre>
      </div>

      <h3>{{ t('technique.architecture.backend_client.title') }}</h3>
      <ul>
        <li><strong>{{ t('technique.architecture.backend_client.role') }}</strong></li>
        <li><strong>{{ t('technique.architecture.backend_client.responsibilities') }}</strong>
          <ul>
            <li>{{ t('technique.architecture.backend_client.features.auth') }}</li>
            <li>{{ t('technique.architecture.backend_client.features.database') }}</li>
            <li>{{ t('technique.architecture.backend_client.features.files') }}</li>
            <li>{{ t('technique.architecture.backend_client.features.proxy') }}</li>
            <li>{{ t('technique.architecture.backend_client.features.settings') }}</li>
          </ul>
        </li>
        <li><strong>Technologies :</strong> {{ t('technique.architecture.backend_client.technologies') }}</li>
      </ul>

      <h3>{{ t('technique.architecture.backend_nhs.title') }}</h3>
      <ul>
        <li><strong>{{ t('technique.architecture.backend_nhs.role') }}</strong></li>
        <li><strong>{{ t('technique.architecture.backend_nhs.responsibilities') }}</strong>
          <ul>
            <li>{{ t('technique.architecture.backend_nhs.features.business') }}</li>
            <li>{{ t('technique.architecture.backend_nhs.features.validation') }}</li>
            <li>{{ t('technique.architecture.backend_nhs.features.proprietary') }}</li>
            <li>{{ t('technique.architecture.backend_nhs.features.api') }}</li>
            <li>{{ t('technique.architecture.backend_nhs.features.analytics') }}</li>
          </ul>
        </li>
        <li><strong>Technologies :</strong> {{ t('technique.architecture.backend_nhs.technologies') }}</li>
      </ul>

      <h3>{{ t('technique.architecture.frontend.title') }}</h3>
      <ul>
        <li><strong>Technologies :</strong> {{ t('technique.architecture.frontend.technologies') }}</li>
        <li><strong>Fonctionnalités :</strong>
          <ul>
            <li>{{ t('technique.architecture.frontend.features.responsive') }}</li>
            <li>{{ t('technique.architecture.frontend.features.theme') }}</li>
            <li>{{ t('technique.architecture.frontend.features.i18n') }}</li>
            <li>{{ t('technique.architecture.frontend.features.pwa') }}</li>
            <li>{{ t('technique.architecture.frontend.features.stores') }}</li>
          </ul>
        </li>
      </ul>

      <!-- API Documentation -->
      <h2>🔌 {{ t('technique.api.title') }}</h2>
      
      <h3>{{ t('technique.api.base_urls.title') }}</h3>
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <ul class="space-y-2 text-sm">
          <li><strong>{{ t('technique.api.base_urls.backend_client') }}</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8000/api</code></li>
          <li><strong>{{ t('technique.api.base_urls.backend_nhs_proxy') }}</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8000/api/nhs</code></li>
          <li><strong>{{ t('technique.api.base_urls.backend_nhs_direct') }}</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8001/api</code></li>
        </ul>
      </div>

      <h3>{{ t('technique.api.auth.title') }}</h3>
      <p>{{ t('technique.api.auth.description') }}</p>
      
      <h4>{{ t('technique.api.auth.login.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <strong>POST</strong> <code>/api/login</code>
        <pre class="mt-2 text-sm"><code>{
  "email": "admin@residence.com",
  "password": "1234"
}</code></pre>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ t('technique.api.auth.login.returns') }}</p>
      </div>

      <h4>{{ t('technique.api.auth.headers') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>Authorization: Bearer {access_token}
Accept: application/json
Content-Type: application/json</code></pre>
      </div>

      <h3>{{ t('technique.api.endpoints.title') }}</h3>
      
      <h4>👤 {{ t('technique.api.endpoints.users.title') }}</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/user</code> - {{ t('technique.api.endpoints.users.get_user') }}
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/admin/persons</code> - {{ t('technique.api.endpoints.users.get_persons') }}
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/admin/persons</code> - {{ t('technique.api.endpoints.users.create_person') }}
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <strong class="text-orange-700 dark:text-orange-300">PUT</strong> <code>/api/admin/persons/{id}</code> - {{ t('technique.api.endpoints.users.update_person') }}
        </div>
        <div class="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800/30">
          <strong class="text-red-700 dark:text-red-300">DELETE</strong> <code>/api/admin/persons/{id}</code> - {{ t('technique.api.endpoints.users.delete_person') }}
        </div>
      </div>

      <h4>🎫 {{ t('technique.api.endpoints.badges.title') }}</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/nhs/badges</code> - {{ t('technique.api.endpoints.badges.list') }}
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/badges/{numero}/toggle-status</code> - {{ t('technique.api.endpoints.badges.toggle_status') }}
        </div>
      </div>

      <h4>💬 {{ t('technique.api.endpoints.messaging.title') }}</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/conversations</code> - {{ t('technique.api.endpoints.messaging.conversations') }}
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/conversations</code> - {{ t('technique.api.endpoints.messaging.create_conversation') }}
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/messages/{groupId}</code> - {{ t('technique.api.endpoints.messaging.messages') }}
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/messages/{groupId}</code> - {{ t('technique.api.endpoints.messaging.send_message') }}
        </div>
      </div>

      <h4>🚨 {{ t('technique.api.endpoints.incidents.title') }}</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/incidents</code> - {{ t('technique.api.endpoints.incidents.list') }}
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/incidents</code> - {{ t('technique.api.endpoints.incidents.create') }}
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <strong class="text-orange-700 dark:text-orange-300">PUT</strong> <code>/api/incidents/{id}</code> - {{ t('technique.api.endpoints.incidents.update') }}
        </div>
      </div>

      <!-- Database Documentation -->
      <h2>🗄️ {{ t('technique.database.title') }}</h2>
      
      <h3>{{ t('technique.database.model.title') }}</h3>
      <p>{{ t('technique.database.model.description') }}</p>

      <h3>{{ t('technique.database.tables.title') }}</h3>
      
      <h4>{{ t('technique.database.tables.personne.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('technique.database.tables.personne.description') }}</p>
        <pre class="text-sm"><code>id_personne (PK)
email (UNIQUE)
nom, prenom
mot_de_passe (hash)
numero_telephone
photo_profil</code></pre>
      </div>

      <h4>{{ t('technique.database.tables.roles.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('technique.database.tables.roles.description') }}</p>
        <pre class="text-sm"><code>admin: niveau_acces (super_admin/admin_standard)
gardien: id_personne
resident: id_personne, adresse_logement</code></pre>
      </div>

      <h4>{{ t('technique.database.tables.badge.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('technique.database.tables.badge.description') }}</p>
        <pre class="text-sm"><code>numero (PK)
id_utilisateur (FK nullable - badge peut être non assigné)
commentaire, droit
statut (actif/inactif/suspendu/en_attente)
zone_acces, niveau_securite</code></pre>
      </div>

      <h4>{{ t('technique.database.tables.message.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('technique.database.tables.message.description') }}</p>
        <pre class="text-sm"><code>groupe_message: nom_groupe, date_creation
message: contenu_message, date_envoi, a_fichiers, reply_to
personne_groupe: liaison many-to-many</code></pre>
      </div>

      <h4>{{ t('technique.database.tables.incident.title') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ t('technique.database.tables.incident.description') }}</p>
        <pre class="text-sm"><code>id, datetime, object
statut (a_venir/en_cours/resolu)
id_signaleur, pieces_jointes (JSON)</code></pre>
      </div>

      <h3>{{ t('technique.database.test_accounts.title') }}</h3>
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">{{ t('technique.database.test_accounts.admin.title') }}</h4>
        <ul class="space-y-1 text-sm">
          <li><strong>{{ t('technique.database.test_accounts.admin.email') }}</strong> admin@residence.com</li>
          <li><strong>{{ t('technique.database.test_accounts.admin.password') }}</strong> 1234</li>
          <li><strong>{{ t('technique.database.test_accounts.admin.role') }}</strong> Super Admin</li>
          <li><strong>{{ t('technique.database.test_accounts.admin.badge') }}</strong> #1 (Accès total)</li>
        </ul>
      </div>

      <!-- Deployment -->
      <h2>🚀 {{ t('technique.deployment.title') }}</h2>
      
      <h3>{{ t('technique.deployment.requirements.title') }}</h3>
      <ul>
        <li>PHP 8.2+</li>
        <li>Node.js 18+</li>
        <li>MySQL 8.0+</li>
        <li>Composer</li>
        <li>npm/yarn</li>
      </ul>

      <h3>{{ t('technique.deployment.installation.title') }}</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code># 1. Base de données
mysql -u root -p < final.sql

# 2. Backend-Client
cd backend-client
composer install
cp .env.example .env
php artisan key:generate
php artisan serve --port=8000

# 3. Backend-NHS  
cd ../backend-nhs
composer install
cp .env.example .env
php artisan key:generate
php artisan serve --port=8001

# 4. Frontend
cd ../frontend
npm install
npm run dev</code></pre>
      </div>

      <h3>{{ t('technique.deployment.environment.title') }}</h3>
      <h4>{{ t('technique.deployment.environment.backend_client') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>DB_DATABASE=gestion_entreprise_residence
DB_USERNAME=root
DB_PASSWORD=

NHS_API_URL=http://localhost:8001
SANCTUM_STATEFUL_DOMAINS=localhost:3000,localhost:3001</code></pre>
      </div>

      <h4>{{ t('technique.deployment.environment.backend_nhs') }}</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>APP_NAME="Backend NHS"
APP_PORT=8001
DB_DATABASE=gestion_entreprise_residence</code></pre>
      </div>

      <!-- Security -->
      <h2>🔒 {{ t('technique.security.title') }}</h2>
      
      <h3>{{ t('technique.security.auth.title') }}</h3>
      <ul>
        <li><strong>Laravel Sanctum :</strong> {{ t('technique.security.auth.sanctum') }}</li>
        <li><strong>Hash passwords :</strong> {{ t('technique.security.auth.hash') }}</li>
        <li><strong>Rate limiting :</strong> {{ t('technique.security.auth.rate_limiting') }}</li>
        <li><strong>CORS :</strong> {{ t('technique.security.auth.cors') }}</li>
      </ul>

      <h3>{{ t('technique.security.validation.title') }}</h3>
      <ul>
        <li>{{ t('technique.security.validation.server') }}</li>
        <li>{{ t('technique.security.validation.sanitization') }}</li>
        <li>{{ t('technique.security.validation.protection') }}</li>
        <li>{{ t('technique.security.validation.upload') }}</li>
      </ul>

      <h3>{{ t('technique.security.monitoring.title') }}</h3>
      <ul>
        <li>{{ t('technique.security.monitoring.table') }}</li>
        <li>{{ t('technique.security.monitoring.laravel') }}</li>
        <li>{{ t('technique.security.monitoring.proxy') }}</li>
        <li>{{ t('technique.security.monitoring.alerts') }}</li>
      </ul>

      <!-- Maintenance -->
      <h2>🔧 {{ t('technique.maintenance.title') }}</h2>
      
      <h3>{{ t('technique.maintenance.commands.title') }}</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code># Cache Laravel
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Logs
php artisan log:clear

# Optimisation production
php artisan optimize
npm run build</code></pre>
      </div>

      <h3>{{ t('technique.maintenance.monitoring.title') }}</h3>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong>{{ t('technique.maintenance.monitoring.backend_client') }}</strong> <code>GET /api/health</code>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong>{{ t('technique.maintenance.monitoring.backend_nhs') }}</strong> <code>GET /api/nhs/status</code>
        </div>
      </div>

      <h3>{{ t('technique.maintenance.backup.title') }}</h3>
      <ul>
        <li><strong>Base de données :</strong> {{ t('technique.maintenance.backup.database') }}</li>
        <li><strong>Fichiers uploads :</strong> {{ t('technique.maintenance.backup.files') }}</li>
        <li><strong>Configuration :</strong> {{ t('technique.maintenance.backup.config') }}</li>
      </ul>

      <h3>{{ t('technique.maintenance.performance.title') }}</h3>
      <ul>
        <li>{{ t('technique.maintenance.performance.cache') }}</li>
        <li>{{ t('technique.maintenance.performance.optimization') }}</li>
        <li>{{ t('technique.maintenance.performance.compression') }}</li>
        <li>{{ t('technique.maintenance.performance.cdn') }}</li>
      </ul>

      <!-- Troubleshooting -->
      <h2>🔍 {{ t('technique.troubleshooting.title') }}</h2>
      
      <h3>{{ t('technique.troubleshooting.common_issues.title') }}</h3>
      
      <h4>{{ t('technique.troubleshooting.common_issues.nhs_connection.title') }}</h4>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-4 my-4 border border-red-200 dark:border-red-800/30">
        <p class="text-sm mb-2"><strong>Symptôme :</strong> "{{ t('technique.troubleshooting.common_issues.nhs_connection.symptom') }}"</p>
        <p class="text-sm mb-2"><strong>{{ t('technique.troubleshooting.common_issues.nhs_connection.checks') }}</strong></p>
        <ul class="text-sm space-y-1">
          <li v-for="solution in t('technique.troubleshooting.common_issues.nhs_connection.solutions')" :key="solution">• {{ solution }}</li>
        </ul>
      </div>

      <h4>{{ t('technique.troubleshooting.common_issues.auth_error.title') }}</h4>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-4 my-4 border border-red-200 dark:border-red-800/30">
        <p class="text-sm mb-2"><strong>Symptôme :</strong> "{{ t('technique.troubleshooting.common_issues.auth_error.symptom') }}"</p>
        <p class="text-sm mb-2"><strong>Solutions :</strong></p>
        <ul class="text-sm space-y-1">
          <li v-for="solution in t('technique.troubleshooting.common_issues.auth_error.solutions')" :key="solution">• {{ solution }}</li>
        </ul>
      </div>

      <h3>{{ t('technique.troubleshooting.debug_logs.title') }}</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code># Logs Laravel temps réel
tail -f storage/logs/laravel.log

# Logs proxy
grep "Proxy" storage/logs/laravel.log

# Logs base de données  
grep "database" storage/logs/laravel.log</code></pre>
      </div>

      <!-- Support -->
      <h2>📞 {{ t('technique.support.title') }}</h2>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 my-8 border border-blue-200/50 dark:border-blue-800/30">
        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">{{ t('technique.support.contact.title') }}</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">{{ t('technique.support.contact.urgent.title') }}</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• {{ t('technique.support.contact.urgent.email') }}</li>
              <li>• {{ t('technique.support.contact.urgent.availability') }}</li>
              <li>• {{ t('technique.support.contact.urgent.sla') }}</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">{{ t('technique.support.contact.development.title') }}</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• {{ t('technique.support.contact.development.email') }}</li>
              <li>• {{ t('technique.support.contact.development.hours') }}</li>
              <li>• {{ t('technique.support.contact.development.docs') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl border border-purple-200 dark:border-purple-700">
        <p class="text-sm text-purple-700 dark:text-purple-300">
          <strong>{{ t('technique.version.doc_version') }}</strong> 2.1.0 • 
          <strong>{{ t('technique.version.last_update') }}</strong> Août 2025 •
          <strong>{{ t('technique.version.architecture') }}</strong> Dual Backend v2.0
        </p>
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
  // Traductions directes depuis les fichiers JSON
  const translations: Record<string, Record<string, any>> = {
    fr: {
      'technique': {
        'title': 'Documentation Technique Complète',
        'description': 'Architecture, API, opérations & maintenance',
        'overview': {
          'title': 'Vue d\'ensemble technique',
          'description': 'Cette documentation s\'adresse aux équipes de développement, DevOps et support technique. Elle décrit l\'architecture dual backend innovante, les flux de données, l\'API complète, la base de données et les procédures opérationnelles.',
          'architecture': {
            'title': 'Architecture',
            'description': 'Dual backend : Backend-Client (proxy + DB) + Backend-NHS (logique métier)'
          },
          'technologies': {
            'title': 'Technologies',
            'description': 'Nuxt.js 3.18, Laravel 11, MySQL, Docker, Sanctum'
          }
        },
        'architecture': {
          'title': 'Architecture Système',
          'overview': {
            'title': 'Vue d\'ensemble',
            'description': 'L\'application utilise une architecture innovante en microservices avec 2 backends spécialisés :'
          },
          'backend_client': {
            'title': 'Backend-Client (Port 8000)',
            'role': 'Rôle principal : Proxy intelligent + Accès direct base de données',
            'responsibilities': 'Responsabilités :',
            'features': {
              'auth': 'Authentification locale avec Laravel Sanctum',
              'database': 'Accès direct à la base de données MySQL',
              'files': 'Gestion des fichiers et uploads',
              'proxy': 'Proxy transparent vers Backend-NHS',
              'settings': 'Gestion des paramètres d\'application (logos, couleurs)'
            },
            'technologies': 'Technologies : Laravel 11, MySQL, Sanctum'
          },
          'backend_nhs': {
            'title': 'Backend-NHS (Port 8001)',
            'role': 'Rôle principal : Logique métier complète et fonctionnalités propriétaires',
            'responsibilities': 'Responsabilités :',
            'features': {
              'business': 'Business logic et règles métier',
              'validation': 'Validation des données complexes',
              'proprietary': 'Fonctionnalités NHS propriétaires',
              'api': 'API endpoints métier',
              'analytics': 'Analytics et reporting avancé'
            },
            'technologies': 'Technologies : Laravel 11, API REST'
          },
          'frontend': {
            'title': 'Frontend (Port 3000/3001)',
            'technologies': 'Technologies : Nuxt.js 3.18, Vue.js 3, TypeScript, Tailwind CSS',
            'features': {
              'responsive': 'Interface utilisateur responsive et moderne',
              'theme': 'Système de thème (clair/sombre)',
              'i18n': 'Internationalisation (fr, en, zh)',
              'pwa': 'PWA et optimisations performance',
              'stores': 'Stores Pinia pour la gestion d\'état'
            }
          }
        },
        'api': {
          'title': 'Documentation API',
          'base_urls': {
            'title': 'Base URLs',
            'backend_client': 'Backend-Client :',
            'backend_nhs_proxy': 'Backend-NHS (via proxy) :',
            'backend_nhs_direct': 'Backend-NHS (direct) :'
          },
          'auth': {
            'title': 'Authentification',
            'description': 'Le système utilise Laravel Sanctum pour l\'authentification token-based.',
            'login': {
              'title': 'Login',
              'returns': 'Retourne : access_token, user data, expires_at'
            },
            'headers': 'Headers d\'authentification'
          },
          'endpoints': {
            'title': 'Endpoints Principaux',
            'users': {
              'title': 'Gestion des utilisateurs',
              'get_user': 'Informations utilisateur connecté',
              'get_persons': 'Liste des personnes (admin)',
              'create_person': 'Créer une personne',
              'update_person': 'Modifier une personne',
              'delete_person': 'Supprimer une personne'
            },
            'badges': {
              'title': 'Gestion des badges',
              'list': 'Liste des badges',
              'toggle_status': 'Changer statut badge'
            },
            'messaging': {
              'title': 'Messagerie',
              'conversations': 'Liste des conversations',
              'create_conversation': 'Créer une conversation',
              'messages': 'Messages d\'un groupe',
              'send_message': 'Envoyer un message'
            },
            'incidents': {
              'title': 'Gestion des incidents',
              'list': 'Liste des incidents',
              'create': 'Créer un incident',
              'update': 'Modifier un incident'
            }
          }
        },
        'database': {
          'title': 'Base de Données',
          'model': {
            'title': 'Modèle de données',
            'description': 'La base de données gestion_entreprise_residence utilise MySQL avec un charset UTF8MB4 pour supporter les emojis et caractères internationaux.'
          },
          'tables': {
            'title': 'Tables principales',
            'personne': {
              'title': 'personne',
              'description': 'Table centrale contenant tous les utilisateurs (admins, gardiens, résidents, invités)'
            },
            'roles': {
              'title': 'admin, gardien, resident',
              'description': 'Tables de spécialisation avec FK vers personne'
            },
            'badge': {
              'title': 'badge',
              'description': 'Gestion des badges d\'accès physique'
            },
            'message': {
              'title': 'message, groupe_message',
              'description': 'Système de messagerie interne avec groupes'
            },
            'incident': {
              'title': 'incident',
              'description': 'Gestion des incidents et signalements'
            }
          },
          'test_accounts': {
            'title': 'Comptes de test',
            'admin': {
              'title': 'Administrateur principal',
              'email': 'Email :',
              'password': 'Mot de passe :',
              'role': 'Rôle :',
              'badge': 'Badge :'
            }
          }
        },
        'deployment': {
          'title': 'Déploiement',
          'requirements': {
            'title': 'Prérequis'
          },
          'installation': {
            'title': 'Installation locale'
          },
          'environment': {
            'title': 'Variables d\'environnement',
            'backend_client': 'Backend-Client (.env)',
            'backend_nhs': 'Backend-NHS (.env)'
          }
        },
        'security': {
          'title': 'Sécurité',
          'auth': {
            'title': 'Authentification',
            'sanctum': 'Laravel Sanctum : Tokens SPA sécurisés',
            'hash': 'Hash passwords : bcrypt avec salt automatique',
            'rate_limiting': 'Rate limiting : Protection contre brute force',
            'cors': 'CORS : Configuration restrictive'
          },
          'validation': {
            'title': 'Validation des données',
            'server': 'Validation côté serveur sur tous les endpoints',
            'sanitization': 'Sanitisation des entrées utilisateur',
            'protection': 'Protection XSS et injection SQL',
            'upload': 'Upload de fichiers sécurisé avec vérification MIME'
          },
          'monitoring': {
            'title': 'Logs et monitoring',
            'table': 'Table logs pour traçabilité des actions',
            'laravel': 'Logs Laravel dans storage/logs/',
            'proxy': 'Monitoring des requêtes proxy',
            'alerts': 'Alertes sur erreurs critiques'
          }
        },
        'maintenance': {
          'title': 'Maintenance & Opérations',
          'commands': {
            'title': 'Commandes utiles'
          },
          'monitoring': {
            'title': 'Monitoring des services',
            'backend_client': 'Health check Backend-Client :',
            'backend_nhs': 'Health check Backend-NHS :'
          },
          'backup': {
            'title': 'Sauvegarde',
            'database': 'Base de données : mysqldump quotidien',
            'files': 'Fichiers uploads : rsync des dossiers storage et public',
            'config': 'Configuration : sauvegarde des fichiers .env'
          },
          'performance': {
            'title': 'Performances',
            'cache': 'Cache Redis pour les sessions (optionnel)',
            'optimization': 'Optimisation des requêtes avec index MySQL',
            'compression': 'Compression gzip/brotli',
            'cdn': 'CDN pour les assets statiques'
          }
        },
        'troubleshooting': {
          'title': 'Dépannage',
          'common_issues': {
            'title': 'Problèmes courants',
            'nhs_connection': {
              'title': 'Erreur de connexion Backend-NHS',
              'symptom': 'NHS Backend unavailable',
              'checks': 'Vérifications :',
              'solutions': [
                'Backend-NHS en cours d\'exécution sur port 8001',
                'Variable NHS_API_URL correcte dans backend-client',
                'Firewall/antivirus ne bloque pas le port'
              ]
            },
            'auth_error': {
              'title': 'Erreur d\'authentification',
              'symptom': 'Unauthenticated',
              'solutions': [
                'Vérifier le token Bearer dans l\'en-tête',
                'Vérifier expiration du token',
                'Réinitialiser la session utilisateur'
              ]
            }
          },
          'debug_logs': {
            'title': 'Logs de débogage'
          }
        },
        'support': {
          'title': 'Support Technique',
          'contact': {
            'title': 'Contact équipe technique',
            'urgent': {
              'title': 'Urgences techniques',
              'email': 'Email : tech-urgent@neostart.tech',
              'availability': 'Disponibilité : 24/7',
              'sla': 'SLA : 2h maximum'
            },
            'development': {
              'title': 'Support développement',
              'email': 'Email : dev-support@neostart.tech',
              'hours': 'Horaires : 9h-18h (CET)',
              'docs': 'Documentation : docs.neostart.tech'
            }
          }
        },
        'version': {
          'doc_version': 'Version de la documentation :',
          'last_update': 'Dernière mise à jour :',
          'architecture': 'Architecture :'
        }
      }
    }
  }
  
  // Navigation dans l'objet de traductions
  const keys = key.split('.')
  let value = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key // Retourne la clé si la traduction n'est pas trouvée
    }
  }
  
  return typeof value === 'string' ? value : key
}

// Configuration des métadonnées
useHead({
  title: 'Documentation technique complète'
})

// Initialisation du thème
onMounted(() => {
  initTheme()
})
</script>
