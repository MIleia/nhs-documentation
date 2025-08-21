<template>
  <DocShell type="tech" title="Observabilité" description="Monitoring, logs et métriques pour surveillance complète">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Observabilité et monitoring</h1>
      
      <div class="not-prose bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 mb-12 border border-purple-200/50 dark:border-purple-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">👁️ Vision complète du système</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Stack d'observabilité complète pour surveillance proactive de la plateforme de gestion d'entreprise-résidence. 
          Logs structurés, métriques temps réel, traces distribuées et alertes intelligentes pour optimisation continue.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">📊 Métriques</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Prometheus + Grafana</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">📝 Logs</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">ELK Stack centralisé</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🔍 Traces</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Jaeger distribuées</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🚨 Alertes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Multi-canaux smart</p>
          </div>
        </div>
      </div>

      <!-- Stack d'observabilité -->
      <h2>Stack d'observabilité</h2>
      
      <h3>Architecture monitoring</h3>
      <p>Configuration complète avec Prometheus, Grafana, ELK et Jaeger :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🏗️ Observability Architecture</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Docker Compose observabilité</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code># docker-compose.observability.yml
version: '3.8'

networks:
  monitoring:
    driver: bridge

services:
  # Prometheus - Métriques
  prometheus:
    image: prom/prometheus:v2.40.0
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus:/etc/prometheus
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.enable-lifecycle'
      - '--storage.tsdb.retention.time=15d'
    networks:
      - monitoring

  # Grafana - Dashboards
  grafana:
    image: grafana/grafana-oss:9.3.0
    container_name: grafana
    ports:
      - "3001:3000"
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/provisioning:/etc/grafana/provisioning
      - ./monitoring/grafana/dashboards:/var/lib/grafana/dashboards
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_USERS_ALLOW_SIGN_UP=false
      - GF_SMTP_ENABLED=true
      - GF_SMTP_HOST=${SMTP_HOST}
      - GF_SMTP_USER=${SMTP_USER}
      - GF_SMTP_PASSWORD=${SMTP_PASSWORD}
    networks:
      - monitoring

  # Elasticsearch - Logs storage
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.5.0
    container_name: elasticsearch
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
      - xpack.security.enabled=false
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
    networks:
      - monitoring

  # Logstash - Log processing
  logstash:
    image: docker.elastic.co/logstash/logstash:8.5.0
    container_name: logstash
    ports:
      - "5000:5000"
      - "5044:5044"
    volumes:
      - ./monitoring/logstash/pipeline:/usr/share/logstash/pipeline
      - ./monitoring/logstash/config:/usr/share/logstash/config
    environment:
      - "LS_JAVA_OPTS=-Xms1g -Xmx1g"
    depends_on:
      - elasticsearch
    networks:
      - monitoring

  # Kibana - Log visualization
  kibana:
    image: docker.elastic.co/kibana/kibana:8.5.0
    container_name: kibana
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    depends_on:
      - elasticsearch
    networks:
      - monitoring

  # Jaeger - Distributed tracing
  jaeger:
    image: jaegertracing/all-in-one:1.39
    container_name: jaeger
    ports:
      - "16686:16686"
      - "14268:14268"
    environment:
      - COLLECTOR_OTLP_ENABLED=true
    networks:
      - monitoring

  # AlertManager - Alerting
  alertmanager:
    image: prom/alertmanager:v0.25.0
    container_name: alertmanager
    ports:
      - "9093:9093"
    volumes:
      - ./monitoring/alertmanager:/etc/alertmanager
    command:
      - '--config.file=/etc/alertmanager/config.yml'
      - '--storage.path=/alertmanager'
      - '--web.external-url=http://localhost:9093'
    networks:
      - monitoring

