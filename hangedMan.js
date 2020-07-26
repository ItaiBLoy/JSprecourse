let figlet = require('figlet');
let randomWords = require('random-words');
let readlineSync = require('readline-sync');

function replaceAt(string, index, replace) 
{
    return string.substring(0, index) + replace + string.substring(index + 1);
}
console.log(figlet.textSync('Hang man!', {
    font: 'ANSI shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 200,
    whitespaceBreak: true
}));

let word = randomWords();
let attempts = 10;
let shownWord = '';
let guess;
let regExLettersOnly = /[a-zA-Z]/;
let goodGuess;

    

    for (let i = 0; i < word.length; i++)
    {
        shownWord = shownWord.concat('*');
    }
    
    while (attempts >= 1)
    {
        goodGuess = false;
        console.log ('You have', attempts, 'guesses');
        console.log('The word is:');
        console.log(shownWord);
        guess = readlineSync.question('What is your guess? (press 1 if you want to guess the complete word)\n');
        guess = guess.toLocaleLowerCase();
        if (guess === '1')
        {
            guess = readlineSync.question('Alright, go for it:\n');
            if (guess === word)
            {
                console.log(figlet.textSync('Well done!', {
                    font: 'Electronic',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 200,
                    whitespaceBreak: true
                }));
                break;
            }
            else
            {
                console.log('Nice try, but that is not my word');
                attempts --;
                continue;
            }
        }

        while (guess.length > 1 || !regExLettersOnly.test(guess))
        {
            if (guess === '1')
            {
                guess = readlineSync.question('Alright, go for it:\n');
            if (guess === word)
            {
                console.log(figlet.textSync('Well done!', {
                    font: 'Electronic',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 200,
                    whitespaceBreak: true
                }));
                break;
            }
            else
            {
                console.log('Nice try, but that is not my word');
                attempts --;
                break;
            }
            }
            if (guess.length > 1)
            {
                guess = readlineSync.question('Please enter only one character\n');
            }
            else
            {
                guess = readlineSync.question('Please enter only one English letter (or 1 if you want to guess the complete word)\n');
            }
            
        }
        
        for (let i = 0; i < word.length; i++)
        {
            if (guess === word[i])
            {
                shownWord = replaceAt(shownWord, i, guess);
                goodGuess = true;
            }
        }
        if (goodGuess === false)
        {
            attempts --;
        }
        if (shownWord === word)
        {
            console.log(figlet.textSync('Well done!', {
                font: 'Electronic',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 200,
                whitespaceBreak: true
            }));
            break;
        }


    }
    if (attempts === 0)
    {
        console.log(figlet.textSync('Game over!', {
            font: 'Bloody',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 200,
            whitespaceBreak: true
        }));
    }
