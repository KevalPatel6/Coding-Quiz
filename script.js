let choiceList = document.querySelector(".choices");
let questionContainer = document.querySelector(".questionContainer")
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
//Can you set a questionBank variable and have all the questions with their own properties as part of an array?
init()
let questionsBank = [{

question: "Test: What is 1+1",
ABCD: [1,2,3,4],
    answer: 2,
},

{
    question: "Test: What is 3*3",
    ABCD: [3,6,8,9],
    answer: 9,

}]

//Initial function when the page loads//
function init (){
//Everything that needs to be set on initial loading of page
    questionDisplay.textContent = "Coding Quiz Challenge";
    instructions.textContent = "This is where the instructions go. Answer as many questions as you can in 60 seconds. Each question you answer wrong will reduce the timer by 5 seconds. Good luck"
    timerText.textContent= "Time: " + timer + " seconds"
    

//Click event listener    
    startQuizButton.addEventListener("click", function(){
        questionDisplay.textContent = questionsBank[0].question;
        instructions.textContent = "";
        
        hideStartButton();
        
//Setting the time interval to start on click of start//
        setInterval(function(){
            timerText.textContent= "Time: " + timer + " seconds"
            timer-- 
        },1000);
    
    });}



//Hiding the start button after click
    //QUESTION: Is there an easier way to set this//
function hideStartButton(){
    startQuizButton.style.display = "none"
};

function answerClick(){


}

