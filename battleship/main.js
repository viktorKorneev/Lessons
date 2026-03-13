const location1 = 3;
const location2 = 4;
const location3 = 5;

let isSunk = false;
let guess;

while (isSunk === false) {
    guess = +prompt("Fire! Enter a number 0-6")
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
    } else {
        alert("MISS!")
    }
}