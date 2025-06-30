document.addEventListener("DOMContentLoaded", function () {
    const sounds = {
        w: "sounds/crash.mp3",
        a: "sounds/tom-2.mp3",
        s: "sounds/tom-3.mp3",
        d: "sounds/tom-4.mp3",
        j: "sounds/snare.mp3",
        k: "sounds/crash.mp3",
        l: "sounds/kick-bass.mp3"
    };

    
    document.querySelectorAll(".drum").forEach(btn =>
        btn.addEventListener("click", () => playSound(btn.innerText.toLowerCase()))
    );
    
    document.addEventListener("keydown", e => playSound(e.key.toLowerCase()));
    
    function playSound(key) {
        if (sounds[key]) new Audio(sounds[key]).play();
    }
});
