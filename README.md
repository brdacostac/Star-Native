# **Star Native**

## Bonjour et bienvenue sur notre dépôt. ! 👋

*******

Sommaire 
<div align="center">

 [Introduction](#introduction) | [Team](#team) | [Installer notre projet](#installation) | [Fonctionnalités](#fonctionnalite) |[Tests](#tests) | [Ameliorations](#ameliorations)
 
</div>


*******
<div id='introduction'/>

## **Introduction au projet** :bulb:

Au cours de notre formation, nous avons développé une application mobile en React Native. Cette application permet aux utilisateurs de visualiser les personnages de Star Wars, de rechercher des personnages via une barre de recherche, et de consulter des descriptions détaillées de chaque personnage. Elle offre également la possibilité de sauvegarder des personnages dans une liste de favoris pour une consultation ultérieure. En outre, notre application propose un mode sombre ou clair, ainsi qu'un choix de langues entre le français et l'anglais. Pour en savoir plus sur les fonctionnalités de notre application, vous pouvez consulter la description détaillée dans la section dédiée. Les sketchs sont présent dans le dossier Documentation.

*******
<div id='team'/>

## **Présentation de l'équipe** :busts_in_silhouette:

Étudiants de deuxième année - BUT Informatique - IUT Clermont Auvergne - 2022-2023   
`DA COSTA CUNHA Bruno` - `RANDON Noan`

*******  

<div id='installation'/>

## **Installations** :computer:

- Installation

Pour installer notre projet, vous devez d'abord cloner le dépôt à l'aide de la commande suivante :
git clone [URL_DU_REPO]

Ensuite, déplacez-vous dans le répertoire StarNative et exécutez la commande suivante pour installer les dépendances :
yarn install

Enfin, lancez l'application en exécutant la commande :
yarn expo start

Il ne vous reste plus qu'à scanner le QR code généré avec l'application Expo Go pour exécuter l'application sur votre appareil mobile.


*******

<div id='fonctionnalite'/>

## **Fonctionalitées** :computer:
 
Notre application Stars native se compose de 4 pages (Menu, Personnages, Favoris, Paramètres);
Page Menu:
<br/><img  width="300" src="Documentation/Screenshot_20230409-234123_Expo-Go.png"/><br/>
Ici vous pouvez trouvez une description de notre application, avec notre logo.

Page Personnages:
<br/><img  width="300" src="Documentation/Screenshot_20230409-234130_Expo-Go.png"/><br/>
Sur cette page, se trouve la liste des personnages de Stars Wars qu'on récupère d'une API(mettre api), l'utilisateur à la possibilité de rechercher un personnage via la barre de recherche ou encore de cliquer sur un personnage pour avoir ca description, sur l'image ci-dessous vous pouvez voir la description du personnage "Luke Skywalker", il est possible de liker un peronnage en appuyant sur le Star Trooper.
<br/><img  width="300" src="Documentation/Screenshot_20230409-234135_Expo-Go.png"/><br/>

Page Favoris:
<br/><img  width="300" src="Documentation/Screenshot_20230409-234144_Expo-Go.png"/><br/>
Sur la page favoris, l'utilisateur peut consulté les personnages qu'il a mis en favoris, et puis de nouveau cliquer dessus pour avoir sa description cette fois si il ne peut liker le personnage mais le supprimer de sa liste de like avec l'icon "Poubelle".
<br/><img  width="300" src="Documentation/Screenshot_20230409-234208_Expo-Go.png"/><br/>

Page Paramètres:
<br/><img  width="300" src="Documentation/Screenshot_20230409-234213_Expo-Go.png"/><img  width="300" src="Documentation/Screenshot_20230409-234223_Expo-Go.png"/><br/>
L'utilisateur a la possibilité de changer la langue de l'application, ou encore de choisir entre un mode sombre et un mode claire, l'activation de celui-ci engendre le lancement de la musique de Star Wars. C'est pour cela qu'il est possible de couper le sond de l'application en appuyant sur l'icon "Sond".

<div id='tests'/>

## **Tests** :zap:
Nous avons effectué un total de 10 tests : un sur un composant spécifique, et les neuf autres ont porté sur l'ensemble des actions et reducers.
Pour réalisé les tests, il faut faire la commande suivante:
npm test run
<br/><img  width="300" src="Documentation/coverageReact.png"/><br/>

<div id='ameliorations'/>

## **Améliorations** :bookmark:

Il est possible d'améliorer notre application mobile en effectuant davantage de tests sur nos pages et composants, ce que nous n'avons pas eu le temps de faire jusqu'à présent. En outre, nous aurions souhaité avoir accès à une API plus complète sur Star Wars, mais nous n'avons pas réussi à en trouver une adaptée. Enfin, nous envisageons de rendre notre application disponible sur le Play Store, ce que nous n'avons pas encore réalisé. 

*******
