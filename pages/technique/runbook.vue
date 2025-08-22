<template>
  <DocShell type="tech" :title="t('runbook.title')" :description="t('runbook.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Runbook opérationnel</h1>
      
      <div class="not-prose bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-8 mb-12 border border-red-200/50 dark:border-red-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚨 Guide d'intervention</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Procédures d'intervention d'urgence et guide opérationnel pour la gestion d'incidents de la plateforme. 
          Diagnostics rapides, escalade des incidents et plans de contingence pour maintenir la continuité de service.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔥 Urgences</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Intervention immédiate</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔍 Diagnostic</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Analyse des problèmes</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">📞 Escalade</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Procédures d'alerte</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🛡️ Contingence</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Plans de repli</p>
          </div>
        </div>
      </div>

      <!-- Classification des incidents -->
      <h2>Classification des incidents</h2>
      
      <h3>Niveaux de criticité</h3>
      <p>Classification et temps de réponse selon la criticité :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Incident Classification Matrix</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">P1 - CRITIQUE (Réponse immédiate)</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Scenarios :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Application inaccessible (>50% utilisateurs)</li>
                  <li>• Perte de données</li>
                  <li>• Faille de sécurité active</li>
                  <li>• Incendie/urgence physique</li>
                  <li>• Système de badges HS (sécurité)</li>
                </ul>
              </div>
              <div>
                <strong>Actions :</strong>
                <ul class="mt-2 space-y-1">
                  <li>⏱️ Temps de réponse : 15 minutes</li>
                  <li>📞 Alerte immédiate équipe on-call</li>
                  <li>📢 Communication utilisateurs</li>
                  <li>🎯 Objectif résolution : 2 heures</li>
                  <li>👥 War room si nécessaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">P2 - ÉLEVÉ (Réponse rapide)</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Scenarios :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Dégradation performance significative</li>
                  <li>• Fonctionnalité majeure indisponible</li>
                  <li>• Erreurs récurrentes</li>
                  <li>• API lente ou instable</li>
                  <li>• Système de messagerie HS</li>
                </ul>
              </div>
              <div>
                <strong>Actions :</strong>
                <ul class="mt-2 space-y-1">
                  <li>⏱️ Temps de réponse : 1 heure</li>
                  <li>📱 Notification équipe technique</li>
                  <li>📊 Monitoring renforcé</li>
                  <li>🎯 Objectif résolution : 8 heures</li>
                  <li>📝 Documentation détaillée</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">P3 - MOYEN (Réponse normale)</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Scenarios :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Bug mineur dans interface</li>
                  <li>• Ralentissement léger</li>
                  <li>• Erreur sporadique</li>
                  <li>• Problème d'affichage</li>
                  <li>• Rapport incomplet</li>
                </ul>
              </div>
              <div>
                <strong>Actions :</strong>
                <ul class="mt-2 space-y-1">
                  <li>⏱️ Temps de réponse : 4 heures</li>
                  <li>📧 Ticket dans planning</li>
                  <li>🔍 Investigation planifiée</li>
                  <li>🎯 Objectif résolution : 2 jours</li>
                  <li>📅 Intégration sprint suivant</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">P4 - BAS (Réponse différée)</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Scenarios :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Amélioration UX</li>
                  <li>• Bug cosmétique</li>
                  <li>• Demande d'évolution</li>
                  <li>• Optimisation performance</li>
                  <li>• Documentation manquante</li>
                </ul>
              </div>
              <div>
                <strong>Actions :</strong>
                <ul class="mt-2 space-y-1">
                  <li>⏱️ Temps de réponse : 24 heures</li>
                  <li>📝 Backlog produit</li>
                  <li>📊 Priorisation équipe</li>
                  <li>🎯 Objectif résolution : 1 semaine</li>
                  <li>🔄 Révision périodique</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Procédures d'escalade -->
      <h2>Procédures d'escalade</h2>
      
      <h3>Matrice d'escalade</h3>
      <p>Chain de responsabilité et contacts d'urgence :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">📞 Escalation Matrix</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Niveau 1 - Support technique</h5>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <strong>Contacts :</strong>
                <ul class="mt-2 space-y-1">
                  <li>📱 Technicien on-call : +33 6 XX XX XX XX</li>
                  <li>📧 Email : support@gestion-residence.com</li>
                  <li>💬 Slack : #ops-incidents</li>
                  <li>🎫 Ticketing : support.gestion-residence.com</li>
                </ul>
              </div>
              <div>
                <strong>Responsabilités :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Premier niveau de réponse</li>
                  <li>• Diagnostic initial</li>
                  <li>• Actions correctives simples</li>
                  <li>• Documentation incident</li>
                </ul>
              </div>
              <div>
                <strong>Escalade si :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Pas de résolution en 30 min (P1)</li>
                  <li>• Expertise spécialisée requise</li>
                  <li>• Impact business critique</li>
                  <li>• Décision architecture nécessaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Niveau 2 - Lead technique</h5>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <strong>Contacts :</strong>
                <ul class="mt-2 space-y-1">
                  <li>📱 Lead tech : +33 6 XX XX XX XX</li>
                  <li>📧 Email : lead-tech@gestion-residence.com</li>
                  <li>💬 Slack : @lead-tech</li>
                  <li>🔔 PagerDuty : lead-tech-escalation</li>
                </ul>
              </div>
              <div>
                <strong>Responsabilités :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Coordination équipe technique</li>
                  <li>• Décisions architecture urgentes</li>
                  <li>• Communication stakeholders</li>
                  <li>• Post-mortem incidents</li>
                </ul>
              </div>
              <div>
                <strong>Escalade si :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Pas de résolution en 1h (P1)</li>
                  <li>• Impact financier significatif</li>
                  <li>• Décision business requise</li>
                  <li>• Médiatisation possible</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Niveau 3 - Direction technique</h5>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <strong>Contacts :</strong>
                <ul class="mt-2 space-y-1">
                  <li>📱 CTO : +33 6 XX XX XX XX</li>
                  <li>📧 Email : cto@gestion-residence.com</li>
                  <li>💬 Slack : @cto</li>
                  <li>🔔 Urgence : Signal +33 6 XX XX XX XX</li>
                </ul>
              </div>
              <div>
                <strong>Responsabilités :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Décisions stratégiques urgentes</li>
                  <li>• Communication direction</li>
                  <li>• Coordination externe</li>
                  <li>• Gestion de crise</li>
                </ul>
              </div>
              <div>
                <strong>Escalade si :</strong>
                <ul class="mt-2 space-y-1">
                  <li>• Impact business majeur</li>
                  <li>• Incident sécurité critique</li>
                  <li>• Problème réputationnel</li>
                  <li>• Décision CEO requise</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Playbooks d'intervention -->
      <h2>Playbooks d'intervention</h2>
      
      <h3>Application inaccessible</h3>
      <p>Procédure pour incident critique d'accessibilité :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🔥 Playbook - Application Down</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Phase 1 - Évaluation immédiate (0-5 min)</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code># 1. Vérification rapide accessibilité
