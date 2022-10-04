import getRandomInt from '../utils.js';
import index from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculateAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return undefined;
  }
};

const getGameData = () => {
  const possible = '+-*';
  const maxNumber = 50;
  const mathOperator = possible.charAt(getRandomInt(1, possible.length));
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  const question = `${number1} ${mathOperator} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, mathOperator)}`;
  return [question, correctAnswer];
};

const calc = () => index(gameRule, getGameData);

export default calc;
