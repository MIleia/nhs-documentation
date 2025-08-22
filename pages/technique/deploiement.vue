<template>
    <DocShell type="tech" :title="t('deployment.title')" :description="t('deployment.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Guide de déploiement</h1>
      
      <div class="not-prose bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mb-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚀 Déploiement production</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Guide complet pour déployer la plateforme de gestion d'entreprise-résidence en production. 
          Inclut configuration serveurs, CI/CD, monitoring et procédures de mise à jour sécurisées.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">🏗️ Infrastructure</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Serveurs et configuration</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">⚙️ CI/CD</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Déploiement automatisé</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">🔒 Sécurité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">HTTPS et protection</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">📊 Monitoring</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Surveillance et alertes</p>
          </div>
        </div>
      </div>

      <!-- Architecture de déploiement -->
      <h2>Architecture de déploiement</h2>
      
      <h3>Environnements</h3>
      <p>Configuration multi-environnements pour cycle de développement sécurisé :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🌍 Multi-Environment Setup</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Environnements disponibles</h5>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                <h6 class="font-bold text-blue-800 dark:text-blue-200 mb-2">Development</h6>
                <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Serveur local Docker</li>
                  <li>• Base de données SQLite</li>
                  <li>• Hot reload activé</li>
                  <li>• Debug mode activé</li>
                  <li>• Emails locaux</li>
                </ul>
              </div>
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                <h6 class="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Staging</h6>
                <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Serveur cloud dédié</li>
                  <li>• MySQL staging</li>
                  <li>• Configuration production</li>
                  <li>• Tests automatisés</li>
                  <li>• Emails de test</li>
                </ul>
              </div>
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                <h6 class="font-bold text-red-800 dark:text-red-200 mb-2">Production</h6>
                <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Cluster haute disponibilité</li>
                  <li>• MySQL cluster</li>
                  <li>• CDN et cache Redis</li>
                  <li>• Monitoring complet</li>
                  <li>• Emails SMTP</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Architecture serveurs production</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────┐
│                        Load Balancer (Nginx)                 │
│                     SSL Termination + CDN                    │
└─────────────────────┬───────────────────────┬─────────────────┘
                      │                       │
            ┌─────────▼─────────┐   ┌─────────▼─────────┐
            │   Frontend Server │   │   Frontend Server │
            │   Nuxt.js (Node)  │   │   Nuxt.js (Node)  │
            │     Port 3000     │   │     Port 3000     │
            └─────────┬─────────┘   └─────────┬─────────┘
                      │                       │
            ┌─────────▼─────────┐   ┌─────────▼─────────┐
            │  Backend Client   │   │  Backend Client   │
            │  Laravel (PHP)    │   │  Laravel (PHP)    │
            │    Port 8000      │   │    Port 8000      │
            └─────────┬─────────┘   └─────────┬─────────┘
                      │                       │
            ┌─────────▼─────────┐   ┌─────────▼─────────┐
            │   Backend NHS     │   │   Backend NHS     │
            │  Laravel (PHP)    │   │  Laravel (PHP)    │
            │    Port 8001      │   │    Port 8001      │
            └─────────┬─────────┘   └─────────┬─────────┘
                      │                       │
            ┌─────────▼─────────────────────────▼─────────┐
            │              MySQL Cluster                  │
            │        Master/Slave Replication             │
            │            Redis Cache                      │
            └─────────────────────────────────────────────┘</code></pre>
          </div>

        </div>
      </div>

      <!-- Configuration serveurs -->
      <h2>Configuration serveurs</h2>
      
      <h3>Serveur web (Nginx)</h3>
      <p>Configuration Nginx optimisée pour performance et sécurité :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">⚙️ Configuration Nginx</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Site configuration</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code># /etc/nginx/sites-available/gestion-residence
server {
    listen 80;
    server_name gestion-residence.com www.gestion-residence.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name gestion-residence.com www.gestion-residence.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/gestion-residence.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gestion-residence.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
    
    # Frontend (Nuxt.js)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }
    
    # API Backend Client
    location /api/ {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        
        # Rate limiting
        limit_req zone=api burst=20 nodelay;
    }
    
    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}

# Rate limiting zones
http {
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
}</code></pre>
          </div>

        </div>
      </div>

      <h3>Configuration PHP-FPM</h3>
      <p>Optimisation PHP pour performance en production :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🐘 PHP-FPM Tuning</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Configuration pool</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code># /etc/php/8.2/fpm/pool.d/gestion-residence.conf
[gestion-residence]
user = www-data
group = www-data
listen = /var/run/php/php8.2-fpm-gestion-residence.sock
listen.owner = www-data
listen.group = www-data
listen.mode = 0660

