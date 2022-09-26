import { playGame } from '../index.js';
import random from '../helpers.js';

const isNumberSimple = (number) => {
  for (let index = 2; index <= number / 2; index += 1) {
    if (number % index === 0) {
      return false;
    }
  } return true;
};
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeTasks = () => {
  const randomNumber = random(2, 99);
  const task = randomNumber;
  const rightAnswer = isNumberSimple(randomNumber) ? 'yes' : 'no';
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, makeTasks);
};

export default startGame;