curl -I https://gestion-residence.com
curl -I https://api.gestion-residence.com/health

# 2. Status des services principaux
systemctl status nginx
systemctl status php8.2-fpm
systemctl status mysql
systemctl status redis-server

# 3. Vérification ports
netstat -tuln | grep -E ':80|:443|:3000|:8000|:8001'

# 4. Logs récents d'erreur
tail -n 50 /var/log/nginx/error.log
tail -n 50 /var/www/gestion-residence/backend-client/storage/logs/laravel.log

# 5. Usage ressources
top -n 1 | head -20
df -h
free -h

# 6. Processes suspects
ps aux | grep -E 'nginx|php-fpm|mysql|redis' | grep -v grep</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Phase 2 - Actions correctives (5-15 min)</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code># Actions selon diagnostic

## Si services arrêtés
systemctl restart nginx
systemctl restart php8.2-fpm
systemctl restart mysql
systemctl restart redis-server

## Si problème configuration
nginx -t  # Test config nginx
if [ $? -eq 0 ]; then
    systemctl reload nginx
else
    # Rollback config si erreur
    cp /etc/nginx/nginx.conf.backup /etc/nginx/nginx.conf
    systemctl restart nginx
fi

## Si saturation disque
# Nettoyage d'urgence
find /var/log -name "*.log" -size +100M -delete
find /tmp -type f -mtime +1 -delete
/var/www/gestion-residence/scripts/cleanup-system.sh

