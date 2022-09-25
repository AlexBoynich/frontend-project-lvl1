import { rounds, playGame } from '../index.js';

const tasks = [];
let rightAnswer;
const getRandom = () => Math.trunc(Math.random() * 100);
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rule = 'What number is missing in the progression?';
const progression = () => {
  for (let index = 0; index <= rounds; index += 1) {
    const startNumber = getRandom();
    const diffNumber = random(1, 10);
    const randomElement = random(0, 9);
    const randomProgression = [];
    for (let i = 0; i <= 9; i += 1) {
      randomProgression[i] = startNumber + i * diffNumber;
    } rightAnswer = randomProgression[randomElement];
    randomProgression[randomElement] = '..';
    const task = randomProgression.join(' ');
    tasks.push([task, rightAnswer]);
  }
  playGame(rule, tasks);
};
export default progression;
