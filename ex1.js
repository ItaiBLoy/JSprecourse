var readlineSync = require('readline-sync');

var Name = readlineSync.question('What is your name? ');
console.log('Hello ' + Name + '!');