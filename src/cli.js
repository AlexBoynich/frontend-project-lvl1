import readlineSync from 'readline-sync';

export const answerQuestion = readlineSync.question('May I have your name?: ');
export const userGreeting = (name) => {
  console.log(`Hello, ${name}!`);
};
