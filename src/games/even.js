import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getGameData = () => {
  const maxNumber = 50;
  const number = getRandomInt(1, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const even = () => commonGameLogic(gameRule, getGameData);

export default even;
