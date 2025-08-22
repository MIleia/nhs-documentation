<template>
  <DocShell type="tech" :title="t('maintenance.title')" :description="t('maintenance.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Guide de maintenance</h1>
      
      <div class="not-prose bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-12 border border-amber-200/50 dark:border-amber-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔧 Maintenance système</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Procédures complètes de maintenance pour la plateforme de gestion d'entreprise-résidence. 
          Tâches automatisées, maintenance préventive, sauvegarde/restauration et plan de reprise d'activité.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">⏰ Automatisation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Tâches cron planifiées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">🛡️ Prévention</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Maintenance proactive</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">💾 Sauvegarde</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Backup automatique</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">🔄 Restauration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Plan de reprise</p>
          </div>
        </div>
      </div>

      <!-- Tâches automatisées -->
      <h2>Tâches automatisées</h2>
      
      <h3>Configuration cron système</h3>
      <p>Planification des tâches de maintenance automatique :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">⏰ Scheduled Tasks</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Crontab système</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code># /etc/crontab - Maintenance Gestion Résidence

# Sauvegardes quotidiennes
0 2 * * * root /var/www/gestion-residence/scripts/backup-database.sh >> /var/log/backup.log 2>&1
15 2 * * * root /var/www/gestion-residence/scripts/backup-files.sh >> /var/log/backup.log 2>&1

# Nettoyage des logs (quotidien à 3h)
0 3 * * * root /var/www/gestion-residence/scripts/cleanup-logs.sh

# Optimisation base de données (hebdomadaire dimanche 4h)
0 4 * * 0 root /var/www/gestion-residence/scripts/optimize-database.sh

# Nettoyage cache et sessions (quotidien à 4h30)
30 4 * * * root /var/www/gestion-residence/scripts/cleanup-cache.sh

# Vérification santé système (toutes les 15 minutes)
*/15 * * * * root /var/www/gestion-residence/scripts/health-check.sh

# Rotation des logs nginx (quotidien à 5h)
0 5 * * * root /usr/sbin/logrotate -f /etc/logrotate.d/nginx

# Mise à jour certificats SSL (quotidien à 6h)
0 6 * * * root /usr/bin/certbot renew --quiet

# Surveillance espace disque (toutes les heures)
0 * * * * root /var/www/gestion-residence/scripts/disk-space-check.sh

# Nettoyage badges expirés (quotidien à 7h)
0 7 * * * www-data cd /var/www/gestion-residence/backend-client && php artisan badges:cleanup

# Rapport quotidien de maintenance (quotidien à 8h)
0 8 * * * root /var/www/gestion-residence/scripts/daily-maintenance-report.sh

# Archivage des incidents résolus (hebdomadaire lundi 9h)
0 9 * * 1 www-data cd /var/www/gestion-residence/backend-client && php artisan incidents:archive

# Test de sauvegarde (mensuel premier dimanche 10h)
0 10 1-7 * 0 root /var/www/gestion-residence/scripts/test-backup-restoration.sh</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Commandes Laravel Scheduler</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
// app/Console/Kernel.php

protected function schedule(Schedule $schedule): void
{
    // Nettoyage des badges expirés (quotidien)
    $schedule->command('badges:cleanup')
             ->daily()
             ->at('07:00')
             ->withoutOverlapping()
             ->onOneServer();
    
    // Notifications badges expirant bientôt (quotidien)
    $schedule->command('badges:notify-expiring')
             ->daily()
             ->at('08:00')
             ->withoutOverlapping();
    
    // Archivage des incidents résolus (hebdomadaire)
    $schedule->command('incidents:archive')
             ->weekly()
             ->mondays()
             ->at('09:00')
             ->withoutOverlapping();
    
    // Purge des logs anciens (quotidien)
    $schedule->command('logs:cleanup --days=30')
             ->daily()
             ->at('03:30')
             ->withoutOverlapping();
    
    // Génération des rapports quotidiens (quotidien)
    $schedule->command('reports:daily')
             ->daily()
             ->at('08:30')
             ->withoutOverlapping();
    
    // Nettoyage des sessions expirées (quotidien)
    $schedule->command('sessions:cleanup')
             ->daily()
             ->at('04:00')
             ->withoutOverlapping();
    
    // Optimisation des tables (hebdomadaire)
    $schedule->command('database:optimize')
             ->weekly()
             ->sundays()
             ->at('04:00')
             ->withoutOverlapping()
             ->onOneServer();
    
    // Vérification intégrité badges (quotidien)
    $schedule->command('badges:verify-integrity')
             ->daily()
             ->at('06:00')
             ->withoutOverlapping();
    
    // Statistiques de performance (horaire)
    $schedule->command('performance:collect-metrics')
             ->hourly()
             ->withoutOverlapping();
    
    // Warmup cache (quotidien)
    $schedule->command('cache:warmup')
             ->daily()
             ->at('05:00')
             ->withoutOverlapping();
    
    // Test de santé global (toutes les 30 minutes)
    $schedule->command('health:check')
             ->everyThirtyMinutes()
             ->withoutOverlapping();
    
    // Synchronisation avec services externes (toutes les 6 heures)
    $schedule->command('external:sync')
             ->everySixHours()
             ->withoutOverlapping()
             ->onOneServer();
}

