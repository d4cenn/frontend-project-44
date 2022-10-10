import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const commonGameLogic = (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  const amountOfRounds = 3;
  for (let i = 0; i < amountOfRounds; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === correctAnswer) {
      console.log('Correct!');
    }
    if (reply !== correctAnswer) {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default commonGameLogic;
