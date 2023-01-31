# 0x03. ES6  Data Management
Project done during ALX Software Engineering Scholarship Programme 2022 at Alx Students Education. It aims to learn about How to use map, filter and reduce on arrays, Typed arrays, The Set, Map, and Weak link data structures, etc. 

<img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg" width="600px"/>

## Resources
Read or watch:
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
* [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

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
| **0-main.js, 0-get_list_students.js**    | Basic list of objects    |
| **1-main.js, 1-get_list_student_ids.js** | More mapping             |
| **2-main.js, 2-get_students_by_loc.js**  | Filter                   |
| **3-main.js, 3-get_ids_sum.js**          | Reduce                   |
| **4-main.js, 4-update_grade_by_city.js** | Combine                  |
| **5-main.js, 5-typed_arrays.js**         | Typed Arrays             |
| **6-main.js, 6-set.js**                  | Set data structure       |
| **7-main.js, 7-has_array_values.js**     | More set data structure  |
| **8-main.js, 8-clean_set.js**            | Clean set                |
| **9-main.js, 9-groceries_list.js**       | Map data structure       |
| **10-main.js, 10-update_uniq_items.js**  | More map data structure  |
| **100-main.js, 100-weak.js**             | Weak link data structure |
