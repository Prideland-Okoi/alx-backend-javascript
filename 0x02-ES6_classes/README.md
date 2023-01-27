# ES6 Promises
Project done during ALX Software Engineering Scholarship Programme 2022 at Alx Students Education. It aims to learn about Class, How to add methods to a class, Why and how to add a static method to a class, How to extend a class from another, Metaprogramming and symbols, etc. 

<img src="https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png" width="600px"/>

## Resources
Read or watch:
* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Configuration
- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
 * note all user have complained of error when installed Jest and Babel. Create the configuration files first before install. i followed ALX instruction (installation first before config files created and i didn't encounter any issue)
Install Jest, Babel, and ESLint in your project directory

- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- npm install --save-dev eslint

## Configuration files
<details><summary>package.json</summary>
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

<details><summary>babel.config.js</summary>module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};</details>
<details><summary>.eslintrc.js</summary>module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};</details>


run `npm install`

## Technologies
* JavaScript transpiled using babel.js
* Tested on Ubuntu 18.04 LTS
* nodejs -v(v12.22.12), npm -v(6.14.16)

## Files
All of the following files are programs written in js:

|Filename| Description|
|----------|--------------------|

