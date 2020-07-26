let readlineSync = require('readline-sync');
let str = readlineSync.question("Please write anything\n");

let re = /[^A-Za-z0-9]/g;
str = str.toLowerCase().replace(re, '');
let isPalindrom = true;
for (var i = 0; i < str.length/2; i++) 
{
   if (str[i] !== str[str.length - 1 - i]) 
   {
       isPalindrom = false;
   }
}
if (isPalindrom === true)
{
    console.log("That was a plaindrom!");
}
else
{
    console.log("That was NOT a palindrom");
}