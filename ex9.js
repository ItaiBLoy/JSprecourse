let readlineSync = require('readline-sync');
let str = readlineSync.question("Howaya mate?\n");
str = str.replace(/ /g, "*");
console.log(str);