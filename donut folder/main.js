let button = document.getElementById('main_button')
let butt_count = document.getElementById('button_num')

let bnum = 0

button.addEventListener("click", () => {
    bnum++
    console.log(`Num is ${bnum}`)
    butt_count.textContent = bnum + " Donuts"
    after10()
})

function after10() {
    if (bnum > 10) {
        console.log("Num is >10")
    }
}