function Question(question, answer){
    this.question = question;
    this.answer = answer;
}

let started = false;

var score = 0;
var questionNum = 1;
var questionIndex = 0;

var questions = [
    new Question("What are two things you can never eat for breakfast?", "Lunch and Dinner"),
    new Question("What is always coming but never arrives?", "Tommorow"),
    new Question("What gets wetter the more it dries?", "Towel"),
    new Question("What can be broken but never held?", "Promise"),
    new Question("What word is spelled incorrectly in every single dictionary?", "Incorrectly"),
    new Question("What is it that lives if it is fed, and dies if you give it a drink?", "Cellphone"),
    new Question("What word would you use to describe a man who does not have all his fingers on one hand?", "Normal")
];

$(".game").hide();

$(document).keypress(function(e){
   startGame();
})

function startGame(){
    $("#title").slideUp(1300);
    $(".game").fadeIn(1300);
    $("#score").text("Score: " + score);
    if(!started){
        $("#question").text("Question " + (questionNum) + ": " + questions[questionIndex].question);
    }
}

$("#btn").click(function(){
    if($("#answer").val() === questions[questionIndex].answer){
        if(questionIndex === questions.length - 1){
            $("#question").text("Finished! Refresh the page to start again!");
            score++;
            animateScore(score);
            $(this).hide();
        }else{
            $("#question").text("Right Answer!").css("color", "green");
            score++;
            animateScore(score);
            setTimeout(function(){
                questionNum++;
                questionIndex++;
                $("#question").text("Question " + questionNum + ": " + questions[questionIndex].question).css("color", "black");
                $("#answer").val("");
            }, 1400)
        }
    }else{
        if(questionIndex === questions.length - 1){
            $("#question").text("Finished! Refresh the page to start again!");
            $(this).hide();
        }else{
            $("#question").text("Wrong Answer!").css("color", "red");
            setTimeout(function(){
                questionNum++;
                questionIndex++;
                $("#question").text("Question " + questionNum + ": " + questions[questionIndex].question).css("color", "black");
                $("#answer").val("");
        }, 1400)
        }
    }
})

function animateScore(currentScore){
    $("#score").text("Score: " + currentScore);
    $("#score").addClass("scoreBig");
    setTimeout(function(){
        $("#score").removeClass("scoreBig");
    }, 500)
}