import { rounds, game } from '../index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const tasks = [];
const dividers = [];
let rightAnswer;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const playBrainPrime = () => {
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandom();
    const task = randomNumber;
    for (let index = 1; index <= randomNumber / 2; index += 1) {
      if (randomNumber % index === 0) {
        dividers.push(index);
      }
    }
    if (dividers.length > 1 && dividers.length !== 0) {
      rightAnswer = `no`;
    } else rightAnswer = `yes`;
    tasks.push([task, rightAnswer]);
  }
  game(rule, tasks);
};

export default playBrainPrime;
