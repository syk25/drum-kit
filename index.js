function beats(className, soundName) {
    document
        .querySelector(`.${className}`)
        .addEventListener("click", function () {
            const audio = new Audio(`./sounds/${soundName}.mp3`);
            audio.play();
        });
}

beats("w", "crash");
beats("a", "kick-bass");
beats("s", "snare");
beats("d", "tom-1");
beats("j", "tom-2");
beats("k", "tom-3");
beats("l", "tom-4");

document.addEventListener("keydown", function (event) {
    const key = event.key;
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
});
