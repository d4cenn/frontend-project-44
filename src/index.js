import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const index = (gameRule, getGameData) => {
  const name = greetUser();
  console.log(gameRule);
  const amountOfRounds = 3;
  for (let i = 0; i < amountOfRounds; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === correctAnswer && i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
      break;
    }
    if (reply === correctAnswer) {
      console.log('Correct!');
    }
    if (reply !== correctAnswer) {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default index;
