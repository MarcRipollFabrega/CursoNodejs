// Pàgina principal del web
// CommonJS require module forma classica de importar arxius
//const sum = require('./sum') // Carregar una sola funció del arxiu sum.js
const {sum} = require('./sum') // Carregar diferents funcions del arxiu sum.js

console.log(sum(1,2))