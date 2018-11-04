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
var guessedLetters = []; //holds array of wrong letters player has guessed
var wordUnderscores = [];
var currentWordIndex; // Index of the current word in the array
var wImg = "shante";
var lImg = "sashay";

const maxGuesses = 7;

function playGame (){
    guessedLetters = [];
    guessesLeft = 7;
    wins = 0;
    losses = 0;
    wordUnderscores =[];

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);
   
    for (var i=0; i < randomWord.length; i++){
        wordUnderscores.push("_");
    }

    document.getElementById("word-display").textContent = wordUnderscores.join(" ");
    
    document.getElementById("wins").textContent= wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("remaining-guesses").textContent= guessesLeft;
    document.getElementById("guessed-letters").textContent= guessedLetters;


}


document.onkeyup = function(event){
    letterChoices = event.key;

    if(randomWord.indexOf(letterChoices) > -1){
        for (var j = 0; j <randomWord.length; j++){

            if (randomWord[j] === letterChoices){
                wordUnderscores[j]= letterChoices;
                console.log(wordUnderscores);
                wins++;
            }
        }
    }

    else{
        guessedLetters.push(letterChoices);
        guessesLeft--;
        losses++;
        
        console.log(guessesLeft);
    };  
}

function score(){
    if (letterChoices=== randomWord.length){
        function winImage(){
            var wImg = document.getElementById ("shante");
            wImg.style.visibility= "visible";
        }
    }
    else if(guessesLeft===0){
        function loseImage(){
            var lImg = document.getElementById ("sashay");
            lImg.style.visibility= "visible";
        }
    };   
}

playGame();