// Définition des commandes custom
protected $commands = [
    Commands\BadgesCleanupCommand::class,
    Commands\BadgesNotifyExpiringCommand::class,
    Commands\IncidentsArchiveCommand::class,
    Commands\LogsCleanupCommand::class,
    Commands\ReportsGenerateCommand::class,
    Commands\SessionsCleanupCommand::class,
    Commands\DatabaseOptimizeCommand::class,
    Commands\BadgesVerifyIntegrityCommand::class,
    Commands\PerformanceCollectMetricsCommand::class,
    Commands\CacheWarmupCommand::class,
    Commands\HealthCheckCommand::class,
    Commands\ExternalSyncCommand::class,
];</code></pre>
          </div>

        </div>
      </div>

      <!-- Scripts de maintenance -->
      <h2>Scripts de maintenance</h2>
      
      <h3>Nettoyage système</h3>
      <p>Scripts pour maintenir la propreté et performance du système :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🧹 System Cleanup</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Script de nettoyage complet</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/cleanup-system.sh

set -e

echo "🧹 Starting system cleanup..."

# Variables
APP_DIR="/var/www/gestion-residence"
LOG_DIR="/var/log"
BACKUP_DIR="/var/backups"
RETENTION_DAYS=30

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Cleanup application logs
log "📋 Cleaning application logs..."
find $APP_DIR/backend-client/storage/logs -name "*.log" -mtime +$RETENTION_DAYS -delete
find $APP_DIR/backend-nhs/storage/logs -name "*.log" -mtime +$RETENTION_DAYS -delete

# Cleanup system logs
log "📋 Cleaning system logs..."
find $LOG_DIR -name "*.log.*" -mtime +$RETENTION_DAYS -delete
find $LOG_DIR -name "*.gz" -mtime +$RETENTION_DAYS -delete

# Cleanup old backups
log "💾 Cleaning old backups..."
find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete
find $BACKUP_DIR -name "backup_*" -type d -mtime +$RETENTION_DAYS -exec rm -rf {} +

# Cleanup cache files
log "🗂️ Cleaning cache files..."
cd $APP_DIR/backend-client
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

cd $APP_DIR/backend-nhs
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Cleanup Redis cache (expired keys)
log "💾 Cleaning Redis cache..."
redis-cli --scan --pattern "*:expired:*" | xargs -r redis-cli del

# Cleanup tmp files
log "🗑️ Cleaning temporary files..."
find /tmp -name "php*" -mtime +1 -delete 2>/dev/null || true
find /tmp -name "*.tmp" -mtime +1 -delete 2>/dev/null || true

# Cleanup session files
log "👤 Cleaning session files..."
find /var/lib/php/sessions -name "sess_*" -mtime +1 -delete 2>/dev/null || true

# Docker cleanup (if using Docker)
if command -v docker &> /dev/null; then
    log "🐳 Cleaning Docker resources..."
    docker system prune -f --volumes
    docker image prune -f -a
fi

# Package manager cleanup
log "📦 Cleaning package cache..."
apt-get autoremove -y
apt-get autoclean

# Check disk space after cleanup
log "💽 Checking disk space..."
df -h

