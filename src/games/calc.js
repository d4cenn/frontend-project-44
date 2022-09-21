import getRandomInt from '../utils.js';
import index from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculateAnswer = (number1, number2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return false;
  }
};

const gameData = () => {
  const possible = '+-*';
  const mathOperator = possible.charAt(Math.floor(Math.random() * possible.length));
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const question = `${number1} ${mathOperator} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, mathOperator)}`;
  return [question, correctAnswer];
};

const calc = () => index(gameRule, gameData);

export default calc;
