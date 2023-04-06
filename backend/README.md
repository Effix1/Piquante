Cette API a été créée avec Express. Elle est destinée à être utilisée pour listée des sauces pimentées postées par les utilisateur.

Installation

Cloner le dépôt Git : https://github.com/Effix1/Piquante.git
Naviguer dans le répertoire du projet : backend
Installer les dépendances : npm install bcrypt@5.1.0 + express@4.18.2 + jsonwebtoken@9.0.0 + mongoose-unique-validator@3.1.0 + mongoose@6.10.3 + multer@1.4.5-lts.1


Utilisation
Lancer l'API : npm start
Se connecter à l'API à l'aide de l'URL suivante : http://localhost:4200

Endpoints
Authentification
POST /api/auth/signup
Crée un nouvel utilisateur.

POST /api/auth/login
Connecte un utilisateur existant.

GET /api/auth/logout
Déconnecte l'utilisateur actuel.

Sauces
GET /api/sauces
Renvoie toutes les sauces.

GET /api/sauces/:id
Renvoie une sauce spécifique par ID.

POST /api/sauces
Crée une nouvelle sauce.

PUT /api/sauces/:id
Met à jour une sauce existante.

DELETE /api/sauces/:id
Supprime une sauce existante.

Images
GET /images/:nom-du-fichier
Renvoie une image stockée dans le répertoire images.

Contributeurs
[Nom du contributeur 1]

Licence
Ce projet est sous licence [nom de la licence].
