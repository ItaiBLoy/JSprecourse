let readlineSync = require('readline-sync');
let choice = readlineSync.questionInt("please choose a number larger than 10\n");

while (choice <= 10)
{
    choice = readlineSync.questionInt("please choose a number LARGER than 10\n");
}
console.log("Thank you!");
