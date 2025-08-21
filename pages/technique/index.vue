<template>
  <DocShell type="tech" title="Référence technique" description="Architecture, API, opérations & maintenance">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Documentation Technique Complète</h1>
      
      <div class="not-prose bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-purple-200/50 dark:border-purple-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏗️ Vue d'ensemble technique</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette documentation s'adresse aux équipes de développement, DevOps et support technique. 
          Elle décrit l'architecture dual backend innovante, les flux de données, l'API complète, 
          la base de données et les procédures opérationnelles.
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🎯 Architecture</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Dual backend : Backend-Client (proxy + DB) + Backend-NHS (logique métier)</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🔧 Technologies</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Nuxt.js 3.18, Laravel 11, MySQL, Docker, Sanctum</p>
          </div>
        </div>
      </div>

      <!-- Architecture Section -->
      <h2>🏗️ Architecture Système</h2>
      
      <h3>Vue d'ensemble</h3>
      <p>L'application utilise une architecture innovante en microservices avec 2 backends spécialisés :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm overflow-x-auto"><code>Frontend (Nuxt.js) :3000
        ↓
Backend-Client :8000 (Proxy + Database)
        ↓
Backend-NHS :8001 (Business Logic)</code></pre>
      </div>

      <h3>Backend-Client (Port 8000)</h3>
      <ul>
        <li><strong>Rôle principal :</strong> Proxy intelligent + Accès direct base de données</li>
        <li><strong>Responsabilités :</strong>
          <ul>
            <li>Authentification locale avec Laravel Sanctum</li>
            <li>Accès direct à la base de données MySQL</li>
            <li>Gestion des fichiers et uploads</li>
            <li>Proxy transparent vers Backend-NHS</li>
            <li>Gestion des paramètres d'application (logos, couleurs)</li>
          </ul>
        </li>
        <li><strong>Technologies :</strong> Laravel 11, MySQL, Sanctum</li>
      </ul>

      <h3>Backend-NHS (Port 8001)</h3>
      <ul>
        <li><strong>Rôle principal :</strong> Logique métier complète et fonctionnalités propriétaires</li>
        <li><strong>Responsabilités :</strong>
          <ul>
            <li>Business logic et règles métier</li>
            <li>Validation des données complexes</li>
            <li>Fonctionnalités NHS propriétaires</li>
            <li>API endpoints métier</li>
            <li>Analytics et reporting avancé</li>
          </ul>
        </li>
        <li><strong>Technologies :</strong> Laravel 11, API REST</li>
      </ul>

      <h3>Frontend (Port 3000/3001)</h3>
      <ul>
        <li><strong>Technologies :</strong> Nuxt.js 3.18, Vue.js 3, TypeScript, Tailwind CSS</li>
        <li><strong>Fonctionnalités :</strong>
          <ul>
            <li>Interface utilisateur responsive et moderne</li>
            <li>Système de thème (clair/sombre)</li>
            <li>Internationalisation (fr, en, zh)</li>
            <li>PWA et optimisations performance</li>
            <li>Stores Pinia pour la gestion d'état</li>
          </ul>
        </li>
      </ul>

      <!-- API Documentation -->
      <h2>🔌 Documentation API</h2>
      
      <h3>Base URLs</h3>
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <ul class="space-y-2 text-sm">
          <li><strong>Backend-Client :</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8000/api</code></li>
          <li><strong>Backend-NHS (via proxy) :</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8000/api/nhs</code></li>
          <li><strong>Backend-NHS (direct) :</strong> <code class="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">http://localhost:8001/api</code></li>
        </ul>
      </div>

      <h3>Authentification</h3>
      <p>Le système utilise Laravel Sanctum pour l'authentification token-based.</p>
      
      <h4>Login</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <strong>POST</strong> <code>/api/login</code>
        <pre class="mt-2 text-sm"><code>{
  "email": "admin@residence.com",
  "password": "1234"
}</code></pre>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Retourne : access_token, user data, expires_at</p>
      </div>

      <h4>Headers d'authentification</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>Authorization: Bearer {access_token}
