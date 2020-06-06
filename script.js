// Variable to store the list of guesses
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    showYouWon();
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess){
  if(correctNumber>numberGuess){
    showNumberBelow();
  } else if(correctNumber<numberGuess){
    showNumberAbove();
  } else{
    showYouWon();
  }
}

function initGame(){
  let correctNumber=getRandomNumber;
  document.getElementById("result").innerHTML="";
  guesses = [];
  displayHistory();
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let random = Math.random();
  let randomNumber = Math.floor(random * 100);
  return randomNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let list = "<ul class='list-group'>";
  for(let i=guesses.length-1;i>=0;i--){
    list += "<li class='list-group-item'>" + 
    "You guessed " + guesses[i] +"</li>";
  }
  list += '</ul>' ;
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}
