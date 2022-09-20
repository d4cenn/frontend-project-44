import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  if (primeNumbers.includes(number)) {
    return true;
  }
  return false;
};
const userData = () => {
  const number = getRandomInt(50);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const prime = () => index(rules, userData);

export default prime;
