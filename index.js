const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            let buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);

            buttonAnimation(buttonInnerHTML);
        });
}

function makeSound(key) {
    switch (key) {
        case "w":
            const crash = new Audio(`./sounds/crash.mp3`);
            crash.play();
            break;
        case "a":
            const kick = new Audio(`./sounds/kick-bass.mp3`);
            kick.play();
            break;
        case "s":
            const snare = new Audio(`./sounds/snare.mp3`);
            snare.play();
            break;
        case "d":
            const tom1 = new Audio(`./sounds/tom-1.mp3`);
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio(`./sounds/tom-2.mp3`);
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio(`./sounds/tom-3.mp3`);
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio(`./sounds/tom-4.mp3`);
            tom4.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {
    const activeButton = document.querySelector(`.${key}`);

    activeButton.setAttribute("class", `${key} drum pressed`);

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
