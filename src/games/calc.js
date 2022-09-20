import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'What is the result of the expression?';

const calculateAnswer = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }
}
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
