function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
const rightAnswer = NOD(5, 15);
console.log(rightAnswer);
