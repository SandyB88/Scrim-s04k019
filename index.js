let hScore = 0 
document.getElementById("homescore").textContent = hScore

let gScore = 0
document.getElementById("guestscore").textContent = gScore

function hOne() {
  hScore += 1
  document.getElementById("homescore").textContent = hScore
  console.log("One point added! Total Score: " + hScore)
}

function hTwo() {
  hScore += 2
  document.getElementById("homescore").textContent = hScore
  console.log("Two points added! Total Score: " + hScore)
}

function hThree() {
  hScore += 3
  document.getElementById("homescore").textContent = hScore
  console.log("Three points added! Total Score: " + hScore)
}

function gOne() {
  gScore += 1
  document.getElementById("guestscore").textContent = gScore
  console.log("One point added! Total Score: " + gScore)
}

function gTwo() {
  gScore += 2
  document.getElementById("guestscore").textContent = gScore
  console.log("Two points added! Total Score: " + gScore)
}

function gThree() {
  gScore += 3
  document.getElementById("guestscore").textContent = gScore
  console.log("Three points added! Total Score: " + gScore)
}


function reset() {
  hScore = 0
  gScore = 0  
  document.getElementById("homescore").textContent = hScore
  document.getElementById("guestscore").textContent = gScore
  console.log("Restart the count!!!!")
}