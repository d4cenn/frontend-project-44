import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (number1, number2) => {
  const progression = [];
  for (let num = 0; num < 10; num += 1) {
    progression.push(number1 + number2 * num);
  }
  return progression;
};
const getGameData = () => {
  const maxFirstNumber = 20;
  const maxSecondNumber = 10;
  const maxHiddenNumber = 10;
  const number1 = getRandomInt(1, maxFirstNumber);
  const number2 = getRandomInt(1, maxSecondNumber);
  const progression = getProgression(number1, number2);
  const hiddenNumber = getRandomInt(1, maxHiddenNumber);
  const correctAnswer = `${progression[hiddenNumber - 1]}`;
  progression[hiddenNumber - 1] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progression = () => commonGameLogic(gameRule, getGameData);

export default progression;
