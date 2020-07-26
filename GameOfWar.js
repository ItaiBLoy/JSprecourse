let readlineSync = require('readline-sync');
function playAgainstComp(money)
    {
        let bet = readlineSync.questionInt("Place your bet - 1 -"+money+": ");
        if (bet > money || bet < 0)
        {
            throw 'You are wasting my time. Goodbye!';
        }
        let suites = ['\u2660', '\u2663', '\u2665', '\u2666'];
        let userCard = Math.floor(Math.random() * (12 - 1) + 1);
        let compCard = Math.floor(Math.random() * (12 - 1) + 1);
        let userSuite = suites[Math.floor(Math.random() * suites.length)];
        let compSuite = suites[Math.floor(Math.random() * suites.length)];
        while (userCard == compCard)
        {
            userCard = Math.floor(Math.random() * (12 - 1) + 1);
            compCard = Math.floor(Math.random() * (12 - 1) + 1);
        }
        console.log("Your card is", userCard+userSuite, "and my card is", compCard+compSuite);
        if (userCard > compCard)
        {
            money += bet;
            console.log("You earned", bet, "and now you have", money);
        }
        else
        {
            money -= bet;
            console.log("You lost", bet, "and now you have", money);
        }
        if (money <= 0)
        {
            throw 'You got bankrupt, bye bye...';
        }
        else
        {
            console.log("Now you have", money);
            return money;
        }
    }

    function playAgainstfriend(money, _name1, _name2)
    {
        let bet1 = readlineSync.questionInt(_name1+", place your bet - 1 -"+money[0]+": ");
        if (bet1 > money[0] || bet1 < 0)
        {
            throw 'You are wasting my time. Goodbye!';
        }
        let bet2 = readlineSync.questionInt(_name2+", place your bet - 1 -"+money[1]+": ");
        if (bet2 > money[1] || bet2 < 0)
        {
            throw 'You are wasting my time. Goodbye!';
        }
        let suites = ['\u2660', '\u2663', '\u2665', '\u2666'];
        let user1Card = Math.floor(Math.random() * (12 - 1) + 1);
        let user2Card = Math.floor(Math.random() * (12 - 1) + 1);
        let user1Suite = suites[Math.floor(Math.random() * suites.length)];
        let user2Suite = suites[Math.floor(Math.random() * suites.length)];
        while (user1Card == user2Card)
        {
            user1Card = Math.floor(Math.random() * (12 - 1) + 1);
            user2Card = Math.floor(Math.random() * (12 - 1) + 1);
        }
        console.log(_name1+"'s card is", user1Card+user1Suite, "and", _name2+"'s card is", user2Card+user2Suite);
        if (user1Card > user2Card)
        {
            money[0] += bet1;
            money[1] -= bet2
            console.log("Now", _name1, "has", money[0], "and", _name2, "has", money[1]);
        }
        else
        {
            money[0] -= bet1;
            money[1] += bet2;
            console.log("Now", _name1, "has", money[0], "and", _name2, "has", money[1]);
        }
        if (money[0] <= 0)
        {
            throw 'Player 1, you got bankrupt, bye bye...';
        }
        if (money[1] <= 0)
        {
            throw 'Player 2, you got bankrupt, bye bye...';
        }
            return money;
    }
console.log("////////--------Welcome to war--------\\\\\\\\");
let name1 = readlineSync.question("Please enter your name: ");
let player1Money = 50;
console.log("Hello",name1+", you currently have 50 dollars");
let players = readlineSync.questionInt("So what would you like to do today?\n1.Play with me (Only if you are brave enough)\n2.Play against your friend\n");
while (players != 1 && players != 2)
{
    players = readlineSync.question("Stay in focus mate:\n1 - for playing with me, or 2 - for adding a friend\n");
}
if (players === 1)
{
    console.log("Alright", name1+". Let's get down to business\n");
    player1Money = playAgainstComp(player1Money);
    let anotherRound = readlineSync.questionInt("What's next?\n1. Play another round\n2. Leave with my money:)\n");
    while (anotherRound != 1 && anotherRound != 2)
    {
        anotherRound = readlineSync.questionInt("Stay in focus mate:\n1 - for playing another round, or 2 - for being a coward\n");
    }
    while (anotherRound === 1)
    {
        player1Money = playAgainstComp(player1Money);
        anotherRound = readlineSync.questionInt("What would you like to do?\n1. Play another round\n2.Leave with my money:)\n");
        while (anotherRound != 1 && anotherRound != 2)
        {
            anotherRound = readlineSync.questionInt("Stay in focus mate:\n1 - for playing another round, or 2 - for being a coward\n");
        }
    }
    if (anotherRound == 2)
    {
        throw 'You better start running';
    }
}
else if (players == 2)
{
    let name2 = readlineSync.question("Hello friend. What's your name?\n");
    console.log("Welcome", name2);
    let money = [50, 50];
    money = playAgainstfriend(money, name1, name2);
    let anotherRound = readlineSync.questionInt("What would you guys like to do?\n1. Play another round\n2. Leave as friends:)\n");
    while (anotherRound != 1 && anotherRound != 2)
{
    anotherRound = readlineSync.questionInt("Stay in focus mates:\n1 - for playing another round, or 2 - for ending this game\n");
}
    while (anotherRound === 1)
    {
        money = playAgainstfriend(money, name1, name2);
        anotherRound = readlineSync.questionInt("What would you guys like to do?\n1. Play another round\n2. Leave as friends:)\n");
        while (anotherRound != 1 && anotherRound != 2)
        {
            anotherRound = readlineSync.questionInt("Stay in focus mates:\n1 - for playing another round, or 2 - for ending this game\n");
        }
    }
    if (anotherRound === 2)
    {
        throw 'See you again folks';
    }
}



