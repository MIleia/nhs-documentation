<template>
  <DocShell type="tech" title="Base de données" description="Structure et gestion des données">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Base de données</h1>
      
      <div class="not-prose bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 mb-12 border border-cyan-200/50 dark:border-cyan-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">💾 Architecture données relationnelle</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Base de données MySQL 8.0 conçue pour performance, intégrité et évolutivité. 
          Structure optimisée pour gestion d'entreprise-résidence avec relations complexes et contraintes métier.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">🏗️ Structure</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">12 tables principales + indexes</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">🔗 Relations</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Intégrité référentielle stricte</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">⚡ Performance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Optimisations requêtes complexes</p>
          </div>
        </div>
      </div>

      <!-- Schéma général -->
      <h2>Schéma de base de données</h2>
      
      <h3>Vue d'ensemble des tables</h3>
      <p>Architecture relationnelle avec 12 tables principales organisées par domaine fonctionnel :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">📊 Tables par domaine</h4>
        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-3">👥 Gestion Utilisateurs</h5>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>users</strong> : Comptes utilisateurs principaux</li>
              <li>• <strong>roles</strong> : Rôles système (admin, gardien, résident)</li>
              <li>• <strong>permissions</strong> : Permissions granulaires</li>
              <li>• <strong>user_roles</strong> : Association utilisateurs-rôles</li>
              <li>• <strong>role_permissions</strong> : Association rôles-permissions</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-900 dark:text-gray-200 mb-3">🏢 Gestion Résidence</h5>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• <strong>badges</strong> : Badges d'accès physique</li>
              <li>• <strong>incidents</strong> : Incidents et demandes</li>
              <li>• <strong>messages</strong> : Système de messagerie</li>
              <li>• <strong>visites</strong> : Planification visites</li>
              <li>• <strong>logs</strong> : Journal d'activité système</li>
              <li>• <strong>settings</strong> : Configuration application</li>
              <li>• <strong>notifications</strong> : Notifications utilisateurs</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tables détaillées -->
      <h2>Structure détaillée des tables</h2>
      
      <h3>Table users - Utilisateurs</h3>
      <p>Table centrale pour gestion des comptes utilisateurs :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">👤 Structure table users</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse border border-blue-200 dark:border-blue-700">
            <thead class="bg-blue-100 dark:bg-blue-900/50">
              <tr>
                <th class="border border-blue-200 dark:border-blue-700 p-3 text-left font-semibold text-blue-900 dark:text-blue-200">Champ</th>
                <th class="border border-blue-200 dark:border-blue-700 p-3 text-left font-semibold text-blue-900 dark:text-blue-200">Type</th>
                <th class="border border-blue-200 dark:border-blue-700 p-3 text-left font-semibold text-blue-900 dark:text-blue-200">Contraintes</th>
                <th class="border border-blue-200 dark:border-blue-700 p-3 text-left font-semibold text-blue-900 dark:text-blue-200">Description</th>
              </tr>
            </thead>
            <tbody class="text-blue-700 dark:text-blue-300">
              <tr>
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>id</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">INT AUTO_INCREMENT</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">PRIMARY KEY</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Identifiant unique</td>
              </tr>
              <tr class="bg-blue-25 dark:bg-blue-950/20">
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>email</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">VARCHAR(255)</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">UNIQUE, NOT NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Email unique d'identification</td>
              </tr>
              <tr>
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>password</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">VARCHAR(255)</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">NOT NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Mot de passe hashé (bcrypt)</td>
              </tr>
              <tr class="bg-blue-25 dark:bg-blue-950/20">
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>nom</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">VARCHAR(100)</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">NOT NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Nom de famille</td>
              </tr>
              <tr>
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>prenom</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">VARCHAR(100)</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">NOT NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Prénom</td>
              </tr>
              <tr class="bg-blue-25 dark:bg-blue-950/20">
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>telephone</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">VARCHAR(20)</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Numéro de téléphone</td>
              </tr>
              <tr>
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>adresse</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">TEXT</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">NULL</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Adresse complète</td>
              </tr>
              <tr class="bg-blue-25 dark:bg-blue-950/20">
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>actif</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">BOOLEAN</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">DEFAULT TRUE</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Statut actif/inactif</td>
              </tr>
              <tr>
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>created_at</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">TIMESTAMP</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">DEFAULT CURRENT_TIMESTAMP</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Date de création</td>
              </tr>
              <tr class="bg-blue-25 dark:bg-blue-950/20">
                <td class="border border-blue-200 dark:border-blue-700 p-3"><code>updated_at</code></td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">TIMESTAMP</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">ON UPDATE CURRENT_TIMESTAMP</td>
                <td class="border border-blue-200 dark:border-blue-700 p-3">Date de modification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Table badges - Contrôle d'accès</h3>
      <p>Gestion des badges d'accès physique et permissions :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🏷️ Structure table badges</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Champs principaux</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <code>id</code> : Identifiant unique (PK)</li>
              <li>• <code>user_id</code> : Référence utilisateur (FK)</li>
              <li>• <code>numero_badge</code> : Numéro physique unique</li>
              <li>• <code>type_badge</code> : résident|visiteur|prestataire</li>
              <li>• <code>statut</code> : actif|suspendu|révoqué</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Métadonnées</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <code>date_emission</code> : Date de création</li>
              <li>• <code>date_expiration</code> : Date d'expiration</li>
              <li>• <code>zones_acces</code> : JSON zones autorisées</li>
              <li>• <code>horaires_acces</code> : JSON créneaux</li>
              <li>• <code>derniere_utilisation</code> : Timestamp</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Table incidents - Gestion d'incidents</h3>
      <p>Workflow complet de traitement des incidents et demandes :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🚨 Structure table incidents</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Identification</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <code>id</code> : Identifiant unique</li>
              <li>• <code>user_id</code> : Utilisateur déclarant</li>
              <li>• <code>assigned_to</code> : Assigné à (gardien/admin)</li>
              <li>• <code>numero_ticket</code> : Numéro public unique</li>
              <li>• <code>titre</code> : Titre descriptif</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Workflow</h5>
            <ul class="space-y-1 text-orange-700 dark:text-orange-300">
              <li>• <code>statut</code> : ouvert|en_cours|résolu|fermé</li>
              <li>• <code>priorite</code> : basse|normale|haute|urgente</li>
              <li>• <code>categorie</code> : technique|sécurité|entretien</li>
              <li>• <code>localisation</code> : Zone/appartement concerné</li>
              <li>• <code>resolution</code> : Description solution</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Table messages - Système de messagerie</h3>
      <p>Communication sécurisée entre utilisateurs :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">💬 Structure table messages</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse border border-purple-200 dark:border-purple-700">
            <thead class="bg-purple-100 dark:bg-purple-900/50">
              <tr>
                <th class="border border-purple-200 dark:border-purple-700 p-3 text-left font-semibold text-purple-900 dark:text-purple-200">Champ</th>
                <th class="border border-purple-200 dark:border-purple-700 p-3 text-left font-semibold text-purple-900 dark:text-purple-200">Type</th>
                <th class="border border-purple-200 dark:border-purple-700 p-3 text-left font-semibold text-purple-900 dark:text-purple-200">Description</th>
              </tr>
            </thead>
            <tbody class="text-purple-700 dark:text-purple-300">
              <tr>
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>from_user_id</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">INT</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Expéditeur (FK users)</td>
              </tr>
              <tr class="bg-purple-25 dark:bg-purple-950/20">
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>to_user_id</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">INT</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Destinataire (FK users)</td>
              </tr>
              <tr>
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>sujet</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">VARCHAR(255)</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Sujet du message</td>
              </tr>
              <tr class="bg-purple-25 dark:bg-purple-950/20">
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>contenu</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">TEXT</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Corps du message</td>
              </tr>
              <tr>
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>lu</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">BOOLEAN</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Statut de lecture</td>
              </tr>
              <tr class="bg-purple-25 dark:bg-purple-950/20">
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>date_lecture</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">TIMESTAMP</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">Horodatage lecture</td>
              </tr>
              <tr>
                <td class="border border-purple-200 dark:border-purple-700 p-3"><code>priorite</code></td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">ENUM</td>
                <td class="border border-purple-200 dark:border-purple-700 p-3">normale|importante|urgente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Relations et intégrité -->
      <h2>Relations et intégrité référentielle</h2>
      
      <h3>Contraintes de clés étrangères</h3>
      <p>Relations strictes pour garantir la cohérence des données :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🔗 Relations principales</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">👤 Gestion utilisateurs</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <code>user_roles.user_id</code> → <code>users.id</code> (CASCADE DELETE)</li>
              <li>• <code>user_roles.role_id</code> → <code>roles.id</code> (CASCADE DELETE)</li>
              <li>• <code>role_permissions.role_id</code> → <code>roles.id</code> (CASCADE DELETE)</li>
              <li>• <code>role_permissions.permission_id</code> → <code>permissions.id</code> (CASCADE DELETE)</li>
            </ul>
          </div>
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">🏷️ Badges et accès</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <code>badges.user_id</code> → <code>users.id</code> (CASCADE DELETE)</li>
              <li>• <code>visites.user_id</code> → <code>users.id</code> (SET NULL)</li>
              <li>• <code>visites.badge_id</code> → <code>badges.id</code> (SET NULL)</li>
            </ul>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">🚨 Incidents et messages</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <code>incidents.user_id</code> → <code>users.id</code> (CASCADE DELETE)</li>
              <li>• <code>incidents.assigned_to</code> → <code>users.id</code> (SET NULL)</li>
              <li>• <code>messages.from_user_id</code> → <code>users.id</code> (CASCADE DELETE)</li>
              <li>• <code>messages.to_user_id</code> → <code>users.id</code> (CASCADE DELETE)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Indexes et optimisations</h3>
      <p>Indexes stratégiques pour performance des requêtes fréquentes :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">📊 Indexes primaires</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>users.email</strong> : UNIQUE (authentification)</li>
            <li>• <strong>badges.numero_badge</strong> : UNIQUE (identification)</li>
            <li>• <strong>incidents.numero_ticket</strong> : UNIQUE (référence)</li>
            <li>• <strong>messages(from_user_id, to_user_id)</strong> : Composite</li>
            <li>• <strong>logs.created_at</strong> : Recherche temporelle</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">🚀 Indexes de performance</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>incidents(statut, priorite)</strong> : Filtrage rapide</li>
            <li>• <strong>badges(statut, type_badge)</strong> : Recherche badges</li>
            <li>• <strong>messages.lu</strong> : Messages non lus</li>
            <li>• <strong>user_roles.user_id</strong> : Vérification permissions</li>
            <li>• <strong>notifications.user_id</strong> : Notifications utilisateur</li>
          </ul>
        </div>
      </div>

      <!-- Configuration et maintenance -->
      <h2>Configuration et maintenance</h2>
      
      <h3>Configuration MySQL</h3>
      <p>Paramètres optimisés pour performance et sécurité :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚙️ Paramètres recommandés</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Performance</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <code>innodb_buffer_pool_size</code> : 70% RAM</li>
              <li>• <code>max_connections</code> : 200</li>
              <li>• <code>query_cache_size</code> : 64M</li>
              <li>• <code>innodb_log_file_size</code> : 256M</li>
              <li>• <code>tmp_table_size</code> : 64M</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Sécurité</h5>
            <ul class="space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>• <code>sql_mode</code> : STRICT_TRANS_TABLES</li>
              <li>• <code>local_infile</code> : 0 (désactivé)</li>
              <li>• <code>skip_symbolic_links</code> : ON</li>
              <li>• <code>secure_file_priv</code> : /secure/dir</li>
              <li>• SSL/TLS obligatoire pour connexions</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Stratégie de sauvegarde</h3>
      <p>Plan de sauvegarde robuste pour protection des données :</p>
      
      <ol>
        <li><strong>Sauvegarde complète :</strong>
          <ul>
            <li>Fréquence : Quotidienne à 2h00</li>
            <li>Méthode : mysqldump avec --single-transaction</li>
            <li>Compression : gzip pour réduction taille</li>
            <li>Stockage : Hors site + local (7 jours)</li>
          </ul>
        </li>
        <li><strong>Sauvegarde incrémentale :</strong>
          <ul>
            <li>Fréquence : Toutes les 4 heures</li>
            <li>Méthode : Binary logs MySQL</li>
            <li>Rétention : 48 heures local</li>
            <li>Point-in-time recovery possible</li>
          </ul>
        </li>
        <li><strong>Tests de restauration :</strong>
          <ul>
            <li>Validation hebdomadaire automatique</li>
            <li>Environnement de test dédié</li>
            <li>Métriques de temps de restauration</li>
            <li>Documentation procédures d'urgence</li>
          </ul>
        </li>
      </ol>

      <h3>Monitoring et alertes</h3>
      <p>Surveillance proactive de la santé de la base :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">📈 Métriques surveillées</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Performance</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Temps réponse</strong> : < 100ms (SELECT), < 500ms (UPDATE)</li>
              <li>• <strong>Connexions actives</strong> : Alert si > 150</li>
              <li>• <strong>Requêtes lentes</strong> : Log si > 2s</li>
              <li>• <strong>Buffer pool hit ratio</strong> : > 95%</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Ressources</h5>
            <ul class="space-y-1 text-green-700 dark:text-green-300">
              <li>• <strong>Espace disque</strong> : Alert si < 20% libre</li>
              <li>• <strong>CPU usage</strong> : Alert si > 80% sustained</li>
              <li>• <strong>Memory usage</strong> : Monitor swap usage</li>
              <li>• <strong>Réplication lag</strong> : Alert si > 30s</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Migration et évolution -->
      <h2>Migration et évolution du schéma</h2>
      
      <h3>Gestion des migrations Laravel</h3>
      <p>Évolution contrôlée du schéma de base de données :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔄 Process de migration</h4>
        <div class="space-y-4 text-sm">
          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">1. Développement</h5>
            <ul class="text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>• Création migration : <code>php artisan make:migration</code></li>
              <li>• Test en local : <code>php artisan migrate</code></li>
              <li>• Rollback test : <code>php artisan migrate:rollback</code></li>
              <li>• Validation structure et données</li>
            </ul>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">2. Staging</h5>
            <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Copie données production vers staging</li>
              <li>• Exécution migration avec données réelles</li>
              <li>• Tests complets application</li>
              <li>• Validation performance queries</li>
            </ul>
          </div>
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">3. Production</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• Sauvegarde complète pré-migration</li>
              <li>• Mode maintenance activé</li>
              <li>• Migration avec monitoring</li>
              <li>• Validation post-migration</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Évolutions prévues</h3>
      <p>Roadmap d'amélioration du schéma de données :</p>
      
      <ul>
        <li><strong>Performance :</strong> Partitioning des tables logs par date</li>
        <li><strong>Audit :</strong> Tables d'audit automatique pour traçabilité</li>
        <li><strong>Analytics :</strong> Vues matérialisées pour reporting</li>
        <li><strong>Archive :</strong> Stratégie d'archivage données anciennes</li>
        <li><strong>Réplication :</strong> Read replicas pour scalabilité</li>
      </ul>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-8 mt-12 border border-cyan-200/50 dark:border-cyan-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">💎 Base de données robuste et évolutive</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette architecture de base de données garantit performance, intégrité et sécurité pour la gestion d'entreprise-résidence. 
          Les optimisations et la stratégie de maintenance assurent une évolutivité à long terme.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">🔒 Intégrité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Contraintes strictes et validation</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">⚡ Performance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Indexes optimisés et requêtes rapides</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-cyan-900 dark:text-cyan-200 mb-2">🔄 Évolutivité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Migrations contrôlées et extensibilité</p>
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
  useHead({ title: 'Base de données - Documentation technique' })

  onMounted(() => {
    initTheme()
  })
</script>


