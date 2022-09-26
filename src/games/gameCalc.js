import { playGame } from '../index.js';
import { random } from '../helpers.js'

const getRightSign = (sign, firstNumber, secondNumber) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
      break;
    case '-':
      return firstNumber - secondNumber;
      break;
    case '*':
      return firstNumber * secondNumber;
      break;
    default:
  }
}
const rule = 'What is the result of the expression?';
const makeTasks = () => {
  const firstNumber = random(1, 99);
  const secondNumber = random(1, 99);
  const signs = ['+', '-', '*'];
  const sign = signs[random(0, signs.length - 1)];
  let rightAnswer;
  rightAnswer = getRightSign(sign, firstNumber, secondNumber);
  const task = `${firstNumber} ${sign} ${secondNumber}`;
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, makeTasks);
};

export default startGame;
