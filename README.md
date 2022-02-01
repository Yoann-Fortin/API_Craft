# Test technique pour Antoine POUS

Créer une API Node/TS qui permet de créer un compte utilisateur et s'identifier.
2 contraintes sont immposées:
1. Implementation de l'auth via couple login/pass + JWT
2. Implementation du protocole SRP (Secure Remote Password)

## Résultat:

Tout n'est pas finis à 100%, j'en suis pas fier mais je bloque sur les JWT et sur les attributs d'environnement. Ils restent sur undefined malgré l'utilisation du package dotenv ou la tentative de les redéfinir directement en les modifiant dans mon fichier courant. 

## Lancer l'api

Commencer par un npm install pour télécharger les différentes dépendances.

Un simple npm run dev permet de lancer l'api sur localhost:3000
La route "/api/users" permet de créer un nouvel utilisateur, elle nécessite certaines informations pour retourner un succès:

* lastname: qui doit faire plus de 2 caractères et forcément de type string, bien que je n'ai pas implémenté toutes les v érifications.
* username: identique que pour le lastname.
* password: je comptais mettre en place le protocole SRP donc mes vérifications seraient venus après pour vérifier qu'il corresponde bien au format attendu.

Pour lancer les tests, fermer nodemon et lancer un npm test, qui va tous les lancer.

## Mes recherches

**Concernant les JWT**

* https://cryptohack.org/challenges/web/
* https://medium.com/101-writeups/hacking-json-web-token-jwt-233fe6c862e6
* https://www.npmjs.com/package/jsonwebtoken
* https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466557-creez-des-tokens-dauthentification
* https://jwt.io/introduction

**Concernant le protocole SRP**

* https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol
* https://medium.com/swlh/what-is-secure-remote-password-srp-protocol-and-how-to-use-it-70e415b94a76
* https://github.com/mozilla/node-srp#how-to-use-it

 