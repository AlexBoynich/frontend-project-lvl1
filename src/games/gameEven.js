import { playGame } from '../index.js';
import { random } from '../helpers.js'

const isNumberParity = (number) => number % 2 === 0;
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const makeTasks = () => {
  const randomNumber = random(1, 99);
  const task = randomNumber;
  let rightAnswer = isNumberParity(randomNumber) ? 'yes' : 'no';
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, makeTasks);
};
export default startGame;
