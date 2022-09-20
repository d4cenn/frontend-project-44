import getRandomInt from '../utils.js';
import index from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (number1, number2) => {
  const progression = [];
  for (let num = 1; num < 11; num += 1) {
    progression.push(number1 + number2 * num);
  }
  return progression;
};
const userData = () => {
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(10);
  const progression = getProgression(number1, number2);
  let hiddenNumber = getRandomInt(10);
  while (hiddenNumber === 0) {
    hiddenNumber = getRandomInt(10);
  }
  const correctAnswer = `${progression[hiddenNumber - 1]}`;
  progression[hiddenNumber - 1] = '..';
  const question = `${progression[0]} ${progression[1]} ${progression[2]} ${progression[3]} ${progression[4]} ${progression[5]} ${progression[6]} ${progression[7]} ${progression[8]} ${progression[9]}`;
  return [question, correctAnswer];
};

const progression = () => index(rules, userData);

export default progression;
