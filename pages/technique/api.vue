<template>
  <DocShell type="tech" :title="t('api.title')" :description="t('api.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>{{ t('api.title') }}</h1>
      
      <div class="not-prose bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-2xl p-8 mb-12 border border-emerald-200/50 dark:border-emerald-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚀 {{ t('api.header.title') }}</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {{ t('api.header.description') }}
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🔐 Auth</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('api.header.features.auth') }}</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📋 CRUD</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('api.header.features.crud') }}</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">🔍 Filtering</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('api.header.features.filtering') }}</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-emerald-900 dark:text-emerald-200 mb-2">📊 Validation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('api.header.features.validation') }}</p>
          </div>
        </div>
      </div>

      <!-- Base URL et authentification -->
      <h2>{{ t('api.config.title') }}</h2>
      
      <h3>{{ t('api.config.urls.title') }}</h3>
      <p>{{ t('api.config.urls.description') }}</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🌐 {{ t('api.config.urls.endpoints_title') }}</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">{{ t('api.config.urls.backend_client.title') }}</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300 font-mono">
              <li>• <strong>{{ t('api.config.urls.backend_client.base_url') }}</strong> http://localhost:8000</li>
              <li>• <strong>{{ t('api.config.urls.backend_client.api_prefix') }}</strong> /api</li>
              <li>• <strong>{{ t('api.config.urls.backend_client.full_url') }}</strong> http://localhost:8000/api</li>
              <li>• <strong>{{ t('api.config.urls.backend_client.role') }}</strong></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">{{ t('api.config.urls.backend_nhs.title') }}</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300 font-mono">
              <li>• <strong>{{ t('api.config.urls.backend_nhs.base_url') }}</strong> http://localhost:8001</li>
              <li>• <strong>{{ t('api.config.urls.backend_nhs.api_prefix') }}</strong> /api</li>
              <li>• <strong>{{ t('api.config.urls.backend_nhs.full_url') }}</strong> http://localhost:8001/api</li>
              <li>• <strong>{{ t('api.config.urls.backend_nhs.role') }}</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <h3>{{ t('api.config.auth.title') }}</h3>
      <p>{{ t('api.config.auth.description') }}</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">🔐 {{ t('api.config.auth.flow_title') }}</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">{{ t('api.config.auth.login.title') }}</h5>
            <div class="text-green-700 dark:text-green-300">
              <p class="mb-2"><strong>POST</strong> <code>/api/auth/login</code></p>
              <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-2 rounded overflow-x-auto">{
  "email": "user@example.com",
  "password": "motdepasse"
}</pre>
              <p class="mt-2"><strong>{{ t('api.config.auth.login.response') }}</strong></p>
            </div>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">{{ t('api.config.auth.authenticated_requests.title') }}</h5>
            <div class="text-blue-700 dark:text-blue-300">
              <p class="mb-2"><strong>{{ t('api.config.auth.authenticated_requests.header_required') }}</strong></p>
              <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-2 rounded">Authorization: Bearer {token}</pre>
            </div>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">{{ t('api.config.auth.logout.title') }}</h5>
            <div class="text-orange-700 dark:text-orange-300">
              <p><strong>POST</strong> <code>/api/auth/logout</code> - {{ t('api.config.auth.logout.description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Endpoints principaux -->
      <h2>{{ t('api.endpoints.title') }}</h2>
      
      <h3>{{ t('api.endpoints.auth_module.title') }}</h3>
      
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
      "id_personne": 1,
      "email": "user@domain.com",
      "nom": "Doe",
      "prenom": "John",
      "numero_telephone": "+33123456789",
      "photo_profil": "/storage/profiles/user1.jpg",
      "role": {
        "type": "resident",
        "details": {
          "adresse_logement": "Apt 15B",
          "date_emmenagement": "2023-06-15"
        }
      }
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
  "mot_de_passe": "securepass123",
  "mot_de_passe_confirmation": "securepass123",
  "nom": "Smith",
  "prenom": "Jane",
  "numero_telephone": "+33123456789"
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-1">Validation Rules:</h6>
                <ul class="text-xs text-indigo-700 dark:text-indigo-300 space-y-1">
                  <li>• email: required|email|unique:personne</li>
                  <li>• mot_de_passe: required|min:8|confirmed</li>
                  <li>• nom: required|string|max:100</li>
                  <li>• prenom: required|string|max:100</li>
                  <li>• numero_telephone: nullable|regex:phone</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-indigo-700 dark:text-indigo-300">/api/auth/profile</code>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400">Récupération profil détaillé avec rôles et permissions</p>
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

      <h3>Visites - Gestion avancée du planning</h3>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">📅 Visites Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-purple-700 dark:text-purple-300">/api/visites</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Planning des visites avec filtres avancés</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Query Parameters:</h6>
                <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• <code>date_debut</code>: 2024-03-15</li>
                  <li>• <code>date_fin</code>: 2024-03-22</li>
                  <li>• <code>resident_id</code>: 12</li>
                  <li>• <code>statut</code>: programmee|en_cours|terminee|annulee</li>
                  <li>• <code>type_visite</code>: famille|professionnel|medical</li>
                  <li>• <code>with_visiteurs</code>: true</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Response Example:</h6>
                <pre class="text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id_visite": 45,
      "date_visite": "2024-03-20",
      "heure_debut": "14:00:00",
      "heure_fin": "16:00:00",
      "statut": "programmee",
      "type_visite": "famille",
      "objet_visite": "Visite familiale hebdomadaire",
      "resident": {
        "nom": "Martin",
        "prenom": "Sophie",
        "chambre": "A-205"
      },
      "visiteurs": [
        {
          "nom": "Martin",
          "prenom": "Pierre",
          "lien_parente": "Fils",
          "telephone": "0123456789",
          "piece_identite": "CNI",
          "numero_piece": "123456789"
        }
      ],
      "badge": {
        "numero_badge": "BADGE_001",
        "statut": "disponible"
      }
    }
  ]
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-purple-700 dark:text-purple-300">/api/visites</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Programmation nouvelle visite</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded overflow-x-auto">{
  "id_resident": 12,
  "date_visite": "2024-03-25",
  "heure_debut": "15:00",
  "heure_fin": "17:00",
  "type_visite": "famille",
  "objet_visite": "Anniversaire",
  "visiteurs": [
    {
      "nom": "Dupont",
      "prenom": "Marie",
      "lien_parente": "Fille",
      "telephone": "0987654321",
      "piece_identite": "CNI",
      "numero_piece": "987654321"
    }
  ]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Validations:</h6>
                <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• <code>id_resident</code>: exists:resident,id_personne</li>
                  <li>• <code>date_visite</code>: date|after:today</li>
                  <li>• <code>heure_debut</code>: date_format:H:i</li>
                  <li>• <code>heure_fin</code>: after:heure_debut</li>
                  <li>• <code>type_visite</code>: in:famille,professionnel,medical</li>
                  <li>• <code>visiteurs</code>: array|min:1|max:4</li>
                  <li>• <code>visiteurs.*.telephone</code>: regex:/^0[1-9][0-9]{8}$/</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-purple-700 dark:text-purple-300">/api/visites/planning-pdf</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Export PDF du planning de visites</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Query Options:</h6>
                <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• <code>date_debut</code>: 2024-03-01</li>
                  <li>• <code>date_fin</code>: 2024-03-31</li>
                  <li>• <code>resident_ids[]</code>: [12, 15, 20]</li>
                  <li>• <code>format</code>: daily|weekly|monthly</li>
                  <li>• <code>include_visiteurs</code>: true</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Response Headers:</h6>
                <pre class="text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded overflow-x-auto">Content-Type: application/pdf
Content-Disposition: attachment; filename="planning_visites_mars_2024.pdf"
Content-Length: 524288</pre>
              </div>
            </div>
          </div>

          <div class="border border-purple-200 dark:border-purple-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-purple-700 dark:text-purple-300">/api/visites/{id}/statut</code>
            </div>
            <p class="text-purple-600 dark:text-purple-400 mb-2">Changement statut visite (arrivée/départ)</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-purple-100 dark:bg-purple-900/50 p-2 rounded overflow-x-auto">{
  "nouveau_statut": "en_cours",
  "heure_arrivee": "14:15:00",
  "badge_attribue": "BADGE_003",
  "observations": "Visite démarrée en retard"
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-purple-900 dark:text-purple-200 mb-1">Statuts possibles:</h6>
                <ul class="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• <strong>programmee</strong>: En attente</li>
                  <li>• <strong>en_cours</strong>: Visiteur présent</li>
                  <li>• <strong>terminee</strong>: Visite finie</li>
                  <li>• <strong>annulee</strong>: Annulation</li>
                  <li>• <strong>no_show</strong>: Absence sans prévenir</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <h3>Badges - Système complet de gestion d'accès</h3>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🏷️ Badges Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-green-700 dark:text-green-300">/api/badges</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Inventaire complet des badges avec suivi</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Query Filters:</h6>
                <ul class="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• <code>statut</code>: disponible|attribue|perdu|desactive</li>
                  <li>• <code>type_badge</code>: visiteur|personnel|maintenance</li>
                  <li>• <code>attribue_a</code>: nom du porteur actuel</li>
                  <li>• <code>date_derniere_utilisation</code>: activité récente</li>
                  <li>• <code>with_historique</code>: true (historique complet)</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Response Structure:</h6>
                <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id_badge": 12,
      "numero_badge": "BADGE_012",
      "statut": "attribue",
      "type_badge": "visiteur",
      "attribue_a": "Martin Pierre",
      "date_attribution": "2024-03-15T14:00:00Z",
      "visite_associee": {
        "id_visite": 45,
        "resident": "Sophie Martin",
        "heure_debut": "14:00",
        "heure_fin": "16:00"
      },
      "zones_acces": ["hall", "ascenseur", "etage_2"],
      "derniere_utilisation": "2024-03-15T14:30:00Z"
    }
  ]
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-green-700 dark:text-green-300">/api/badges/{id}/attribuer</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Attribution badge à visiteur/personnel</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded overflow-x-auto">{
  "attribue_a": "Martin Pierre",
  "type_attribution": "visite",
  "visite_id": 45,
  "duree_max": "02:00:00",
  "zones_autorisees": ["hall", "ascenseur", "etage_2"],
  "observations": "Visite familiale"
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Auto-gestion:</h6>
                <ul class="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• <strong>Timer automatique</strong>: Libération auto</li>
                  <li>• <strong>Zones dynamiques</strong>: Selon type visite</li>
                  <li>• <strong>Tracking temps réel</strong>: Localisation badge</li>
                  <li>• <strong>Alertes</strong>: Dépassement horaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-green-700 dark:text-green-300">/api/badges/suivi</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Historique complet des utilisations</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Query Options:</h6>
                <ul class="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <li>• <code>badge_id</code>: 12</li>
                  <li>• <code>date_debut</code>: 2024-03-01</li>
                  <li>• <code>date_fin</code>: 2024-03-31</li>
                  <li>• <code>action</code>: attribution|liberation|utilisation</li>
                  <li>• <code>zone</code>: hall|ascenseur|parking</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-green-900 dark:text-green-200 mb-1">Response Example:</h6>
                <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded overflow-x-auto">{
  "historique": [
    {
      "timestamp": "2024-03-15T14:30:00Z",
      "action": "utilisation",
      "zone": "hall_entree",
      "badge": "BADGE_012",
      "porteur": "Martin Pierre",
      "visite_id": 45,
      "details": "Accès autorisé - visite en cours"
    }
  ]
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-green-700 dark:text-green-300">/api/badges/{id}/liberer</code>
            </div>
            <p class="text-green-600 dark:text-green-400 mb-2">Libération badge (fin visite/service)</p>
            <pre class="text-xs bg-green-100 dark:bg-green-900/50 p-2 rounded">{
  "motif_liberation": "fin_visite",
  "observations": "Retour badge en bon état"
}</pre>
          </div>

        </div>
      </div>

      <h3>Incidents - Système complet de gestion</h3>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Incidents Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Déclaration incident avec pièces jointes</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded overflow-x-auto">{
  "titre_incident": "Fuite d'eau appartement 205",
  "description_incident": "Fuite importante plafond salle de bain",
  "type_incident": "technique",
  "niveau_urgence": "haute",
  "lieu_incident": "Bâtiment A, Appartement 205",
  "id_resident_concerne": 15,
  "pieces_jointes": [
    {
      "nom_fichier": "fuite_photo1.jpg",
      "type_fichier": "image/jpeg",
      "contenu_base64": "data:image/jpeg;base64,/9j/4AAQ...",
      "taille_fichier": 524288
    }
  ]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Validations:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <code>titre_incident</code>: required|max:255</li>
                  <li>• <code>description_incident</code>: required|max:2000</li>
                  <li>• <code>type_incident</code>: in:technique,securite,entretien,medical</li>
                  <li>• <code>niveau_urgence</code>: in:faible,normale,haute,critique</li>
                  <li>• <code>pieces_jointes</code>: array|max:5</li>
                  <li>• <code>pieces_jointes.*.taille_fichier</code>: max:5MB</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Liste incidents avec filtrage avancé</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Query Parameters:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <code>statut_incident</code>: ouvert|en_cours|resolu|ferme</li>
                  <li>• <code>type_incident</code>: technique|securite|entretien|medical</li>
                  <li>• <code>niveau_urgence</code>: faible|normale|haute|critique</li>
                  <li>• <code>date_debut</code>: 2024-03-01</li>
                  <li>• <code>date_fin</code>: 2024-03-31</li>
                  <li>• <code>id_resident</code>: incidents d'un résident</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Response Structure:</h6>
                <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id_incident": 25,
      "numero_incident": "INC-2024-0025",
      "titre_incident": "Fuite d'eau",
      "statut_incident": "en_cours",
      "type_incident": "technique",
      "niveau_urgence": "haute",
      "date_creation": "2024-03-15T09:30:00Z",
      "date_resolution": null,
      "declarant": {
        "nom": "Martin",
        "prenom": "Sophie",
        "appartement": "A-205"
      },
      "pieces_jointes": [
        {
          "id_fichier": 45,
          "nom_fichier": "fuite_photo1.jpg",
          "url_fichier": "/storage/incidents/45_fuite_photo1.jpg"
        }
      ],
      "assignee": {
        "nom": "Technicien",
        "prenom": "Paul"
      }
    }
  ]
}</pre>
              </div>
            </div>
          </div>

          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">PATCH</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents/{id}/statut</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Mise à jour statut avec suivi complet</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded overflow-x-auto">{
  "nouveau_statut": "resolu",
  "commentaire_resolution": "Fuite réparée, plombier intervenu",
  "temps_intervention": "02:30:00",
  "cout_intervention": 150.00,
  "pieces_jointes_resolution": [
    {
      "nom_fichier": "reparation_terminee.jpg",
      "contenu_base64": "data:image/jpeg;base64,..."
    }
  ],
  "notifier_declarant": true
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-red-900 dark:text-red-200 mb-1">Workflow Statuts:</h6>
                <ul class="text-xs text-red-700 dark:text-red-300 space-y-1">
                  <li>• <strong>ouvert</strong> → en_cours (prise en charge)</li>
                  <li>• <strong>en_cours</strong> → resolu (intervention terminée)</li>
                  <li>• <strong>resolu</strong> → ferme (validation client)</li>
                  <li>• <strong>Toute étape</strong> → annule (si besoin)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-red-200 dark:border-red-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-red-700 dark:text-red-300">/api/incidents/{id}/historique</code>
            </div>
            <p class="text-red-600 dark:text-red-400 mb-2">Historique complet et timeline incident</p>
            <pre class="text-xs bg-red-100 dark:bg-red-900/50 p-2 rounded overflow-x-auto">{
  "timeline": [
    {
      "timestamp": "2024-03-15T09:30:00Z",
      "action": "creation",
      "auteur": "Sophie Martin",
      "details": "Incident déclaré"
    },
    {
      "timestamp": "2024-03-15T10:15:00Z", 
      "action": "prise_en_charge",
      "auteur": "Paul Technicien",
      "details": "Assignation automatique - technicien plomberie"
    }
  ]
}</pre>
          </div>

        </div>
      </div>

      <h3>Messages - Système de messagerie par groupes</h3>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">💬 Messagerie Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-blue-700 dark:text-blue-300">/api/groupes-message</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Liste des groupes de conversation de l'utilisateur</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Response Structure:</h6>
                <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id_groupe_message": 1,
      "nom_groupe": "Résidents Bât A",
      "date_creation": "2024-01-15T10:00:00Z",
      "membres_count": 15,
      "dernier_message": {
        "contenu_message": "Réunion prévue vendredi",
        "date_envoi": "2024-03-15T14:30:00Z",
        "auteur": {
          "nom": "Martin",
          "prenom": "Sophie"
        }
      },
      "non_lus": 3
    }
  ]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Query Options:</h6>
                <ul class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <code>with_last_message</code>: true</li>
                  <li>• <code>unread_only</code>: true</li>
                  <li>• <code>include_members</code>: true</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
              <code class="text-blue-700 dark:text-blue-300">/api/groupes-message/{id}/messages</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Messages d'un groupe avec pagination</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Response Example:</h6>
                <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded overflow-x-auto">{
  "data": [
    {
      "id_message": 123,
      "contenu_message": "Bonjour à tous !",
      "date_envoi": "2024-03-15T14:30:00Z",
      "a_fichiers": true,
      "reply_to": 120,
      "auteur": {
        "id_personne": 5,
        "nom": "Dupont",
        "prenom": "Jean",
        "photo_profil": "/storage/profiles/5.jpg"
      },
      "fichiers": [
        {
          "nom_original": "document.pdf",
          "type_fichier": "application/pdf",
          "taille_fichier": 1048576,
          "url": "/storage/messages/files/123_document.pdf"
        }
      ],
      "reactions": [
        {
          "emoji": "👍",
          "count": 3,
          "users": ["Alice", "Bob", "Charlie"]
        }
      ]
    }
  ]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Features supportées:</h6>
                <ul class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <strong>Replies</strong>: Messages en réponse (reply_to)</li>
                  <li>• <strong>Fichiers</strong>: Pièces jointes multiples</li>
                  <li>• <strong>Réactions</strong>: Emojis avec compteurs</li>
                  <li>• <strong>Typing indicators</strong>: "En train d'écrire"</li>
                  <li>• <strong>Read receipts</strong>: Accusés de lecture</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-blue-700 dark:text-blue-300">/api/groupes-message/{id}/messages</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Envoi nouveau message dans groupe</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Request Body:</h6>
                <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded overflow-x-auto">{
  "contenu_message": "Message avec pièce jointe",
  "reply_to": 145,
  "fichiers": [
    {
      "nom_original": "rapport.pdf",
      "content": "base64_encoded_file",
      "type": "application/pdf"
    }
  ]
}</pre>
              </div>
              <div>
                <h6 class="font-semibold text-blue-900 dark:text-blue-200 mb-1">Validations:</h6>
                <ul class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <code>contenu_message</code>: required|max:5000</li>
                  <li>• <code>reply_to</code>: exists:message,id_message</li>
                  <li>• <code>fichiers</code>: array|max:5</li>
                  <li>• <code>fichiers.*.content</code>: base64|max:10MB</li>
                  <li>• <code>fichiers.*.type</code>: mime:pdf,jpg,png,doc</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
              <code class="text-blue-700 dark:text-blue-300">/api/messages/{id}/reactions</code>
            </div>
            <p class="text-blue-600 dark:text-blue-400 mb-2">Ajouter/supprimer réaction emoji</p>
            <pre class="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded">{
  "emoji": "👍"
}</pre>
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
  // Traductions directes depuis les fichiers JSON - Section API
  const translations: Record<string, Record<string, any>> = {
    fr: {
      'api': {
        'title': 'Documentation API',
        'description': 'Référence complète des endpoints API',
        'header': {
          'title': 'API RESTful complète',
          'description': 'API REST moderne avec authentification Sanctum, validation stricte et documentation OpenAPI. Endpoints complets pour gestion d\'entreprise-résidence avec responses normalisées et gestion d\'erreurs robuste.',
          'features': {
            'auth': 'Laravel Sanctum + RBAC',
            'crud': 'Operations complètes',
            'filtering': 'Recherche et pagination',
            'validation': 'Rules strictes et sanitization'
          }
        },
        'config': {
          'title': 'Configuration de base',
          'urls': {
            'title': 'URLs des services',
            'description': 'Architecture dual backend avec proxy intelligent :',
            'endpoints_title': 'Endpoints principaux',
            'backend_client': {
              'title': 'Backend-Client (Port 8000)',
              'base_url': 'Base URL:',
              'api_prefix': 'API Prefix:',
              'full_url': 'Full URL:',
              'role': 'Role: API Gateway + Database Access'
            },
            'backend_nhs': {
              'title': 'Backend-NHS (Port 8001)',
              'base_url': 'Base URL:',
              'api_prefix': 'API Prefix:',
              'full_url': 'Full URL:',
              'role': 'Role: Business Logic Service'
            }
          },
          'auth': {
            'title': 'Authentification',
            'description': 'Laravel Sanctum pour authentification stateless sécurisée :',
            'flow_title': 'Flow d\'authentification',
            'login': {
              'title': '1. Login',
              'response': 'Response: Bearer token + user data'
            },
            'authenticated_requests': {
              'title': '2. Requêtes authentifiées',
              'header_required': 'Header required:'
            },
            'logout': {
              'title': '3. Logout',
              'description': 'Révoque le token'
            }
          }
        },
        'endpoints': {
          'title': 'Endpoints par module',
          'auth_module': {
            'title': 'Authentication - Gestion de l\'authentification'
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
  title: t('api.title') + ' - Documentation technique'
})

// Initialisation du thème
onMounted(() => {
  initTheme()
})
</script>


