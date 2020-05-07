/*
1.Clicking either "SHOOT" button represents a shot for that team.
2.Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
3.The number of shots taken should increase for every click of the "SHOOT" button.
4.The number of goals should only increase when the shot is successful.
5.Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.
*/
//Team1
const teamOneShots = document.querySelector("#teamone-numshots")

const teamOneButton = document.querySelector
    ("#teamone-shoot-button")

const teamOneNumGoals = document.querySelector("#teamone-numgoals")


teamOneButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamOneShotsTaken = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
    }

})
//Team2
const teamTwoShots = document.querySelector("#teamtwo-numshots")

const teamTwoButton = document.querySelector("#teamtwo-shoot-button")

const teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

teamTwoButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamTwoShotsTaken = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = teamTwoShotsTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
    }
})
//Reset-Button
resetButton.addEventListener("click", function () {
    teamOneShots.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamOneNumGoals.innerHTML = 0;
    teamTwoNumGoals.innerHTML = 0;

})