## Si saturation mémoire
# Redémarrage services gourmands
systemctl restart php8.2-fpm
# Optimisation MySQL
mysql -e "FLUSH TABLES; FLUSH QUERY CACHE;"

## Si problème réseau
# Test connectivité
ping -c 3 8.8.8.8
# Vérification DNS
nslookup gestion-residence.com
# Reset interface si nécessaire (extrême)
# systemctl restart networking</code></pre>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Phase 3 - Communication & monitoring (15-30 min)</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code># 1. Notification stakeholders
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data '{"text":"🚨 INCIDENT P1: Application inaccessible - Investigation en cours"}'

# 2. Status page update
curl -X POST "https://api.statuspage.io/v1/pages/PAGE_ID/incidents" \
  -H "Authorization: OAuth TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "incident": {
      "name": "Service Disruption",
      "status": "investigating",
      "impact_override": "major",
      "body": "Nous enquêtons sur un problème affectant l'\''accessibilité de l'\''application."
    }
  }'

# 3. Monitoring continu (script background)
#!/bin/bash
while true; do
    if curl -f -s https://gestion-residence.com > /dev/null; then
        echo "$(date): ✅ Application accessible"
        # Notification recovery
        curl -X POST "$SLACK_WEBHOOK_URL" \
          -H 'Content-type: application/json' \
          --data '{"text":"✅ RECOVERY: Application accessible - Incident résolu"}'
        break
    else
        echo "$(date): ❌ Application toujours inaccessible"
        sleep 30
    fi
done &</code></pre>
          </div>

          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Phase 4 - Post-incident (30+ min)</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code># 1. Collecte des métriques incident
echo "=== INCIDENT REPORT ===" > /tmp/incident_$(date +%Y%m%d_%H%M%S).log
echo "Start time: $(date)" >> /tmp/incident_*.log
echo "Resolution time: $(date)" >> /tmp/incident_*.log

# 2. Sauvegarde logs pour analyse
mkdir -p /var/log/incidents/$(date +%Y%m%d_%H%M%S)
cp /var/log/nginx/error.log /var/log/incidents/$(date +%Y%m%d_%H%M%S)/
cp /var/www/gestion-residence/backend-client/storage/logs/laravel.log /var/log/incidents/$(date +%Y%m%d_%H%M%S)/

# 3. Health check complet
/var/www/gestion-residence/scripts/health-check.sh

# 4. Vérification intégrité données
cd /var/www/gestion-residence/backend-client
php artisan health:check-data-integrity

# 5. Performance baseline
curl -w "@curl-format.txt" -o /dev/null -s https://gestion-residence.com

# 6. Update status page (résolu)
curl -X PATCH "https://api.statuspage.io/v1/pages/PAGE_ID/incidents/INCIDENT_ID" \
  -H "Authorization: OAuth TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "incident": {
      "status": "resolved",
      "body": "Le problème a été résolu. Tous les services fonctionnent normalement."
    }
  }'</code></pre>
          </div>

        </div>
      </div>

      <!-- Diagnostic rapide -->
      <h2>Outils de diagnostic rapide</h2>
      
      <h3>Scripts de diagnostic automatisé</h3>
      <p>Outils pour identifier rapidement la source des problèmes :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🔍 Quick Diagnostics</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Script de diagnostic global</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/quick-diagnosis.sh

echo "🔍 Starting quick system diagnosis..."

# Function to test and report
test_and_report() {
    local test_name="$1"
    local command="$2"
    local expected="$3"
    
    echo -n "Testing $test_name... "
    if eval "$command" > /dev/null 2>&1; then
        echo "✅ OK"
    else
        echo "❌ FAILED"
        echo "  Command: $command"
        echo "  Expected: $expected"
    fi
}

# Basic connectivity tests
echo "=== CONNECTIVITY TESTS ==="
test_and_report "Internet connectivity" "ping -c 1 8.8.8.8" "ping success"
test_and_report "DNS resolution" "nslookup google.com" "domain resolved"
test_and_report "Frontend (port 3000)" "curl -f http://localhost:3000/health" "HTTP 200"
test_and_report "API Client (port 8000)" "curl -f http://localhost:8000/api/health" "HTTP 200"
test_and_report "API NHS (port 8001)" "curl -f http://localhost:8001/api/health" "HTTP 200"

