//позиция корабля
const rendomLoc = Math.floor(Math.random() * 5); //от 0 до 4
const location1 = rendomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;
//потоплен или нет
let isSunk = false;
//предполагаемая позиция корабля ("выстрел")
let guess;
//добавляем счётчик попаданий
let hits = 0;
//создаём счётчик выстрелов
let guesses = 0;

while (isSunk === false) {
  //не забываем, что строку надо превратить в число
  guess = +prompt("Fire! Enter a number 0-6");
  if (guess < 0 || guess > 6) {
    alert("Please, enter a valid cell number!");
  } else {
    //увеличиваем счётчик выстрелов
    guesses += 1;
    //логическое "или"
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!");
      //считае попадания
      hits = hits + 1;
      //если подбили
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}

const stats = "You have " + hits + "hits out of " + guesses + "shots.";
alert(stats);
