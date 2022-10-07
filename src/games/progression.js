import getRandomInt from '../utils.js';
import commonGameLogic from '../index.js';

const gameRule = 'What number is missing in the progression?';

const maxFirstNumber = 20;
const progressionLength = 10;
const maxSecondNumber = 10;
const maxHiddenNumber = 10;

const getProgression = (number1, number2) => {
  const progression = [];
  for (let num = 0; num < progressionLength; num += 1) {
    progression.push(number1 + number2 * num);
  }
  return progression;
};
const getGameData = () => {
  const number1 = getRandomInt(1, maxFirstNumber);
  const number2 = getRandomInt(1, maxSecondNumber);
  const progression = getProgression(number1, number2);
  const hiddenNumber = getRandomInt(0, maxHiddenNumber - 1);
  const correctAnswer = `${progression[hiddenNumber]}`;
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progression = () => commonGameLogic(gameRule, getGameData);

export default progression;
