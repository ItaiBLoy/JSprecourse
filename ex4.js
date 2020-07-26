
let numOfPeople, kosher, mehadrin, preferedFood;
let readlineSync = require('readline-sync');
numOfPeople = readlineSync.question("How many people are you going with?");
if(isNaN(numOfPeople))
{
    console.log("Eror input");
    throw 'stop execution';
}
kosher = readlineSync.question("Should it be Kosher?");
if (kosher === 'y')
{
    mehadrin = readlineSync.question("should it be Kashrut Lemehadrin?");
}
else if (kosher != 'n')
{
    console.log("Eror input");
    throw 'stop execution';
}
typeOfFood = ['Falafel', 'Pizza', 'Sushi'];
preferedFood = readlineSync.keyInSelect(typeOfFood, 'What would you like to eat?');

if (numOfPeople > 9)
{
    switch (preferedFood) 
    {
        case 0:
          console.log("Go to Falafel Ofer, you will thank me later");
          break;
        case 1:
            console.log("Go to Pizza Shemesh");
          break;
        case 2:
            console.log("Go to Japanika");
          break;
    }
}
else if (kosher === 'y' && mehadrin === 'y')
{
    switch (preferedFood) 
    {
        case 0:
          console.log("Go to Falafel Ofer, you will thank me later");
          break;
        case 1:
            console.log("Go to Pizza Shemesh");
          break;
        case 2:
            console.log("Go to Japanika");
          break;
    }
}
else if (kosher === 'n')
{
    switch (preferedFood)
    {
        case 0:
          console.log("Go to Falafel Kchil");
          break;
        case 1:
            console.log("Go to Domino's Pizza");
          break;
        case 2:
            console.log("Go to Itzik Hadayag");
          break;
    }
}