volumes:
  prometheus_data:
  grafana_data:
  elasticsearch_data:</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Configuration Prometheus</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code># monitoring/prometheus/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  # Prometheus self-monitoring
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # Node Exporter - System metrics
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  # Nginx metrics
  - job_name: 'nginx'
    static_configs:
      - targets: ['nginx-exporter:9113']

  # MySQL metrics
  - job_name: 'mysql'
    static_configs:
      - targets: ['mysql-exporter:9104']

  # Laravel application metrics
  - job_name: 'laravel-client'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['backend-client:8000']
    scrape_interval: 30s

  - job_name: 'laravel-nhs'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['backend-nhs:8001']
    scrape_interval: 30s

  # Nuxt.js application metrics
  - job_name: 'nuxt'
    metrics_path: '/api/metrics'
    static_configs:
      - targets: ['frontend:3000']
    scrape_interval: 30s

  # Redis metrics
  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']</code></pre>
          </div>

        </div>
      </div>

      <!-- Métriques applicatives -->
      <h2>Métriques applicatives</h2>
      
      <h3>Instrumentation Laravel</h3>
      <p>Collecte de métriques métier et performance dans les backends :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">📊 Laravel Metrics</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Middleware métriques</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Prometheus\CollectorRegistry;
use Prometheus\Storage\Redis;

class PrometheusMetrics
{
    private CollectorRegistry $registry;
    
    public function __construct()
    {
        $this->registry = new CollectorRegistry(new Redis());
    }
    
    public function handle(Request $request, Closure $next)
    {
        $start = microtime(true);
        
        $response = $next($request);
        
        $duration = microtime(true) - $start;
        
        // HTTP request duration
        $histogram = $this->registry->getOrRegisterHistogram(
            'app',
            'http_request_duration_seconds',
            'Duration of HTTP requests in seconds',
            ['method', 'route', 'status_code']
        );
        
        $histogram->observe(
            $duration,
            [
                $request->method(),
                $request->route()?->getName() ?? 'unknown',
                (string) $response->getStatusCode()
            ]
        );
        
        // HTTP request count
        $counter = $this->registry->getOrRegisterCounter(
            'app',
            'http_requests_total',
            'Total number of HTTP requests',
            ['method', 'route', 'status_code']
        );
        
        $counter->incBy(1, [
            $request->method(),
            $request->route()?->getName() ?? 'unknown',
            (string) $response->getStatusCode()
        ]);
        
        // Active users gauge
        if ($request->user()) {
            $gauge = $this->registry->getOrRegisterGauge(
                'app',
                'active_users_total',
                'Number of active users'
            );
            
            $activeUsers = Cache::remember('active_users_count', 300, function() {
                return User::where('last_activity', '>=', now()->subMinutes(15))->count();
            });
            
            $gauge->set($activeUsers);
        }
        
        return $response;
    }
}</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Métriques métier personnalisées</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Services;

use Prometheus\CollectorRegistry;

class MetricsService
{
    private CollectorRegistry $registry;
    
    public function __construct(CollectorRegistry $registry)
    {
        $this->registry = $registry;
    }
    
    /**
     * Enregistre une création de badge
     */
    public function recordBadgeCreated(string $type, string $status): void
    {
        $counter = $this->registry->getOrRegisterCounter(
            'business',
            'badges_created_total',
            'Total number of badges created',
            ['type', 'status']
        );
        
        $counter->incBy(1, [$type, $status]);
    }
    
    /**
     * Enregistre temps de traitement incident
     */
    public function recordIncidentProcessingTime(float $duration, string $severity): void
    {
        $histogram = $this->registry->getOrRegisterHistogram(
            'business',
            'incident_processing_duration_seconds',
            'Time to process incidents',
            ['severity']
        );
        
        $histogram->observe($duration, [$severity]);
    }
    
    /**
     * Met à jour occupation résidence
     */
    public function updateResidenceOccupancy(int $occupied, int $total): void
    {
        $gauge = $this->registry->getOrRegisterGauge(
            'business',
            'residence_occupancy_rate',
            'Current residence occupancy rate'
        );
        
        $rate = $total > 0 ? ($occupied / $total) * 100 : 0;
        $gauge->set($rate);
    }
    
    /**
     * Enregistre tentative accès
     */
    public function recordAccessAttempt(string $type, bool $success): void
    {
        $counter = $this->registry->getOrRegisterCounter(
            'security',
            'access_attempts_total',
            'Total access attempts',
            ['type', 'result']
        );
        
        $counter->incBy(1, [$type, $success ? 'success' : 'failed']);
    }
    
