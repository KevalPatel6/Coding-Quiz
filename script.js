let choiceList = document.querySelector(".choices");
let questionContainer = document.querySelector(".questionContainer")
let questionDisplay = document.querySelector(".questionHeader")
let instructions = document.querySelector(".instructions")
let startQuizButton = document.querySelector(".startQuiz")
let timerText = document.querySelector(".timer")
let timer = 60
let index = 0
let answersEl = document.querySelectorAll("button");
let rightWrongEl = document.querySelector(".rightWrongContainer");
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
//Can you set a questionBank variable and have all the questions with their own properties as part of an array?



init()

startQuizButton.addEventListener("click", function(){
    questionDisplay.textContent = questionsBank[index].question;
    instructions.textContent = "";
    
    hideStartButton();
    
    createAnswerChoiceList();

    if (questionDisplay.textContent = questionsBank[index].question)

    choiceList.addEventListener("click", function(){
        if (event.target.matches("button" === true))
   {
        index++ 
        questionDisplay.textContent = questionsBank[index].question
       
    }

        
        
    })
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


function createAnswerChoiceList () {  
    let answerChoices = document.createElement("ul")
    let answer1Line = document.createElement("li");
    let answer2Line = document.createElement("li");
    let answer3Line = document.createElement("li");
    let answer4Line = document.createElement("li");
    let choicesList = document.querySelector(".choices")

    let answer1 = document.createElement("button")
    let answer2 = document.createElement("button")
    let answer3 = document.createElement("button")
    let answer4 = document.createElement("button")

    //NOTE to self - set value first before appending child.

    answer1.textContent = questionsBank[0].ABCD[0];
    answer2.textContent = questionsBank[0].ABCD[1];
    answer3.textContent = questionsBank[0].ABCD[2];
    answer4.textContent = questionsBank[0].ABCD[3];

    choiceList.appendChild(answerChoices);
    answerChoices.appendChild(answer1Line);
    answerChoices.appendChild(answer2Line);
    answerChoices.appendChild(answer3Line);
    answerChoices.appendChild(answer4Line);

    answer1Line.appendChild(answer1);
    answer2Line.appendChild(answer2);
    answer3Line.appendChild(answer3);
    answer4Line.appendChild(answer4);
    
    answerChoices.setAttribute("style", "list-style-type: none");
//Not working here????
    document.querySelectorAll("button").style.backgroundColor = "blue";
//--

    choiceList.appendChild(answerChoices);
    answerChoices.appendChild(answer1);
    answerChoices.appendChild(answer2);
    answerChoices.appendChild(answer3);
    answerChoices.appendChild(answer4);

//Answers need to be in the form of a button
}



    

        
//     }

//To Do:
    //change CSS so the line element is smaller >>> Done

    //click inside the container takes you to the next question
        //if statement for when an actual answer is clicked

    //Need an if the answer chosen equals answer then show correct, else wrong
        