# Service status tests
echo -e "\n=== SERVICE STATUS ==="
services=("nginx" "php8.2-fpm" "mysql" "redis-server")
for service in "${services[@]}"; do
    if systemctl is-active --quiet $service; then
        echo "✅ $service is running"
    else
        echo "❌ $service is not running"
        echo "   Status: $(systemctl is-active $service)"
        echo "   Since: $(systemctl show $service --property=ActiveEnterTimestamp --value)"
    fi
done

# Resource usage
echo -e "\n=== RESOURCE USAGE ==="
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print "  " $2 " " $4}'

echo "Memory Usage:"
free -h | awk 'NR==2{printf "  Used: %s/%s (%.1f%%)\n", $3, $2, $3*100/($3+$4)}'

echo "Disk Usage:"
df -h / | awk 'NR==2{printf "  Used: %s/%s (%s)\n", $3, $2, $5}'

# Application health
echo -e "\n=== APPLICATION HEALTH ==="

# Database connectivity
echo -n "Database connection... "
if mysql -e "SELECT 1" > /dev/null 2>&1; then
    echo "✅ OK"
    # Count active connections
    connections=$(mysql -e "SHOW STATUS LIKE 'Threads_connected'" | tail -1 | awk '{print $2}')
    echo "  Active connections: $connections"
else
    echo "❌ FAILED"
fi

# Redis connectivity  
echo -n "Redis connection... "
if redis-cli ping | grep -q "PONG"; then
    echo "✅ OK"
    # Redis memory usage
    redis_memory=$(redis-cli info memory | grep used_memory_human | cut -d: -f2 | tr -d '\r')
    echo "  Memory usage: $redis_memory"
else
    echo "❌ FAILED"
fi

# Log analysis (last 10 minutes)
echo -e "\n=== RECENT ERRORS ==="
echo "Nginx errors (last 10 min):"
find /var/log/nginx -name "error.log" -exec tail -1000 {} \; | \
    awk -v cutoff=$(date -d '10 minutes ago' '+%Y/%m/%d %H:%M:%S') '$1" "$2 > cutoff' | \
    wc -l | awk '{printf "  %d errors found\n", $1}'

echo "Laravel errors (last 10 min):"
find /var/www/gestion-residence/backend-*/storage/logs -name "laravel-*.log" -exec tail -1000 {} \; | \
    grep -c "ERROR\|CRITICAL" | awk '{printf "  %d errors found\n", $1}'

