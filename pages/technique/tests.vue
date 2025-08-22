<template>
  <DocShell type="tech" :title="t('tests.title')" :description="t('tests.description')">
    <div class="prose prose-slate max-w-none dark:prose-invert">
      <h1>Tests</h1>
      
      <div class="not-prose bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 mb-12 border border-green-200/50 dark:border-green-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">🧪 Test-Driven Quality</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Stratégie de test complète avec couverture maximale, automatisation CI/CD et validation continue. 
          Qualité assurée pour gestion d'entreprise-résidence avec tests unitaires, intégration et end-to-end.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🔬 Unit Tests</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Jest + PHPUnit</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🔗 Integration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">API + Database</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🌐 E2E Tests</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Playwright + Cypress</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">📊 Coverage</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">85%+ target</p>
          </div>
        </div>
      </div>

      <!-- Stratégie de test -->
      <h2>Stratégie de test</h2>
      
      <h3>Pyramide de test</h3>
      <p>Approche structurée avec répartition optimale des types de tests :</p>
      
      <div class="not-prose bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 my-6 border border-blue-200 dark:border-blue-800/30">
        <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">🏗️ Test Pyramid</h4>
        <div class="space-y-6 text-sm">
          
          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">🌐 E2E Tests (10%) - Haut niveau</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-red-800 dark:text-red-300 mb-1">Scope</h6>
                <ul class="text-red-700 dark:text-red-300 space-y-1">
                  <li>• Parcours utilisateur complets</li>
                  <li>• Workflows métier critiques</li>
                  <li>• Intégration frontend/backend</li>
                  <li>• Validation multi-navigateur</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-red-800 dark:text-red-300 mb-1">Outils</h6>
                <ul class="text-red-700 dark:text-red-300 space-y-1">
                  <li>• <strong>Playwright</strong> : Tests cross-browser</li>
                  <li>• <strong>Cypress</strong> : Tests interactifs</li>
                  <li>• <strong>TestCafe</strong> : Tests automatisés</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">🔗 Integration Tests (20%) - Niveau moyen</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-orange-800 dark:text-orange-300 mb-1">Scope</h6>
                <ul class="text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• APIs et endpoints</li>
                  <li>• Interactions base de données</li>
                  <li>• Services externes</li>
                  <li>• Intégrations système</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-orange-800 dark:text-orange-300 mb-1">Outils</h6>
                <ul class="text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• <strong>Laravel Feature Tests</strong> : Tests API</li>
                  <li>• <strong>Postman Newman</strong> : API testing</li>
                  <li>• <strong>Vitest</strong> : Tests composables Vue</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">🔬 Unit Tests (70%) - Base</h5>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h6 class="font-semibold text-green-800 dark:text-green-300 mb-1">Scope</h6>
                <ul class="text-green-700 dark:text-green-300 space-y-1">
                  <li>• Fonctions et méthodes isolées</li>
                  <li>• Logique métier pure</li>
                  <li>• Composants Vue unitaires</li>
                  <li>• Utilitaires et helpers</li>
                </ul>
              </div>
              <div>
                <h6 class="font-semibold text-green-800 dark:text-green-300 mb-1">Outils</h6>
                <ul class="text-green-700 dark:text-green-300 space-y-1">
                  <li>• <strong>PHPUnit</strong> : Tests backend PHP</li>
                  <li>• <strong>Jest/Vitest</strong> : Tests frontend JS/TS</li>
                  <li>• <strong>Vue Test Utils</strong> : Tests composants</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <h3>Environnements de test</h3>
      <p>Isolation et reproductibilité garanties :</p>
      
      <div class="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
          <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">🧪 Local Dev</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <li>• <strong>SQLite in-memory</strong> : Tests rapides</li>
            <li>• <strong>Factories/Seeders</strong> : Données cohérentes</li>
            <li>• <strong>Mocks/Stubs</strong> : Services externes</li>
            <li>• <strong>Watch mode</strong> : Exécution automatique</li>
          </ul>
        </div>
        <div class="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
          <h4 class="font-bold text-blue-800 dark:text-blue-200 mb-4">⚙️ CI Pipeline</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li>• <strong>Container isolé</strong> : Environment propre</li>
            <li>• <strong>Database reset</strong> : État initial garanti</li>
            <li>• <strong>Parallel execution</strong> : Tests rapides</li>
            <li>• <strong>Artifacts</strong> : Logs et screenshots</li>
          </ul>
        </div>
        <div class="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30">
          <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎭 Staging</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
            <li>• <strong>Production-like</strong> : Configuration similaire</li>
            <li>• <strong>Real data subset</strong> : Données anonymisées</li>
            <li>• <strong>Full integration</strong> : Services externes</li>
            <li>• <strong>Performance tests</strong> : Charge réaliste</li>
          </ul>
        </div>
      </div>

      <!-- Tests backend -->
      <h2>Tests Backend (Laravel)</h2>
      
      <h3>Tests unitaires PHP</h3>
      <p>Tests de la logique métier avec PHPUnit :</p>
      
      <div class="not-prose bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 my-6 border border-indigo-200 dark:border-indigo-800/30">
        <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔬 PHPUnit Tests</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Exemple : Tests Model User</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
