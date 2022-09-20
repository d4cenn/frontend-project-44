import readlineSync from 'readline-sync';

const index = (rules, userData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = userData();
    console.log(`Question: ${question}`);
    const reply = readlineSync.question('Your answer: ');
    if (reply.toString() === correctAnswer.toString() && i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    }
    if (reply.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    }
    if (reply.toString() !== correctAnswer.toString()) {
      console.log(`'${reply}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      i = 3;
    }
  }
};

export default index;
