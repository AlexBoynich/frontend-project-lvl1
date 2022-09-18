import { rounds, game } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rule = 'What is the result of the expression?';
const playBrainCalc = () => {
  const tasks = [];
  for (let i = 0; i <= rounds; i += 1) {
    const firstNumber = getRandom();
    const secondNumber = getRandom();
    const signs = ['+', '-', '*'];
    const sign = signs[random(0, 2)];
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
    const task = `${firstNumber}${sign}${secondNumber}`;
    tasks.push([task, rightAnswer]);
  } return game(rule, tasks);
};

export default playBrainCalc;
