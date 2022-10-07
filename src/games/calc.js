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
      throw new error;
  }
};

const getGameData = () => {
  const possibleMathOperators = '+-*';
  const mathOperator = getRandomInt(0, possibleMathOperators.length - 1);
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  const question = `${number1} ${possibleMathOperators[mathOperator]} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, possibleMathOperators[mathOperator])}`;
  return [question, correctAnswer];
};

const calc = () => commonGameLogic(gameRule, getGameData);

export default calc;
