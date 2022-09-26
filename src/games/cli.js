import { playGame } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const tasks = () => {
  const randomNumber = getRandom();
  const task = randomNumber;
  const parity = task % 2;
  let rightAnswer;
  if (parity === 0) {
    rightAnswer = 'yes';
  } else rightAnswer = 'no';
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, tasks);
};
export default startGame;
