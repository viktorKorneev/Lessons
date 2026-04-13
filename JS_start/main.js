// const depositAmount = 1000;
// const yearRate = 15;
// const depositTermInYears = 2;

// function wrapper() {
//   function getDepositIncome(amount, rate, term) {
//     let depositIncome = 0;
//     let count = 0;

//     while (count < term) {
//       depositIncome = depositIncome + amount * (rate / 100);
//       count = count + 1;
//     }
//     return depositIncome;
//   }
//   const income_1 = getDepositIncome(
//     depositAmount,
//     yearRate,
//     depositTermInYears,
//   );
//   console.log(income_1);
// }
// wrapper()

// const depositIncome_2 = getDepositIncome(1500, 16, 3);
// const totalIncome = depositIncome_1 + depositIncome_2;

// console.log(totalIncome);

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

// const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

// console.log(scores[0]);
// console.log(scores[2]);

// const pets = ["dog", "cat", "rat"];

// console.log(pets[2]);
// console.log(pets[3]);

// console.log(pets.length);
// console.log(scores.length);

// pets[2] = "parrot";
// console.log(pets);
// console.log(scores);

// function getRandomElement(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

//   const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
//   const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
//   const words3 = ["морковку", "макароны", "косточку"];
//   const words4 = ["Мой хомяк", "Моя крыса", "Мой енот"];

// function makePhrases(param1, param2, param3) {
//   const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3);
//   return result;
// }

// alert(makePhrases(words4, words2, words3));

// const scores = [
//   60, 50, 60, 58, 54, 54, 59, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
//   64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 17, 41, 53, 55, 61, 51, 44,
// ];

// const costs = [
//   0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
//   0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
//   0.3, 0.25, 0.24, 0.25, 0.25, 0.27, 0.26, 0.29,
// ];

// let i = 0;

// while (i < scores.length) {
//   output = "Bubble solution #" + i + " score: " + scores[i];
//   console.log(output);

//   i = i + 1;
// }
// const highScore = printAndGetHighScore(scores);
// let minScore = 0;

// console.log("Bubbles tests: " + scores.length);
// console.log("Highest with highest score: " + highScore);

// function printAndGetHighScore(array) {
//   let output;
//   let highScore = 0;
//   for (let i = 0; i < array.length; i++) {
//     output = "Bubble solution #" + i + " score: " + array[i];
//     console.log(output);
//     if (highScore < array[i]) {
//       highScore = array[i];
//     }
//   }
//   return highScore;
// }

// for (let i = 0; i < scores.length; i++) {
//   if (highScore > scores[i]) {
//     highScore = scores[i];
//     minScore = highScore;
//   }
// }

// console.log("Min score: " + minScore);

// function getBestScores(array, maxValue) {
//   const bestSolutions = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === maxValue) {
//       bestSolutions.push(i);
//     }
//   }
//   return bestSolutions;
// }

// const bestSolutions = getBestScores(scores, highScore);
// console.log("Solutions with highest score: " + bestSolutions);

// function getMostCostEffectiveSolution(resultArray, costsArray, maxValue) {
//   let index;
//   const bestSolutions = getBestScores(resultArray, maxValue);
//   if (costsArray[bestSolutions[0]] < costsArray[bestSolutions[1]]) {
//     index = bestSolutions[0];
//   } else {
//     index = bestSolutions[1];
//   }

//   return index;
// }

// const mostCostEffective = getMostCostEffectiveSolution(
//   scores,
//   costs,
//   highScore,
// );
// console.log(
//   "Bubble Solution #" + mostCostEffective + " is the most cost effective",
// );

// const chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
// };

// const cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
// };

// const fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
// };

// function prequal(car) {
//   if (car.year > 1955 && car.mileage < 50000) {
//     return true;
//   }
//   return false;
// }
// console.log(prequal(chevy));
// console.log(prequal(cadi));
// console.log(prequal(fiat));


const dog = {
  name: "Fido",
  weight: 48,
  breed: "Mixed",
  loves: "walks",
};

function loseWaight (dog, amount) {
  dog.weight = dog.weight - amount;
}

// if (car.mileage < 50000) {
//   alert("Берём!!!!");
// } else alert("Не берём!!!!");

// dog.weight = 24;

// dog.isDog = true;

// delete dog.activity;

// console.log(dog);

// const number = 27;
// const newNumber = number;
// const newDog = dog;
// newDog.weight = 25.0;
// console.log(dog);
