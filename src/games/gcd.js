import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let greatestDivisor = 0;
  for (let num = 1; num < 50; num += 1) {
    if (number1 % num === 0 && number2 % num === 0) {
      greatestDivisor = num;
    }
  }
  return greatestDivisor;
};

const userData = () => {
  const number1 = getRandomInt(50);
  const number2 = getRandomInt(50);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return [question, correctAnswer];
};

export default () => index(rules, userData);
