# ECMAScript 6 - Basic
<img src="https://media.sitepen.com/blog-images/2016/04/es6_symbols_header-1-1024x672.png" width="600px"/>

## Resources
Read or watch:

* [ECMAScript 6 - ECMAScript 2015]()
* [Statements and declarations]()
* [Arrow functions]()
* [Default parameters]()
* [Rest parameter]()
* [Javascript ES6 — Iterables and Iterators]()

## Configuration
- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- npm install --save-dev eslint

## Configuration files
- package.json
<details><summary>click to see code</summary>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</details>
- babel.config.js
- .eslintrc.js

run `npm install`
