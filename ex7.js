let readlineSync = require('readline-sync');
let result = 1;
let n = readlineSync.questionInt("Please enter the number you would like to calculate\n");

while (n < 0)
{
    n = readlineSync.questionInt("Please enter a positive number\n");
}

if (n > 0)
{
    for (let i = 1; i <= n; i++)
    {
        result *= i;
    }
}

console.log(n, "factoril equals to", result);

