import { playGame } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
let rightAnswer;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const tasks = () => {
  const dividers = [];
  const randomNumber = getRandom();
  const task = randomNumber;
  for (let index = 1; index <= randomNumber / 2; index += 1) {
    if (randomNumber % index === 0) {
      dividers.push(index);
    }
  }
  if (dividers.length > 1) {
    rightAnswer = 'no';
  } else rightAnswer = 'yes';
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, tasks);
};

export default startGame;
