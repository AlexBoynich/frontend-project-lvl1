import { playGame } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rule = 'What is the result of the expression?';
const tasks = () => {
  const firstNumber = getRandom();
  const secondNumber = getRandom();
  const signs = ['+', '-', '*'];
  const sign = signs[random(0, signs.length - 1)];
  let rightAnswer;
  switch (sign) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
  }
  const task = `${firstNumber} ${sign} ${secondNumber}`;
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, tasks);
};

export default startGame;