# Process management
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 1000

# Performance tuning
request_terminate_timeout = 300
request_slowlog_timeout = 30
slowlog = /var/log/php-fpm/gestion-residence-slow.log

# Security
security.limit_extensions = .php
php_admin_value[disable_functions] = exec,passthru,shell_exec,system,proc_open,popen
php_admin_flag[allow_url_fopen] = off

# Memory limits
php_admin_value[memory_limit] = 256M
php_admin_value[max_execution_time] = 300
php_admin_value[max_input_time] = 60
php_admin_value[max_input_vars] = 3000
php_admin_value[post_max_size] = 50M
php_admin_value[upload_max_filesize] = 50M

# OPcache
php_admin_value[opcache.enable] = 1
php_admin_value[opcache.memory_consumption] = 256
php_admin_value[opcache.interned_strings_buffer] = 16
php_admin_value[opcache.max_accelerated_files] = 10000
php_admin_value[opcache.validate_timestamps] = 0
php_admin_value[opcache.save_comments] = 0
php_admin_value[opcache.fast_shutdown] = 1</code></pre>
          </div>

        </div>
      </div>

      <!-- CI/CD Pipeline -->
      <h2>Pipeline CI/CD</h2>
      
      <h3>GitHub Actions</h3>
      <p>Automatisation complète du déploiement avec tests et validations :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🔄 GitHub Actions Workflow</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Pipeline de déploiement</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code># .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test-backend:
    runs-on: ubuntu-latest
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ROOT_PASSWORD: root
          MYSQL_DATABASE: gestion_residence_test
        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
        
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.2'
          extensions: mbstring, dom, fileinfo, mysql
          coverage: xdebug
          
      - name: Cache Composer packages
        uses: actions/cache@v3
        with:
          path: vendor
          key: $&#123;&#123; runner.os &#125;&#125;-php-$&#123;&#123; hashFiles('**/composer.lock') &#125;&#125;
          
      - name: Install backend-client dependencies
        run: |
          cd backend-client
          composer install --prefer-dist --no-progress
          
      - name: Install backend-nhs dependencies  
        run: |
          cd backend-nhs
          composer install --prefer-dist --no-progress
          
      - name: Setup environment
        run: |
          cd backend-client
          cp .env.testing .env
          php artisan key:generate
          php artisan migrate --force
          
      - name: Run backend tests
        run: |
          cd backend-client
          php artisan test --coverage-clover=coverage.xml
          
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./backend-client/coverage.xml

  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json
          
      - name: Install frontend dependencies
        run: |
          cd frontend
          npm ci
          
      - name: Run linting
        run: |
          cd frontend
          npm run lint
          
      - name: Run type checking
        run: |
          cd frontend  
          npm run typecheck
          
      - name: Run frontend tests
        run: |
          cd frontend
          npm run test:coverage
          
      - name: Build frontend
        run: |
          cd frontend
          npm run build

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run security scan (PHP)
        run: |
          cd backend-client
          composer audit
          
      - name: Run security scan (Node.js)
        run: |
          cd frontend
          npm audit --audit-level high

  deploy-staging:
    needs: [test-backend, test-frontend, security-scan]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: staging
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to staging
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: $&#123;&#123; secrets.STAGING_HOST &#125;&#125;
          username: $&#123;&#123; secrets.STAGING_USER &#125;&#125;
          key: $&#123;&#123; secrets.STAGING_SSH_KEY &#125;&#125;
          script: |
            cd /var/www/gestion-residence
            git pull origin main
            ./deploy/staging-deploy.sh

  deploy-production:
    needs: [deploy-staging]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    
    steps:
      - name: Deploy to production
        uses: appleboy/ssh-action@v0.1.8
        with:
          host: $&#123;&#123; secrets.PROD_HOST &#125;&#125;
          username: $&#123;&#123; secrets.PROD_USER &#125;&#125;
          key: $&#123;&#123; secrets.PROD_SSH_KEY &#125;&#125;
          script: |
            cd /var/www/gestion-residence
            ./deploy/production-deploy.sh</code></pre>
          </div>

        </div>
      </div>

      <h3>Scripts de déploiement</h3>
      <p>Scripts automatisés pour déploiement zero-downtime :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">📜 Deployment Scripts</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Script de déploiement production</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# deploy/production-deploy.sh

set -e

echo "🚀 Starting production deployment..."

# Variables
APP_DIR="/var/www/gestion-residence"
BACKUP_DIR="/var/backups/gestion-residence"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup
echo "📦 Creating backup..."
mkdir -p $BACKUP_DIR
cp -r $APP_DIR $BACKUP_DIR/backup_$TIMESTAMP