# Generate cleanup report
CLEANED_SPACE=$(du -sh /tmp /var/log $APP_DIR/*/storage/logs 2>/dev/null | tail -1 | cut -f1)
log "✅ Cleanup completed. Space cleaned: $CLEANED_SPACE"

# Send notification if cleanup freed significant space
if [[ "$CLEANED_SPACE" =~ ^[0-9]+G ]]; then
    curl -X POST "$SLACK_WEBHOOK_URL" \
      -H 'Content-type: application/json' \
      --data "{\"text\":\"🧹 System cleanup completed. Freed: $CLEANED_SPACE\"}" \
      2>/dev/null || true
fi

echo "✅ System cleanup completed successfully!"</code></pre>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Optimisation base de données</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/optimize-database.sh

set -e

echo "🗄️ Starting database optimization..."

# Variables
DB_HOST=${DB_HOST:-localhost}
DB_NAME=${DB_NAME:-gestion_residence}
DB_USER=${DB_USER:-root}
DB_PASS=${DB_PASSWORD}

# Function to execute MySQL command
mysql_exec() {
    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$1"
}

# Check database size before optimization
echo "📊 Database size before optimization:"
mysql_exec "
    SELECT 
        table_schema as 'Database',
        ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) as 'Size (MB)'
    FROM information_schema.tables 
    WHERE table_schema = '$DB_NAME'
    GROUP BY table_schema;
"

# Analyze table fragmentation
echo "📋 Analyzing table fragmentation..."
mysql_exec "
    SELECT 
        table_name,
        ROUND(((data_length + index_length) / 1024 / 1024), 2) as 'Size (MB)',
        ROUND(((data_free) / 1024 / 1024), 2) as 'Free (MB)',
        ROUND((data_free / (data_length + index_length + data_free)) * 100, 2) as 'Fragmentation %'
    FROM information_schema.tables
    WHERE table_schema = '$DB_NAME'
    AND (data_free / (data_length + index_length + data_free)) > 0.1
    ORDER BY (data_free / (data_length + index_length + data_free)) DESC;
"

# Optimize fragmented tables
echo "🔧 Optimizing fragmented tables..."
FRAGMENTED_TABLES=$(mysql_exec "
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = '$DB_NAME'
    AND (data_free / (data_length + index_length + data_free)) > 0.1
" | tail -n +2)

for table in $FRAGMENTED_TABLES; do
    if [ ! -z "$table" ]; then
        echo "  Optimizing table: $table"
        mysql_exec "OPTIMIZE TABLE $table;"
    fi
done

# Update table statistics
echo "📊 Updating table statistics..."
mysql_exec "ANALYZE TABLE users, badges, incidents, messages, visites, audit_logs;"

# Check for unused indexes
echo "📋 Checking for unused indexes..."
mysql_exec "
    SELECT 
        s.table_schema,
        s.table_name,
        s.index_name,
        s.column_name
    FROM information_schema.statistics s
    LEFT JOIN information_schema.index_statistics i
        ON s.table_schema = i.table_schema
        AND s.table_name = i.table_name
        AND s.index_name = i.index_name
    WHERE s.table_schema = '$DB_NAME'
    AND s.index_name != 'PRIMARY'
    AND i.index_name IS NULL
    ORDER BY s.table_name, s.index_name;
"

# Database maintenance
echo "🔧 Running database maintenance..."
mysql_exec "CHECK TABLE users, badges, incidents, messages, visites;"
mysql_exec "REPAIR TABLE users, badges, incidents, messages, visites;"

# Update query cache
echo "💾 Flushing query cache..."
mysql_exec "FLUSH QUERY CACHE;"
mysql_exec "RESET QUERY CACHE;"

# Database size after optimization
echo "📊 Database size after optimization:"
mysql_exec "
    SELECT 
        table_schema as 'Database',
        ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) as 'Size (MB)'
    FROM information_schema.tables 
    WHERE table_schema = '$DB_NAME'
    GROUP BY table_schema;
"

# Generate optimization report
echo "📋 Generating optimization report..."
mysql_exec "
    SELECT 
        'Total Tables' as Metric,
        COUNT(*) as Value
    FROM information_schema.tables
    WHERE table_schema = '$DB_NAME'
    
    UNION ALL
    
    SELECT 
        'Total Indexes' as Metric,
        COUNT(*) as Value
    FROM information_schema.statistics
    WHERE table_schema = '$DB_NAME'
    
    UNION ALL
    
    SELECT 
        'Fragmented Tables' as Metric,
        COUNT(*) as Value
    FROM information_schema.tables
    WHERE table_schema = '$DB_NAME'
    AND (data_free / (data_length + index_length + data_free)) > 0.1;
"

echo "✅ Database optimization completed!"</code></pre>
          </div>

        </div>
      </div>

      <!-- Surveillance système -->
      <h2>Surveillance système</h2>
      
      <h3>Health checks automatiques</h3>
      <p>Vérification continue de la santé du système :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🏥 Health Monitoring</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Script de vérification santé</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/health-check.sh

set -e

# Variables
APP_DIR="/var/www/gestion-residence"
ALERT_EMAIL="admin@gestion-residence.com"
ALERT_SLACK_WEBHOOK="$SLACK_WEBHOOK_URL"
LOG_FILE="/var/log/health-check.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a $LOG_FILE
}

# Function to send alert
send_alert() {
    local message="$1"
    local severity="$2"
    
    # Send email
    if command -v mail &> /dev/null; then
        echo "$message" | mail -s "🚨 Gestion Résidence Alert - $severity" $ALERT_EMAIL
    fi
    
    # Send Slack notification
    if [ ! -z "$ALERT_SLACK_WEBHOOK" ]; then
        curl -X POST "$ALERT_SLACK_WEBHOOK" \
          -H 'Content-type: application/json' \
          --data "{\"text\":\"🚨 $severity: $message\"}" \
          2>/dev/null || true
    fi
}

# Function to check service status
check_service() {
    local service="$1"
    if systemctl is-active --quiet $service; then
        log "✅ $service is running"
        return 0
    else
        log "❌ $service is not running"
        send_alert "$service service is down" "CRITICAL"
        return 1
    fi
}

# Function to check port
check_port() {
    local port="$1"
    local service="$2"
    if netstat -tuln | grep -q ":$port "; then
        log "✅ $service (port $port) is listening"
        return 0
    else
        log "❌ $service (port $port) is not listening"
        send_alert "$service on port $port is not responding" "CRITICAL"
        return 1
    fi
}

# Function to check disk space
check_disk_space() {
    local threshold=90
    local usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    
    if [ $usage -lt $threshold ]; then
        log "✅ Disk usage: ${usage}%"
        return 0
    else
        log "❌ Disk usage: ${usage}% (threshold: ${threshold}%)"
        send_alert "Disk usage is ${usage}% (threshold: ${threshold}%)" "WARNING"
        return 1
    fi
}

# Function to check memory usage
check_memory() {
    local threshold=85
    local usage=$(free | awk 'NR==2{printf "%.0f", $3*100/($3+$4)}')
    
    if [ $usage -lt $threshold ]; then
        log "✅ Memory usage: ${usage}%"
        return 0
    else
        log "❌ Memory usage: ${usage}% (threshold: ${threshold}%)"
        send_alert "Memory usage is ${usage}% (threshold: ${threshold}%)" "WARNING"
        return 1
    fi
}

# Function to check CPU load
check_cpu_load() {
    local threshold=80
    local load=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | sed 's/%us,//')
    local usage=${load%.*}
    
    if [ $usage -lt $threshold ]; then
        log "✅ CPU usage: ${usage}%"
        return 0
    else
        log "❌ CPU usage: ${usage}% (threshold: ${threshold}%)"
        send_alert "CPU usage is ${usage}% (threshold: ${threshold}%)" "WARNING"
        return 1
    fi
}

# Function to check database connectivity
check_database() {
    local db_status=$(mysql -h localhost -u root -p$DB_PASSWORD -e "SELECT 1" 2>/dev/null)
    if [ $? -eq 0 ]; then
        log "✅ Database connection successful"
        return 0
    else
        log "❌ Database connection failed"
        send_alert "Database connection failed" "CRITICAL"
        return 1
    fi
}

# Function to check Redis
check_redis() {
    if redis-cli ping | grep -q "PONG"; then
        log "✅ Redis is responding"
        return 0
    else
        log "❌ Redis is not responding"
        send_alert "Redis is not responding" "CRITICAL"
        return 1
    fi
}

# Function to check application health
check_application() {
    local frontend_status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health)
    local api_status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/api/health)
    
    if [ "$frontend_status" = "200" ]; then
        log "✅ Frontend application is healthy"
    else
        log "❌ Frontend application health check failed (HTTP $frontend_status)"
        send_alert "Frontend application health check failed" "CRITICAL"
    fi
    
    if [ "$api_status" = "200" ]; then
        log "✅ API application is healthy"
    else
        log "❌ API application health check failed (HTTP $api_status)"
        send_alert "API application health check failed" "CRITICAL"
    fi
}

# Function to check SSL certificate
check_ssl_cert() {
    local domain="gestion-residence.com"
    local expiry_days=$(openssl s_client -connect $domain:443 -servername $domain 2>/dev/null | openssl x509 -noout -dates | grep 'notAfter' | sed 's/notAfter=//' | xargs -I {} date -d {} +%s)
    local current_timestamp=$(date +%s)
    local days_until_expiry=$(( (expiry_days - current_timestamp) / 86400 ))
    
    if [ $days_until_expiry -gt 30 ]; then
        log "✅ SSL certificate expires in $days_until_expiry days"
    elif [ $days_until_expiry -gt 7 ]; then
        log "⚠️ SSL certificate expires in $days_until_expiry days"
        send_alert "SSL certificate expires in $days_until_expiry days" "WARNING"
    else
        log "❌ SSL certificate expires in $days_until_expiry days"
        send_alert "SSL certificate expires in $days_until_expiry days" "CRITICAL"
    fi
}

# Main health check execution
echo "🏥 Starting system health check..."
log "=== Health Check Started ==="

# Initialize counters
total_checks=0
failed_checks=0

# System services
total_checks=$((total_checks + 1))
check_service "nginx" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_service "php8.2-fpm" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_service "mysql" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_service "redis-server" || failed_checks=$((failed_checks + 1))

# Port checks
total_checks=$((total_checks + 1))
check_port "80" "nginx" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_port "443" "nginx-ssl" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_port "3000" "nuxt" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_port "8000" "laravel-client" || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_port "8001" "laravel-nhs" || failed_checks=$((failed_checks + 1))

# System resources
total_checks=$((total_checks + 1))
check_disk_space || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_memory || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_cpu_load || failed_checks=$((failed_checks + 1))

# Application services
total_checks=$((total_checks + 1))
check_database || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_redis || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_application || failed_checks=$((failed_checks + 1))

total_checks=$((total_checks + 1))
check_ssl_cert || failed_checks=$((failed_checks + 1))

# Summary
log "=== Health Check Summary ==="
log "Total checks: $total_checks"
log "Failed checks: $failed_checks"
log "Success rate: $(( (total_checks - failed_checks) * 100 / total_checks ))%"

if [ $failed_checks -eq 0 ]; then
    log "✅ All health checks passed"
    exit 0
else
    log "❌ $failed_checks health checks failed"
    exit 1
fi</code></pre>
          </div>

        </div>
      </div>

      <!-- Sauvegarde et restauration -->
      <h2>Sauvegarde et restauration</h2>
      
      <h3>Stratégie de sauvegarde</h3>
      <p>Plan complet de sauvegarde avec rotation et tests de restauration :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">💾 Backup & Restore</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Script de sauvegarde complète</h5>
            <pre class="text-xs bg-cyan-50 dark:bg-cyan-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/complete-backup.sh

set -e

# Configuration
BACKUP_BASE="/var/backups/gestion-residence"
APP_DIR="/var/www/gestion-residence"
DB_NAME="gestion_residence"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=30
S3_BUCKET="gestion-residence-backups"

# Create backup directory
BACKUP_DIR="$BACKUP_BASE/$TIMESTAMP"
mkdir -p $BACKUP_DIR

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# 1. Database backup
log "📊 Starting database backup..."
mysqldump --single-transaction \
         --routines \
         --triggers \
         --events \
         --hex-blob \
         --quick \
         --lock-tables=false \
         -h localhost \
         -u backup_user \
         -p$DB_BACKUP_PASSWORD \
         $DB_NAME > $BACKUP_DIR/database.sql

gzip $BACKUP_DIR/database.sql
log "✅ Database backup completed: $(ls -lh $BACKUP_DIR/database.sql.gz | awk '{print $5}')"

# 2. Application files backup
log "📁 Starting application files backup..."
tar -czf $BACKUP_DIR/application.tar.gz \
    --exclude='node_modules' \
    --exclude='vendor' \
    --exclude='storage/logs' \
    --exclude='storage/framework/cache' \
    --exclude='storage/framework/sessions' \
    --exclude='storage/framework/views' \
    --exclude='.git' \
    --exclude='.env' \
    -C $APP_DIR .

log "✅ Application files backup completed: $(ls -lh $BACKUP_DIR/application.tar.gz | awk '{print $5}')"

# 3. Configuration files backup
log "⚙️ Starting configuration backup..."
mkdir -p $BACKUP_DIR/config

# Nginx configuration
cp -r /etc/nginx/sites-available $BACKUP_DIR/config/nginx-sites-available
cp -r /etc/nginx/sites-enabled $BACKUP_DIR/config/nginx-sites-enabled
cp /etc/nginx/nginx.conf $BACKUP_DIR/config/nginx.conf

# PHP configuration
cp /etc/php/8.2/fpm/php.ini $BACKUP_DIR/config/php.ini
cp -r /etc/php/8.2/fpm/pool.d $BACKUP_DIR/config/php-pools

# MySQL configuration
cp /etc/mysql/mysql.conf.d/mysqld.cnf $BACKUP_DIR/config/mysql.cnf

# SSL certificates
if [ -d "/etc/letsencrypt/live" ]; then
    cp -r /etc/letsencrypt/live $BACKUP_DIR/config/ssl-certs
fi

# Environment files (encrypted)
if [ -f "$APP_DIR/.env" ]; then
    openssl enc -aes-256-cbc -salt -in $APP_DIR/.env -out $BACKUP_DIR/config/env.encrypted -k "$BACKUP_ENCRYPTION_KEY"
fi

tar -czf $BACKUP_DIR/configuration.tar.gz -C $BACKUP_DIR/config .
rm -rf $BACKUP_DIR/config

log "✅ Configuration backup completed: $(ls -lh $BACKUP_DIR/configuration.tar.gz | awk '{print $5}')"

# 4. Storage files backup
log "🗃️ Starting storage backup..."
if [ -d "$APP_DIR/backend-client/storage/app/uploads" ]; then
    tar -czf $BACKUP_DIR/storage.tar.gz \
        -C $APP_DIR/backend-client/storage/app uploads
    log "✅ Storage backup completed: $(ls -lh $BACKUP_DIR/storage.tar.gz | awk '{print $5}')"
else
    log "ℹ️ No storage files to backup"
fi

# 5. Redis backup
log "💾 Starting Redis backup..."
redis-cli BGSAVE
sleep 5  # Wait for background save to complete
cp /var/lib/redis/dump.rdb $BACKUP_DIR/redis-dump.rdb
gzip $BACKUP_DIR/redis-dump.rdb
log "✅ Redis backup completed: $(ls -lh $BACKUP_DIR/redis-dump.rdb.gz | awk '{print $5}')"

# 6. Create backup manifest
log "📋 Creating backup manifest..."
cat > $BACKUP_DIR/manifest.json << EOF
{
    "backup_date": "$(date -Iseconds)",
    "backup_type": "complete",
    "server_hostname": "$(hostname)",
    "application_version": "$(cd $APP_DIR && git rev-parse HEAD 2>/dev/null || echo 'unknown')",
    "database_size": "$(stat -c%s $BACKUP_DIR/database.sql.gz)",
    "application_size": "$(stat -c%s $BACKUP_DIR/application.tar.gz)",
    "configuration_size": "$(stat -c%s $BACKUP_DIR/configuration.tar.gz)",
    "storage_size": "$(test -f $BACKUP_DIR/storage.tar.gz && stat -c%s $BACKUP_DIR/storage.tar.gz || echo 0)",
    "redis_size": "$(stat -c%s $BACKUP_DIR/redis-dump.rdb.gz)",
    "backup_id": "$TIMESTAMP"
}
EOF

# 7. Calculate checksums
log "🔐 Calculating checksums..."
cd $BACKUP_DIR
sha256sum *.{sql.gz,tar.gz,rdb.gz} manifest.json > checksums.sha256

# 8. Upload to S3 (if configured)
if [ ! -z "$S3_BUCKET" ] && command -v aws &> /dev/null; then
    log "☁️ Uploading to S3..."
    aws s3 sync $BACKUP_DIR s3://$S3_BUCKET/backups/$TIMESTAMP/ \
        --storage-class STANDARD_IA \
        --server-side-encryption AES256
    log "✅ S3 upload completed"
fi

# 9. Create backup archive
log "📦 Creating final backup archive..."
cd $BACKUP_BASE
tar -czf backup_$TIMESTAMP.tar.gz $TIMESTAMP/
rm -rf $TIMESTAMP/

# 10. Cleanup old backups
log "🧹 Cleaning up old backups..."
find $BACKUP_BASE -name "backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete

# 11. Backup verification
log "✅ Verifying backup integrity..."
if tar -tzf $BACKUP_BASE/backup_$TIMESTAMP.tar.gz > /dev/null; then
    log "✅ Backup archive integrity verified"
else
    log "❌ Backup archive verification failed"
    exit 1
fi

# 12. Generate backup report
TOTAL_SIZE=$(ls -lh $BACKUP_BASE/backup_$TIMESTAMP.tar.gz | awk '{print $5}')
log "📊 Backup completed successfully!"
log "📦 Total backup size: $TOTAL_SIZE"
log "🆔 Backup ID: $TIMESTAMP"

# Send notification
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data "{\"text\":\"✅ Backup completed successfully! Size: $TOTAL_SIZE, ID: $TIMESTAMP\"}" \
  2>/dev/null || true

echo "✅ Complete backup finished: backup_$TIMESTAMP.tar.gz"</code></pre>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Script de restauration</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/restore-backup.sh

set -e

# Usage function
usage() {
    echo "Usage: $0 -b BACKUP_ID [-t TYPE] [-c]"
    echo "  -b BACKUP_ID  : Backup ID (timestamp format YYYYMMDD_HHMMSS)"
    echo "  -t TYPE       : Restore type (all|database|files|config) [default: all]"
    echo "  -c           : Confirmation mode (skip interactive prompts)"
    echo ""
    echo "Examples:"
    echo "  $0 -b 20240315_020000                    # Full restore"
    echo "  $0 -b 20240315_020000 -t database       # Database only"
    echo "  $0 -b 20240315_020000 -t files -c       # Files only, no prompts"
    exit 1
}

# Parse arguments
BACKUP_ID=""
RESTORE_TYPE="all"
SKIP_CONFIRMATION=false

while getopts "b:t:ch" opt; do
    case $opt in
        b) BACKUP_ID="$OPTARG" ;;
        t) RESTORE_TYPE="$OPTARG" ;;
        c) SKIP_CONFIRMATION=true ;;
        h) usage ;;
        *) usage ;;
    esac
done

if [ -z "$BACKUP_ID" ]; then
    echo "❌ Backup ID is required"
    usage
fi

# Configuration
BACKUP_BASE="/var/backups/gestion-residence"
APP_DIR="/var/www/gestion-residence"
BACKUP_FILE="$BACKUP_BASE/backup_$BACKUP_ID.tar.gz"
RESTORE_DIR="/tmp/restore_$BACKUP_ID"
DB_NAME="gestion_residence"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Validation
if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Backup file not found: $BACKUP_FILE"
    echo "Available backups:"
    ls -la $BACKUP_BASE/backup_*.tar.gz 2>/dev/null || echo "No backups found"
    exit 1
fi

# Confirmation
if [ "$SKIP_CONFIRMATION" = false ]; then
    echo "⚠️  WARNING: This will restore data from backup $BACKUP_ID"
    echo "📁 Backup file: $BACKUP_FILE"
    echo "🎯 Restore type: $RESTORE_TYPE"
    echo ""
    read -p "Are you sure you want to continue? (yes/no): " confirm
    if [ "$confirm" != "yes" ]; then
        echo "❌ Restore cancelled"
        exit 1
    fi
fi

# Extract backup
log "📦 Extracting backup archive..."
mkdir -p $RESTORE_DIR
tar -xzf $BACKUP_FILE -C $RESTORE_DIR --strip-components=1

# Verify backup integrity
log "🔐 Verifying backup integrity..."
cd $RESTORE_DIR
if sha256sum -c checksums.sha256; then
    log "✅ Backup integrity verified"
else
    log "❌ Backup integrity check failed"
    exit 1
fi

# Read backup manifest
log "📋 Reading backup manifest..."
if [ -f "manifest.json" ]; then
    BACKUP_DATE=$(jq -r '.backup_date' manifest.json)
    APP_VERSION=$(jq -r '.application_version' manifest.json)
    log "📅 Backup date: $BACKUP_DATE"
    log "🏷️ Application version: $APP_VERSION"
fi

# Database restore
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "database" ]]; then
    log "📊 Starting database restore..."
    
    # Create backup of current database
    log "💾 Creating backup of current database..."
    mysqldump --single-transaction -u root -p$DB_PASSWORD $DB_NAME > /tmp/current_db_backup_$(date +%Y%m%d_%H%M%S).sql
    
    # Restore database
    gunzip -c database.sql.gz | mysql -u root -p$DB_PASSWORD $DB_NAME
    log "✅ Database restored successfully"
fi

# Application files restore
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "files" ]]; then
    log "📁 Starting application files restore..."
    
    # Stop services
    systemctl stop nginx php8.2-fpm
    
    # Backup current application
    log "💾 Creating backup of current application..."
    tar -czf /tmp/current_app_backup_$(date +%Y%m%d_%H%M%S).tar.gz -C $APP_DIR .
    
    # Restore application files
    rm -rf $APP_DIR/*
    tar -xzf application.tar.gz -C $APP_DIR
    
    # Set correct permissions
    chown -R www-data:www-data $APP_DIR
    find $APP_DIR -type f -exec chmod 644 {} \;
    find $APP_DIR -type d -exec chmod 755 {} \;
    chmod -R 775 $APP_DIR/backend-client/storage
    chmod -R 775 $APP_DIR/backend-nhs/storage
    
    log "✅ Application files restored successfully"
fi

# Configuration restore
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "config" ]]; then
    log "⚙️ Starting configuration restore..."
    
    # Extract configuration
    tar -xzf configuration.tar.gz -C /tmp/config_restore
    
    # Restore Nginx configuration
    if [ -d "/tmp/config_restore/nginx-sites-available" ]; then
        cp -r /tmp/config_restore/nginx-sites-available/* /etc/nginx/sites-available/
        cp -r /tmp/config_restore/nginx-sites-enabled/* /etc/nginx/sites-enabled/
        cp /tmp/config_restore/nginx.conf /etc/nginx/
    fi
    
    # Restore PHP configuration
    if [ -f "/tmp/config_restore/php.ini" ]; then
        cp /tmp/config_restore/php.ini /etc/php/8.2/fpm/
        cp -r /tmp/config_restore/php-pools/* /etc/php/8.2/fpm/pool.d/
    fi
    
    # Restore MySQL configuration
    if [ -f "/tmp/config_restore/mysql.cnf" ]; then
        cp /tmp/config_restore/mysql.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
    fi
    
    # Restore environment file (decrypt)
    if [ -f "/tmp/config_restore/env.encrypted" ]; then
        openssl enc -aes-256-cbc -d -in /tmp/config_restore/env.encrypted -out $APP_DIR/.env -k "$BACKUP_ENCRYPTION_KEY"
    fi
    
    rm -rf /tmp/config_restore
    log "✅ Configuration restored successfully"
fi

# Storage files restore
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "files" ]]; then
    if [ -f "storage.tar.gz" ]; then
        log "🗃️ Starting storage files restore..."
        tar -xzf storage.tar.gz -C $APP_DIR/backend-client/storage/app/
        chown -R www-data:www-data $APP_DIR/backend-client/storage/app/uploads
        log "✅ Storage files restored successfully"
    fi
fi

# Redis restore
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "database" ]]; then
    log "💾 Starting Redis restore..."
    systemctl stop redis-server
    gunzip -c redis-dump.rdb.gz > /var/lib/redis/dump.rdb
    chown redis:redis /var/lib/redis/dump.rdb
    systemctl start redis-server
    log "✅ Redis restored successfully"
fi

# Post-restore tasks
if [[ "$RESTORE_TYPE" == "all" || "$RESTORE_TYPE" == "files" ]]; then
    log "🔧 Running post-restore tasks..."
    
    cd $APP_DIR/backend-client
    composer install --no-dev --optimize-autoloader
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    
    cd $APP_DIR/backend-nhs
    composer install --no-dev --optimize-autoloader
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    
    # Restart services
    systemctl restart nginx php8.2-fpm mysql redis-server
    
    # Wait for services to start
    sleep 10
    
    # Verify application health
    if curl -f http://localhost:3000/health > /dev/null 2>&1; then
        log "✅ Application health check passed"
    else
        log "⚠️ Application health check failed"
    fi
fi

# Cleanup
rm -rf $RESTORE_DIR

log "✅ Restore completed successfully!"
log "🆔 Restored from backup: $BACKUP_ID"
log "🎯 Restore type: $RESTORE_TYPE"

# Send notification
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data "{\"text\":\"✅ Restore completed! Backup ID: $BACKUP_ID, Type: $RESTORE_TYPE\"}" \
  2>/dev/null || true</code></pre>
          </div>

        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 mt-12 border border-amber-200/50 dark:border-amber-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔧 Maintenance professionnelle</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Procédures complètes de maintenance pour assurer la fiabilité et performance de la plateforme de gestion d'entreprise-résidence. 
          Automatisation, surveillance proactive et plan de reprise pour continuité de service maximale.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">⏰ Automatisation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Tâches cron planifiées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">🏥 Surveillance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Health checks continus</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">💾 Sauvegarde</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Backup complet quotidien</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-amber-900 dark:text-amber-200 mb-2">🔄 Restauration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Plan de reprise testé</p>
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
      'maintenance': {
        'title': 'Maintenance',
        'description': 'Guide de maintenance et opérations'
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

useHead({ title: t('maintenance.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


