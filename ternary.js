let x = 0;

if (Math.random() > 0.5) {
    x = 10;
}   else {
    x = 20;
}

// тоже самое 

x = Math.random() > 0.5 ? 10:20;

// не правильный вариант

let age = 23;
let isAdult = age > 18 ? true : false;

// Нужно так

let isAdultDoneRight = age > 18;