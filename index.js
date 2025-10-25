let homePlusOne = document.getElementById("hone")
let homeScore = document.getElementById("homescore")
let homeCount = 0 


function homePlusOne() {
  homeCount += 1
  console.log(homeCount)
  homeScore.textContent = homeCount
}

