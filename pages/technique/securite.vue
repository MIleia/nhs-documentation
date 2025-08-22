<template>
  <DocShell type="tech" :title="t('security.title')" :description="t('security.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Sécurité</h1>
      
      <div class="not-prose bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-12 border border-red-200/50 dark:border-red-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛡️ Sécurité multicouche</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Architecture de sécurité robuste avec défense en profondeur, conformité RGPD et protection contre 
          les vulnérabilités OWASP Top 10. Gestion d'entreprise-résidence avec sécurité de niveau entreprise.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔐 Authentication</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Laravel Sanctum + 2FA</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🛡️ Autorisation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">RBAC granulaire</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔒 Chiffrement</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">AES-256 + TLS 1.3</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">⚖️ RGPD</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Conformité complète</p>
          </div>
        </div>
      </div>

      <!-- Authentification et autorisation -->
      <h2>Authentification et autorisation</h2>
      
      <h3>Système d'authentification</h3>
      <p>Laravel Sanctum pour authentification stateless moderne :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🔑 Laravel Sanctum</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Fonctionnalités</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• <strong>Personal Access Tokens</strong> : Tokens API personnels</li>
              <li>• <strong>SPA Authentication</strong> : Sessions sécurisées SPA</li>
              <li>• <strong>Mobile API Tokens</strong> : Authentification mobile</li>
              <li>• <strong>Token Abilities</strong> : Permissions par token</li>
              <li>• <strong>Token Expiration</strong> : Durée de vie configurable</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Configuration sécurisée</h5>
            <ul class="space-y-1 text-blue-700 dark:text-blue-300">
              <li>• <strong>Stateful domains</strong> : Limitation des domaines</li>
              <li>• <strong>CSRF Protection</strong> : Protection activée</li>
              <li>• <strong>Same-site cookies</strong> : Strict enforcement</li>
              <li>• <strong>Secure cookies</strong> : HTTPS uniquement</li>
              <li>• <strong>Http-only cookies</strong> : Pas d'accès JS</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Authentification à deux facteurs (2FA)</h3>
      <p>Couche de sécurité supplémentaire optionnelle :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">📱 2FA Implementation</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">1. TOTP (Time-based OTP)</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>Applications compatibles</strong> : Google Authenticator, Authy, 1Password</li>
              <li>• <strong>QR Code generation</strong> : Configuration simple utilisateur</li>
              <li>• <strong>Backup codes</strong> : 8 codes de récupération générés</li>
              <li>• <strong>Window tolerance</strong> : ±30 secondes pour dérive horaire</li>
            </ul>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">2. SMS/Email Backup</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>SMS fallback</strong> : Si TOTP indisponible</li>
              <li>• <strong>Email backup</strong> : Méthode de récupération</li>
              <li>• <strong>Rate limiting</strong> : 3 tentatives/5 minutes</li>
              <li>• <strong>Temporary codes</strong> : Validité 10 minutes</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Système d'autorisation RBAC</h3>
      <p>Contrôle d'accès basé sur les rôles avec permissions granulaires :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">👥 Structure RBAC</h4>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">🔐 Super Admin</h5>
            <ul class="text-purple-700 dark:text-purple-300 space-y-1">
              <li>• Gestion complète utilisateurs</li>
              <li>• Configuration système</li>
              <li>• Accès base de données</li>
              <li>• Audit et logs</li>
              <li>• Gestion des admins</li>
            </ul>
          </div>
          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">⚙️ Administrateur</h5>
            <ul class="text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>• Gestion résidents/visiteurs</li>
              <li>• Configuration badges</li>
              <li>• Supervision incidents</li>
              <li>• Rapports et analytics</li>
              <li>• Modération messagerie</li>
            </ul>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">🛡️ Gardien</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Gestion incidents assignés</li>
              <li>• Validation visites</li>
              <li>• Contrôle badges actifs</li>
              <li>• Communication résidents</li>
              <li>• Rapports de service</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">🏠 Résident</h5>
          <ul class="text-green-700 dark:text-green-300 space-y-1 text-sm">
            <li>• Profil personnel uniquement • Déclaration incidents • Programmation visites • Messagerie avec gardiens/admin • Historique badges personnels</li>
          </ul>
        </div>
      </div>

      <!-- Protection contre vulnérabilités -->
      <h2>Protection contre vulnérabilités OWASP</h2>
      
      <h3>OWASP Top 10 - Mesures implémentées</h3>
      <p>Protection contre les principales vulnérabilités web :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">🚨 OWASP Top 10 Protection</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">A01: Broken Access Control</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>Laravel Policies</strong> : Autorisation à chaque endpoint</li>
              <li>• <strong>Gate system</strong> : Vérifications granulaires</li>
              <li>• <strong>Middleware guards</strong> : Protection route automatique</li>
              <li>• <strong>Resource policies</strong> : Contrôle CRUD par ressource</li>
            </ul>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">A02: Cryptographic Failures</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>AES-256-CBC</strong> : Chiffrement données sensibles</li>
              <li>• <strong>Bcrypt</strong> : Hash mots de passe (cost 12)</li>
              <li>• <strong>TLS 1.3</strong> : Chiffrement transport uniquement</li>
              <li>• <strong>HSTS</strong> : Forçage HTTPS navigateur</li>
            </ul>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">A03: Injection</h5>
            <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• <strong>Eloquent ORM</strong> : Requêtes préparées automatiques</li>
              <li>• <strong>Form Requests</strong> : Validation et sanitization</li>
              <li>• <strong>Input filtering</strong> : Nettoyage automatique inputs</li>
              <li>• <strong>Query bindings</strong> : Paramètres liés obligatoires</li>
            </ul>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">A04: Insecure Design</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>Security by design</strong> : Architecture sécurisée dès conception</li>
              <li>• <strong>Threat modeling</strong> : Analyse des menaces métier</li>
              <li>• <strong>Fail-safe defaults</strong> : Sécurité par défaut</li>
              <li>• <strong>Defense in depth</strong> : Couches de sécurité multiples</li>
            </ul>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">A05: Security Misconfiguration</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>Environment files</strong> : Configuration sécurisée par env</li>
              <li>• <strong>Debug disabled</strong> : Mode debug désactivé en production</li>
              <li>• <strong>Security headers</strong> : CSP, X-Frame-Options, etc.</li>
              <li>• <strong>Error handling</strong> : Messages d'erreur non révélateurs</li>
            </ul>
          </div>

        </div>
      </div>

      <h3>Protection XSS et CSRF</h3>
      <p>Sécurisation contre les attaques côté client :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🛡️ Protection XSS</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>Output encoding</strong> : Échappement automatique Laravel</li>
            <li>• <strong>Content Security Policy</strong> : CSP strict configuré</li>
            <li>• <strong>Input sanitization</strong> : Nettoyage données utilisateur</li>
            <li>• <strong>HTMLPurifier</strong> : Filtrage HTML sécurisé</li>
            <li>• <strong>Vue.js protection</strong> : Template sécurisé par défaut</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🔒 Protection CSRF</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>CSRF Tokens</strong> : Laravel tokens automatiques</li>
            <li>• <strong>SameSite cookies</strong> : Protection navigateur</li>
            <li>• <strong>Double Submit</strong> : Validation côté client/serveur</li>
            <li>• <strong>Origin validation</strong> : Vérification origine requêtes</li>
            <li>• <strong>Referer checking</strong> : Validation headers HTTP</li>
          </ul>
        </div>
      </div>

      <!-- Chiffrement et protection des données -->
      <h2>Chiffrement et protection des données</h2>
      
      <h3>Chiffrement au repos</h3>
      <p>Protection des données stockées avec chiffrement AES :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🔐 Encryption at Rest</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Données chiffrées</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• <strong>Données personnelles</strong> : Nom, prénom, adresse</li>
              <li>• <strong>Informations sensibles</strong> : Téléphone, email</li>
              <li>• <strong>Données métier</strong> : Numéros badges, accès</li>
              <li>• <strong>Messages privés</strong> : Contenu messagerie</li>
              <li>• <strong>Fichiers uploadés</strong> : Documents, photos</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Configuration AES</h5>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• <strong>Algorithme</strong> : AES-256-CBC</li>
              <li>• <strong>Clés</strong> : Rotation automatique 90 jours</li>
              <li>• <strong>Vecteurs IV</strong> : Uniques par chiffrement</li>
              <li>• <strong>Key derivation</strong> : PBKDF2 avec salt</li>
              <li>• <strong>Hardware Security</strong> : HSM pour clés maîtres</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Chiffrement en transit</h3>
      <p>Sécurisation de toutes les communications réseau :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🌐 Encryption in Transit</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">TLS Configuration</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>TLS 1.3 uniquement</strong> : Versions antérieures désactivées</li>
              <li>• <strong>Perfect Forward Secrecy</strong> : Échange de clés éphémères</li>
              <li>• <strong>Strong cipher suites</strong> : AES-GCM, ChaCha20-Poly1305</li>
              <li>• <strong>Certificate pinning</strong> : Validation certificats</li>
            </ul>
          </div>
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Headers de sécurité</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>HSTS</strong> : Strict-Transport-Security max-age=31536000</li>
              <li>• <strong>CSP</strong> : Content-Security-Policy strict</li>
              <li>• <strong>X-Frame-Options</strong> : DENY (anti-clickjacking)</li>
              <li>• <strong>X-Content-Type-Options</strong> : nosniff</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Gestion des mots de passe</h3>
      <p>Politique stricte pour mots de passe sécurisés :</p>
      
      <ul>
        <li><strong>Complexité minimale :</strong> 8 caractères, majuscules, minuscules, chiffres</li>
        <li><strong>Hash sécurisé :</strong> Bcrypt avec cost factor 12</li>
        <li><strong>Politique rotation :</strong> Expiration 90 jours pour admins</li>
        <li><strong>Historique :</strong> Interdiction réutilisation 5 derniers mots de passe</li>
        <li><strong>Tentatives limitées :</strong> Verrouillage après 5 échecs</li>
        <li><strong>Reset sécurisé :</strong> Tokens temporaires avec expiration</li>
      </ul>

      <!-- Conformité RGPD -->
      <h2>Conformité RGPD</h2>
      
      <h3>Droits des personnes concernées</h3>
      <p>Implémentation complète des droits RGPD :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">⚖️ Droits RGPD implémentés</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Droit d'accès (Art. 15)</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>Export personnel</strong> : API /api/user/data-export</li>
              <li>• <strong>Format structuré</strong> : JSON lisible par machine</li>
              <li>• <strong>Données complètes</strong> : Profil, messages, incidents, badges</li>
              <li>• <strong>Métadonnées</strong> : Dates création, modification, accès</li>
            </ul>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Droit de rectification (Art. 16)</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>Modification profil</strong> : Interface utilisateur complète</li>
              <li>• <strong>Validation changements</strong> : Contrôles métier</li>
              <li>• <strong>Historique modifications</strong> : Audit trail complet</li>
              <li>• <strong>Notification tiers</strong> : Propagation corrections</li>
            </ul>
          </div>

          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Droit à l'effacement (Art. 17)</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>Suppression compte</strong> : Soft delete avec anonymisation</li>
              <li>• <strong>Purge automatique</strong> : Données après 3 ans inactivité</li>
              <li>• <strong>Exceptions légales</strong> : Conservation obligations comptables</li>
              <li>• <strong>Confirmation utilisateur</strong> : Process de validation</li>
            </ul>
          </div>

          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Droit à la portabilité (Art. 20)</h5>
            <ul class="text-purple-700 dark:text-purple-300 space-y-1">
              <li>• <strong>Export portable</strong> : Formats ouverts (JSON, CSV)</li>
              <li>• <strong>API transfer</strong> : Transmission directe possible</li>
              <li>• <strong>Données fournies</strong> : Uniquement données utilisateur</li>
              <li>• <strong>Facilitation migration</strong> : Documentation format</li>
            </ul>
          </div>

        </div>
      </div>

      <h3>Gestion des consentements</h3>
      <p>Collecte et gestion transparente des consentements :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">✋ Consent Management</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Collecte consentements</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <strong>Finalités explicites</strong> : Purpose clear pour chaque traitement</li>
              <li>• <strong>Granularité</strong> : Consentement par finalité séparément</li>
              <li>• <strong>Opt-in actif</strong> : Pas de cases pré-cochées</li>
              <li>• <strong>Langue claire</strong> : Formulation compréhensible</li>
              <li>• <strong>Retrait facile</strong> : Même facilité que donner</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Traçabilité</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <strong>Horodatage</strong> : Date/heure exacte consentement</li>
              <li>• <strong>Version formulaire</strong> : Traçabilité évolutions</li>
              <li>• <strong>Preuves techniques</strong> : IP, User-Agent, etc.</li>
              <li>• <strong>Durée conservation</strong> : Preuve 3 ans après retrait</li>
              <li>• <strong>Audit régulier</strong> : Révision annuelle validité</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Registre des traitements</h3>
      <p>Documentation complète des activités de traitement :</p>
      
      <ol>
        <li><strong>Gestion des comptes utilisateurs :</strong>
          <ul>
            <li>Finalité : Authentification et gestion accès</li>
            <li>Base légale : Exécution contrat (résidence)</li>
            <li>Données : Identité, contact, permissions</li>
            <li>Conservation : Durée du contrat + 3 ans</li>
          </ul>
        </li>
        <li><strong>Contrôle d'accès physique :</strong>
          <ul>
            <li>Finalité : Sécurité des biens et personnes</li>
            <li>Base légale : Intérêt légitime + obligations légales</li>
            <li>Données : Badges, logs d'accès, horaires</li>
            <li>Conservation : 1 an (vidéosurveillance)</li>
          </ul>
        </li>
        <li><strong>Gestion incidents et maintenance :</strong>
          <ul>
            <li>Finalité : Maintenance et amélioration services</li>
            <li>Base légale : Exécution contrat</li>
            <li>Données : Déclarations, photos, résolutions</li>
            <li>Conservation : 5 ans (obligations comptables)</li>
          </ul>
        </li>
      </ol>

      <!-- Audit et logs de sécurité -->
      <h2>Audit et logs de sécurité</h2>
      
      <h3>Système de logging complet</h3>
      <p>Traçabilité exhaustive des actions sécuritaires :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">📋 Security Logs</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">Événements tracés</h5>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• <strong>Authentification</strong> : Login/logout, échecs, 2FA</li>
              <li>• <strong>Autorisation</strong> : Tentatives accès non autorisé</li>
              <li>• <strong>Modifications données</strong> : CRUD operations</li>
              <li>• <strong>Configuration</strong> : Changements paramètres</li>
              <li>• <strong>Accès physique</strong> : Badges, ouvertures</li>
              <li>• <strong>Erreurs système</strong> : Exceptions, pannes</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-2">Informations capturées</h5>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• <strong>Timestamp</strong> : UTC précis à la milliseconde</li>
              <li>• <strong>User ID</strong> : Utilisateur concerné</li>
              <li>• <strong>IP Address</strong> : Adresse source</li>
              <li>• <strong>User Agent</strong> : Client/navigateur</li>
              <li>• <strong>Action détaillée</strong> : Type et paramètres</li>
              <li>• <strong>Résultat</strong> : Succès/échec + détails</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Monitoring et alertes sécurité</h3>
      <p>Détection proactive des anomalies et menaces :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Security Monitoring</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Détection d'intrusion</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>Tentatives brute force</strong> : >5 échecs login/5min</li>
              <li>• <strong>Escalade privilèges</strong> : Tentatives accès non autorisé</li>
              <li>• <strong>Géolocalisation</strong> : Connexions pays inhabituels</li>
              <li>• <strong>Horaires atypiques</strong> : Activité heures non ouvrées</li>
            </ul>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Anomalies comportementales</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>Volume requests</strong> : Pics activité inhabituelle</li>
              <li>• <strong>Patterns d'accès</strong> : Comportements déviants</li>
              <li>• <strong>Data exfiltration</strong> : Téléchargements massifs</li>
              <li>• <strong>Modifications critiques</strong> : Changements sensibles</li>
            </ul>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Réponse automatique</h5>
            <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• <strong>Blocage temporaire</strong> : IP/compte suspect</li>
              <li>• <strong>Escalade</strong> : Notification équipe sécurité</li>
              <li>• <strong>Capture forensique</strong> : Préservation preuves</li>
              <li>• <strong>Isolation</strong> : Limitation permissions automatique</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Tests de sécurité -->
      <h2>Tests et validation de sécurité</h2>
      
      <h3>Tests de pénétration</h3>
      <p>Validation régulière de la posture sécuritaire :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Penetration Testing</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Tests automatisés</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• <strong>SAST</strong> : Analyse statique code source</li>
              <li>• <strong>DAST</strong> : Tests dynamiques application</li>
              <li>• <strong>Dependency scan</strong> : Vulnérabilités composants</li>
              <li>• <strong>OWASP ZAP</strong> : Scan automatique OWASP Top 10</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Tests manuels</h5>
            <ul class="space-y-1 text-purple-700 dark:text-purple-300">
              <li>• <strong>Pentest externe</strong> : Annuel par tiers certifié</li>
              <li>• <strong>Red team</strong> : Simulation attaque avancée</li>
              <li>• <strong>Social engineering</strong> : Tests phishing ciblé</li>
              <li>• <strong>Physical security</strong> : Test accès physique</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Vulnerability management</h3>
      <p>Processus de gestion des vulnérabilités découvertes :</p>
      
      <ol>
        <li><strong>Identification :</strong> Scans automatisés + remontées manuelles</li>
        <li><strong>Classification :</strong> CVSS score + impact métier</li>
        <li><strong>Priorisation :</strong> Critique < 72h, High < 1 semaine</li>
        <li><strong>Remediation :</strong> Patch, workaround ou mitigation</li>
        <li><strong>Verification :</strong> Tests de non-régression</li>
        <li><strong>Documentation :</strong> Mise à jour procédures sécurité</li>
      </ol>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 mt-12 border border-red-200/50 dark:border-red-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛡️ Sécurité de niveau entreprise</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette architecture de sécurité multicouche garantit la protection des données de gestion d'entreprise-résidence 
          avec conformité RGPD complète, défense contre OWASP Top 10 et monitoring proactif des menaces.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔐 Auth robuste</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Sanctum + 2FA + RBAC</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🛡️ Protection OWASP</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Top 10 mitigé complètement</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">⚖️ RGPD complet</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Tous droits implémentés</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🚨 Monitoring 24/7</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Détection proactive</p>
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
      'security': {
        'title': 'Sécurité',
        'description': 'Mesures de sécurité et protocoles'
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

useHead({ title: t('security.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


