# Description
This simple example demonstrates the use of webpack with a basic symfony 3 app.

## Installation
1. Install composer dependencies via `composer install`
2. Use either `yarn install` (prefered) or `npm install` to install the dependencies.
3. Run the build via `node_modules/.bin/webpack` or use the NPM script via `yarn build` or `npm run build`
4. Run the dev server via `node_modules/.bin/webpack-dev-server` or use the NPM script via `yarn start` or `npm start`
5. You can use `bin/console server:run` to run a basic webserver

## Usage
* If symfony runs on another port than 8000 you need to change that port in the proxy configuration in webpack.config.js,
example: `${req.protocol}://${req.hostname}:80`.
* Simply switch between the webpack-dev-server port (default: 8080) and normal web server port (i.e. 80) while running
the webpack-dev-server to switch between "dev mode" and "normal mode".