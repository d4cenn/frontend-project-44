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
  const amountOfOperators = 3;
  const maxNumber = 50;
  const mathOperator = getRandomInt(1, amountOfOperators);
  const number1 = getRandomInt(1, maxNumber);
  const number2 = getRandomInt(1, maxNumber);
  const question = `${number1} ${possible[mathOperator - 1]} ${number2}`;
  const correctAnswer = `${calculateAnswer(number1, number2, possible[mathOperator - 1])}`;
  return [question, correctAnswer];
};

const calc = () => index(gameRule, getGameData);

export default calc;
