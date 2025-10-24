# Portfolio — Niaina Deborah

Un portfolio personnel construit avec Next.js et Tailwind CSS pour présenter des projets, compétences et contact.

## Description

Ce dépôt contient le site portfolio développé avec Next.js (App Router) et Tailwind CSS. Il met en valeur des projets, une section À propos, et un formulaire de contact. Le composant principal des projets se trouve dans `src/components/Projects.tsx`.

## Fonctionnalités

- Page d'accueil avec animations et particules
- Section « À propos » avec compétences et indicateurs
- Galerie de projets avec filtres par catégorie et boutons pour voir le projet / code source
- Responsive et optimisé pour la performance

## Technologie

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Prérequis

- Node.js 18+ recommandé
- npm, yarn ou pnpm

## Installation

1. Cloner le dépôt

   ```bash
   git clone https://github.com/deborahniainar/portfolio.git
   cd portfolio
   ```

2. Installer les dépendances

   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   ```

3. Lancer le serveur de développement

   ```bash
   npm run dev
   # puis ouvrir http://localhost:3000
   ```

## Scripts utiles

- `npm run dev` — lance le serveur de développement
- `npm run build` — construit l'application pour la production
- `npm run start` — démarre le serveur en production (après build)
- `npm run lint` — lance ESLint

(Adaptez aux gestionnaires de paquets que vous utilisez.)

## Personnalisation des projets

Les projets affichés sont définis dans `src/components/Projects.tsx`. Chaque projet est un objet avec ces propriétés utiles :

- id, title, description, image, link, source, technologies, category, featured

Pour que le bouton « Code source » redirige vers GitHub, ajoutez l'URL du dépôt dans la propriété `source` du projet correspondant.

Exemple :

```javascript
{
  id: 1,
  title: 'Mon projet',
  link: 'https://mon-projet.vercel.app',
  source: 'https://github.com/deborahniainar/portfolio',
  // ...
}
```

## Déploiement

Ce projet se déploie facilement sur Vercel. Lier le dépôt à Vercel et laisser la configuration par défaut (Next.js) pour un déploiement continu.

## Contribuer

Corrections, améliorations et suggestions sont bienvenues. Ouvrez une issue ou un pull request.

## Auteure

Niaina Deborah — développeuse full‑stack

Contact : ajoutez une section Contact dans le site ou utilisez votre profil GitHub.

## Licence

À adapter selon votre choix (par exemple MIT).
