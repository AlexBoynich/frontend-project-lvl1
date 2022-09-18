import { rounds, game } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
const rule = 'Find the greatest common divisor of given numbers.';
const tasks = [];
const playBrainNOD = () => {
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandom();
    const secondNumber = getRandom();
    const task = `${firstNumber}  ${secondNumber}`;
    const rightAnswer = NOD(firstNumber, secondNumber);
    tasks.push([task, rightAnswer]);
  } return game(rule, tasks);
};
export default playBrainNOD;
