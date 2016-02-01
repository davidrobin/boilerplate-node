#Boilerplate Node

### Pré-requis

* Installer NodeJS (et NPM de facto) : https://nodejs.org/en/download/package-manager/
* Mettre à jour NPM : https://docs.npmjs.com/getting-started/installing-node

### Installation

* ``npm install`` à lancer dans le répertoire racine pour installer tous les composants.

### Commandes

* ``npm run live`` à lancer dans le répertoire racine pour exécuter l'application et voir les modifications apportées sans devoir recharger la page. Cette commande lance les commandes *build* et *start* en amont de *browser-sync* et *rerun-script* qui surveillent les changements.

* ``npm run build`` à lancer dans le répertoire racine pour compiler le **CSS** et **JavaScript** minifiés et concaténés de l'application dans un nouveau répertoire **dist** (en effaçant l'ancien).

* ``npm run start`` à lancer dans le répertoire racine pour exécuter l'application seule sur le port 9000.

### Utilisation

* **CSS** : utilisation recommandée du langage **SASS**, dans le répertoire **/src/scss** avec par défaut le fichier **boilerplate.scss** et le fichier **style.scss**. http://sass-lang.com/guide

* **JavaScript** : dans le répertoire **/src/js**, fichier **script.js** par défaut.

* **Assets** : dans le répertoire **/src/assets**, positionner les fichiers à copier tels quels (Ex : SVG, WebFonts...). Si besoin, créer ce répertoire.

* **Views** : dans le répertoire **/views**, avec par défaut un fichier **home.hbs**, ainsi que **header.hbs** et **footer.hbs** dans le dossier **/views/partials**.

* **Routes** :
Par défaut une seule route à la racine, qui interprète le template **home.hbs**. Pour créer de nouvelles routes, il faut les ajouter dans le fichier **/config/routes.js**.
http://expressjs.com/en/guide/routing.html#express-router

### Composants utilisés

#### Production

* **Express** : le serveur simplifié sous NodeJS pour gérer l'applicatif au global dont les routes, les views.
http://expressjs.com/

* **Express Handlebars** : le moteur de templates **Handlebars** qui  fonctionne sous Express. https://github.com/ericf/express-handlebars, http://handlebarsjs.com/

* **body-parser** : un middleware Express qui permet d'interpréter les variables envoyées en GET, POST...
https://github.com/expressjs/body-parser

#### Développement

* **Browsersync** : utilitaire qui permet de voir les changements effectués en live sans recharger le navigateur et qui fournit une IP externe pour tester le rendu sur différents appareils.
https://www.browsersync.io/

* **Nodemon** : lance l'application, surveille les changements de celle-ci et relance l'application si nécessaire.
https://github.com/remy/nodemon

* **Node-sass** : convertit le langage SASS en pur CSS.
https://github.com/sass/node-sass

* **postcss-cli & autoprefixer** : analyse le CSS et ajoute les préfixes propriétaires relatifs à chaque navigateur.
https://github.com/postcss/postcss, https://github.com/code42day/postcss-cli, https://github.com/postcss/autoprefixer

* **clean-css** : minifie et concatène le CSS en un seul fichier.
https://github.com/jakubpawlowicz/clean-css

* **JSHint** : vérifie la conformité du code JavaScript.
https://github.com/jshint/jshint

* **UglifyJS** : minifie et concatène le JavaScript en un seul fichier.
https://github.com/mishoo/UglifyJS2

* **rerun-script** : surveille les changements sur les fichiers SCSS et JS dans le répertoire **/src** et lance la compilation CSS ou JS nécessaire.
https://github.com/wilmoore/rerun-script

* **colors** : permet d'ajouter simplement des couleurs sur le texte de la console.
https://github.com/marak/colors.js/