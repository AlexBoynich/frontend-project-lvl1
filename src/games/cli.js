import { rounds, game } from '../index.js';

const tasks = [];
const getRandom = () => Math.trunc(Math.random() * 100);
const rule = 'Answer "yes" if the number is even, otherwise answer "no"';
const playBrainEven = () => {
  for (let i = 0; i <= rounds; i += 1) {
    const randomNumber = getRandom();
    const task = randomNumber;
    const parity = task % 2;
    let rightAnswer;
    if (parity === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';
    tasks.push([task, rightAnswer]);
  }
  return game(rule, tasks);
};
export default playBrainEven;