namespace Tests\Unit\Models;

use App\Models\User;
use App\Models\Role;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    public function user_can_have_multiple_roles()
    {
        $user = User::factory()->create();
        $adminRole = Role::factory()->create(['name' => 'admin']);
        $residentRole = Role::factory()->create(['name' => 'resident']);
        
        $user->roles()->attach([$adminRole->id, $residentRole->id]);
        
        $this->assertCount(2, $user->roles);
        $this->assertTrue($user->hasRole('admin'));
        $this->assertTrue($user->hasRole('resident'));
    }
    
    /** @test */
    public function user_full_name_is_properly_formatted()
    {
        $user = User::factory()->make([
            'prenom' => 'Jean',
            'nom' => 'Dupont'
        ]);
        
        $this->assertEquals('Jean Dupont', $user->fullName);
    }
}</code></pre>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Tests de services métier</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
namespace Tests\Unit\Services;

use App\Services\BadgeService;
use App\Models\User;
use App\Models\Badge;
use Tests\TestCase;

class BadgeServiceTest extends TestCase
{
    /** @test */
    public function badge_number_is_auto_generated()
    {
        $user = User::factory()->create();
        $service = new BadgeService();
        
        $badge = $service->createBadge($user, 'résident');
        
        $this->assertMatchesRegularExpression(
            '/^RES-\d{4}-\d{3}$/', 
            $badge->numero_badge
        );
    }
    
    /** @test */
    public function badge_expiration_is_calculated_correctly()
    {
        $user = User::factory()->create();
        $service = new BadgeService();
        
        $badge = $service->createBadge($user, 'visiteur', [
            'duree_jours' => 30
        ]);
        
        $expectedExpiration = now()->addDays(30)->format('Y-m-d');
        $this->assertEquals($expectedExpiration, $badge->date_expiration);
    }
}</code></pre>
          </div>

        </div>
      </div>

      <h3>Tests d'intégration API</h3>
      <p>Validation des endpoints avec Laravel Feature Tests :</p>
      
      <div class="not-prose bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-800/30">
        <h4 class="font-bold text-orange-800 dark:text-orange-200 mb-4">🔗 API Feature Tests</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Test authentification complète</h5>
            <pre class="text-xs bg-orange-50 dark:bg-orange-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
namespace Tests\Feature\Auth;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;
    
    /** @test */
    public function user_can_login_with_valid_credentials()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password123')
        ]);
        
        $response = $this->postJson('/api/auth/login', [
            'email' => 'test@example.com',
            'password' => 'password123'
        ]);
        
        $response->assertStatus(200)
                ->assertJsonStructure([
                    'success',
                    'data' => [
                        'token',
                        'user' => ['id', 'email', 'nom', 'prenom']
                    ]
                ]);
    }
    
    /** @test */
    public function authenticated_user_can_access_protected_route()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;
        
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/auth/user');
        
        $response->assertStatus(200)
                ->assertJson([
                    'success' => true,
                    'data' => [
                        'id' => $user->id,
                        'email' => $user->email
                    ]
                ]);
    }
}</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Test CRUD complet avec permissions</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>&lt;?php
namespace Tests\Feature\Incidents;

use App\Models\User;
use App\Models\Incident;
use App\Models\Role;
use Tests\TestCase;

