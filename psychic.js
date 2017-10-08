
// Array of possible answers

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Computer randomly selects a letter

var randomLetter = letters[Math.floor(Math.random() * letters.length)];

var userText = document.getElementById("user-text");


// Display the string of randomNumber

console.log(randomLetter)

// compare randomly generated letter with user's input


// Start function




// Listen for user input
document.onkeyup = function (event) {
    userText.innerHTML = event.key
};



// Display the number of Wins

// Display the number of Losses


// User Enters