    /**
     * Met à jour file d'attente
     */
    public function updateQueueSize(string $queue, int $size): void
    {
        $gauge = $this->registry->getOrRegisterGauge(
            'app',
            'queue_size',
            'Current queue size',
            ['queue']
        );
        
        $gauge->set($size, [$queue]);
    }
}</code></pre>
          </div>

        </div>
      </div>

      <h3>Métriques frontend (Nuxt)</h3>
      <p>Web Vitals et métriques utilisateur pour optimisation UX :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🌐 Frontend Metrics</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Plugin métriques Nuxt</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code>// plugins/metrics.client.ts
export default defineNuxtPlugin(() => {
  // Web Vitals tracking
  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    onCLS(sendToAnalytics)
    onFID(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  })
  
  // Route change tracking
  useRouter().afterEach((to, from) => {
    // Page view tracking
    $fetch('/api/metrics/pageview', {
      method: 'POST',
      body: {
        path: to.path,
        referrer: from.path,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      }
    }).catch(console.error)
    
    // Navigation timing
    nextTick(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        $fetch('/api/metrics/navigation', {
          method: 'POST',
          body: {
            path: to.path,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
          }
        }).catch(console.error)
      }
    })
  })
  
  // Error tracking
  window.addEventListener('error', (event) => {
    $fetch('/api/metrics/error', {
      method: 'POST',
      body: {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }
    }).catch(console.error)
  })
  
  // Unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    $fetch('/api/metrics/error', {
      method: 'POST',
      body: {
        type: 'unhandledrejection',
        reason: event.reason?.toString(),
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
      }
    }).catch(console.error)
  })
})

function sendToAnalytics(metric: any) {
  $fetch('/api/metrics/web-vitals', {
    method: 'POST',
    body: {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      url: window.location.href,
      timestamp: Date.now(),
    }
  }).catch(console.error)
}</code></pre>
          </div>

          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">API endpoints métriques</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>// server/api/metrics/web-vitals.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Store in Redis for aggregation
  const redis = useRedis()
  const key = `web-vitals:${body.name}:${new Date().toISOString().slice(0, 13)}`
  
  await redis.lpush(key, JSON.stringify({
    value: body.value,
    url: body.url,
    timestamp: body.timestamp,
  }))
  
  await redis.expire(key, 86400) // 24 hours
  
  return { success: true }
})

// server/api/metrics/pageview.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Increment page view counter
  const redis = useRedis()
  const today = new Date().toISOString().slice(0, 10)
  
  await redis.incr(`pageviews:${today}`)
  await redis.incr(`pageviews:${today}:${body.path}`)
  
  // Store detailed view
  await redis.lpush(`pageview-details:${today}`, JSON.stringify({
    path: body.path,
    referrer: body.referrer,
    timestamp: body.timestamp,
    userAgent: body.userAgent,
  }))
  
  return { success: true }
})

// server/api/metrics/index.get.ts
export default defineEventHandler(async (event) => {
  const redis = useRedis()
  const today = new Date().toISOString().slice(0, 10)
  
  // Get basic metrics
  const totalPageviews = await redis.get(`pageviews:${today}`) || 0
  
  // Get Web Vitals averages
  const webVitals = {}
  for (const metric of ['CLS', 'FID', 'FCP', 'LCP', 'TTFB']) {
    const key = `web-vitals:${metric}:${new Date().toISOString().slice(0, 13)}`
    const values = await redis.lrange(key, 0, -1)
    
    if (values.length > 0) {
      const parsedValues = values.map(v => JSON.parse(v).value)
      webVitals[metric] = {
        average: parsedValues.reduce((a, b) => a + b, 0) / parsedValues.length,
        count: parsedValues.length,
        p95: percentile(parsedValues, 95),
      }
    }
  }
  
  return {
    pageviews: totalPageviews,
    webVitals,
    timestamp: new Date().toISOString(),
  }
})