class IncidentManagementTest extends TestCase
{
    /** @test */
    public function resident_can_create_incident()
    {
        $resident = User::factory()->create();
        $residentRole = Role::factory()->create(['name' => 'resident']);
        $resident->roles()->attach($residentRole);
        
        $response = $this->actingAs($resident, 'sanctum')
                         ->postJson('/api/incidents', [
                             'titre' => 'Ascenseur en panne',
                             'description' => 'Ne fonctionne plus',
                             'categorie' => 'technique',
                             'priorite' => 'haute'
                         ]);
        
        $response->assertStatus(201)
                ->assertJsonPath('data.titre', 'Ascenseur en panne')
                ->assertJsonPath('data.user_id', $resident->id);
    }
    
    /** @test */
    public function admin_can_assign_incident_to_gardien()
    {
        $admin = User::factory()->create();
        $gardien = User::factory()->create();
        $incident = Incident::factory()->create();
        
        $response = $this->actingAs($admin, 'sanctum')
                         ->patchJson("/api/incidents/{$incident->id}", [
                             'assigned_to' => $gardien->id,
                             'statut' => 'en_cours'
                         ]);
        
        $response->assertStatus(200);
        $this->assertEquals($gardien->id, $incident->fresh()->assigned_to);
    }
}</code></pre>
          </div>

        </div>
      </div>

      <!-- Tests frontend -->
      <h2>Tests Frontend (Nuxt/Vue)</h2>
      
      <h3>Tests unitaires composants</h3>
      <p>Tests isolés des composants Vue avec Vitest :</p>
      
      <div class="not-prose bg-green-50 dark:bg-green-950/20 rounded-xl p-6 my-6 border border-green-200 dark:border-green-800/30">
        <h4 class="font-bold text-green-800 dark:text-green-200 mb-4">⚛️ Vue Component Tests</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">Test composant avec Vue Test Utils</h5>
            <pre class="text-xs bg-green-50 dark:bg-green-950/50 p-3 rounded overflow-x-auto"><code>// tests/components/UserCard.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserCard from '~/components/UserCard.vue'

