let life_num: number = 42

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