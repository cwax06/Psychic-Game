

// Array of possible answers

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var userText = document.getElementById("user-text");

// Computer randomly selects a letter

$(document).ready(function () {

    letters[Math.floor(Math.random() * letters.length)];
    console.log("checking")


    // Display the number of Wins



    // Display the number of Losses


    // User Enters


};


});

document.onkeyup = function (event) {
    userText.textContent = event.key;
}

console.log("hello world")