<template>
  <DocShell type="tech" :title="t('architecture.title')" :description="t('architecture.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Architecture technique</h1>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 mb-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏗️ Architecture distribuée moderne</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Plateforme de gestion d'entreprise-résidence basée sur une architecture dual-backend avec séparation des responsabilités, 
          stabilité et maintenance facilitée.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">🎨 Frontend</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Nuxt.js 3.18 + Vue.js 3 + TypeScript</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">⚙️ Backend</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Dual Laravel 11 (Proxy + Business Logic)</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">💾 Data</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">MySQL 8.0 + Redis Cache + File Storage</p>
          </div>
        </div>
      </div>

      <!-- Vue d'ensemble -->
      <h2>Vue d'ensemble de l'architecture</h2>
      
      <h3>Architecture en couches</h3>
      <p>L'application suit une architecture en couches séparant clairement les responsabilités :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">📚 Couches applicatives</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">🎨 Couche Présentation (Frontend)</h5>
            <ul class="text-emerald-700 dark:text-emerald-300 space-y-1">
              <li>• <strong>Nuxt.js 3.18</strong> : Framework full-stack Vue.js avec SSR/SPA</li>
              <li>• <strong>Vue.js 3 + TypeScript</strong> : Interface utilisateur réactive et typée</li>
              <li>• <strong>Tailwind CSS</strong> : Framework CSS utilitaire pour design system</li>
              <li>• <strong>Pinia</strong> : Gestion d'état centralisée</li>
              <li>• <strong>i18n</strong> : Internationalisation (FR/EN/ZH)</li>
            </ul>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">🔄 Couche API Gateway (Backend-Client)</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>Laravel 11</strong> : Framework PHP moderne avec Eloquent ORM</li>
              <li>• <strong>Port 8000</strong> : Point d'entrée unique pour toutes les requêtes</li>
              <li>• <strong>Proxy intelligent</strong> : Redirection vers backend-nhs</li>
              <li>• <strong>Gestion base de données</strong> : Accès direct aux données</li>
              <li>• <strong>Laravel Sanctum</strong> : Authentification API</li>
            </ul>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">🧠 Couche Métier (Backend-NHS)</h5>
            <ul class="text-purple-700 dark:text-purple-300 space-y-1">
              <li>• <strong>Laravel 11</strong> : Logique métier et règles business</li>
              <li>• <strong>Port 8001</strong> : Service spécialisé pour traitements complexes</li>
              <li>• <strong>Business Logic</strong> : Algorithmes, calculs, workflows</li>
              <li>• <strong>Services spécialisés</strong> : Badges, incidents, messagerie</li>
              <li>• <strong>Intégrations externes</strong> : APIs tierces, notifications</li>
            </ul>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">💾 Couche Données (Database)</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>MySQL 8.0</strong> : Base de données relationnelle principale</li>
              <li>• <strong>Redis</strong> : Cache haute performance et sessions</li>
              <li>• <strong>File Storage</strong> : Stockage sécurisé des fichiers</li>
              <li>• <strong>Backup System</strong> : Sauvegarde automatisée</li>
              <li>• <strong>Logging</strong> : Journalisation centralisée</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Architecture de déploiement -->
      <h3>Architecture de déploiement</h3>
      <p>Configuration distribuée pour haute disponibilité et performance :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🌐 Topology réseau</h4>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-3">Frontend (Port 3000)</h5>
            <ul class="space-y-2 text-indigo-700 dark:text-indigo-300">
              <li>• <strong>Serveur web Nuxt.js</strong> : SSR/SPA hybride</li>
              <li>• <strong>CDN intégré</strong> : Assets statiques optimisés</li>
              <li>• <strong>Hot reload</strong> : Développement temps réel</li>
              <li>• <strong>Build optimisé</strong> : Tree-shaking, minification</li>
              <li>• <strong>PWA ready</strong> : Service workers, offline</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-3">Backend Services</h5>
            <ul class="space-y-2 text-indigo-700 dark:text-indigo-300">
              <li>• <strong>Backend-Client (8000)</strong> : API Gateway + DB Access</li>
              <li>• <strong>Backend-NHS (8001)</strong> : Business Logic Service</li>
              <li>• <strong>Load Balancer</strong> : Distribution de charge</li>
              <li>• <strong>Health Checks</strong> : Surveillance santé services</li>
              <li>• <strong>Auto-scaling</strong> : Adaptation charge dynamique</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Flux de données -->
      <h2>Flux de données et communication</h2>
      
      <h3>Communication inter-services</h3>
      <p>Orchestration des échanges entre composants :</p>
      
      <ol>
        <li><strong>Frontend → Backend-Client :</strong>
          <ul>
            <li>Requêtes HTTP/HTTPS via axios</li>
            <li>Authentification Bearer token (Sanctum)</li>
            <li>Sérialisation JSON standardisée</li>
            <li>Gestion d'erreurs et retry automatique</li>
          </ul>
        </li>
        <li><strong>Backend-Client → Backend-NHS :</strong>
          <ul>
            <li>Communication HTTP interne</li>
            <li>Proxy intelligent avec fallback</li>
            <li>Circuit breaker pour résilience</li>
            <li>Load balancing et health checks</li>
          </ul>
        </li>
        <li><strong>Backend-Client → Database :</strong>
          <ul>
            <li>Eloquent ORM avec pool de connexions</li>
            <li>Transactions ACID garanties</li>
            <li>Read/Write separation possible</li>
            <li>Migration et seeding automatisés</li>
          </ul>
        </li>
      </ol>

      <h3>Gestion d'état et cache</h3>
      <p>Optimisation performances et cohérence des données :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">⚡ Stratégies de cache</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Cache Frontend</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Pinia stores</strong> : État applicatif en mémoire</li>
              <li>• <strong>LocalStorage</strong> : Persistance préférences utilisateur</li>
              <li>• <strong>HTTP cache</strong> : Assets statiques (24h)</li>
              <li>• <strong>Service Worker</strong> : Cache intelligent offline</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Cache Backend</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Redis</strong> : Cache distributé haute performance</li>
              <li>• <strong>Laravel Cache</strong> : Cache application (1h)</li>
              <li>• <strong>Database Cache</strong> : Query results (15min)</li>
              <li>• <strong>Session Store</strong> : Sessions utilisateur sécurisées</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Patterns architecturaux -->
      <h2>Patterns et principes de conception</h2>
      
      <h3>Design Patterns utilisés</h3>
      <p>Patterns éprouvés pour maintenabilité et extensibilité :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800/30">
          <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">🏛️ Patterns Backend</h4>
          <ul class="text-sm text-cyan-700 dark:text-cyan-300 space-y-2">
            <li>• <strong>Repository Pattern</strong> : Abstraction accès données</li>
            <li>• <strong>Service Layer</strong> : Logique métier encapsulée</li>
            <li>• <strong>Factory Pattern</strong> : Création objets complexes</li>
            <li>• <strong>Observer Pattern</strong> : Événements et listeners</li>
            <li>• <strong>Strategy Pattern</strong> : Algorithmes interchangeables</li>
            <li>• <strong>Dependency Injection</strong> : Inversion de contrôle</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">⚛️ Patterns Frontend</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>Composition API</strong> : Logique réutilisable Vue.js</li>
            <li>• <strong>Store Pattern</strong> : Gestion d'état centralisée</li>
            <li>• <strong>Component Pattern</strong> : Composants réutilisables</li>
            <li>• <strong>Module Pattern</strong> : Organisation code modulaire</li>
            <li>• <strong>Proxy Pattern</strong> : Interception requêtes API</li>
            <li>• <strong>Observer Pattern</strong> : Réactivité Vue.js</li>
          </ul>
        </div>
      </div>

      <h3>Principes SOLID</h3>
      <p>Application des principes de développement robuste :</p>
      
      <ul>
        <li><strong>Single Responsibility :</strong> Chaque classe/service a une responsabilité unique</li>
        <li><strong>Open/Closed :</strong> Extension sans modification du code existant</li>
        <li><strong>Liskov Substitution :</strong> Polymorphisme et interfaces cohérentes</li>
        <li><strong>Interface Segregation :</strong> Interfaces spécialisées et légères</li>
        <li><strong>Dependency Inversion :</strong> Dépendances vers abstractions</li>
      </ul>

      <!-- Scalabilité et performance -->
      <h2>Scalabilité et performance</h2>
      
      <h3>Stratégies de scalabilité</h3>
      <p>Conception pour croissance et charge élevée :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">📈 Scalabilité horizontale</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Frontend</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <strong>CDN distribution</strong> : Assets géographiquement distribués</li>
              <li>• <strong>Code splitting</strong> : Chargement lazy des modules</li>
              <li>• <strong>SSR adaptatif</strong> : Rendu serveur intelligent</li>
              <li>• <strong>PWA caching</strong> : Réduction charge serveur</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Backend</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Load balancing</strong> : Distribution instances multiples</li>
              <li>• <strong>Database sharding</strong> : Partition données</li>
              <li>• <strong>Queue workers</strong> : Traitement asynchrone</li>
              <li>• <strong>Microservices</strong> : Services indépendants</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Optimisations performance</h3>
      <p>Techniques avancées pour temps de réponse optimal :</p>
      
      <ol>
        <li><strong>Database Performance :</strong>
          <ul>
            <li>Index optimisés sur requêtes fréquentes</li>
            <li>Query optimization et explain plans</li>
            <li>Connection pooling et prepared statements</li>
            <li>Read replicas pour distribution charge</li>
          </ul>
        </li>
        <li><strong>Application Performance :</strong>
          <ul>
            <li>Eager loading pour éviter N+1 queries</li>
            <li>Response caching avec invalidation intelligente</li>
            <li>Compression gzip/brotli des réponses</li>
            <li>Async/await pour operations non-bloquantes</li>
          </ul>
        </li>
        <li><strong>Frontend Performance :</strong>
          <ul>
            <li>Tree shaking et dead code elimination</li>
            <li>Image optimization et lazy loading</li>
            <li>Virtual scrolling pour listes longues</li>
            <li>Debouncing des requêtes utilisateur</li>
          </ul>
        </li>
      </ol>

      <!-- Sécurité architecturale -->
      <h2>Sécurité architecturale</h2>
      
      <h3>Défense en profondeur</h3>
      <p>Sécurité multicouche pour protection maximale :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🛡️ Couches de sécurité</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">🌐 Network Security</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>HTTPS obligatoire</strong> : TLS 1.3 avec certificats Let's Encrypt</li>
              <li>• <strong>Firewall rules</strong> : Ports spécifiques, IP whitelisting</li>
              <li>• <strong>DDoS protection</strong> : Rate limiting et blacklisting</li>
              <li>• <strong>VPN access</strong> : Administration sécurisée</li>
            </ul>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">🔐 Application Security</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>Authentication forte</strong> : Sanctum + 2FA optionnel</li>
              <li>• <strong>Authorization granulaire</strong> : RBAC avec permissions</li>
              <li>• <strong>Input validation</strong> : Sanitization et validation</li>
              <li>• <strong>Output encoding</strong> : Protection XSS</li>
            </ul>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">💾 Data Security</h5>
            <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• <strong>Encryption at rest</strong> : Données sensibles chiffrées</li>
              <li>• <strong>Encryption in transit</strong> : Communications sécurisées</li>
              <li>• <strong>Access control</strong> : Principe moindre privilège</li>
              <li>• <strong>Audit logging</strong> : Traçabilité complète</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Monitoring et observabilité -->
      <h2>Monitoring et observabilité</h2>
      
      <h3>Télémétrie et métriques</h3>
      <p>Visibilité complète sur la santé du système :</p>
      
      <div class="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Métriques</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• <strong>Performance</strong> : Temps réponse, throughput</li>
            <li>• <strong>Utilisation</strong> : CPU, mémoire, disque</li>
            <li>• <strong>Disponibilité</strong> : Uptime, health checks</li>
            <li>• <strong>Business</strong> : KPIs métier personnalisés</li>
          </ul>
        </div>
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">📋 Logging</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>Structured logs</strong> : Format JSON standardisé</li>
            <li>• <strong>Log levels</strong> : Debug, info, warning, error</li>
            <li>• <strong>Centralization</strong> : Agrégation multi-services</li>
            <li>• <strong>Retention</strong> : Politique de conservation</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🔍 Tracing</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>Request tracing</strong> : Suivi requêtes bout-en-bout</li>
            <li>• <strong>Error tracking</strong> : Capture et analyse erreurs</li>
            <li>• <strong>Performance profiling</strong> : Identification goulots</li>
            <li>• <strong>User journeys</strong> : Analyse parcours utilisateur</li>
          </ul>
        </div>
      </div>

      <h3>Alerting et notifications</h3>
      <p>Système d'alerte proactif pour réaction rapide :</p>
      
      <ul>
        <li><strong>Seuils configurables :</strong> Métriques critiques avec alertes automatiques</li>
        <li><strong>Escalation :</strong> Notification hiérarchique selon gravité</li>
        <li><strong>Channels multiples :</strong> Email, SMS, Slack, webhook</li>
        <li><strong>Correlation :</strong> Groupement alertes liées</li>
        <li><strong>Playbooks :</strong> Procédures automatisées de résolution</li>
      </ul>

      <!-- Technologies et stack technique -->
      <h2>Stack technique détaillé</h2>
      
      <h3>Frontend Technologies</h3>
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-6 border border-emerald-200 dark:border-emerald-800/30">
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-3">Core Framework</h4>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• <strong>Nuxt.js 3.18.0</strong> : Meta-framework Vue.js</li>
              <li>• <strong>Vue.js 3</strong> : Progressive framework</li>
              <li>• <strong>TypeScript</strong> : Typage statique</li>
              <li>• <strong>Vite</strong> : Build tool moderne</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-3">UI & Styling</h4>
            <ul class="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>• <strong>Tailwind CSS</strong> : Utility-first CSS</li>
              <li>• <strong>HeadlessUI</strong> : Composants accessibles</li>
              <li>• <strong>Heroicons</strong> : Icônes SVG optimisées</li>
              <li>• <strong>PostCSS</strong> : Transformation CSS</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Backend Technologies</h3>
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-3">Core Framework</h4>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• <strong>Laravel 11</strong> : Framework PHP moderne</li>
              <li>• <strong>PHP 8.3+</strong> : Langage serveur performant</li>
              <li>• <strong>Composer</strong> : Gestionnaire dépendances</li>
              <li>• <strong>Artisan CLI</strong> : Outils développement</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-3">Extensions Laravel</h4>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• <strong>Sanctum</strong> : Authentication API</li>
              <li>• <strong>Eloquent ORM</strong> : Object-Relational Mapping</li>
              <li>• <strong>Queue System</strong> : Jobs asynchrones</li>
              <li>• <strong>Events & Listeners</strong> : Architecture événementielle</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Infrastructure et DevOps</h3>
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">Base de données</h4>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• <strong>MySQL 8.0</strong> : SGBD relationnel principal</li>
              <li>• <strong>Redis</strong> : Cache et store sessions</li>
              <li>• <strong>Migrations</strong> : Versioning schéma DB</li>
              <li>• <strong>Seeders</strong> : Données de test</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">Outils DevOps</h4>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• <strong>Git</strong> : Versioning code source</li>
              <li>• <strong>npm/pnpm</strong> : Gestionnaire packages JS</li>
              <li>• <strong>Docker</strong> : Containerization (optionnel)</li>
              <li>• <strong>CI/CD</strong> : Pipeline automatisé</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 mt-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎯 Architecture robuste et évolutive</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette architecture moderne et modulaire offre les fondations solides pour une plateforme de gestion d'entreprise-résidence 
          performante, sécurisée et facilement maintenable. La séparation des responsabilités et les patterns éprouvés 
          garantissent une évolutivité à long terme.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">⚡ Performance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Optimisée pour charge élevée</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">🔒 Sécurité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Défense en profondeur</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">📈 Scalabilité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Croissance sans limites</p>
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
  // Traductions directes depuis les fichiers JSON - Section Architecture
  const translations: Record<string, Record<string, any>> = {
    fr: {
      'architecture': {
        'title': 'Architecture technique',
        'description': 'Vue d\'ensemble de l\'architecture système',
        'header': {
          'title': 'Architecture distribuée moderne',
          'description': 'Plateforme de gestion d\'entreprise-résidence basée sur une architecture dual-backend avec séparation des responsabilités, stabilité et maintenance facilitée.',
          'features': {
            'frontend': 'Nuxt.js 3.18 + Vue.js 3 + TypeScript',
            'backend': 'Dual Laravel 11 (Proxy + Business Logic)',
            'data': 'MySQL 8.0 + Redis Cache + File Storage'
          }
        },
        'overview': {
          'title': 'Vue d\'ensemble de l\'architecture',
          'layers': {
            'title': 'Architecture en couches',
            'description': 'L\'application suit une architecture en couches séparant clairement les responsabilités :',
            'layers_title': 'Couches applicatives',
            'presentation': {
              'title': 'Couche Présentation (Frontend)',
              'items': [
                'Nuxt.js 3.18 : Framework full-stack Vue.js avec SSR/SPA',
                'Vue.js 3 + TypeScript : Interface utilisateur réactive et typée',
                'Tailwind CSS : Framework CSS utilitaire pour design system',
                'Pinia : Gestion d\'état centralisée',
                'i18n : Internationalisation (FR/EN/ZH)'
              ]
            },
            'api_gateway': {
              'title': 'Couche API Gateway (Backend-Client)',
              'items': [
                'Laravel 11 : Framework PHP moderne avec Eloquent ORM',
                'Port 8000 : Point d\'entrée unique pour toutes les requêtes',
                'Proxy intelligent : Redirection vers backend-nhs',
                'Gestion base de données : Accès direct aux données',
                'Laravel Sanctum : Authentification API'
              ]
            },
            'business': {
              'title': 'Couche Métier (Backend-NHS)',
              'items': [
                'Laravel 11 : Logique métier et règles business',
                'Port 8001 : Service spécialisé pour traitements complexes',
                'Business Logic : Algorithmes, calculs, workflows',
                'Services spécialisés : Badges, incidents, messagerie',
                'Intégrations externes : APIs tierces, notifications'
              ]
            },
            'data': {
              'title': 'Couche Données (Database)',
              'items': [
                'MySQL 8.0 : Base de données relationnelle principale',
                'Redis : Cache haute performance et sessions',
                'File Storage : Stockage sécurisé des fichiers',
                'Backup System : Sauvegarde automatisée',
                'Logging : Journalisation centralisée'
              ]
            }
          },
          'deployment': {
            'title': 'Architecture de déploiement',
            'description': 'Configuration distribuée pour haute disponibilité et performance :',
            'network_topology': 'Topology réseau',
            'frontend': {
              'title': 'Frontend (Port 3000)',
              'items': [
                'Serveur web Nuxt.js : SSR/SPA hybride',
                'CDN intégré : Assets statiques optimisés',
                'Hot reload : Développement temps réel',
                'Build optimisé : Tree-shaking, minification',
                'PWA ready : Service workers, offline'
              ]
            },
            'backend_services': {
              'title': 'Backend Services',
              'items': [
                'Backend-Client (8000) : API Gateway + DB Access'
              ]
            }
          }
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
  title: t('architecture.title') + ' - Documentation'
})

// Initialisation du thème
onMounted(() => {
  initTheme()
})
</script>


