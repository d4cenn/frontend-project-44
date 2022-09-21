import getRandomInt from '../utils.js';
import index from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (number1, number2) => {
  const progression = [];
  for (let num = 0; num < 10; num += 1) {
    progression.push(number1 + number2 * num);
  }
  return progression;
};
const gameData = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 10);
  const progression = getProgression(number1, number2);
  const hiddenNumber = getRandomInt(1, 10);
  const correctAnswer = `${progression[hiddenNumber - 1]}`;
  progression[hiddenNumber - 1] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progression = () => index(gameRule, gameData);

export default progression;