# Update code
echo "📥 Pulling latest code..."
cd $APP_DIR
git fetch origin
git reset --hard origin/main

# Backend deployment
echo "🔧 Deploying backend..."
cd backend-client

# Install dependencies
composer install --no-dev --optimize-autoloader

# Clear and cache config
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations
php artisan migrate --force

# Clear application cache
php artisan cache:clear
php artisan queue:restart

cd ../backend-nhs

# Repeat for NHS backend
composer install --no-dev --optimize-autoloader
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
php artisan cache:clear
php artisan queue:restart

# Frontend deployment
echo "🎨 Deploying frontend..."
cd ../frontend

# Install dependencies and build
npm ci --production=false
npm run build

# Update PM2 process
pm2 reload gestion-residence --update-env

# Set proper permissions
echo "🔐 Setting permissions..."
cd $APP_DIR
chown -R www-data:www-data .
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod -R 775 backend-client/storage
chmod -R 775 backend-client/bootstrap/cache
chmod -R 775 backend-nhs/storage
chmod -R 775 backend-nhs/bootstrap/cache

# Restart services
echo "🔄 Restarting services..."
systemctl reload nginx
systemctl restart php8.2-fpm

# Health check
echo "🏥 Running health checks..."
sleep 10

# Check application health
curl -f http://localhost:3000/health || {
    echo "❌ Health check failed! Rolling back..."
    # Rollback logic here
    exit 1
}

# Check API health
curl -f http://localhost:8000/api/health || {
    echo "❌ API health check failed! Rolling back..."
    exit 1
}

echo "✅ Deployment completed successfully!"

# Send notification
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H 'Content-type: application/json' \
  --data '{"text":"🚀 Gestion Résidence deployed to production successfully!"}'</code></pre>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Script de rollback</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# deploy/rollback.sh

set -e

echo "⏪ Starting rollback..."

if [ -z "$1" ]; then
    echo "Usage: ./rollback.sh BACKUP_TIMESTAMP"
    echo "Available backups:"
    ls -la /var/backups/gestion-residence/
    exit 1
fi

BACKUP_TIMESTAMP=$1
APP_DIR="/var/www/gestion-residence"
BACKUP_DIR="/var/backups/gestion-residence/backup_$BACKUP_TIMESTAMP"

if [ ! -d "$BACKUP_DIR" ]; then
    echo "❌ Backup not found: $BACKUP_DIR"
    exit 1
fi

# Stop services
echo "🛑 Stopping services..."
pm2 stop gestion-residence

# Restore from backup
echo "📦 Restoring from backup..."
rm -rf $APP_DIR
cp -r $BACKUP_DIR $APP_DIR

# Restart services
cd $APP_DIR
pm2 start gestion-residence
systemctl reload nginx
systemctl restart php8.2-fpm

echo "✅ Rollback completed!"</code></pre>
          </div>

        </div>
      </div>

      <!-- Base de données -->
      <h2>Gestion base de données</h2>
      
      <h3>Migrations et sauvegardes</h3>
      <p>Stratégie de sauvegarde et migration pour continuité de service :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">💾 Database Operations</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Script de sauvegarde automatique</h5>
            <pre class="text-xs bg-cyan-50 dark:bg-cyan-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/backup-database.sh

set -e

# Configuration
DB_HOST="localhost"
DB_NAME="gestion_residence"
DB_USER="backup_user"
DB_PASS="$DB_PASSWORD"
BACKUP_DIR="/var/backups/mysql"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/gestion_residence_$TIMESTAMP.sql"

# Create backup directory
mkdir -p $BACKUP_DIR

# Create database dump
echo "📊 Creating database backup..."
mysqldump --single-transaction --routines --triggers \
  -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_FILE

# Compress backup
gzip $BACKUP_FILE

# Upload to S3 (optional)
if [ "$S3_BACKUP_ENABLED" = "true" ]; then
    echo "☁️ Uploading to S3..."
    aws s3 cp $BACKUP_FILE.gz s3://$S3_BACKUP_BUCKET/daily/
fi

# Clean old backups (keep 7 days)
find $BACKUP_DIR -name "gestion_residence_*.sql.gz" -mtime +7 -delete

echo "✅ Database backup completed: $BACKUP_FILE.gz"

# Add to crontab:
# 0 2 * * * /var/www/gestion-residence/scripts/backup-database.sh</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Configuration MySQL production</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code># /etc/mysql/mysql.conf.d/mysqld.cnf

