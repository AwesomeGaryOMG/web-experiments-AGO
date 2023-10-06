const animationDiv = document.getElementById('the_useless_animation');
const animateButton = document.getElementById('useless_animation_button');
const useless_animation = document.getElementById('useless_animation_img')
console.log('logging all const in script indScript.js', animationDiv,animateButton,useless_animation)
animateButton.addEventListener('click', click2animate);
function click2animate (event) {
    console.log('click2animate', event)
    useless_animation.src="https://media.tenor.com/aaEMtGfZFbkAAAAC/rat-spinning.gif"
};

