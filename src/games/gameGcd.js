import { playGame } from '../index.js';
import random from '../helpers.js';

function getGCD(x, y) {
  if (y > x) return getGCD(y, x);
  if (!y) return x;
  return getGCD(y, x % y);
}
const rule = 'Find the greatest common divisor of given numbers.';
const makeTasks = () => {
  const firstNumber = random(1, 99);
  const secondNumber = random(1, 99);
  const task = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGCD(firstNumber, secondNumber);
  return [task, rightAnswer.toString()];
};
const startGame = () => {
  playGame(rule, makeTasks);
};
export default startGame;
