let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("Please enter a number\n");

if (n <= 1)
{
    console.log("No prime numbers under this number\nThe lowest one is actually 2\n");
}
else
{
    let isPrime = true;
    for (let i = 2; i <= n; i++)
    {
        for (let j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = false;
            }
        }
        if (isPrime == true)
        {
            console.log(i," ");
        }
        isPrime = true;
    }
}