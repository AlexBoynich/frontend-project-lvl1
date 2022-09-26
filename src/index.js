import readlineSync from 'readline-sync';

const rounds = 3;
const playGame = (rule, makeTasks) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rule}`);
  for (let i = 0; i < rounds; i += 1) {
    const [task, rightAnswer] = makeTasks();
    const question = `Question: ${task}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toString() !== rightAnswer.toString()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
export { rounds, playGame };
