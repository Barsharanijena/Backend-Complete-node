const lodash = require('lodash');

const name = ['josh' , 'sangam'];
const capitalize = lodash.map(name,lodash.capitalize);
console.log(capitalize)