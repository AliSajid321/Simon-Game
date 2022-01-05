var buttonColors= ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){

        
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

});

var count = 0;
var level = 0;

$(document).keypress(function(){
    
    if (count===0){
        nextSequence();
        $("h1").text("Level 0");
        count++;
        level--;
    }
    else {
        count = 1;
    }
    
});

function playSound(name){
    var colorSound = new Audio("sounds/"+ name + ".mp3");
    colorSound.play();
}

function animatePress(currentColor){
    var checkPress = $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        checkPress.removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern=[];

        }
        
    }
    else{
        console.log("fail");
    }

}


function nextSequence(){
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //console.log(gamePattern);
    $("#"+ randomChosenColor).fadeOut(30).fadeIn(30);
    playSound(randomChosenColor);
    level++;
    $("h1").text("Level "+ level);
    // var colorSound = new Audio("sounds/"+ randomChosenColor + ".mp3");
    // colorSound.play();
    //return randomChosenColor;


}