describe('UserCard', () => {
  it('displays user information correctly', () => {
    const user = {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      roles: ['resident']
    }
    
    const wrapper = mount(UserCard, {
      props: { user }
    })
    
    expect(wrapper.text()).toContain('Jean Dupont')
    expect(wrapper.text()).toContain('jean.dupont@example.com')
    expect(wrapper.find('[data-test="user-role"]').text()).toBe('Résident')
  })
  
  it('emits edit event when edit button is clicked', async () => {
    const user = { id: 1, nom: 'Test', prenom: 'User' }
    const wrapper = mount(UserCard, {
      props: { user, canEdit: true }
    })
    
    await wrapper.find('[data-test="edit-button"]').trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('edit')
    expect(wrapper.emitted('edit')[0]).toEqual([user])
  })
})</code></pre>
          </div>

          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">Test composable/store Pinia</h5>
            <pre class="text-xs bg-blue-50 dark:bg-blue-950/50 p-3 rounded overflow-x-auto"><code>// tests/stores/auth.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '~/stores/auth'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  
  it('initializes with null user', () => {
    const authStore = useAuthStore()
    expect(authStore.user).toBe(null)
    expect(authStore.isAuthenticated).toBe(false)
  })
  
  it('sets user on successful login', async () => {
    const authStore = useAuthStore()
    
    // Mock API call
    vi.mocked($fetch).mockResolvedValueOnce({
      success: true,
      data: {
        token: 'fake-token',
        user: { id: 1, email: 'test@example.com' }
      }
    })
    
    await authStore.login('test@example.com', 'password')
    
    expect(authStore.user).toEqual({ id: 1, email: 'test@example.com' })
    expect(authStore.isAuthenticated).toBe(true)
  })
})</code></pre>
          </div>

        </div>
      </div>

      <h3>Tests end-to-end</h3>
      <p>Validation des parcours utilisateur complets avec Playwright :</p>
      
      <div class="not-prose bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6 my-6 border border-purple-200 dark:border-purple-800/30">
        <h4 class="font-bold text-purple-800 dark:text-purple-200 mb-4">🎭 E2E Tests avec Playwright</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <h5 class="font-semibold text-purple-900 dark:text-purple-200 mb-2">Test parcours authentification complet</h5>
            <pre class="text-xs bg-purple-50 dark:bg-purple-950/50 p-3 rounded overflow-x-auto"><code>// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('complete login journey', async ({ page }) => {
    // Navigate to login page
    await page.goto('/login')
    
    // Fill login form
    await page.fill('[data-test="email-input"]', 'admin@residence.com')
    await page.fill('[data-test="password-input"]', 'password123')
    await page.click('[data-test="login-button"]')
    
    // Wait for redirect to dashboard
    await expect(page).toHaveURL('/dashboard')
    
    // Verify user is logged in
    await expect(page.locator('[data-test="user-menu"]')).toBeVisible()
    await expect(page.locator('[data-test="user-name"]')).toHaveText('Admin User')
    
    // Test logout
    await page.click('[data-test="user-menu"]')
    await page.click('[data-test="logout-button"]')
    
    // Verify redirect to login
    await expect(page).toHaveURL('/login')
  })
  
  test('handles invalid credentials', async ({ page }) => {
    await page.goto('/login')
    
    await page.fill('[data-test="email-input"]', 'wrong@example.com')
    await page.fill('[data-test="password-input"]', 'wrongpassword')
    await page.click('[data-test="login-button"]')
    
    // Verify error message appears
    await expect(page.locator('[data-test="error-message"]'))
      .toHaveText('Identifiants invalides')
    
    // Verify still on login page
    await expect(page).toHaveURL('/login')
  })
})</code></pre>
          </div>

          <div class="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
            <h5 class="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Test workflow incident complet</h5>
            <pre class="text-xs bg-indigo-50 dark:bg-indigo-950/50 p-3 rounded overflow-x-auto"><code>// tests/e2e/incident-workflow.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Incident Management Workflow', () => {
  test.beforeEach(async ({ page }) => {
    // Login as resident
    await page.goto('/login')
    await page.fill('[data-test="email-input"]', 'resident@test.com')
    await page.fill('[data-test="password-input"]', 'password')
    await page.click('[data-test="login-button"]')
    await expect(page).toHaveURL('/dashboard')
  })
  
  test('resident can create and track incident', async ({ page }) => {
    // Navigate to incidents
    await page.click('[data-test="nav-incidents"]')
    await expect(page).toHaveURL('/incidents')
    
    // Create new incident
    await page.click('[data-test="new-incident-button"]')
    await page.fill('[data-test="incident-title"]', 'Fuite d\'eau appartement')
    await page.fill('[data-test="incident-description"]', 'Fuite dans la salle de bain')
    await page.selectOption('[data-test="incident-category"]', 'technique')
    await page.selectOption('[data-test="incident-priority"]', 'haute')
    
    // Submit incident
    await page.click('[data-test="submit-incident"]')
    
    // Verify success message
    await expect(page.locator('[data-test="success-message"]'))
      .toHaveText('Incident créé avec succès')
    
    // Verify incident appears in list
    await expect(page.locator('[data-test="incident-list"]'))
      .toContainText('Fuite d\'eau appartement')
    
    // Click on incident to view details
    await page.click('[data-test="incident-item"]:first-child')
    
    // Verify incident details page
    await expect(page.locator('[data-test="incident-title"]'))
      .toHaveText('Fuite d\'eau appartement')
    await expect(page.locator('[data-test="incident-status"]'))
      .toHaveText('Ouvert')
  })
})</code></pre>
          </div>

        </div>
      </div>

      <!-- Tests de performance -->
      <h2>Tests de performance</h2>
      
      <h3>Tests de charge API</h3>
      <p>Validation de la performance sous charge avec Artillery :</p>
      
      <div class="not-prose bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 my-6 border border-yellow-200 dark:border-yellow-800/30">
        <h4 class="font-bold text-yellow-800 dark:text-yellow-200 mb-4">⚡ Performance Testing</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <h5 class="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Configuration Artillery pour tests API</h5>
            <pre class="text-xs bg-yellow-50 dark:bg-yellow-950/50 p-3 rounded overflow-x-auto"><code># performance/api-load-test.yml
config:
  target: 'http://localhost:8000'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120  
      arrivalRate: 50
      name: "Ramp up load"
    - duration: 60
      arrivalRate: 100
      name: "Sustained load"
  defaults:
    headers:
      Content-Type: 'application/json'

