import { playGame } from '../index.js';
import random from '../helpers.js';

const getRightExpression = (sign, firstNumber, secondNumber) => {
  let result;
  switch (sign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
  }
  return result;
};
const rule = 'What is the result of the expression?';
const makeTasks = () => {
  const firstNumber = random(1, 99);
  const secondNumber = random(1, 99);
  const signs = ['+', '-', '*'];
  const sign = signs[random(0, signs.length - 1)];
  const rightAnswer = getRightExpression(sign, firstNumber, secondNumber);
  const task = `${firstNumber} ${sign} ${secondNumber}`;
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, makeTasks);
};

export default startGame;
