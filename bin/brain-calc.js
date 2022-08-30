#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getMathOperation() {
  let possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
for (let i = 0; i < 3; i++) {
  let number1 = getRandomInt(100);
  let number2 = getRandomInt(100);
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
  if (reply == correctAnswer && i === 2) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else if (reply == correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${reply}' is wrong answer ;(. Correct answer was '` + correctAnswer + `'`);
    console.log(`Let's try again, ${name}`);
    i = 3;
  }
}
