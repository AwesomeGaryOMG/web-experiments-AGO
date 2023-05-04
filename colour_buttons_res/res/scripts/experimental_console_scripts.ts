// Messing around with the console and Typescript and Javascript.

let life_num: number = 42

// Typescript considers this as an error while Javascript allows this.
life_num = 'forty-two'

console.log("life",life_num)

var messages = {
    message: "Hello World!",
    get new_message() {
        return this.message + " I am code!"
    },
    life_answer: "The answer to life and everything is " + life_num,
    life_not_answer: "Maybe not " + life_num,
    twice_life: "Put two lives together and you get " + life_num + life_num,

}

console.log(Object.values(messages));

let x,y
// Need a way for this formatting retain whitespace in the Javascript file after compiling for readability.
let matrixWithWhitespace = [
    [x-1, y+1], [x,y+1], [x+1,y+1],
    [x-1, y],            [x+1, y],
    [x-1, y-1],          [x+1, y-1]
]