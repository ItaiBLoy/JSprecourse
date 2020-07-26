
let readlineSync = require('readline-sync');

console.log('########\nWelcome to "How Israeli are you" quiz!\n########');

function displayShuffledQuestion(question) 
{
  let shuffeledQ = question.sort(() => Math.random * (5-1) + 1);
  console.log(question[0]);
  for (let i = 1; i < 5; i++)
  {
    console.log('['+i+']', shuffeledQ[i]);
  }
  let userChoice = readlineSync.questionInt('Enter your choice: ');
  for (let i = 1; i < 5; i++)
  {
    if (shuffeledQ[userChoice] === question[i])
    {
      return i;
    }
  }
}

let counter = 0;
let numOfQuestions = 5;

const q1 = ["How much Hummus do you eat per week?", "I never eat Hummus", "Only when I go to Pinati", "There is only Hummus in my veins", "I even brush my teeth with it"];
const q2 = ["What is your favorite sport?", "Ice hockey", "Basketball", "Soccer", "Yelling at other drivers"];
const q3 = ["Who makes the best Hamin?", "Ham..waht?", "Viznitz bakery in Bnei-Brak", "My mom of course", "My mom is the only one who makes reall Hamin"];
const q4 = ["Where do you go for vacation?", "Only here in Israel", "I go to Europe", "India or South America", "Wherever I would be the only Israeli around"];
const q5 = ["What does line mean to you?", "Somthing that connect 2 points", "I have two lines in my cell phone", "It reminds me a lane, especially the left lane", "I can't stand lines"];

counter += displayShuffledQuestion(q1);
counter += displayShuffledQuestion(q2);
counter += displayShuffledQuestion(q3);
counter += displayShuffledQuestion(q4);
counter += displayShuffledQuestion(q5);

counter /= numOfQuestions;

if (counter < 2)
{
  console.log("Uncle Sam is more Israeli than you");
} 
else if (counter < 3)
{
  console.log("You might watch some Burekas movies and come back for another round");
}
else if (counter < 4)
{
  console.log("You are Israeli, but you better get a liitle more tanned");
}
else if (counter <5)
{
  console.log("Congrats! You are a proud Israeli");
}
