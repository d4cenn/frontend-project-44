import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const userData = () => {
  const number = getRandomInt(50);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const even = () => index(rules, userData);

export default even;
