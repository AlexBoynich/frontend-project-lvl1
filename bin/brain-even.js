import readlineSync from 'readline-sync';
import userGreeting, { userNameCli } from '../src/cli.js';

console.log(userGreeting());
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numberParity = () => {
  let checkUserAnswer = 'Correct!';
  for (let i = 0;
    i <= 2 && checkUserAnswer === 'Correct!';
    console.log(checkUserAnswer)) {
    let randomNumber = Math.trunc(Math.random() * 100);
    const userParityAnswer = readlineSync.question(`Question: ${randomNumber}\n Your answer: `);
    if ((randomNumber % 2 === 0 && userParityAnswer === 'yes') || (randomNumber % 2 !== 0 && userParityAnswer === 'no')) {
      checkUserAnswer = 'Correct!';
      i += 1;
      randomNumber = Math.trunc(Math.random() * 100);
    } else {
      checkUserAnswer = '';
      return `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userNameCli}!`;
    } if (i === 3 && checkUserAnswer === 'Correct!') {
      return `Correct!\nCongratulations, ${userNameCli}!`
    }
  }
};
console.log(numberParity());
