const depositAmount = 1000;
const yearRate = 15;
const depositTermInYears = 2;

function getDepositIncome(amount, rate, term) {
  let depositIncome = 0;
  let count = 0;

  while (count < depositTermInYears) {
    depositIncome = depositIncome + depositAmount * (yearRate / 100);
    count = count + 1;
  }
}
console.log(depositIncome);

// const inStock = true;
// const onSale = false;

// const temp = 83;
// const willRain = true;
// const humid = willRain && temp > 80;

// console.log(humid);

// // const byIt = onSale && inStock; // true?

// const buyIt = onSale && inStock; // false
// console.log(buyIt);

// function bark(name, weight) {
//   if (weight > 20) {
//     console.log(name + " says WOOF WOOF");
//   } else {
//     console.log(name + " says woof woof");
//   }
// }

// bark("rover", 53);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);

// function makeTea(cups, tea) {
//   console.log("Brewing " + cups + " cups of " + tea);
// }
// makeTea(3, "Earl Grey");
// makeTea(3);
// makeTea(3, "Earl Grey", "hey ma!", 42);
// makeTea("Earl Grey", 3);

// function barkAtTheMoon() {
//   console.log("Wooooooooooooo!");
// }
// barkAtTheMoon();
