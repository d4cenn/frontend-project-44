import getRandomInt from '../utils.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const maxNumber = 50;

const getGcd = (number1, number2) => {
  let num = Math.max(number1, number2);
  for (num; num > 0; num -= 1) {
    if (number1 % num === 0 && number2 % num === 0) {
      return num;
    }
  }
  return num;
};

const getGameData = () => {
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${getGcd(number1, number2)}`;
  return [question, correctAnswer];
};

export default () => runGame(gameRule, getGameData);