function percentile(arr: number[], p: number): number {
  const sorted = arr.sort((a, b) => a - b)
  const index = Math.ceil(sorted.length * p / 100) - 1
  return sorted[index] || 0
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Logging centralisé -->
      <h2>Logging centralisé</h2>
      
      <h3>Configuration ELK Stack</h3>
      <p>Centralisation et analyse des logs avec Elasticsearch, Logstash et Kibana :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">📝 Centralized Logging</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Configuration Logstash</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code># monitoring/logstash/pipeline/laravel.conf
input {
  file {
    path => "/var/log/laravel/*.log"
    start_position => "beginning"
    sincedb_path => "/dev/null"
    codec => "json"
    type => "laravel"
  }
  
  file {
    path => "/var/log/nginx/*.log"
    start_position => "beginning"
    sincedb_path => "/dev/null"
    type => "nginx"
  }
  
  tcp {
    port => 5000
    type => "application"
    codec => "json"
  }
}

filter {
  if [type] == "laravel" {
    # Parse Laravel logs
    if [message] =~ /^\[/ {
      grok {
        match => { "message" => "\[%{TIMESTAMP_ISO8601:timestamp}\] %{DATA:environment}\.%{DATA:level}: %{GREEDYDATA:content}" }
      }
      
      # Parse JSON content if available
      if [content] =~ /^{.*}$/ {
        json {
          source => "content"
          target => "log_data"
        }
      }
      
      # Add structured fields
      mutate {
        add_field => { "application" => "gestion-residence" }
        add_field => { "component" => "backend" }
      }
      
      # Parse user context
      if [log_data][user_id] {
        mutate {
          add_field => { "user_id" => "%{[log_data][user_id]}" }
        }
      }
      
      # Parse request ID
      if [log_data][request_id] {
        mutate {
          add_field => { "request_id" => "%{[log_data][request_id]}" }
        }
      }
    }
  }
  
  if [type] == "nginx" {
    # Parse Nginx access logs
    grok {
      match => { "message" => "%{NGINXACCESS}" }
    }
    
    mutate {
      add_field => { "application" => "gestion-residence" }
      add_field => { "component" => "nginx" }
    }
    
    # Convert response time to number
    if [response_time] {
      mutate {
        convert => { "response_time" => "float" }
      }
    }
  }
  
  # Add geo location for IP addresses
  if [clientip] {
    geoip {
      source => "clientip"
      target => "geoip"
    }
  }
  
  # Parse timestamp
  date {
    match => [ "timestamp", "yyyy-MM-dd HH:mm:ss", "ISO8601" ]
    target => "@timestamp"
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "gestion-residence-%{+YYYY.MM.dd}"
    template_name => "gestion-residence"
    template => "/usr/share/logstash/templates/gestion-residence.json"
    template_overwrite => true
  }
  
  # Debug output
  if [level] == "ERROR" or [level] == "CRITICAL" {
    stdout {
      codec => rubydebug
    }
  }
}</code></pre>
          </div>

          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Configuration logging Laravel</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
// config/logging.php

return [
    'default' => env('LOG_CHANNEL', 'stack'),
    
    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['structured', 'daily'],
            'ignore_exceptions' => false,
        ],
        
        'structured' => [
            'driver' => 'custom',
            'via' => App\Logging\StructuredLoggerFactory::class,
            'level' => 'debug',
        ],
        
        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => 'debug',
            'days' => 14,
        ],
        
        'elasticsearch' => [
            'driver' => 'custom',
            'via' => App\Logging\ElasticsearchLoggerFactory::class,
            'hosts' => [env('ELASTICSEARCH_HOST', 'localhost:9200')],
            'index' => 'gestion-residence',
        ],
    ],
];

// app/Logging/StructuredLoggerFactory.php
class StructuredLoggerFactory
{
    public function __invoke(array $config): LoggerInterface
    {
        $logger = new Logger('structured');
        
        $handler = new StreamHandler(
            storage_path('logs/structured.log'),
            $config['level'] ?? 'debug'
        );
        
        $handler->setFormatter(new JsonFormatter());
        
        $logger->pushHandler($handler);
        $logger->pushProcessor(new UidProcessor());
        $logger->pushProcessor(new WebProcessor());
        $logger->pushProcessor(function ($record) {
            // Add application context
            $record['extra']['application'] = 'gestion-residence';
            $record['extra']['environment'] = app()->environment();
            $record['extra']['version'] = config('app.version');
            
            // Add user context if authenticated
            if (auth()->check()) {
                $record['extra']['user_id'] = auth()->id();
                $record['extra']['user_role'] = auth()->user()->role;
            }
            
            // Add request ID for tracing
            if (request()->hasHeader('X-Request-ID')) {
                $record['extra']['request_id'] = request()->header('X-Request-ID');
            }
            
            return $record;
        });
        
        return $logger;
    }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Tracing distribué -->
      <h2>Tracing distribué</h2>
      
