// let sum = +prompt("Укажите стартовую сумму", 1000);
// const persent = 15;
// const result = 2000;

// let count = 0;

// const depositTerm = +prompt("Укажите срок депозита", 10);

// while (count < depositTerm) {
//   sum = sum + sum * (persent / 100);
//   count = count + 1;
//   document.write(count + ": " + sum + "<br>");
// }

const inStock = true;
const onSale = false;

const temp = 83;
const willRain = true;
const humid = willRain && temp > 80;

console.log(humid);

// const byIt = onSale && inStock; // true?

const buyIt = onSale && inStock; // false
console.log(buyIt);
