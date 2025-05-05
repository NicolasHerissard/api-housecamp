# API HouseCamp

API HouseCamp est une application backend développée avec le framework [NestJS](https://nestjs.com/). Elle permet de gérer des entités telles que les utilisateurs, les propriétés, les équipements et leurs relations.

## Table des matières

- [Présentation](#présentation)
- [Installation](#installation)
- [Utilisation](#utilisation)

---

## Présentation

API HouseCamp est conçue pour fournir une gestion centralisée des entités suivantes :
- **Utilisateurs** : Gestion des utilisateurs avec rôles et authentification.
- **Propriétés** : Gestion des propriétés immobilières.
- **Équipements** : Gestion des équipements associés aux propriétés.
- **Relations** : Gestion des relations entre équipements et propriétés.

Le projet utilise **TypeORM** pour la gestion de la base de données et suit une architecture modulaire pour une meilleure maintenabilité.

---

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Une base de données MySQL

### Étapes

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/api-housecamp.git
   cd api-housecamp
    ```
    
2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Lancer l'application
    ```bash
    npm run start:dev
    ```

4. Ouvrez votre navigateur à `http://localhost:3000/api` pour accéder à l'API Swagger.

---

## Utilisation

### Entités

- **Utilisateurs** : Les utilisateurs peuvent être des propriétaires, des équipiers ou des gestionnaires.
- **Propriétés** : Les propriétés sont des entités immobilières qui peuvent être associées à des équipements.
- **Équipements** : Les équipements sont des entités qui peuvent être associés à des propriétés.
- **Relations** : Les relations sont des entités qui lient les équipements et les propriétés.

### Routes

- **GET /users** : Retourne une liste de tous les utilisateurs.
- **GET /users/:id** : Retourne les détails d'un utilisateur.
- **POST /users** : Crée un nouvel utilisateur.
- **PUT /users/:id** : Met à jour les détails d'un utilisateur.
- **DELETE /users/:id** : Supprime un utilisateur.
- **GET /properties** : Retourne une liste de toutes les propriétés.
- **GET /properties/:id** : Retourne les détails d'une propriété.
- **POST /properties** : Crée une nouvelle propriété.
- **PUT /properties/:id** : Met à jour les détails d'une propriété.
- **DELETE /properties/:id** : Supprime une propriété.
- **GET /equipments** : Retourne une liste de tous les équipements.
- **GET /equipments/:id** : Retourne les détails d'un équipement.
- **POST /equipments** : Crée un nouvel équipement.
- **PUT /equipments/:id** : Met à jour les détails d'un équipement.
- **DELETE /equipments/:id** : Supprime un équipement.
- **GET /relations** : Retourne une liste de toutes les relations.
- **GET /relations/:id** : Retourne les détails d'une relation.
- **POST /relations** : Crée une nouvelle relation.
- **PUT /relations/:id** : Met à jour les détails d'une relation.
- **DELETE /relations/:id** : Supprime une relation.