      <h3>Configuration Jaeger</h3>
      <p>Traçage des requêtes à travers les microservices :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">🔍 Distributed Tracing</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-cyan-100 dark:bg-cyan-900/30 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Middleware tracing Laravel</h5>
            <pre class="text-xs bg-cyan-50 dark:bg-cyan-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use OpenTracing\GlobalTracer;
use OpenTracing\Formats;

class DistributedTracing
{
    public function handle(Request $request, Closure $next)
    {
        $tracer = GlobalTracer::get();
        
        // Extract parent span context from headers
        $spanContext = $tracer->extract(
            Formats\HTTP_HEADERS,
            $request->headers->all()
        );
        
        // Start new span
        $span = $tracer->startSpan(
            $request->route()?->getName() ?? $request->method() . ' ' . $request->path(),
            [
                'child_of' => $spanContext,
                'tags' => [
                    'http.method' => $request->method(),
                    'http.url' => $request->fullUrl(),
                    'component' => 'laravel',
                    'service' => config('app.name'),
                    'user.id' => auth()->id(),
                ],
            ]
        );
        
        // Add request ID
        $requestId = $request->header('X-Request-ID') ?: (string) Str::uuid();
        $span->setTag('request.id', $requestId);
        $request->headers->set('X-Request-ID', $requestId);
        
        try {
            $response = $next($request);
            
            // Tag successful response
            $span->setTag('http.status_code', $response->getStatusCode());
            
            if ($response->getStatusCode() >= 400) {
                $span->setTag('error', true);
            }
            
            return $response;
            
        } catch (\Exception $e) {
            // Tag errors
            $span->setTag('error', true);
            $span->setTag('error.message', $e->getMessage());
            $span->setTag('error.class', get_class($e));
            
            throw $e;
            
        } finally {
            $span->finish();
        }
    }
}

// app/Services/TracingService.php
class TracingService
{
    public function traceServiceCall(string $service, string $operation, callable $callback)
    {
        $tracer = GlobalTracer::get();
        
        $span = $tracer->startSpan("{$service}.{$operation}", [
            'tags' => [
                'component' => $service,
                'operation' => $operation,
            ],
        ]);
        
        try {
            $result = $callback();
            $span->setTag('success', true);
            return $result;
            
        } catch (\Exception $e) {
            $span->setTag('error', true);
            $span->setTag('error.message', $e->getMessage());
            $span->log(['event' => 'error', 'message' => $e->getMessage()]);
            throw $e;
            
        } finally {
            $span->finish();
        }
    }
    
    public function traceDbQuery(string $query, array $bindings = []): void
    {
        $tracer = GlobalTracer::get();
        
        $span = $tracer->startSpan('db.query', [
            'tags' => [
                'component' => 'database',
                'db.statement' => $query,
                'db.type' => 'mysql',
            ],
        ]);
        
        if (!empty($bindings)) {
            $span->setTag('db.bindings', json_encode($bindings));
        }
        
        $span->finish();
    }
}</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Tracing frontend (Nuxt)</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>// plugins/tracing.client.ts
import { trace, context, propagation } from '@opentelemetry/api'

export default defineNuxtPlugin(() => {
  const tracer = trace.getTracer('gestion-residence-frontend')
  
  // Trace page navigation
  useRouter().beforeResolve((to, from) => {
    const span = tracer.startSpan(`navigation: ${to.name?.toString() || to.path}`, {
      attributes: {
        'navigation.from': from.path,
        'navigation.to': to.path,
        'navigation.type': 'route-change',
      },
    })
    
    // Store span in context for child operations
    context.with(trace.setSpan(context.active(), span), () => {
      // Navigation timing will be captured in mounted hook
    })
    
    return true
  })
  
  // Trace API calls
  const api = $fetch.create({
    onRequest({ request, options }) {
      const span = tracer.startSpan(`API ${options.method || 'GET'} ${request}`, {
        attributes: {
          'http.method': options.method || 'GET',
          'http.url': request.toString(),
          'component': 'api-client',
        },
      })
      
      // Inject trace context into headers
      const headers = {}
      propagation.inject(context.active(), headers)
      options.headers = { ...options.headers, ...headers }
      
      // Store span for response handling
      options._span = span
    },
    
    onResponse({ response, options }) {
      const span = options._span
      if (span) {
        span.setAttributes({
          'http.status_code': response.status,
          'http.response_size': response.headers.get('content-length') || 0,
        })
        
        if (response.status >= 400) {
          span.recordException(new Error(`HTTP ${response.status}: ${response.statusText}`))
        }
        
        span.end()
      }
    },
    
    onResponseError({ response, options }) {
      const span = options._span
      if (span) {
        span.setAttributes({
          'http.status_code': response?.status || 0,
          'error': true,
        })
        
        span.recordException(new Error(`HTTP Error: ${response?.statusText || 'Network Error'}`))
        span.end()
      }
    },
  })
  
  // Replace global $fetch
  return {
    provide: {
      api,
    },
  }
})

// composables/useTracing.ts
export const useTracing = () => {
  const tracer = trace.getTracer('gestion-residence-frontend')
  
  const traceUserAction = (action: string, attributes: Record = {}) => {
    const span = tracer.startSpan(`user.${action}`, {
      attributes: {
        'user.action': action,
        ...attributes
      }
    })
      },

    
    // Auto-end span after short delay
    setTimeout(() => span.end(), 100)
    
    return span
  }
  
