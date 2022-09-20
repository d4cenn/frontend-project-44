import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'What is the result of the expression?';

const calculateAnswer = (number1, number2, operator) => {\
  let result = 0;
  if (operator === '+') {
    result = number1 + number2;
  }
  if (operator === '-') {
    result = number1 - number2;
  }
  if (operator === '*') {
    result = number1 * number2;
  }
  return result;
};
const userData = () => {
  const possible = '+-*';
  const getMathOperation = possible.charAt(Math.floor(Math.random() * possible.length));
  const number1 = getRandomInt(50);
  const number2 = getRandomInt(50);
  const question = `${number1} ${getMathOperation} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, getMathOperation)}`;
  return [question, correctAnswer];
};

const calc = () => index(rules, userData);

export default calc;
