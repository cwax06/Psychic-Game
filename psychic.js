
// Array of possible answers

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Computer randomly selects a letter (stuck trying to select a string rather than number)

var randomLetter = letters[Math.floor(Math.random() * letters.length)];

var userText = document.getElementById("user-text");

// Display the string of randomNumber



console.log(randomLetter)

function inArray(userText, letters) {
    var length = letters.length;
    for (var i = 0; i < length; i++) {
        if (letters[i] == userText)
            return true;
    }
    return false;
}

inArray()
// Display the number of Wins



// Display the number of Losses


// User Enters




document.onkeyup = function (event) {
    userText.textContent = event.key;
}

console.log("hello world")
