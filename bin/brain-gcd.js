#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
for (let i = 0; i < 3; i++) {
  let number1 = getRandomInt(100);
  let number2 = getRandomInt(100);
  let correctAnswer = '';
  for (let num = 1; num < 100; num++) {
    if (number1 % num === 0 && number2 % num === 0) {
      correctAnswer = num;
    }
  }
  console.log('Question: ' + number1 + ' ' + number2);
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
