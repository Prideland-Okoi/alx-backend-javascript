# ES6 Promises
Project done during ALX Software Engineering Scholarship Programme 2022 at Alx Students Education. It aims to learn about Promises (how, why, and what), The await operator, How to use an async function, etc. 

<img src="https://www.freecodecamp.org/news/content/images/2020/06/Ekran-Resmi-2020-06-06-12.21.27.png" width="600px"/>

## Resources
Read or watch:
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/promises/)
* [Await][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await]
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
## Configuration
- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
 * note all user have complained of error when installed Jest and Babel. Create the configuration files first before install. i followed ALX instruction (installation first before config files created and i didn't encounter any issue)
Install Jest, Babel, and ESLint in your project directory

- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
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

</details><summary>utils.js</summary>export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}</details>

run `npm install`

## Technologies
* JavaScript transpiled using babel.js
* Tested on Ubuntu 18.04 LTS
* nodejs -v(v12.22.12), npm -v(6.14.16)

## Files
All of the following files are programs written in js:

|Filename| Description|
|----------|--------------------|
| **utils.js**                    | Utilities js                                                   |
| `0-main.js, promise.js`         | Keep every promise you make and only make promises you can keep |
| `1-main.js, 1-promise.js`       | Don't make a promise...if you know you can't keep it            |
| `2-main.js, 2-then.js`          | Catch me if you can!                                            |
| `3-main.js, 3-all.js`           | Handle multiple successful promises                             |
| `4-main.js, 4-user-promise.js`  | Simple promise                                                  |
| `5-main.js, 5-photo-reject.js`  | Reject the promises                                             |
| `6-main.js, 6-final-user.js`    | Handle multiple promises                                        |
| `7-main.js, 7-load_balancer.js` | Load balancer                                                   |
| `8-main.js, 8-try.js`           | Throw error / try catch                                         |
| `9-main.js, 9-try.js`           | Throw an error                                                  |
| `100-main.js, 100-await.js`     | Await / Async                                                   |
