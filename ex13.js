let readlineSync = require('readline-sync');
let str = readlineSync.question("Please write anything\n");

str = str.replace(/[^A-Z a-z]/g, '');
let strSplit = str.split(' ');
let longest = strSplit[0];

for (let i = 0; i < strSplit.length; i++)
{
    if (strSplit[i].length > longest.length)
    {
        longest = strSplit[i];
    }
}
console.log("The longest word is", longest);