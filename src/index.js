import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const index = (gameRule, gameData) => {
  const name = userGreeting();
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply === correctAnswer && i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else if (reply === correctAnswer) {
      console.log('Correct!');
    } else if (reply !== correctAnswer) {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default index;