  const traceAsyncOperation = async (name: string, operation: () => Promise) => {
    const span = tracer.startSpan(name)
    
    try {
      const result = await operation()
      span.setAttributes({ success: true })
      return result
    } catch (error) {
      span.recordException(error as Error)
      span.setAttributes({ success: false })
      throw error
    } finally {
      span.end()
    }
  }
  
  return { initializeTracing, traceUserAction, traceAsyncOperation }

</code></pre>
          </div>

        </div>
      </div>

      <!-- Dashboards Grafana -->
      <h2>Dashboards Grafana</h2>
      
      <h3>Dashboard principal</h3>
      <p>Vue d'ensemble temps réel de la santé du système :</p>
      
      <div class="not-prose bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 my-6 border border-teal-200 dark:border-teal-800/30">
        <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">📊 Grafana Dashboards</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-teal-100 dark:bg-teal-900/30 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
            <h5 class="font-semibold text-teal-900 dark:text-teal-200 mb-2">Configuration dashboard</h5>
            <div class="space-y-2 text-teal-700 dark:text-teal-300">
              <h6 class="font-semibold">📈 Métriques système</h6>
              <ul class="space-y-1 ml-4">
                <li>• CPU, mémoire, disque et réseau</li>
                <li>• Charge système et processus actifs</li>
                <li>• Métriques Docker et conteneurs</li>
              </ul>
              
              <h6 class="font-semibold">🌐 Métriques application</h6>
              <ul class="space-y-1 ml-4">
                <li>• Temps de réponse API et frontend</li>
                <li>• Taux d'erreur et codes de statut</li>
                <li>• Throughput et requêtes par seconde</li>
                <li>• Files d'attente et jobs en cours</li>
              </ul>
              
              <h6 class="font-semibold">💼 Métriques métier</h6>
              <ul class="space-y-1 ml-4">
                <li>• Utilisateurs actifs et nouveaux</li>
                <li>• Badges créés/révoqués par période</li>
                <li>• Incidents signalés et résolus</li>
                <li>• Taux d'occupation résidence</li>
              </ul>
              
              <h6 class="font-semibold">🔐 Métriques sécurité</h6>
              <ul class="space-y-1 ml-4">
                <li>• Tentatives de connexion échouées</li>
                <li>• Accès badge refusés</li>
                <li>• Activités suspectes détectées</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <!-- Alerting intelligent -->
      <h2>Alerting intelligent</h2>
      
      <h3>Configuration AlertManager</h3>
      <p>Alertes multi-canaux avec escalade automatique :</p>
      
      <div class="not-prose bg-red-50 dark:bg-red-950/20 rounded-xl p-6 my-6 border border-red-200 dark:border-red-800/30">
        <h4 class="font-bold text-red-800 dark:text-red-200 mb-4">🚨 Smart Alerting</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">Configuration AlertManager</h5>
            <pre class="text-xs bg-red-50 dark:bg-red-950/50 p-3 rounded overflow-x-auto"><code># monitoring/alertmanager/config.yml
global:
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'alerts@gestion-residence.com'
  smtp_auth_username: 'alerts@gestion-residence.com'
  smtp_auth_password: '${SMTP_PASSWORD}'

route:
  group_by: ['alertname', 'service']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  receiver: 'web.hook'
  routes:
    - match:
        severity: critical
      receiver: 'critical-alerts'
      group_wait: 10s
      repeat_interval: 1h
    - match:
        severity: warning
      receiver: 'warning-alerts'
      repeat_interval: 12h
    - match:
        alertname: 'SecurityBreach'
      receiver: 'security-team'
      group_wait: 0s
      repeat_interval: 30m

receivers:
  - name: 'web.hook'
    webhook_configs:
      - url: 'http://localhost:5001/alerts/webhook'
        send_resolved: true