Accept: application/json
Content-Type: application/json</code></pre>
      </div>

      <h3>Endpoints Principaux</h3>
      
      <h4>👤 Gestion des utilisateurs</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/user</code> - Informations utilisateur connecté
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/admin/persons</code> - Liste des personnes (admin)
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/admin/persons</code> - Créer une personne
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <strong class="text-orange-700 dark:text-orange-300">PUT</strong> <code>/api/admin/persons/{id}</code> - Modifier une personne
        </div>
        <div class="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800/30">
          <strong class="text-red-700 dark:text-red-300">DELETE</strong> <code>/api/admin/persons/{id}</code> - Supprimer une personne
        </div>
      </div>

      <h4>🎫 Gestion des badges</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/nhs/badges</code> - Liste des badges
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/badges/{numero}/toggle-status</code> - Changer statut badge
        </div>
      </div>

      <h4>💬 Messagerie</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/conversations</code> - Liste des conversations
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/conversations</code> - Créer une conversation
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/messages/{groupId}</code> - Messages d'un groupe
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/messages/{groupId}</code> - Envoyer un message
        </div>
      </div>

      <h4>🚨 Gestion des incidents</h4>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong class="text-green-700 dark:text-green-300">GET</strong> <code>/api/incidents</code> - Liste des incidents
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800/30">
          <strong class="text-blue-700 dark:text-blue-300">POST</strong> <code>/api/incidents</code> - Créer un incident
        </div>
        <div class="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/30">
          <strong class="text-orange-700 dark:text-orange-300">PUT</strong> <code>/api/incidents/{id}</code> - Modifier un incident
        </div>
      </div>

      <!-- Database Documentation -->
      <h2>🗄️ Base de Données</h2>
      
      <h3>Modèle de données</h3>
      <p>La base de données <code>gestion_entreprise_residence</code> utilise MySQL avec un charset UTF8MB4 pour supporter les emojis et caractères internationaux.</p>

      <h3>Tables principales</h3>
      
      <h4>personne</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Table centrale contenant tous les utilisateurs (admins, gardiens, résidents, invités)</p>
        <pre class="text-sm"><code>id_personne (PK)
email (UNIQUE)
nom, prenom
mot_de_passe (hash)
numero_telephone
photo_profil</code></pre>
      </div>

      <h4>admin, gardien, resident</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Tables de spécialisation avec FK vers personne</p>
        <pre class="text-sm"><code>admin: niveau_acces (super_admin/admin_standard)
gardien: id_personne
resident: id_personne, adresse_logement</code></pre>
      </div>

      <h4>badge</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Gestion des badges d'accès physique</p>
        <pre class="text-sm"><code>numero (PK)
id_utilisateur (FK nullable - badge peut être non assigné)
commentaire, droit
statut (actif/inactif/suspendu/en_attente)
zone_acces, niveau_securite</code></pre>
      </div>

      <h4>message, groupe_message</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Système de messagerie interne avec groupes</p>
        <pre class="text-sm"><code>groupe_message: nom_groupe, date_creation
message: contenu_message, date_envoi, a_fichiers, reply_to
personne_groupe: liaison many-to-many</code></pre>
      </div>

      <h4>incident</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Gestion des incidents et signalements</p>
        <pre class="text-sm"><code>id, datetime, object
statut (a_venir/en_cours/resolu)
id_signaleur, pieces_jointes (JSON)</code></pre>
      </div>

      <h3>Comptes de test</h3>
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">Administrateur principal</h4>
        <ul class="space-y-1 text-sm">
          <li><strong>Email :</strong> admin@residence.com</li>
          <li><strong>Mot de passe :</strong> 1234</li>
          <li><strong>Rôle :</strong> Super Admin</li>
          <li><strong>Badge :</strong> #1 (Accès total)</li>
        </ul>
      </div>

      <!-- Deployment -->
      <h2>🚀 Déploiement</h2>
      
      <h3>Prérequis</h3>
      <ul>
        <li>PHP 8.2+</li>
        <li>Node.js 18+</li>
        <li>MySQL 8.0+</li>
        <li>Composer</li>
        <li>npm/yarn</li>
      </ul>

      <h3>Installation locale</h3>
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

      <h3>Variables d'environnement</h3>
      <h4>Backend-Client (.env)</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>DB_DATABASE=gestion_entreprise_residence
DB_USERNAME=root
DB_PASSWORD=

NHS_API_URL=http://localhost:8001
SANCTUM_STATEFUL_DOMAINS=localhost:3000,localhost:3001</code></pre>
      </div>

      <h4>Backend-NHS (.env)</h4>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code>APP_NAME="Backend NHS"
