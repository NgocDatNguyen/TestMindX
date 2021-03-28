function findOppositeNumber(n, inputNumber) {
  if (n >= 4 && n <= 20 && inputNumber <= n - 1) {
    if (inputNumber < Math.ceil(n / 2)) {
      return inputNumber + Math.ceil(n / 2);
    } else if (inputNumber > Math.ceil(n / 2)) {
      return inputNumber - Math.ceil(n / 2);
    }
  }
}
// Test case 1
console.log(findOppositeNumber(10, 2));
// Test case 2
console.log(findOppositeNumber(10, 6));