# Performance check
echo -e "\n=== PERFORMANCE CHECK ==="
echo -n "Frontend response time... "
frontend_time=$(curl -w "%{time_total}" -o /dev/null -s http://localhost:3000/)
echo "${frontend_time}s"

echo -n "API response time... "
api_time=$(curl -w "%{time_total}" -o /dev/null -s http://localhost:8000/api/health)
echo "${api_time}s"

# SSL Certificate check
echo -e "\n=== SSL CERTIFICATE ==="
if command -v openssl &> /dev/null; then
    echo -n "SSL certificate expiry... "
    expiry=$(echo | openssl s_client -connect gestion-residence.com:443 -servername gestion-residence.com 2>/dev/null | \
             openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
    expiry_timestamp=$(date -d "$expiry" +%s)
    current_timestamp=$(date +%s)
    days_left=$(( (expiry_timestamp - current_timestamp) / 86400 ))
    
    if [ $days_left -gt 30 ]; then
        echo "✅ Valid for $days_left days"
    elif [ $days_left -gt 7 ]; then
        echo "⚠️ Expires in $days_left days"
    else
        echo "❌ Expires in $days_left days (URGENT)"
    fi
fi

echo -e "\n🔍 Quick diagnosis completed!"</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Analyse de performance</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/performance-analysis.sh

echo "📊 Starting performance analysis..."

# Frontend performance
echo "=== FRONTEND PERFORMANCE ==="
echo "Testing frontend response times..."
for i in {1..5}; do
    time=$(curl -w "%{time_total}" -o /dev/null -s http://localhost:3000/)
    echo "  Attempt $i: ${time}s"
done

# API performance
echo -e "\n=== API PERFORMANCE ==="
echo "Testing API endpoints..."

endpoints=(
    "/api/health"
    "/api/users"
    "/api/badges"
    "/api/incidents"
    "/api/messages"
)

for endpoint in "${endpoints[@]}"; do
    echo -n "  $endpoint: "
    time=$(curl -w "%{time_total}" -o /dev/null -s "http://localhost:8000$endpoint")
    size=$(curl -w "%{size_download}" -o /dev/null -s "http://localhost:8000$endpoint")
    echo "${time}s (${size} bytes)"
done

# Database performance
echo -e "\n=== DATABASE PERFORMANCE ==="
echo "Slow queries (last hour):"
mysql -e "
    SELECT 
        query_time,
        lock_time,
        rows_sent,
        rows_examined,
        LEFT(sql_text, 100) as query
    FROM mysql.slow_log 
    WHERE start_time > DATE_SUB(NOW(), INTERVAL 1 HOUR)
    ORDER BY query_time DESC 
    LIMIT 10;
" 2>/dev/null || echo "  Slow query log not enabled"

echo "Current database connections:"
mysql -e "SHOW PROCESSLIST;" | wc -l | awk '{printf "  Active connections: %d\n", $1-1}'

echo "Table sizes (top 10):"
mysql -e "
    SELECT 
        table_name,
        ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb
    FROM information_schema.TABLES 
    WHERE table_schema = 'gestion_residence'
    ORDER BY (data_length + index_length) DESC 
    LIMIT 10;
"

# Redis performance
echo -e "\n=== REDIS PERFORMANCE ==="
echo "Redis stats:"
redis-cli info stats | grep -E "keyspace_hits|keyspace_misses|expired_keys"
echo "Redis memory:"
redis-cli info memory | grep -E "used_memory_human|used_memory_peak_human"

# System performance
echo -e "\n=== SYSTEM PERFORMANCE ==="
echo "Load average:"
uptime | awk '{print "  " $(NF-2) " " $(NF-1) " " $NF}'

echo "Top processes by CPU:"
ps aux --sort=-%cpu | head -6 | tail -5 | awk '{printf "  %-20s %5.1f%%\n", $11, $3}'

echo "Top processes by memory:"
ps aux --sort=-%mem | head -6 | tail -5 | awk '{printf "  %-20s %5.1f%%\n", $11, $4}'

# Network performance
echo -e "\n=== NETWORK PERFORMANCE ==="
echo "Network connections:"
ss -tuln | wc -l | awk '{printf "  Total connections: %d\n", $1-1}'

echo "Active connections by service:"
ss -tuln | grep -E ":80|:443|:3000|:8000|:8001|:3306|:6379" | \
    awk '{print $5}' | cut -d: -f2 | sort | uniq -c | \
    awk '{printf "  Port %s: %d connections\n", $2, $1}'

echo "📊 Performance analysis completed!"</code></pre>
          </div>

        </div>
      </div>

      <!-- Plans de contingence -->
      <h2>Plans de contingence</h2>
      
      <h3>Mode dégradé</h3>
      <p>Procédures pour maintenir un service minimal en cas de panne majeure :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">🛡️ Contingency Plans</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Mode maintenance programmée</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/enable-maintenance-mode.sh

echo "🔧 Activating maintenance mode..."

# 1. Créer page de maintenance
cat > /var/www/maintenance.html << 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Maintenance - Gestion Résidence&lt;/title&gt;
    &lt;style&gt;
   body { font-family: Arial, sans-serif; background: #f5f5f5; 
     display: flex; justify-content: center; align-items: center; 
     min-height: 100vh; margin: 0; }
   .container { background: white; padding: 40px; border-radius: 10px; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
   .icon { font-size: 64px; margin-bottom: 20px; }
   h1 { color: #333; margin-bottom: 20px; }
   p { color: #666; line-height: 1.6; }
   .eta { background: #e3f2fd; padding: 10px; border-radius: 5px; 
     margin: 20px 0; font-weight: bold; color: #1976d2; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="icon"&gt;🔧&lt;/div&gt;
        &lt;h1&gt;Maintenance en cours&lt;/h1&gt;
        &lt;p&gt;Notre plateforme de gestion d'entreprise-résidence est temporairement indisponible pour maintenance.&lt;/p&gt;
        &lt;div class="eta"&gt;Retour prévu : dans moins de 2 heures&lt;/div&gt;
        &lt;p&gt;Nous nous excusons pour le dérangement. Pour les urgences, contactez :&lt;/p&gt;
        &lt;p&gt;&lt;strong&gt;📞 Support : +33 1 XX XX XX XX&lt;/strong&gt;&lt;/p&gt;
        &lt;p&gt;&lt;small&gt;Dernière mise à jour : $(date '+%d/%m/%Y à %H:%M')&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF

# 2. Configuration Nginx maintenance
cat > /etc/nginx/sites-available/maintenance << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    
    server_name _;
    
    ssl_certificate /etc/letsencrypt/live/gestion-residence.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gestion-residence.com/privkey.pem;
    
    root /var/www;
    
    location / {
        try_files /maintenance.html =503;
    }
    
    # Permettre l'accès admin pour tests
    location /admin-health-check {
        allow 192.168.1.0/24;  # IP admin
        deny all;
        try_files $uri @backend;
    }
    
    location @backend {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

# 3. Activation du mode maintenance
ln -sf /etc/nginx/sites-available/maintenance /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# 4. Notification équipes
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data '{"text":"🔧 Mode maintenance activé - Page d'\''attente en ligne"}'

echo "✅ Maintenance mode activated"
echo "   Page: https://gestion-residence.com"
echo "   Admin check: https://gestion-residence.com/admin-health-check"</code></pre>
          </div>

          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Basculement serveur de secours</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/failover-to-backup.sh

echo "🚨 Initiating failover to backup server..."

# Configuration
BACKUP_SERVER="backup.gestion-residence.com"
MAIN_DB="db.gestion-residence.com"
BACKUP_DB="backup-db.gestion-residence.com"

# 1. Vérification du serveur de secours
echo "🔍 Checking backup server availability..."
if ! ping -c 3 $BACKUP_SERVER > /dev/null; then
    echo "❌ Backup server unreachable!"
    exit 1
fi

# 2. Synchronisation urgente de la base de données
echo "📊 Emergency database sync..."
mysqldump --single-transaction -h $MAIN_DB -u replication_user -p$REPL_PASSWORD \
    gestion_residence | mysql -h $BACKUP_DB -u root -p$BACKUP_DB_PASSWORD gestion_residence

# 3. Mise à jour DNS (CloudFlare API)
echo "🌐 Updating DNS records..."
curl -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$A_RECORD_ID" \
     -H "Authorization: Bearer $CLOUDFLARE_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{
       "type": "A",
       "name": "gestion-residence.com",
       "content": "'$BACKUP_SERVER_IP'",
       "ttl": 300
     }'

# 4. Configuration load balancer
echo "⚖️ Updating load balancer configuration..."
cat > /etc/nginx/conf.d/upstream.conf << EOF
upstream backend {
    server $BACKUP_SERVER:8000 weight=1;
    # server $MAIN_SERVER:8000 weight=1 down;
}

upstream frontend {
    server $BACKUP_SERVER:3000 weight=1;
    # server $MAIN_SERVER:3000 weight=1 down;
}
EOF

nginx -t && systemctl reload nginx

# 5. Notification d'urgence
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data '{
    "text": "🚨 FAILOVER ACTIVATED - Traffic redirected to backup server",
    "attachments": [{
      "color": "danger",
      "fields": [
        {"title": "Backup Server", "value": "'$BACKUP_SERVER'", "short": true},
        {"title": "DNS TTL", "value": "300s", "short": true},
        {"title": "Action Required", "value": "Monitor backup server performance", "short": false}
      ]
    }]
  }'

# 6. Monitoring du serveur de secours
echo "📊 Starting backup server monitoring..."
cat > /tmp/monitor_backup.sh << 'EOF'
#!/bin/bash
while true; do
    if curl -f https://gestion-residence.com/health > /dev/null 2>&1; then
        echo "$(date): ✅ Backup server responding"
    else
        echo "$(date): ❌ Backup server issue!"
        curl -X POST "$SLACK_WEBHOOK_URL" \
          -H 'Content-type: application/json' \
          --data '{"text":"🚨 CRITICAL: Backup server not responding!"}'
    fi
    sleep 60
done
EOF

chmod +x /tmp/monitor_backup.sh
nohup /tmp/monitor_backup.sh > /var/log/backup_monitor.log 2>&1 &

echo "✅ Failover completed!"
echo "   New endpoint: https://$BACKUP_SERVER"
echo "   Monitor log: /var/log/backup_monitor.log"
echo "   DNS propagation: ~5 minutes"</code></pre>
          </div>

        </div>
      </div>

      <!-- Contacts d'urgence -->
      <h2>Contacts d'urgence</h2>
      
      <h3>Annuaire de crise</h3>
      <p>Contacts prioritaires pour situations d'urgence :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">📞 Emergency Contacts</h4>
        <div class="space-y-4 text-sm">
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-3">🚨 Urgence technique</h5>
              <div class="space-y-2">
                <div>
                  <strong>Technicien on-call</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 oncall@gestion-residence.com<br>
                  💬 Slack: @tech-oncall
                </div>
                <div>
                  <strong>Lead technique</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 lead-tech@gestion-residence.com<br>
                  💬 Signal: +33 6 XX XX XX XX
                </div>
                <div>
                  <strong>Administrateur système</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 sysadmin@gestion-residence.com<br>
                  🔔 PagerDuty: sysadmin-escalation
                </div>
              </div>
            </div>
            
            <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-3">🏢 Direction</h5>
              <div class="space-y-2">
                <div>
                  <strong>CTO</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 cto@gestion-residence.com<br>
                  💬 WhatsApp: +33 6 XX XX XX XX
                </div>
                <div>
                  <strong>CEO</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 ceo@gestion-residence.com<br>
                  💬 Signal: +33 6 XX XX XX XX
                </div>
                <div>
                  <strong>Responsable sécurité</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 security@gestion-residence.com<br>
                  🔔 Signal: +33 6 XX XX XX XX
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h5 class="font-semibold text-green-900 dark:text-green-200 mb-3">🔧 Prestataires externes</h5>
              <div class="space-y-2">
                <div>
                  <strong>Hébergeur (OVH)</strong><br>
                  📞 +33 9 72 10 10 07<br>
                  📧 support@ovh.com<br>
                  🌐 Manager OVH
                </div>
                <div>
                  <strong>Cloudflare</strong><br>
                  📞 Support Enterprise<br>
                  📧 support@cloudflare.com<br>
                  🌐 Dashboard Cloudflare
                </div>
                <div>
                  <strong>Prestataire sécurité</strong><br>
                  📱 +33 6 XX XX XX XX<br>
                  📧 urgence@security-partner.com<br>
                  🔔 Astreinte 24/7
                </div>
              </div>
            </div>
            
            <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-3">🏛️ Autorités</h5>
              <div class="space-y-2">
                <div>
                  <strong>ANSSI (cyber-sécurité)</strong><br>
                  📞 +33 1 71 75 84 68<br>
                  📧 cert-fr.cossi@ssi.gouv.fr<br>
                  🌐 www.cert.ssi.gouv.fr
                </div>
                <div>
                  <strong>CNIL (données personnelles)</strong><br>
                  📞 +33 1 53 73 22 22<br>
                  📧 violations@cnil.fr<br>
                  🌐 www.cnil.fr
                </div>
                <div>
                  <strong>Police/Gendarmerie</strong><br>
                  📞 17 (urgence)<br>
                  📞 +33 1 XX XX XX XX (cyber)<br>
                  🌐 Plateforme Pharos
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-8 mt-12 border border-red-200/50 dark:border-red-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚨 Opérations d'urgence</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Runbook complet pour la gestion d'incidents et interventions d'urgence sur la plateforme de gestion d'entreprise-résidence. 
          Classification des incidents, procédures d'escalade, diagnostics rapides et plans de contingence pour maintenir la continuité de service.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔥 Classification</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">P1 à P4 avec SLA</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">📞 Escalade</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Contacts et procédures</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🔍 Diagnostic</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Outils automatisés</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-red-900 dark:text-red-200 mb-2">🛡️ Contingence</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Plans de sauvegarde</p>
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
      'runbook': {
        'title': 'Runbook',
        'description': 'Procédures opérationnelles et dépannage'
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

useHead({ title: t('runbook.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


