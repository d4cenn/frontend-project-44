import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'Answer "yes" if the number is prime. Otherwise answer "no".';

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
  const maxNumber = 50;
  const number = getRandomInt(1, maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const prime = () => commonGameLogic(gameRule, getGameData);

export default prime;
