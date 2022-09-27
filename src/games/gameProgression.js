import { playGame } from '../index.js';
import random from '../helpers.js';

const makeRandomProgression = (startNumber, diffNumber) => {
  const randomProgression = [];
  const countOfProgressionNumbers = 9;
  for (let i = 0; i <= countOfProgressionNumbers; i += 1) {
    randomProgression[i] = startNumber + i * diffNumber;
  }
  return randomProgression;
};
const rule = 'What number is missing in the progression?';
const makeTasks = () => {
  let randomProgression = [];
  const startNumber = random(1, 100);
  const diffNumber = random(1, 10);
  const randomElement = random(0, 9);
  randomProgression = makeRandomProgression(startNumber, diffNumber);
  const rightAnswer = randomProgression[randomElement];
  randomProgression[randomElement] = '..';
  const task = randomProgression.join(' ');
  return [task, rightAnswer];
};
const startGame = () => {
  playGame(rule, makeTasks);
};
export default startGame;
