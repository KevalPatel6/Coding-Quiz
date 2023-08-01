let choiceListContainer = document.querySelector(".answerChoicesContainer")
let gameOverHeader = document.querySelector("#gameOverHeader")
// let questionContainer = document.querySelector(".header") <<Don't need I think
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
let answersEl = document.querySelectorAll("button");
let rightWrong = document.querySelector("#rightOrWrong");
let answer1Button = document.querySelector("#answer1");
let answer2Button = document.querySelector("#answer2");
let answer3Button = document.querySelector("#answer3");
let answer4Button = document.querySelector("#answer4");
let submitButton = document.querySelector("#submit");
let scoreLineEl = document.querySelector(".highScoreList")
let score = 0;
// let initialsArray = JSON.parse(localStorage.getItem("initials")) || [];

let currentQuestion = 0;
let questionsBank = [{

    question: "Who is the greatest of all time?",
    choices: ['Lebron James', 'Michael Jordan', 'Kobe Bryant', 'Tim Duncan'],
    answer: 'Lebron James'
},

{
    question: "What sport do the Philadelphia Eagles play?",
    choices: ['Football', 'Basketball', 'Baseball', 'Hockey'],
    answer: 'Football',

},
{
    question: "What is the color of the sky?",
    choices: ['Red','Yellow','Green','Blue'],
    answer: 'Blue'
},
{
    question: "",
    choices: [],
    answer: ''
}
];


init()




//Initial function when the page loads//
function init() {
    //Everything that needs to be set on initial loading of page
    questionDisplay.textContent = "Coding Quiz Challenge";
    instructions.textContent = "Answer as many questions as you can in 60 seconds. Each question you answer wrong will reduce the timer by 5 seconds. Good luck!!"
    timerText.textContent = "Time: " + timer + " seconds"
    choiceListContainer.style.display = "none";}


    //Click event listener    
    startQuizButton.addEventListener("click", function () {
        renderQuestion();

        hideStartButton();

         let timerID = setInterval(function () {
            timer--
            timerText.textContent = "Time: " + timer + " seconds"
            if(timer===0 || currentQuestion === questionsBank.length-1){
                clearInterval(timerID)
                gameOver();
            }
        }, 1000);

      
    });

    //Setting the time interval to start on click of start//




//Hiding the start button after click
//QUESTION: Is there an easier way to set this//
function hideStartButton() {
    startQuizButton.style.display = "none"
    instructions.style.display = "none"
};


function renderQuestion() {
    choiceListContainer.style.display = "flex";
    choiceListContainer.style.alignItems = "center";

        questionDisplay.textContent = questionsBank[currentQuestion].question
        answer1Button.textContent = questionsBank[currentQuestion].choices[0]
        answer2Button.textContent = questionsBank[currentQuestion].choices[1]
        answer3Button.textContent = questionsBank[currentQuestion].choices[2]
        answer4Button.textContent = questionsBank[currentQuestion].choices[3]
    
    //Answers need to be in the form of a button

}



choiceListContainer.addEventListener("click", function (event) {
    
    if (event.target.innerText === questionsBank[currentQuestion].answer) {
        console.log(event.target.innerText)
        rightWrong.textContent = "Correct!"
        score++
}   
    else {
        rightWrong.textContent = "Wrong!";
        timer -= 5;
    }
    
    if (event.target.matches("button")) {
        currentQuestion++
        renderQuestion();
    }


//Game Over Screen Trigger//
    // if (timer === 0 || currentQuestion === questionsBank.length-1) {
        
    //     gameOver()
    // }

})

function gameOver() {
    questionDisplay.style.display = "none";
    choiceListContainer.style.display = "none";
    rightWrong.style.display = 'none';
    gameOverHeader.textContent = "Game Over!";
    let yourScore = document.querySelector('#score')
    yourScore.textContent = "Your score is: " + score

    document.getElementById("formContainer").hidden = false;
    document.querySelector("#submit").textContent = "Submit"

   

}

submitButton.addEventListener("click", createHighScoreList());

function addInitials (){
    let highScoreList = document.querySelector(".highScoreList")
    let inputID =  document.querySelector("inputID");
    let liEl = document.createElement('li')
    liEl.textContent = inputID.value + score;
    highScoreList.appendChild(liEl);
    localStorage.setItem("initials", inputID.value)
} 

// function createHighScoreList(){
    
//     scoreLineEl = 
// }
//     }

//To Do:
    //change CSS so the line element is smaller >>> Done

    //click inside the container takes you to the next question >> Done
        //if statement for when an actual answer is clicked  >>> Done

    //Need an if the answer chosen equals answer then show correct, else wrong >>> Done
