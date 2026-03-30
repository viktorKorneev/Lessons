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

const scores = [
  60, 50, 60, 58, 54, 54, 59, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 17, 41, 53, 55, 61, 51, 44,
];

// let i = 0;

// while (i < scores.length) {
//   output = "Bubble solution #" + i + " score: " + scores[i];
//   console.log(output);

//   i = i + 1;
// }
const highScore = printAndGetHighScore(scores);
// let minScore = 0;

console.log("Bubbles tests: " + scores.length);
console.log("Highest with highest score: " + highScore);

function printAndGetHighScore(array) {
  let output;
  let highScore = 0;
  for (let i = 0; i < array.length; i++) {
    output = "Bubble solution #" + i + " score: " + array[i];
    console.log(output);
    if (highScore < array[i]) {
      highScore = array[i];
    }
  }
  return highScore;
}

// for (let i = 0; i < scores.length; i++) {
//   if (highScore > scores[i]) {
//     highScore = scores[i];
//     minScore = highScore;
//   }
// }

// console.log("Min score: " + minScore);

function getBestScores(array, maxValue) {
  const bestSolutions = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === maxValue) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

const bestSolutions = getBestScores(scores, highScore);
console.log("Solutions with highest score: " + bestSolutions);
