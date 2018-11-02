//word list
var wordList = ["miss vanjie",
"eleganza extravaganza",
"condragulations",
"squirrel friend",
"snatch game",
"lip sync for your life",
"queen",
"serve looks",
"werk",
"slay"];

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0; // How many wins has the player has
var losses = 0;
var remainingGuesses= []; //holds number of guesses left
var guessesLeft = 0; // How many guesses the player has left
var guessedLetters = []; //holds array of letters player has guessed
var randomWord = [];
var wordUnderscores = [];
var currentWordIndex; // Index of the current word in the array

const maxGuesses = 7;

function beginGame (){
    guessedLetters = [];
    guessesLeft = 7;
    wins = 0;
    losses = 0;
    wordUnderscores =[];

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
   
    for (var i=0; i < randomWord.length; i++){
        wordUnderscores.push("_");
    }

    document.getElementById("word-display").textContent = wordUnderscores.join(" ");
    
    document.getElementById("wins").textContent= wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("remaining-guesses").textContent= guessesLeft;
    document.getElementById("guessed-letters").textContent= guessedLetters;


}

beginGame();