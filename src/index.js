import readlineSync from 'readline-sync';

const game = (rule, tasks) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rule}`);
  const result = 'Correct!';
  for (let i = 0; i < 3 && result === 'Correct!'; i += 1) {
    const [task, rightAnswer] = tasks[i];
    const question = `Question: ${task}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  return `Congratulations, ${userName}!`;
};
export default game;
