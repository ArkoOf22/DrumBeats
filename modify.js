function clr() {
    for (var i = 0; i < document.querySelectorAll(" .drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            this.style.color = "blue";

        });
    }
}


//Her i am clicking on the second button

//Now we setup each sound for a different button::

// document.getElementsByClassName("w")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });

// document.getElementsByClassName("a")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// });

// document.getElementsByClassName("s")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// });

// document.getElementsByClassName("d")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// });

// document.getElementsByClassName("j")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// });

// document.getElementsByClassName("k")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// });

// document.getElementsByClassName("l")[0].addEventListener("click", function() {
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// });
var noOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var button = this.innerHTML;
        console.log(button);
        makesound(button);
        clr();
        buttonAnimation(button);
    })

}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key)
});

function makesound(event1) {
    switch (event1) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    }

}

function buttonAnimation(event2) {

<<<<<<< HEAD
    var blured = document.querySelector("." + event2);
    blured.classList.add("pressed");
    setTimeout(function() {
        blured.classList.remove("pressed");
    }, 100);
}
=======
document.getElementsByClassName("k")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
});

document.getElementsByClassName("l")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
});
function find() {
    window.open("https://www.linkedin.com/in/arkodeep-koley-70017478", "_blank");
}
>>>>>>> 2b8c7107b29f1d1cd70438a1253aeb0fabb7ef9b