APP_PORT=8001
DB_DATABASE=gestion_entreprise_residence</code></pre>
      </div>

      <!-- Security -->
      <h2>🔒 Sécurité</h2>
      
      <h3>Authentification</h3>
      <ul>
        <li><strong>Laravel Sanctum :</strong> Tokens SPA sécurisés</li>
        <li><strong>Hash passwords :</strong> bcrypt avec salt automatique</li>
        <li><strong>Rate limiting :</strong> Protection contre brute force</li>
        <li><strong>CORS :</strong> Configuration restrictive</li>
      </ul>

      <h3>Validation des données</h3>
      <ul>
        <li>Validation côté serveur sur tous les endpoints</li>
        <li>Sanitisation des entrées utilisateur</li>
        <li>Protection XSS et injection SQL</li>
        <li>Upload de fichiers sécurisé avec vérification MIME</li>
      </ul>

      <h3>Logs et monitoring</h3>
      <ul>
        <li>Table <code>logs</code> pour traçabilité des actions</li>
        <li>Logs Laravel dans <code>storage/logs/</code></li>
        <li>Monitoring des requêtes proxy</li>
        <li>Alertes sur erreurs critiques</li>
      </ul>

      <!-- Maintenance -->
      <h2>🔧 Maintenance & Opérations</h2>
      
      <h3>Commandes utiles</h3>
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

      <h3>Monitoring des services</h3>
      <div class="not-prose space-y-3 my-6">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong>Health check Backend-Client :</strong> <code>GET /api/health</code>
        </div>
        <div class="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
          <strong>Health check Backend-NHS :</strong> <code>GET /api/nhs/status</code>
        </div>
      </div>

      <h3>Sauvegarde</h3>
      <ul>
        <li><strong>Base de données :</strong> mysqldump quotidien</li>
        <li><strong>Fichiers uploads :</strong> rsync des dossiers storage et public</li>
        <li><strong>Configuration :</strong> sauvegarde des fichiers .env</li>
      </ul>

      <h3>Performances</h3>
      <ul>
        <li>Cache Redis pour les sessions (optionnel)</li>
        <li>Optimisation des requêtes avec index MySQL</li>
        <li>Compression gzip/brotli</li>
        <li>CDN pour les assets statiques</li>
      </ul>

      <!-- Troubleshooting -->
      <h2>🔍 Dépannage</h2>
      
      <h3>Problèmes courants</h3>
      
      <h4>Erreur de connexion Backend-NHS</h4>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-4 my-4 border border-red-200 dark:border-red-800/30">
        <p class="text-sm mb-2"><strong>Symptôme :</strong> "NHS Backend unavailable"</p>
        <p class="text-sm mb-2"><strong>Vérifications :</strong></p>
        <ul class="text-sm space-y-1">
          <li>• Backend-NHS en cours d'exécution sur port 8001</li>
          <li>• Variable NHS_API_URL correcte dans backend-client</li>
          <li>• Firewall/antivirus ne bloque pas le port</li>
        </ul>
      </div>

      <h4>Erreur d'authentification</h4>
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-4 my-4 border border-red-200 dark:border-red-800/30">
        <p class="text-sm mb-2"><strong>Symptôme :</strong> "Unauthenticated"</p>
        <p class="text-sm mb-2"><strong>Solutions :</strong></p>
        <ul class="text-sm space-y-1">
          <li>• Vérifier le token Bearer dans l'en-tête</li>
          <li>• Vérifier expiration du token</li>
          <li>• Réinitialiser la session utilisateur</li>
        </ul>
      </div>

      <h3>Logs de débogage</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 my-4 border border-gray-200 dark:border-gray-700">
        <pre class="text-sm"><code># Logs Laravel temps réel
tail -f storage/logs/laravel.log

# Logs proxy
grep "Proxy" storage/logs/laravel.log

# Logs base de données  
grep "database" storage/logs/laravel.log</code></pre>
      </div>

      <!-- Support -->
      <h2>📞 Support Technique</h2>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 my-8 border border-blue-200/50 dark:border-blue-800/30">
        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">Contact équipe technique</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Urgences techniques</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• Email : tech-urgent@neostart.tech</li>
              <li>• Disponibilité : 24/7</li>
              <li>• SLA : 2h maximum</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Support développement</h4>
            <ul class="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• Email : dev-support@neostart.tech</li>
              <li>• Horaires : 9h-18h (CET)</li>
              <li>• Documentation : docs.neostart.tech</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl border border-purple-200 dark:border-purple-700">
        <p class="text-sm text-purple-700 dark:text-purple-300">
          <strong>Version de la documentation :</strong> 2.1.0 • 
          <strong>Dernière mise à jour :</strong> Août 2025 •
          <strong>Architecture :</strong> Dual Backend v2.0
        </p>
      </div>
    </div>
  </DocShell>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '../../composables/useTheme'
  
  // Import du système de thème
  const { initTheme } = useTheme()
  useHead({ title: 'Référence technique - Documentation' })

  // Initialisation du thème
  onMounted(() => {
    initTheme()
  })
</script>
