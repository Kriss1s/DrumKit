const btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let innerText = this.innerHTML;
        drum(innerText);
        animation(innerText);
    })
}

document.addEventListener("keydown", function (event) {
    drum(event.key);
    animation(event.key);
})

function drum(param) {
    if (param === 'w') {
        let audio = new Audio(`sounds/tom-1.mp3`);
        audio.play();
    } else if (param === 'a') {
        let audio = new Audio(`sounds/tom-2.mp3`);
        audio.play();
    } else if (param === 's') {
        let audio = new Audio(`sounds/tom-3.mp3`);
        audio.play();
    } else if (param === 'd') {
        let audio = new Audio(`sounds/tom-4.mp3`);
        audio.play();
    } else if (param === 'j') {
        let audio = new Audio(`sounds/snare.mp3`);
        audio.play();
    } else if (param === 'k') {
        let audio = new Audio(`sounds/kick-bass.mp3`);
        audio.play();
    } else if (param === 'l') {
        let audio = new Audio(`sounds/crash.mp3`);
        audio.play();
    }
}

function animation(param) {
    let activeBtn = document.querySelector("." + param);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed")
    }, 200)
}