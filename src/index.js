import readlineSync from 'readline-sync';
import cli from './cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getMathOperation() {
  const possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
function checkReply(reply, correctAnswer, name, i) {
  if (reply.toString() === correctAnswer.toString() && i === 2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return i;
  }
  if (reply.toString() === correctAnswer.toString()) {
    console.log('Correct!');
    return i;
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  let a = 3;
  return a;
}
export function brainEvenGame() {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(50);
    let correctAnswer = '';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question: ${number}`);
    const reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainCalcGame() {
  const name = cli();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(50);
    const number2 = getRandomInt(50);
    let correctAnswer = '';
    const operation = getMathOperation();
    if (operation === '+') {
      correctAnswer = number1 + number2;
    } else if (operation === '-') {
      correctAnswer = number1 - number2;
    } else if (operation === '*') {
      correctAnswer = number1 * number2;
    }
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainGcdGame() {
  const name = cli();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(50);
    const number2 = getRandomInt(50);
    let correctAnswer = '';
    for (let num = 1; num < 50; num += 1) {
      if (number1 % num === 0 && number2 % num === 0) {
        correctAnswer = num;
      }
    }
    console.log(`Question: ${number1} ${number2}`);
    const reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainPrimeGame() {
  const name = cli();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(50);
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    let correctAnswer = '';
    if (primeNumbers.includes(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question: ${number}`);
    const reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainProgressionGame() {
  const name = cli();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(10);
    const progression = [];
    for (let num = 1; num < 11; num += 1) {
      progression.push(number1 + number2 * num);
    }
    const hiddenNumber = getRandomInt(10);
    const correctAnswer = progression[hiddenNumber - 1];
    progression[hiddenNumber - 1] = '..';
    console.log(`Question: ${progression[0]} ${progression[1]} ${progression[2]}
      ${progression[3]} ${progression[4]} ${progression[5]}
      ${progression[6]} ${progression[7]} ${progression[8]} ${progression[9]}`);
    const reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
