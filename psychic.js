
// Array of possible answers

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Computer randomly selects a letter

var randomLetter = letters[Math.floor(Math.random() * letters.length)];

var s;

var count = 0;

console.log(randomLetter)


// Empty array to store guess

var answerArray = [];

// Display the string of randomNumber

function startUp()
(
    answerArray[i] = "_"

)

// Put them in a string

s = answerArray.join(" ");
document.getElementById("answer").innerHTML = s;
)

function Letter()
(
    var letter = document.getElementById("letter").value;

if (letter.length > 0)
    (
        for (var i = 0; i < randomLetter.length; i++)
    (
        answerArray[i] = letter;
    )
count++;
document.getElementById("counter").innerHTML = "No of clicks; " + count;
document.getElementById("answer").innerHTML = answerArray.join(" ");
    )
if (count > 5)
    (

)



// compare randomly generated letter with user's input


// Start function




// Listen for user input
document.onkeyup = function (event) {
    userText.innerHTML = event.key
};



// Display the number of Wins

// Display the number of Losses


// User Enters