[mysqld]
# Basic settings
user = mysql
bind-address = 127.0.0.1
port = 3306
datadir = /var/lib/mysql

# Performance tuning
innodb_buffer_pool_size = 2G
innodb_log_file_size = 256M
innodb_log_buffer_size = 16M
innodb_flush_log_at_trx_commit = 2
innodb_file_per_table = 1

# Query cache
query_cache_type = 1
query_cache_size = 256M
query_cache_limit = 1M

# Connection settings
max_connections = 200
max_connect_errors = 10000
connect_timeout = 60
wait_timeout = 600

# Binary logging for replication
log-bin = mysql-bin
binlog_format = ROW
expire_logs_days = 7
max_binlog_size = 100M

# Slow query log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

# Security
ssl-ca = /etc/mysql/ssl/ca-cert.pem
ssl-cert = /etc/mysql/ssl/server-cert.pem
ssl-key = /etc/mysql/ssl/server-key.pem</code></pre>
          </div>

        </div>
      </div>

      <!-- Monitoring et alertes -->
      <h2>Monitoring et alertes</h2>
      
      <h3>Configuration monitoring</h3>
      <p>Surveillance proactive avec métriques et alertes automatisées :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">📊 Monitoring Setup</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Docker Compose monitoring</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto"><code># docker-compose.monitoring.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.enable-lifecycle'

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3001:3000"
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/provisioning:/etc/grafana/provisioning
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false

  node_exporter:
    image: prom/node-exporter:latest
    container_name: node_exporter
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($$|/)'

  nginx_exporter:
    image: nginx/nginx-prometheus-exporter:latest
    container_name: nginx_exporter
    ports:
      - "9113:9113"
    command:
      - '-nginx.scrape-uri=http://nginx:8080/nginx_status'

volumes:
  prometheus_data:
  grafana_data:</code></pre>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Alertes Prometheus</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code># monitoring/alerts.yml
groups:
  - name: gestion-residence
    rules:
      - alert: HighCPUUsage
        expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is above 80% for more than 5 minutes"

      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100 > 85
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High memory usage detected"
          description: "Memory usage is above 85%"

      - alert: ApplicationDown
        expr: up{job="gestion-residence"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Application is down"
          description: "Gestion Résidence application is not responding"

      - alert: DatabaseConnectionFailure
        expr: mysql_up == 0
        for: 30s
        labels:
          severity: critical
        annotations:
          summary: "Database connection failed"
          description: "Cannot connect to MySQL database"

      - alert: HighResponseTime
        expr: nginx_http_request_duration_seconds{quantile="0.95"} > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High response time"
          description: "95th percentile response time is above 2 seconds"

      - alert: DiskSpaceLow
        expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) * 100 < 10
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Low disk space"
          description: "Disk space is below 10%"</code></pre>
          </div>

        </div>
      </div>

      <h3>Health checks</h3>
      <p>Endpoints de santé pour monitoring automatisé :</p>
      
      <div class="not-prose bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 my-6 border border-emerald-200 dark:border-emerald-800/30">
        <h4 class="font-bold text-emerald-800 dark:text-emerald-200 mb-4">🏥 Health Check Endpoints</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
            <h5 class="font-semibold text-emerald-900 dark:text-emerald-200 mb-2">Backend health check (Laravel)</h5>
            <pre class="text-xs bg-emerald-50 dark:bg-emerald-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
// routes/api.php
Route::get('/health', [HealthController::class, 'check']);

// app/Http/Controllers/HealthController.php
class HealthController extends Controller
{
    public function check(): JsonResponse
    {
        $checks = [
            'database' =&gt; $this-&gt;checkDatabase(),
            'cache' =&gt; $this-&gt;checkCache(),
            'storage' =&gt; $this-&gt;checkStorage(),
            'queue' =&gt; $this-&gt;checkQueue(),
        ];
        
        $allHealthy = !in_array(false, $checks, true);
        
        return response()-&gt;json([
            'status' =&gt; $allHealthy ? 'healthy' : 'unhealthy',
            'timestamp' =&gt; now()-&gt;toISOString(),
            'checks' =&gt; $checks,
            'version' =&gt; config('app.version'),
        ], $allHealthy ? 200 : 503);
    }
    
