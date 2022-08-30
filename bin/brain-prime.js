#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is prime, otherwise answer "no".');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
for (let i = 0; i < 3; i++) {
  let number = getRandomInt(100);
  let primeNumbers = [2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71, 73,	79,	83,	89,	97];
  let correctAnswer = '';
  if (primeNumbers.includes(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log('Question: ' + number);
  let reply = readlineSync.question('Your answer: ');
  if (reply === correctAnswer && i === 2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else if (reply === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${reply}' is wrong answer ;(. Correct answer was '` + correctAnswer + `'`);
    console.log(`Let's try again, ${name}`);
    i = 3;
  }
}
