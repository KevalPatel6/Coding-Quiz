let choiceListContainer = document.querySelector(".answerChoicesContainer")
// let questionContainer = document.querySelector(".questionContainer") <<Don't need I think
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
let timerID = setInterval(function(){
    timerText.textContent= "Time: " + timer + " seconds"
    timer -=1 
},1000);
let currentQuestion = 0
let answersEl = document.querySelectorAll("button");
let rightWrong = document.querySelector(".rightorWrong");
let answer1Button = document.querySelector("#answer1");
let answer2Button = document.querySelector("#answer2");
let answer3Button = document.querySelector("#answer3");
let answer4Button = document.querySelector("#answer4");

let questionsBank = [{

    question: "Who is the greatest of all time?",
    choices: ['Lebron James', 'Michael Jordan', 'Kobe Bryant', 'Tim Duncan'],
    answer: 'Lebron James'
    },
    
    {
        question: "What sport do the Philadelphia Eagles play?",
        choices: ['Football', 'Basketball', 'Baseball', 'Hockey'],
        answer: 'Football'
    
    }]


init()




//Initial function when the page loads//
function init (){
//Everything that needs to be set on initial loading of page
    questionDisplay.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Answer as many questions as you can in 60 seconds. Each question you answer wrong will reduce the timer by 5 seconds. Good luck!!"
    timerText.textContent= "Time: " + timer + " seconds"
    choiceListContainer.style.display = "none";
    

//Click event listener    
startQuizButton.addEventListener("click", function(){
    renderQuestion(); 
    showAnswers();
    
    hideStartButton();
    
           



    timerText = timerID;

    });
        
//Setting the time interval to start on click of start//
        
}

function showAnswers() {
    choiceListContainer.style.display = "flex";

}

//Hiding the start button after click
    //QUESTION: Is there an easier way to set this//
function hideStartButton(){
    startQuizButton.style.display = "none"
    instructions.style.display ="none"
};


function renderQuestion () {  
    questionDisplay.textContent = questionsBank[currentQuestion].question
    answer1Button.textContent = questionsBank[currentQuestion].choices[0]
    answer2Button.textContent = questionsBank[currentQuestion].choices[1]
    answer3Button.textContent = questionsBank[currentQuestion].choices[2]
    answer4Button.textContent = questionsBank[currentQuestion].choices[3]
//Answers need to be in the form of a button



choiceListContainer.addEventListener("click", function(event){
    if(event.target.matches("button")){
        currentQuestion ++
        renderQuestion();
    }
    if(event.target.innerText === questionsBank[currentQuestion].answer){
        rightWrong.textContent = "Correct!"
    }
    else{
        rightWrong.textContent = "Wrong!"
    }
//HOW do I find out which one they selected? I think I got the answer but looks like I don't
})}

    

        
//     }

//To Do:
    //change CSS so the line element is smaller >>> Done

    //click inside the container takes you to the next question
        //if statement for when an actual answer is clicked

    //Need an if the answer chosen equals answer then show correct, else wrong
        