  - name: 'critical-alerts'
    email_configs:
      - to: 'admin@gestion-residence.com,devops@gestion-residence.com'
        subject: '🚨 CRITICAL Alert - &#123;&#123; .GroupLabels.alertname &#125;&#125;'
        body: |
          Alert: &#123;&#123; .GroupLabels.alertname &#125;&#125;
          Severity: &#123;&#123; .CommonLabels.severity &#125;&#125;
          
          &#123;&#123; range .Alerts &#125;&#125;
          - Instance: &#123;&#123; .Labels.instance &#125;&#125;
          - Description: &#123;&#123; .Annotations.description &#125;&#125;
          - Started: &#123;&#123; .StartsAt &#125;&#125;
          &#123;&#123; end &#125;&#125;
        headers:
          Priority: 'high'
    
    slack_configs:
      - api_url: '${SLACK_WEBHOOK_URL}'
        channel: '#alerts-critical'
        color: 'danger'
        title: '🚨 Critical Alert'
        text: |
          *Alert:* &#123;&#123; .GroupLabels.alertname &#125;&#125;
          *Severity:* &#123;&#123; .CommonLabels.severity &#125;&#125;
          &#123;&#123; range .Alerts &#125;&#125;
          *Instance:* &#123;&#123; .Labels.instance &#125;&#125;
          *Description:* &#123;&#123; .Annotations.description &#125;&#125;
          &#123;&#123; end &#125;&#125;
    
    pagerduty_configs:
      - routing_key: '${PAGERDUTY_INTEGRATION_KEY}'
        description: '&#123;&#123; .GroupLabels.alertname &#125;&#125; - &#123;&#123; .CommonAnnotations.summary &#125;&#125;'

  - name: 'warning-alerts'
    slack_configs:
      - api_url: '${SLACK_WEBHOOK_URL}'
        channel: '#alerts-warning'
        color: 'warning'
        title: '⚠️ Warning Alert'
        text: |
          *Alert:* &#123;&#123; .GroupLabels.alertname &#125;&#125;
          &#123;&#123; range .Alerts &#125;&#125;
          *Description:* &#123;&#123; .Annotations.description &#125;&#125;
          &#123;&#123; end &#125;&#125;

  - name: 'security-team'
    email_configs:
      - to: 'security@gestion-residence.com'
        subject: '🔒 SECURITY ALERT - &#123;&#123; .GroupLabels.alertname &#125;&#125;'
        body: |
          IMMEDIATE ATTENTION REQUIRED
          
          Security Alert: &#123;&#123; .GroupLabels.alertname &#125;&#125;
          &#123;&#123; range .Alerts &#125;&#125;
          - Description: &#123;&#123; .Annotations.description &#125;&#125;
          - Source: &#123;&#123; .Labels.instance &#125;&#125;
          - Time: &#123;&#123; .StartsAt &#125;&#125;
          &#123;&#123; end &#125;&#125;
        headers:
          Priority: 'urgent'

inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'service']</code></pre>
          </div>

        </div>
      </div>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 mt-12 border border-purple-200/50 dark:border-purple-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">👁️ Observabilité complète</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Stack d'observabilité moderne pour surveillance proactive de la plateforme de gestion d'entreprise-résidence. 
          Métriques, logs, traces et alertes intelligentes pour maintenir la qualité de service optimale.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">📊 Métriques</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Système + métier temps réel</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">📝 Logs</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Centralisés et structurés</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🔍 Traces</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Distribuées end-to-end</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-purple-900 dark:text-purple-200 mb-2">🚨 Alertes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Intelligentes multi-canal</p>
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
  useHead({ title: 'Observabilité - Documentation technique' })

  onMounted(() => {
    initTheme()
  })
</script>


