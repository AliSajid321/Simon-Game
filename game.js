var buttonColors= ["red","blue","green","yellow"];
var gamePattern = [];



function nextSequence(){
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    
}