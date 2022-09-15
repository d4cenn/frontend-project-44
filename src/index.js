import readlineSync from 'readline-sync';
import cli from "../src/cli.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getMathOperation() {
  let possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
function checkReply(reply, correctAnswer, name, i) {
  if (reply == correctAnswer && i === 2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return i;
  } else if (reply == correctAnswer) {
    console.log('Correct!');
    return i;
  } else {
    console.log(`'${reply}' is wrong answer ;(. Correct answer was '` + correctAnswer + `'`);
    console.log(`Let's try again, ${name}!`);
    return i = 3;
  }
}
export function brainEvenGame() {
  let name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    let number = getRandomInt(50);
    let correctAnswer = '';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log('Question: ' + number);
    let reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainCalcGame() {
  let name = cli();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    let number1 = getRandomInt(50);
    let number2 = getRandomInt(50);
    let correctAnswer = '';
    let operation = getMathOperation();
    if (operation === '+') {
      correctAnswer = number1 + number2;
    } else if (operation === '-') {
      correctAnswer = number1 - number2;
    } else if (operation === '*') {
      correctAnswer = number1 * number2;
    }
    console.log('Question: ' + number1 + ' ' + operation + ' ' + number2);
    let reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainGcdGame() {
  let name = cli();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i++) {
    let number1 = getRandomInt(50);
    let number2 = getRandomInt(50);
    let correctAnswer = '';
    for (let num = 1; num < 50; num++) {
      if (number1 % num === 0 && number2 % num === 0) {
        correctAnswer = num;
      }
    }
    console.log('Question: ' + number1 + ' ' + number2);
    let reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainPrimeGame() {
  let name = cli();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    let number = getRandomInt(50);
    let primeNumbers = [2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71, 73,	79,	83,	89,	97];
    let correctAnswer = '';
    if (primeNumbers.includes(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log('Question: ' + number);
    let reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
export function brainProgressionGame() {
  let name = cli();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i++) {
    let number1 = getRandomInt(20);
    let number2 = getRandomInt(10);
    let progression = [];
    for (let num = 1; num < 11; num++) {
      progression.push(number1 + number2 * num);
    }
    let hiddenNumber = getRandomInt(10);
    let correctAnswer = progression[hiddenNumber - 1];
    progression[hiddenNumber - 1] = '..';
    console.log('Question: ' + progression[0] + ' ' + progression[1] + ' ' + progression[2] + ' ' + progression[3] + ' ' + progression[4] + ' ' + progression[5] + ' ' + progression[6] + ' ' + progression[7] + ' ' + progression[8] + ' ' + progression[9]);
    let reply = readlineSync.question('Your answer: ');
    i = checkReply(reply, correctAnswer, name, i);
  }
}