scenarios:
  - name: "API Authentication & CRUD"
    weight: 70
    flow:
      - post:
          url: "/api/auth/login"
          json:
            email: "loadtest@example.com"
            password: "password123"
          capture:
            - json: "$.data.token"
              as: "authToken"
      - get:
          url: "/api/users"
          headers:
            Authorization: "Bearer &#123;&#123; authToken &#125;&#125;"
      - get:
          url: "/api/incidents"
          headers:
            Authorization: "Bearer &#123;&#123; authToken &#125;&#125;"
            
  - name: "Heavy data operations"
    weight: 30
    flow:
      - post:
          url: "/api/incidents"
          headers:
            Authorization: "Bearer &#123;&#123; authToken &#125;&#125;"
          json:
            titre: "Test incident &#123;&#123; $randomString() &#125;&#125;"
            description: "Performance test incident"
            categorie: "technique"
            priorite: "normale"</code></pre>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">Métriques surveillées</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>Response time</strong> : P95 < 500ms, P99 < 1s</li>
              <li>• <strong>Throughput</strong> : >100 req/sec sustained</li>
              <li>• <strong>Error rate</strong> : <1% sous charge normale</li>
              <li>• <strong>CPU usage</strong> : <70% sous charge max</li>
              <li>• <strong>Memory usage</strong> : Pas de memory leaks</li>
              <li>• <strong>Database connections</strong> : Pool efficiency</li>
            </ul>
          </div>

        </div>
      </div>

      <h3>Tests performance frontend</h3>
      <p>Optimisation des métriques Web Vitals avec Lighthouse :</p>
      
      <ul>
        <li><strong>Core Web Vitals :</strong> LCP < 2.5s, FID < 100ms, CLS < 0.1</li>
        <li><strong>Performance Score :</strong> >90 Lighthouse sur mobile/desktop</li>
        <li><strong>Bundle analysis :</strong> Monitoring taille et tree-shaking</li>
        <li><strong>Runtime performance :</strong> Memory usage, CPU time</li>
      </ul>

      <!-- Coverage et qualité -->
      <h2>Coverage et métriques qualité</h2>
      
      <h3>Objectifs de couverture</h3>
      <p>Cibles de couverture par type de code :</p>
      
      <div class="not-prose bg-cyan-50 dark:bg-cyan-950/20 rounded-xl p-6 my-6 border border-cyan-200 dark:border-cyan-800/30">
        <h4 class="font-bold text-cyan-800 dark:text-cyan-200 mb-4">📊 Coverage Targets</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Backend PHP</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• <strong>Models/Entities</strong> : 95% coverage</li>
              <li>• <strong>Services/Business Logic</strong> : 90% coverage</li>
              <li>• <strong>Controllers</strong> : 80% coverage</li>
              <li>• <strong>Middleware</strong> : 85% coverage</li>
              <li>• <strong>Global target</strong> : 85% minimum</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">Frontend JS/TS</h5>
            <ul class="space-y-1 text-cyan-700 dark:text-cyan-300">
              <li>• <strong>Composables/Utils</strong> : 90% coverage</li>
              <li>• <strong>Stores Pinia</strong> : 85% coverage</li>
              <li>• <strong>Components</strong> : 75% coverage</li>
              <li>• <strong>Pages</strong> : 60% coverage</li>
              <li>• <strong>Global target</strong> : 80% minimum</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Métriques qualité code</h3>
      <p>Outils d'analyse statique et métriques de maintenabilité :</p>
      
      <div class="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/30">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔍 Analyse statique</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
            <li>• <strong>PHPStan</strong> : Level 8 strictness PHP</li>
            <li>• <strong>ESLint</strong> : Rules strictes TypeScript</li>
            <li>• <strong>PHP CS Fixer</strong> : Standards PSR-12</li>
            <li>• <strong>Prettier</strong> : Formatage automatique</li>
            <li>• <strong>SonarQube</strong> : Analyse globale qualité</li>
          </ul>
        </div>
        <div class="bg-teal-50 dark:bg-teal-950/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800/30">
          <h4 class="font-bold text-teal-800 dark:text-teal-200 mb-4">📈 Métriques</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-2">
            <li>• <strong>Complexité cyclomatique</strong> : <10 par méthode</li>
            <li>• <strong>Code smells</strong> : 0 critical/major</li>
            <li>• <strong>Duplication</strong> : <3% du code total</li>
            <li>• <strong>Maintainability</strong> : Index A rating</li>
            <li>• <strong>Security hotspots</strong> : 0 non reviewed</li>
          </ul>
        </div>
      </div>

      <!-- CI/CD intégration -->
      <h2>Intégration CI/CD</h2>
      
      <h3>Pipeline de tests automatisés</h3>
      <p>Exécution automatique dans la pipeline de déploiement :</p>
      
      <div class="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-6 border border-gray-200 dark:border-gray-700">
        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-4">🔄 CI/CD Pipeline</h4>
        <div class="space-y-4 text-sm">
          
          <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h5 class="font-semibold text-blue-900 dark:text-blue-200 mb-2">1. Pre-commit Hooks</h5>
            <ul class="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• <strong>Linting</strong> : ESLint + PHPStan avant commit</li>
              <li>• <strong>Formatting</strong> : Prettier + PHP CS Fixer</li>
              <li>• <strong>Type checking</strong> : TypeScript + PHP strict types</li>
              <li>• <strong>Unit tests</strong> : Tests rapides sur fichiers modifiés</li>
            </ul>
          </div>

          <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <h5 class="font-semibold text-green-900 dark:text-green-200 mb-2">2. Pull Request Checks</h5>
            <ul class="text-green-700 dark:text-green-300 space-y-1">
              <li>• <strong>All unit tests</strong> : Suite complète backend + frontend</li>
              <li>• <strong>Integration tests</strong> : Tests API critiques</li>
              <li>• <strong>Code coverage</strong> : Vérification seuils minimum</li>
              <li>• <strong>Security scan</strong> : Vulnérabilités dependencies</li>
            </ul>
          </div>

          <div class="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <h5 class="font-semibold text-orange-900 dark:text-orange-200 mb-2">3. Staging Deploy</h5>
            <ul class="text-orange-700 dark:text-orange-300 space-y-1">
              <li>• <strong>Full test suite</strong> : Tous types de tests</li>
              <li>• <strong>E2E tests</strong> : Parcours critiques complets</li>
              <li>• <strong>Performance tests</strong> : Métriques de régression</li>
              <li>• <strong>Smoke tests</strong> : Validation post-déploiement</li>
            </ul>
          </div>

          <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <h5 class="font-semibold text-red-900 dark:text-red-200 mb-2">4. Production Deploy</h5>
            <ul class="text-red-700 dark:text-red-300 space-y-1">
              <li>• <strong>Health checks</strong> : Validation services actifs</li>
              <li>• <strong>Regression tests</strong> : Non-régression fonctionnelle</li>
              <li>• <strong>Rollback tests</strong> : Procédures de retour arrière</li>
              <li>• <strong>Monitoring</strong> : Alertes post-déploiement</li>
            </ul>
          </div>

        </div>
      </div>

      <h3>Reporting et dashboards</h3>
      <p>Visibilité sur la qualité et les tendances :</p>
      
      <ul>
        <li><strong>Coverage reports :</strong> Évolution coverage par module</li>
        <li><strong>Test results :</strong> Historique succès/échecs par type</li>
        <li><strong>Performance trends :</strong> Métriques dans le temps</li>
        <li><strong>Quality gates :</strong> Blocage déploiement si seuils non atteints</li>
        <li><strong>Notifications :</strong> Alerts Slack/email sur échecs critiques</li>
      </ul>

      <!-- Conclusion -->
      <div class="not-prose bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 mt-12 border border-green-200/50 dark:border-green-800/30">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">✅ Qualité garantie par les tests</h2>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Cette stratégie de test complète assure la qualité et la fiabilité de la plateforme de gestion d'entreprise-résidence. 
          L'automatisation CI/CD et les métriques continues garantissent un niveau de qualité élevé en permanence.
        </p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🔬 Tests complets</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Unit + Integration + E2E</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">📊 Coverage élevé</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">85%+ backend, 80%+ frontend</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">🔄 CI/CD intégré</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Automatisation complète</p>
          </div>
          <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4">
            <h3 class="font-bold text-green-900 dark:text-green-200 mb-2">⚡ Performance</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Tests charge et vitesse</p>
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
      'tests': {
        'title': 'Tests',
        'description': 'Stratégie de tests et qualité'
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

useHead({ title: t('tests.title') + ' - Documentation technique' })

onMounted(() => {
  initTheme()
})
</script>


