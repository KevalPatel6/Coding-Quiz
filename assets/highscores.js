let highScoresArray = JSON.parse(localStorage.getItem("highscores")) || []
const highScoreList = document.querySelector(".highScoreList")

for (let i = 0; i < highScoresArray.length; i++) {
   
    console.log(highScoresArray[i].initials)
    console.log(highScoresArray[i].score)

    var newLi = document.createElement("li");
    newLi.classList.add("list-item")
    newLi.textContent = highScoresArray[i].initials + " - " + highScoresArray[i].score;

    highScoreList.append(newLi)

}