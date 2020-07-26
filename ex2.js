function equals10()
{
    let readlineSync = require('readline-sync'),
    num1 = parseInt(readlineSync.question('Please enter the first number ')),
    num2 = parseInt(readlineSync.question('Please enter the second number '));
    
    
    if (num1 + num2 === 10)
    {
        console.log('Makes 10');
    }   
    else
    {
        console.log('Nope');
    }
}
