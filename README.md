# node_js_exploration
In back_end folder create config with .js file. For example :

const user = 'xxx';
const password = 'yyy';

module.exports = {
  url: `mongodb://${user}:${password}@mongoAdress/jakasbaza`
}

run app :
npm i npm start in the root folder and next npm i npm start in the front_end folder.