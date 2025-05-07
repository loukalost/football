# Football ⚽️

## Description du projet

Cette application nommée **Football** (très original je sais) est une application mobile développée avec React Native qui permet aux utilisateurs de consulter des informations sur les ligues de football à travers le monde entier. Pour chaque ligue, on peut voir les matchs et le / les classements qui correspondent. Ce projet a été conçu pour offrir une expérience utilisateur fluide et intuitive, tout en exploitant les fonctionnalités natives des appareils mobiles (pour l'instant seulement sur Android).

---

## Technologies utilisées

- **React Native** : Framework principal pour le développement mobile.
- **Axios** : Pour les appels API.
- **CocoaPods** : Gestionnaire de dépendances pour iOS.
- **Metro** : Outil de bundling JavaScript pour React Native.

---

## Fonctionnalités principales

- Affichage des différentes ligues à travers le monde (cela comprend les compétitions au format de tournoi type 'Coupe du monde', 'Copa America', etc...).
- Interface utilisateur optimisée pour Android seulement (pour le moment ⏳).

---

## API utilisée

L'application utilise l'API [Football Data](https://www.football-data.org/) pour récupérer les données en temps réel sur les ligues, les équipes et l'ensemble des images de types logos et drapeaux.

---

## Instructions d'installation et de lancement

### Prérequis

- Node.js (version recommandée : 16.x ou supérieure)
- npm ou Yarn
- Android Studio (pour Android) et/ou Xcode (pour iOS)
- Ruby et Bundler (pour CocoaPods)

### Étapes d'installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/loukalost/football.git
   cd football
   ```

2. Installez les dépendances JavaScript :

   ```sh
   # Avec npm
   npm install

   # OU avec Yarn
   yarn install
   ```

3. Installez les dépendances CocoaPods (**pour iOS uniquement**) :

   ```sh
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

### Lancement de l'application

1. Démarrez le serveur Metro :

   ```sh
   # Avec npm
   npm start

   # OU avec Yarn
   yarn start
   ```

2. Lancez l'application sur un simulateur ou un appareil :

   - **Android** :

     ```sh
     # Avec npm
     npm run android

     # OU avec Yarn
     yarn android
     ```

   - **iOS** :

     ```sh
     # Avec npm
     npm run ios

     # OU avec Yarn
     yarn ios
     ```

---

## Difficultés rencontrées

Je n'ai pas réussi à mettre en place le système de navigation que j'avais pourtant compris en cours mais je me suis emmêlé les pinceaux entre le cours, ce que me proposait Copilot et ce que j'avais compris.
Je prendrais le temps dès que j'en aurais de pousser ce projet un peu plus loin pour mieux comprendre les petites spécificités de React Native que j'ai eu du mal à assimiler.

---

## Troubleshooting

Si vous rencontrez des problèmes, consultez la section [Troubleshooting](https://reactnative.dev/docs/troubleshooting) ou ouvrez une issue sur le dépôt GitHub.

---

## Learn More

Pour en savoir plus sur React Native, consultez les ressources suivantes :

- [React Native Website](https://reactnative.dev)
- [Getting Started](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [Blog](https://reactnative.dev/blog)
- [`@facebook/react-native`](https://github.com/facebook/react-native)
