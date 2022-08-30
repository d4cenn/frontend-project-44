#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
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
