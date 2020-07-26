let readlineSync = require('readline-sync');

let n = readlineSync.questionInt("Please enter a parameter");
let array = [];
for (let i = 0; i < n; i++)
{
    array.push(Math.floor(Math.random() * 50));
}
let min = array[0];
let max = array[0];

for (let i = 1; i < n; i++)
{
    if (array[i] < min)
    {
        min = array[i];
    }
    if (array[i] > max)
    {
        max = array[i];
    }
}
console.log("min is", min);
console.log("max is", max);