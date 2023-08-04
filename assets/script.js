let choiceListContainer = document.querySelector(".answerChoicesContainer")
let gameOverHeader = document.querySelector("#gameOverHeader")
// let questionContainer = document.querySelector(".header") <<Don't need I think
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
let answersEl = document.querySelectorAll("button");
let inputInitials = document.getElementById("inputInitials");

let rightWrong = document.querySelector("#rightOrWrong");
let answer1Button = document.querySelector("#answer1");
let answer2Button = document.querySelector("#answer2");
let answer3Button = document.querySelector("#answer3");
let answer4Button = document.querySelector("#answer4");
let submitButton = document.querySelector("#submit");
let scoresList = document.querySelector(".highScoreList");
let score = 0;
let highScoresArray = JSON.parse(localStorage.getItem("highscores")) || []
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
    //Everything that needs to be set on initial loading of page//
    questionDisplay.textContent = "Quiz Challenge";
    instructions.textContent = "Answer as many questions as you can in 60 seconds. Each question you answer wrong will reduce the timer by 5 seconds. Good luck!!"
    timerText.textContent = "Time: " + timer + " seconds"
    choiceListContainer.style.display = "none";}


    //Click event listener    
    startQuizButton.addEventListener("click", function () {
        renderQuestion();
        
        hideStartButton();
        
        //Setting the time interval to start on click of start//
         let timerID = setInterval(function () {
            timer--
            timerText.textContent = "Time: " + timer + " seconds"
            
            if(timer===0){
                gameOver(); 
                clearInterval(timerID)
            }
            
        }, 1000);

    });





    //Hiding the start button after click
function hideStartButton() {
    startQuizButton.style.display = "none"
    instructions.style.display = "none"
};

//Render the first question on the page//
function renderQuestion() {
    choiceListContainer.style.display = "flex";
    choiceListContainer.style.alignItems = "center";

        questionDisplay.textContent = questionsBank[currentQuestion].question
        answer1Button.textContent = questionsBank[currentQuestion].choices[0]
        answer2Button.textContent = questionsBank[currentQuestion].choices[1]
        answer3Button.textContent = questionsBank[currentQuestion].choices[2]
        answer4Button.textContent = questionsBank[currentQuestion].choices[3]


}


//Clicking a choice - What happens? 1)Go to the next Question 2) See if it was wrong or right so the time can be set accordingly and the score can be counted//
choiceListContainer.addEventListener("click", function (event) {
    
    if (event.target.innerText === questionsBank[currentQuestion].answer) {
    
        rightWrong.textContent = "Correct!"
        score++
}   
    else {
        rightWrong.textContent = "Wrong!";
        timer -= 5;
    }

    setTimeout(function() {
        rightWrong.textContent = ""
    }, 3000)
    
    if (event.target.matches("button")) {
        currentQuestion++


            if(currentQuestion === questionsBank.length-1) {
                gameOver();
            } else {
                renderQuestion();
            }
    }




})


function gameOver() {
//Game Over Screen//
    questionDisplay.style.display = "none";
    choiceListContainer.style.display = "none";
    rightWrong.style.display = 'none';
    gameOverHeader.textContent = "Game Over!";
    let yourScore = document.querySelector('#score')
    yourScore.textContent = "Your score is: " + score

    document.getElementById("formContainer").hidden = false;
    document.querySelector("#submit").textContent = "Submit"

   

//Event listener for submit button//
    submitButton.addEventListener("click", function saveToStorage(event){
        event.preventDefault();
        // const dataToSave = {
        //     intials: inputInitials.value,
        //     score: score
        // }
        highScoresArray.push({"initials":inputInitials.value,"score":score})
        //adds input value to local storage but the input value is not working for some reason//
       
        localStorage.setItem("highscores", JSON.stringify(highScoresArray))
        
        window.location.replace("highscores.html");//<<should take you to the highscore page, not working unless I put it at the top because of broken code here//
        
        // createHighScoreList();
        
       
    } )};
    
    //Creates the lines for the highscores list based on the values in localStorage
function createHighScoreList(){
    let scoreLineEl = document.createElement('li')
        scoreLineEl.textContent = JSON.parse(localStorage.getItem('initials'))      
        scoresList.appendChild(scoreLineEl);
}


//To Do:
    //change CSS so the line element is smaller >>> Done

    //click inside the container takes you to the next question >> Done
        //if statement for when an actual answer is clicked  >>> Done

    //Need an if the answer chosen equals answer then show correct, else wrong >>> Done
