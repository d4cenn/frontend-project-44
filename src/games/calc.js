import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'What is the result of the expression?';

const maxNumber = 50;

const calculateAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Such Math operator does not exist');
  }
};

const getGameData = () => {
  const possibleMathOperators = '+-*';
  const getMathOperator = getRandomInt(0, possibleMathOperators.length - 1);
  const mathOperator = possibleMathOperators[getMathOperator];
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  const question = `${number1} ${mathOperator} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, mathOperator)}`;
  return [question, correctAnswer];
};

export default () => commonGameLogic(gameRule, getGameData);
