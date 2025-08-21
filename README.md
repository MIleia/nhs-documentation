# NHS Documentation

Documentation technique et guides pour le projet NHS, construite avec Nuxt.js, Vue.js et Tailwind CSS.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

## 📁 Structure du projet

```
├── pages/                 # Pages de l'application
│   ├── index.vue         # Page d'accueil
│   ├── guide/            # Documentation guides utilisateur
│   └── technique/        # Documentation technique
├── components/           # Composants Vue réutilisables
├── layouts/             # Layouts de l'application
├── assets/              # Assets (CSS, images, etc.)
│   └── css/
│       └── main.css     # Styles Tailwind principaux
├── public/              # Fichiers statiques
└── nuxt.config.ts       # Configuration Nuxt

```

## 🛠️ Technologies utilisées

- **Nuxt.js 4** - Framework Vue.js full-stack
- **Vue.js 3** - Framework JavaScript progressif
- **Tailwind CSS** - Framework CSS utility-first
- **Nuxt Content** - Gestion de contenu basée sur des fichiers
- **VueUse** - Collection de composables Vue

## 📚 Scripts disponibles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Génération statique
npm run generate

# Prévisualisation de la build
npm run preview
```

## 🎨 Fonctionnalités

- ✅ Mode sombre/clair
- ✅ Design responsive
- ✅ Navigation automatique
- ✅ Composants réutilisables
- ✅ Configuration Tailwind personnalisée
- ✅ Support TypeScript

## 📝 Développement

Pour ajouter de nouvelles pages, créez simplement des fichiers `.vue` dans le dossier `pages/`. Le routage est automatiquement généré par Nuxt.

### Exemple de nouvelle page
```vue
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold">Ma nouvelle page</h1>
  </div>
</template>

<script setup>
// Configuration de la page
</script>
```