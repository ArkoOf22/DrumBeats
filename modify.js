//Adding an eevent listener
//The process is as follows: addEventListener("click",a function is called);

// document.querySelector("button").addEventListener("click", handleClicks);

// function handleClicks() {
//     alert("I got clicked!!");
// }

//The above part can also be done by this following:
for (var i = 0; i < document.querySelectorAll(" .drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color = "blue";

    });
}

//Her i am clicking on the second button

//Now we setup each sound for a different button::

document.getElementsByClassName("w")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
});

document.getElementsByClassName("a")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
});

document.getElementsByClassName("s")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
});

document.getElementsByClassName("d")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
});

document.getElementsByClassName("j")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
});

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
