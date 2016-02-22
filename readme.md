#Boilerplate Node

### Requirements

* Install NodeJS (and NPM) : https://nodejs.org/en/download/package-manager/
* Update NPM : https://docs.npmjs.com/getting-started/installing-node

### Installation

* ``npm install`` to execute in the main folder to install all needed dependencies.

### Commands

* ``npm run live`` to execute in the main folder to launch application and watch live changes without having to reload page manually. This command launches *build* and *start* commands before *browser-sync* and *rerun-script* which is watching changes.

* ``npm run build`` to execute in the main folder to compile minified and concatenated **CSS** and **JavaScript** of the application in a new folder **dist** (deleting old one).

* ``npm run start`` to execute in the main folder to launch application alone on 9000 port.

### Usage

* **CSS** : **SASS** language recommended, in **/src/scss** folder with **boilerplate.scss** which uses a minimalist grid system and **style.scss** to write your own SASS/CSS. http://sass-lang.com/guide

* **JavaScript** : in **/src/js** folder, **script.js** default file.

* **Assets** : in **/src/assets** folder, move there your assets (ex : SVG, WebFonts...).

* **Views** : in **/views** folder, with **home.hbs** default homepage, with **header.hbs** and **footer.hbs** in **/views/partials** folder.

* **Routes** :
By default, one route is set, working with **home.hbs**. To create new routes, add them to **/config/routes.js**.
http://expressjs.com/en/guide/routing.html#express-router

### Dependencies

#### Production

* **Express** : simplified server powered by NodeJS, to manage global app, routes and views.
http://expressjs.com/

* **Express Handlebars** : **Handlebars** templates renderer, working with Express. https://github.com/ericf/express-handlebars, http://handlebarsjs.com/

* **body-parser** : Express middleware to reach variables such as GET, POST...
https://github.com/expressjs/body-parser

#### Development

* **Browsersync** : powerful tool which bring live reload to browser and add an external IP on local network to test app on different devices.
https://www.browsersync.io/

* **Nodemon** : launch app, watch app changes and reload app if necessary.
https://github.com/remy/nodemon

* **Node-sass** : convert SASS language into CSS.
https://github.com/sass/node-sass

* **postcss-cli & autoprefixer** : analyze CSS and add proprietary prefixes relatives to each major browser.
https://github.com/postcss/postcss, https://github.com/code42day/postcss-cli, https://github.com/postcss/autoprefixer

* **clean-css** : minify and concat CSS into one file.
https://github.com/jakubpawlowicz/clean-css

* **JSHint** : check conformity of JavaScript code.
https://github.com/jshint/jshint

* **UglifyJS** : minify and concat JavaScript into one file.
https://github.com/mishoo/UglifyJS2

* **rerun-script** : watch changes in **/src** folder and run necessary tasks.
https://github.com/wilmoore/rerun-script

* **colors** : simply add colors to console.
https://github.com/marak/colors.js/
