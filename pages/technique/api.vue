<template>
  <DocShell type="tech" title="Documentation API" description="Référence complète des endpoints API">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Documentation API</h1>
      
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-8 mb-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚀 API RESTful complète</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          API REST moderne avec authentification Sanctum, validation stricte et documentation OpenAPI. 
          Endpoints complets pour gestion d'entreprise-résidence avec responses normalisées et gestion d'erreurs robuste.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🔐 Auth</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Laravel Sanctum + RBAC</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📋 CRUD</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Operations complètes</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🔍 Filtering</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Recherche et pagination</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📊 Validation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Rules strictes et sanitization</p>
          </div>
        </div>
      </div>

      <!-- Base URL et authentification -->
      <h2>Configuration de base</h2>
      
      <h3>URLs des services</h3>
      <p>Architecture dual backend avec proxy intelligent :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🌐 Endpoints principaux</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Backend-Client (Port 8000)</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300 font-mono">
              <li>• <strong>Base URL:</strong> http://localhost:8000</li>
              <li>• <strong>API Prefix:</strong> /api</li>
              <li>• <strong>Full URL:</strong> http://localhost:8000/api</li>
              <li>• <strong>Role:</strong> API Gateway + Database Access</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Backend-NHS (Port 8001)</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300 font-mono">
              <li>• <strong>Base URL:</strong> http://localhost:8001</li>
              <li>• <strong>API Prefix:</strong> /api</li>
              <li>• <strong>Full URL:</strong> http://localhost:8001/api</li>
              <li>• <strong>Role:</strong> Business Logic Service</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Authentification</h3>
      <p>Laravel Sanctum pour authentification stateless sécurisée :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">🔐 Flow d'authentification</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">1. Login</h5>
            <div class="text-green-700 dark:text-green-300">
              <p class="mb-2"><strong>POST</strong> <code>/api/auth/login</code></p>
              <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-2 rounded overflow-x-auto">{
  "email": "user@example.com",
  "password": "motdepasse"
}</pre>
              <p class="mt-2"><strong>Response:</strong> Bearer token + user data</p>
            </div>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">2. Requêtes authentifiées</h5>
            <div class="text-blue-700 dark:text-blue-300">
              <p class="mb-2"><strong>Header required:</strong></p>
              <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-2 rounded">Authorization: Bearer {token}</pre>
            </div>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">3. Logout</h5>
            <div class="text-orange-700 dark:text-orange-300">
              <p><strong>POST</strong> <code>/api/auth/logout</code> - Révoque le token</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Endpoints principaux -->
      <h2>Endpoints par module</h2>
      
      <h3>Authentication - Gestion de l'authentification</h3>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔑 Auth Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-indigo-700 dark:text-indigo-300">/api/auth/login</code>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400 mb-2">Connexion utilisateur avec email/password</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded overflow-x-auto">{
  "email": "user@domain.com",
  "password": "securepassword",
  "remember": true
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">Response 200:</h6>
                <pre class="text-xs bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded overflow-x-auto">{
  "success": true,
  "data": {
    "token": "1|abc123...",
    "user": {
      "id": 1,
      "email": "user@domain.com",
      "nom": "Doe",
      "prenom": "John",
      "roles": ["resident"]
    }
  }
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-indigo-700 dark:text-indigo-300">/api/auth/register</code>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400 mb-2">Création nouveau compte utilisateur</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded overflow-x-auto">{
  "email": "new@domain.com",
  "password": "securepass123",
  "password_confirmation": "securepass123",
  "nom": "Smith",
  "prenom": "Jane",
  "telephone": "+33123456789"
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">Validation Rules:</h6>
                <ul class="text-xs text-indigo-700 dark:text-indigo-300 space-y-1">
                  <li>• email: required|email|unique:users</li>
                  <li>• password: required|min:8|confirmed</li>
                  <li>• nom: required|string|max:100</li>
                  <li>• prenom: required|string|max:100</li>
                  <li>• telephone: nullable|regex:phone</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-indigo-700 dark:text-indigo-300">/api/auth/user</code>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400">Récupération profil utilisateur connecté</p>
          </div>

          <div class="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-indigo-700 dark:text-indigo-300">/api/auth/logout</code>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400">Déconnexion et révocation du token</p>
          </div>

        </div>
      </div>

      <h3>Users - Gestion des utilisateurs</h3>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">👥 Users Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-purple-700 dark:text-purple-300">/api/users</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Liste paginée des utilisateurs avec filtres</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Query Parameters:</h6>
                <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• <code>page</code>: Numéro de page (default: 1)</li>
                  <li>• <code>per_page</code>: Éléments par page (max: 100)</li>
                  <li>• <code>search</code>: Recherche nom/email</li>
                  <li>• <code>role</code>: Filtrage par rôle</li>
                  <li>• <code>actif</code>: true/false status</li>
                  <li>• <code>sort</code>: created_at|nom|email</li>
                  <li>• <code>order</code>: asc|desc</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Response Structure:</h6>
                <pre class="text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id": 1,
      "email": "user@domain.com",
      "nom": "Doe",
      "prenom": "John",
      "actif": true,
      "roles": ["resident"],
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 150,
    "total_pages": 10
  }
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-purple-700 dark:text-purple-300">/api/users/{id}</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400">Détails complets d'un utilisateur spécifique</p>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PUT</span>
              <code class="text-purple-700 dark:text-purple-300">/api/users/{id}</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Mise à jour profil utilisateur</p>
            <p class="text-xs text-purple-500 dark:text-purple-400"><strong>Permissions:</strong> admin ou self-update</p>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">DELETE</span>
              <code class="text-purple-700 dark:text-purple-300">/api/users/{id}</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Suppression utilisateur (soft delete)</p>
            <p class="text-xs text-purple-500 dark:text-purple-400"><strong>Permissions:</strong> admin uniquement</p>
          </div>

        </div>
      </div>

      <h3>Badges - Gestion des badges d'accès</h3>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🏷️ Badges Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-green-700 dark:text-green-300">/api/badges</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Liste des badges avec filtres avancés</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Query Filters:</h6>
                <ul class="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• <code>user_id</code>: Badges d'un utilisateur</li>
                  <li>• <code>type_badge</code>: résident|visiteur|prestataire</li>
                  <li>• <code>statut</code>: actif|suspendu|révoqué</li>
                  <li>• <code>expires_before</code>: Date expiration avant</li>
                  <li>• <code>expires_after</code>: Date expiration après</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Response Example:</h6>
                <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded overflow-x-auto">{
  "id": 123,
  "numero_badge": "RES-001-2024",
  "user_id": 45,
  "type_badge": "résident",
  "statut": "actif",
  "date_emission": "2024-01-15",
  "date_expiration": "2024-12-31",
  "zones_acces": ["hall", "parking", "apt_345"],
  "derniere_utilisation": "2024-03-15T14:30:00Z"
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-green-700 dark:text-green-300">/api/badges</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Création nouveau badge</p>
            <div class="text-xs text-green-500 dark:text-green-400">
              <p><strong>Auto-generation:</strong> numero_badge si non fourni</p>
              <p><strong>Validation:</strong> zones_acces selon permissions utilisateur</p>
            </div>
          </div>

          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-green-700 dark:text-green-300">/api/badges/{id}/status</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Modification rapide du statut</p>
            <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded">{
  "statut": "suspendu",
  "raison": "Perte signalée par le résident"
}</pre>
          </div>

        </div>
      </div>

      <h3>Incidents - Gestion des incidents</h3>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Incidents Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Création nouvel incident</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded overflow-x-auto">{
  "titre": "Ascenseur en panne",
  "description": "L'ascenseur principal ne répond plus",
  "categorie": "technique",
  "priorite": "haute",
  "localisation": "Hall principal, Ascenseur A",
  "photos": ["base64_image1", "base64_image2"]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Business Logic:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <strong>Auto-assign:</strong> selon type incident</li>
                  <li>• <strong>Numero ticket:</strong> INC-YYYY-NNNN</li>
                  <li>• <strong>Notifications:</strong> email + push</li>
                  <li>• <strong>Escalation:</strong> selon priorité</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Liste incidents avec filtres métier</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Filtres disponibles:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <code>statut</code>: ouvert|en_cours|résolu|fermé</li>
                  <li>• <code>priorite</code>: basse|normale|haute|urgente</li>
                  <li>• <code>categorie</code>: technique|sécurité|entretien</li>
                  <li>• <code>assigned_to</code>: ID du responsable</li>
                  <li>• <code>created_after</code>: ISO date</li>
                  <li>• <code>my_incidents</code>: true (mes incidents)</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Includes availables:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <code>?include=user</code>: Données déclarant</li>
                  <li>• <code>?include=assigned</code>: Données responsable</li>
                  <li>• <code>?include=photos</code>: Images attachées</li>
                  <li>• <code>?include=comments</code>: Commentaires</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents/{id}/status</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Workflow de changement de statut</p>
            <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded">{
  "statut": "en_cours",
  "commentaire": "Intervention planifiée demain matin",
  "temps_estime": "2h",
  "notify_user": true
}</pre>
          </div>

        </div>
      </div>

      <h3>Messages - Système de messagerie</h3>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">💬 Messages Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-blue-700 dark:text-blue-300">/api/messages/conversations</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Liste des conversations de l'utilisateur</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Query Options:</h6>
                <ul class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <code>unread_only</code>: true (non lus seulement)</li>
                  <li>• <code>with_user</code>: ID user (conversation spécifique)</li>
                  <li>• <code>search</code>: Recherche dans sujet/contenu</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Response Structure:</h6>
                <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded overflow-x-auto">{
  "conversations": [
    {
      "with_user": {
        "id": 5,
        "nom": "Gardien",
        "prenom": "Paul"
      },
      "last_message": {
        "sujet": "Livraison colis",
        "preview": "Bonjour, j'ai un colis...",
        "created_at": "2024-03-15T14:30:00Z",
        "lu": false
      },
      "unread_count": 2
    }
  ]
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-blue-700 dark:text-blue-300">/api/messages</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Envoi nouveau message</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded overflow-x-auto">{
  "to_user_id": 7,
  "sujet": "Demande d'information",
  "contenu": "Bonjour, je souhaiterais...",
  "priorite": "normale",
  "piece_jointe": "base64_file"
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Validations:</h6>
                <ul class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <code>to_user_id</code>: exists:users,id</li>
                  <li>• <code>sujet</code>: required|max:255</li>
                  <li>• <code>contenu</code>: required|max:5000</li>
                  <li>• <code>priorite</code>: in:normale,importante,urgente</li>
                  <li>• <code>piece_jointe</code>: file|max:10MB</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-blue-700 dark:text-blue-300">/api/messages/{id}/read</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400">Marquer message comme lu (timestamp automatique)</p>
          </div>

        </div>
      </div>

      <!-- Format des réponses -->
      <h2>Format des réponses API</h2>
      
      <h3>Structure standard des réponses</h3>
      <p>Toutes les réponses API suivent une structure normalisée :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">📋 Response Structure</h4>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">✅ Success Response</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto">{
  "success": true,
  "data": {
    // Données métier
  },
  "meta": {
    "message": "Operation successful",
    "timestamp": "2024-03-15T14:30:00Z",
    "version": "1.0"
  }
}</pre>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">❌ Error Response</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto">{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The given data was invalid",
    "details": {
      "email": ["Email already exists"],
      "password": ["Password too weak"]
    }
  },
  "meta": {
    "timestamp": "2024-03-15T14:30:00Z",
    "request_id": "req_abc123"
  }
}</pre>
          </div>
        </div>
      </div>

      <h3>Codes de statut HTTP</h3>
      <p>Utilisation standard des codes HTTP pour indication claire :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
          <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">✅ Success Codes</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <li>• <strong>200 OK</strong> : Requête réussie avec données</li>
            <li>• <strong>201 Created</strong> : Ressource créée avec succès</li>
            <li>• <strong>202 Accepted</strong> : Traitement asynchrone démarré</li>
            <li>• <strong>204 No Content</strong> : Succès sans données retour</li>
          </ul>
        </div>
        <div class="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
          <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">❌ Error Codes</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-2">
            <li>• <strong>400 Bad Request</strong> : Données invalides</li>
            <li>• <strong>401 Unauthorized</strong> : Authentification requise</li>
            <li>• <strong>403 Forbidden</strong> : Permissions insuffisantes</li>
            <li>• <strong>404 Not Found</strong> : Ressource inexistante</li>
            <li>• <strong>422 Unprocessable</strong> : Validation échouée</li>
            <li>• <strong>429 Too Many Requests</strong> : Rate limit atteint</li>
            <li>• <strong>500 Server Error</strong> : Erreur interne serveur</li>
          </ul>
        </div>
      </div>

      <!-- Pagination et filtres -->
      <h2>Pagination et filtres</h2>
      
      <h3>Pagination standardisée</h3>
      <p>Toutes les listes utilisent la même structure de pagination :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">📄 Pagination Response</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Query Parameters</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• <code>page</code>: Numéro de page (défaut: 1)</li>
              <li>• <code>per_page</code>: Éléments par page (défaut: 15, max: 100)</li>
              <li>• <code>sort</code>: Champ de tri</li>
              <li>• <code>order</code>: asc|desc (défaut: desc)</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Meta Information</h5>
            <pre class="text-xs bg-cyan-100 dark:bg-cyan-900/50 p-2 rounded overflow-x-auto">{
  "meta": {
    "current_page": 2,
    "per_page": 15,
    "total": 147,
    "total_pages": 10,
    "has_next": true,
    "has_prev": true,
    "next_page_url": "/api/users?page=3",
    "prev_page_url": "/api/users?page=1"
  }
}</pre>
          </div>
        </div>
      </div>

      <h3>Système de filtres avancés</h3>
      <p>Filtres dynamiques selon le type de ressource :</p>
      
      <ul>
        <li><strong>Recherche textuelle :</strong> <code>search</code> dans tous les champs texte</li>
        <li><strong>Filtres de date :</strong> <code>created_after</code>, <code>created_before</code></li>
        <li><strong>Filtres d'état :</strong> <code>status</code>, <code>active</code>, selon l'entité</li>
        <li><strong>Filtres relationnels :</strong> <code>user_id</code>, <code>assigned_to</code></li>
        <li><strong>Includes :</strong> <code>include</code> pour charger les relations</li>
      </ul>

      <!-- Rate limiting et sécurité -->
      <h2>Rate limiting et sécurité</h2>
      
      <h3>Limites de débit</h3>
      <p>Protection contre l'abus et surcharge :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🛡️ Rate Limits</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Limites par endpoint</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <strong>Auth endpoints</strong> : 5 req/min</li>
              <li>• <strong>Read operations</strong> : 100 req/min</li>
              <li>• <strong>Write operations</strong> : 30 req/min</li>
              <li>• <strong>File uploads</strong> : 10 req/min</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Headers de réponse</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <code>X-RateLimit-Limit</code> : Limite totale</li>
              <li>• <code>X-RateLimit-Remaining</code> : Requêtes restantes</li>
              <li>• <code>X-RateLimit-Reset</code> : Timestamp reset</li>
              <li>• <code>Retry-After</code> : Délai en secondes</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Sécurité API</h3>
      <p>Mesures de protection des endpoints :</p>
      
      <ol>
        <li><strong>Authentification obligatoire :</strong> Token Sanctum sur tous les endpoints (sauf auth)</li>
        <li><strong>Validation stricte :</strong> Laravel Form Requests avec règles métier</li>
        <li><strong>Autorisation granulaire :</strong> Policies Laravel pour chaque action</li>
        <li><strong>Sanitization :</strong> Nettoyage automatique des inputs</li>
        <li><strong>CORS configuré :</strong> Origins autorisées uniquement</li>
        <li><strong>Headers sécurisés :</strong> HSTS, CSP, X-Frame-Options</li>
      </ol>

      <!-- Collection Postman -->
      <h2>Testing et documentation</h2>
      
      <h3>Collection Postman</h3>
      <p>Collection complète pour tests et développement :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">📮 Postman Collection</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Contenu de la collection</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• <strong>Environnements</strong> : Dev, Staging, Production</li>
              <li>• <strong>Variables globales</strong> : Base URLs, tokens</li>
              <li>• <strong>Tests automatisés</strong> : Assertions sur réponses</li>
              <li>• <strong>Documentation</strong> : Exemples par endpoint</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Fichiers disponibles</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• <code>postman/Gestion_entreprise-residence.postman_collection.json</code></li>
              <li>• <code>postman/Testing_Complete_API.postman_collection.json</code></li>
              <li>• Variables d'environnement pré-configurées</li>
              <li>• Scripts de tests automatisés</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-8 mt-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎯 API moderne et robuste</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette API RESTful offre une interface complète et sécurisée pour toutes les opérations de gestion d'entreprise-résidence. 
          La documentation détaillée et les collections Postman facilitent l'intégration et les tests.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🔒 Sécurisée</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Auth + validation + rate limiting</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📊 Normalisée</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Responses standardisées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🧪 Testable</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Collection Postman complète</p>
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
  useHead({ title: 'Documentation API - Documentation technique' })

  onMounted(() => {
    initTheme()
  })
</script>


