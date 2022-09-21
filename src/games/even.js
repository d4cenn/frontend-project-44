import getRandomInt from '../utils.js';
import index from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const gameData = () => {
  const number = getRandomInt(1, 50);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const even = () => index(gameRule, gameData);

export default even;
