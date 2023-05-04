"use strict";
let life_num = 42;
// Typescript considers this as an error however Javascript accepts this.
life_num = 'forty-two';
console.log("life", life_num);
var messages = {
    message: "Hello World!",
    get new_message() {
        return this.message + " I am code!";
    },
    life_answer: "The answer to life and everything is " + life_num,
    life_not_answer: "Maybe not " + life_num,
    twice_life: "Put two lives together and you get " + life_num + life_num,
};
console.log(Object.values(messages));
let x, y;
// Expected this formatting to show up as coordinates positions based on the coordinates itself in the Javascript file after compiling. (i forgot words)
let matrixWithWhitespace = [
    [x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
    [x - 1, y], [x + 1, y],
    [x - 1, y - 1], [x + 1, y - 1]
];
