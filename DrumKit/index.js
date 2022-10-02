var buttons = document.querySelectorAll("button");

var sounds = {
    'w': 'sounds/crash.mp3',
    'a': 'sounds/tom-1.mp3',
    's': 'sounds/snare.mp3',
    'd': 'sounds/kick-bass.mp3',
    'j': 'sounds/tom-1.mp3',
    'k': 'sounds/tom-2.mp3',
    'l': 'sounds/tom-3.mp3',

}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        new Audio(sounds[this.innerHTML]).play();
        animate(this.innerHTML);
    })
}

document.addEventListener("keypress", function(e) {
    new Audio(sounds[e.key]).play();
    animate(e.key);
})

function animate(key) {
    var list = document.querySelector('.' + key).classList;
    list.toggle("pressed");
    setTimeout(() => {
        list.toggle("pressed");
    }, 100);
}