    private function checkDatabase(): bool
    {
        try {
            DB::connection()-&gt;getPdo();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
    
    private function checkCache(): bool
    {
        try {
            Cache::put('health_check', 'ok', 10);
            return Cache::get('health_check') === 'ok';
        } catch (Exception $e) {
            return false;
        }
    }
    
    private function checkStorage(): bool
    {
        try {
            return Storage::disk('local')-&gt;exists('.');
        } catch (Exception $e) {
            return false;
        }
    }
    
    private function checkQueue(): bool
    {
        try {
            return Queue::size() !== false;
        } catch (Exception $e) {
            return false;
        }
    }
}</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Frontend health check (Nuxt)</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>// server/api/health.get.ts
export default defineEventHandler(async (event) =&gt; {
  const checks = {
    server: true,
    api: await checkApiConnection(),
    memory: checkMemoryUsage(),
    uptime: process.uptime(),
  }
  
  const allHealthy = Object.values(checks).every(check =&gt; 
    typeof check === 'boolean' ? check : check.status === 'ok'
  )
  
  setResponseStatus(event, allHealthy ? 200 : 503)
  
  return {
    status: allHealthy ? 'healthy' : 'unhealthy',
    timestamp: new Date().toISOString(),
    checks,
    version: process.env.npm_package_version,
  }
})

async function checkApiConnection(): Promise&lt;boolean&gt; {
  try {
    const response = await $fetch('/api/health', {
      baseURL: 'http://localhost:8000',
      timeout: 5000,
    })
    return response.status === 'healthy'
  } catch {
    return false
  }
}

function checkMemoryUsage() {
  const usage = process.memoryUsage()
  const used = Math.round((usage.heapUsed / 1024 / 1024) * 100) / 100
  const total = Math.round((usage.heapTotal / 1024 / 1024) * 100) / 100
  
  return {
    used: `${used} MB`,
    total: `${total} MB`,
    status: used &lt; 500 ? 'ok' : 'warning'
  }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Sécurité production -->
      <h2>Sécurité en production</h2>
      
      <h3>Configuration firewall</h3>
      <p>Règles de sécurité strictes pour environnement de production :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔒 Security Configuration</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">UFW Firewall rules</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code>#!/bin/bash
# scripts/setup-firewall.sh

# Enable UFW
ufw --force enable

# Default policies
ufw default deny incoming
ufw default allow outgoing

# SSH access (change port from default)
ufw allow 2222/tcp comment 'SSH'

# HTTP/HTTPS
ufw allow 80/tcp comment 'HTTP'
ufw allow 443/tcp comment 'HTTPS'

# Application ports (local only)
ufw allow from 127.0.0.1 to any port 3000 comment 'Nuxt.js'
ufw allow from 127.0.0.1 to any port 8000 comment 'Laravel Client'
ufw allow from 127.0.0.1 to any port 8001 comment 'Laravel NHS'

# Database (local only)
ufw allow from 127.0.0.1 to any port 3306 comment 'MySQL'

# Monitoring (internal network only)
ufw allow from 192.168.1.0/24 to any port 9090 comment 'Prometheus'
ufw allow from 192.168.1.0/24 to any port 3001 comment 'Grafana'

# Rate limiting for SSH
ufw limit 2222/tcp

# Fail2ban integration
ufw allow from any to any port 22 # Fail2ban will handle SSH

echo "✅ Firewall configured successfully"</code></pre>
          </div>

          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Fail2ban configuration</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto"><code># /etc/fail2ban/jail.local
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
ignoreip = 127.0.0.1/8 192.168.1.0/24

[sshd]
enabled = true
port = 2222
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3

[nginx-limit-req]
enabled = true
filter = nginx-limit-req
logpath = /var/log/nginx/error.log
maxretry = 3

[nginx-bad-request]
enabled = true
filter = nginx-bad-request
logpath = /var/log/nginx/access.log
maxretry = 3
bantime = 86400

# Custom filter for application abuse
[gestion-residence-api]
enabled = true
filter = gestion-residence-api
logpath = /var/www/gestion-residence/backend-client/storage/logs/laravel.log
maxretry = 10
bantime = 7200</code></pre>
          </div>

        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mt-12 border border-blue-200/50 dark:border-blue-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🚀 Déploiement production robuste</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Configuration complète pour déploiement sécurisé et monitoring proactif de la plateforme de gestion d'entreprise-résidence. 
          Pipeline CI/CD automatisé avec tests, sauvegardes et rollback pour assurer la continuité de service.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">⚙️ Automatisation</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">CI/CD GitHub Actions</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">🛡️ Sécurité</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Firewall + Fail2ban</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">📊 Monitoring</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Prometheus + Grafana</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-blue-900 dark:text-blue-200 mb-2">💾 Backups</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Automatisés + S3</p>
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
      'deployment': {
        'title': 'Déploiement',
        'description': 'Guide de déploiement et configuration'
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

useHead({ title: t('deployment.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


