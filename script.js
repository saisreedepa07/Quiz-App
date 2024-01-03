var questions=[{
    question:"what is my name?",
    choices: ["sai","saisree","depa","reddy"],
    correctAnswer:1
},{
    question:"what is my school?",
    choices: ["n","b","s","d"],
    correctAnswer:0
},{
question:"where do I live?",
choices: ["v","h","a","s"],
correctAnswer:3
},{
    question:"what is my fav color",
    choices: ["white","all","black","red"],
    correctAnswer:1
},{
    question:"How do I look?",
    choices: ["ugly","ok", "ordinary","extraordinary"],
    correctAnswer:3
}];

var currentques=0;
var correctAns=0;
var quizcompleted=false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".message").hide();
    $(this).find(".nextquestion").on('click', function(){
        if(!quizcompleted){
            value= $("input[type='radio']:checked").val();
            if(value==undefined){
                $(document).find(".message").text("Please select an answer");
                $(document).find(".message").show();
            } else{
                $(document).find(".message").hide();
                if(value== questions[currentques].correctAnswer){
                    correctAns++;
                }
                currentques++;
                if(currentques<questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".nextquestion").text("Play Again");
                    quizcompleted=true;
                }
            }
        }else{
            quizcompleted=false;
            $(document).find(".message").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log("In display current question");
    var question= questions[currentques].question;
    var Questionclass= $(document).find(".quiz>.question");
    var choiceList= $(document).find(".quiz>.options");
    var num= questions[currentques].choices.length;
    $(Questionclass).text(question);
    $(choiceList).find("li").remove();
    var choice;
    for(i=0;i<num;i++){
        choice= questions[currentques].choices[i];
        $('<li><input type="radio" value='+ i+ ' name="dynradio"/>'+choice+'</li>').appendTo(choiceList);

    }
}

function resetQuiz(){
    currentques=0;
    correctAns=0;
    hideScore();
}

function displayScore(){
    $(document).find(".quiz > .result").text("you scored: "+correctAns+" out of "+ questions.length);
    $(document).find(".quiz > .result").show();
}

function hideScore(){
    $(document).find(".result").hide();
}