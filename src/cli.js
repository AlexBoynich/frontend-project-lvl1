import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
export const userNameCli = readlineSync.question('May I have your name?: ');
const userGreeting = () => {
  return `Hello, ${userNameCli}!`;
};
export default userGreeting;
