
var gamePattern = [];
var userClickedPatten = [];


var buttonColors = ["red","green","yellow","blue"];



    var started = false;

    var level = 0;
    console.log(started);
    
        $(document).keydown(function(event){
            if(!started){
                nextSequence();
                started = true;
            }
    
            });
    
        
        




$(".btn").click(function(){ 
var userChosenColor = $(this).attr("id");
userClickedPatten.push(userChosenColor);


soundPlay(userChosenColor);
animatePres(userChosenColor);
checkAnswer(userClickedPatten.length-1);

})







function nextSequence(){
    userClickedPatten = [];
    var randNum = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randNum];
    gamePattern.push(randomChosenColor);
   
    animation(randomChosenColor);
    playSound(randomChosenColor);
    level++;
    $("#level-title").html("Level "+level);

    
}


function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPatten[currentLevel])
{
    console.log("success");

    if(gamePattern.length === userClickedPatten.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}

else{

    var wrong = new Audio ("sounds/wrong.mp3");
    wrong.play();
    $("#level-title").html("Game Over, Press Any Key to Restart");

    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");  
        startOver();
    },200)

   

}
    
}   

function animation(randomChosenColor){
$("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}


function playSound(randomChosenColor){
    var sound = new Audio("sounds/"+randomChosenColor+".mp3");
    sound.play();
}


function soundPlay(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();  
}

function animatePres(currentColor){ 
    $('#'+currentColor).addClass("pressed");

    setTimeout(function(){
        $('#'+currentColor).removeClass("pressed");
    },100)
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    
}