//позиция корабля
const location1 = 3;
const location2 = 4;
const location3 = 5;
//потоплен или нет
let isSunk = false;
//предполагаемая позиция корабля ("выстрел")
let guess;

while (isSunk === false) {
    //не забываем, что строку надо превратить в число
    guess = +prompt("Fire! Enter a number 0-6")
    //логическое "или"
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
    } else {
        alert("MISS!")
    }
}