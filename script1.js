let choiceList = document.querySelector(".choices");
let questionContainer = document.querySelector(".questionContainer")
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
let currentQuestion = 0
let answersEl = document.querySelectorAll("button");
let rightWrongEl = document.querySelector(".rightWrongContainer");
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

startQuizButton.addEventListener("click", function(){
    questionDisplay.textContent = questionsBank[currentQuestion].question;
    instructions.textContent = "";
    
    hideStartButton();
    
    renderQuestion();        
        
    });



//If button is clicked >>Not working


// if a button is clicked 

//     if (event.target.button.textContent===questionsBank[index].answer)
//         setInterval(function correctOrNot(){
//             rightWrongEl.textContent = "Correct!"
//         },3000)
//         index ++
//         questionDisplay.textContent = questionsBank[index]
    
//     else {
//         setInterval(function correctOrNot(){
//             rightWrongEl.textContent = "Wrong!"
//         },3000)
//         timer -= 5;
//         }
//         index ++ 
    
//     ----------------
//     />>>>>>>>>>>>>>>>>>Stopped here and rethinking whether to add ul and li and button in HTML with id names for answer 1 answer 2, etc. 
//     ----------------
// })



//Initial function when the page loads//
function init (){
//Everything that needs to be set on initial loading of page
    questionDisplay.textContent = "Coding Quiz Challenge";
    instructions.textContent = "This is where the instructions go. Answer as many questions as you can in 60 seconds. Each question you answer wrong will reduce the timer by 5 seconds. Good luck"
    timerText.textContent= "Time: " + timer + " seconds"
    

//Click event listener    
   
        
//Setting the time interval to start on click of start//
        setInterval(function(){
            timerText.textContent= "Time: " + timer + " seconds"
            timer-- 
        },1000);
}



//Hiding the start button after click
    //QUESTION: Is there an easier way to set this//
function hideStartButton(){
    startQuizButton.style.display = "none"
};


function renderQuestion () {  
    questionDisplay = questionsBank[currentQuestion].question
    answer1Button.textContent = questionsBank[currentQuestion].choices[0]
    answer2Button.textContent = questionsBank[currentQuestion].choices[1]
    answer3Button.textContent = questionsBank[currentQuestion].choices[2]
    answer4Button.textContent = questionsBank[currentQuestion].choices[3]



//Answers need to be in the form of a button
}



    

        
//     }

//To Do:
    //change CSS so the line element is smaller >>> Done

    //click inside the container takes you to the next question
        //if statement for when an actual answer is clicked

    //Need an if the answer chosen equals answer then show correct, else wrong
        