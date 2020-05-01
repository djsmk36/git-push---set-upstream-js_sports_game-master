const teamOneShots = document.querySelector("#teamone-numshots")
const teamOneButton = document.querySelector("#teamone-shoot-button")
teamOneButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamOneShotsTaken = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
    }
})

const teamTwoShots = document.querySelector("#teamtwo-numshots")
const teamTwoButton = document.querySelector("#teamtwo-shoot-button")
teamTwoButton.addEventListener("click", function () {
    console.log("+ button clicked");
    Math.random();
    let teamTwoShotsTaken = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = teamTwoShotsTaken
    if (Math.random() < .5) {
        console.log("+ team scored")
    }
})