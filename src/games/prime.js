import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 50;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomInt(1, maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => commonGameLogic(gameRule, getGameData);
