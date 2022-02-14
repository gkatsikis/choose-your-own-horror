// ---------------------VARIABLES------------------------
let lvlId = null

const images = [
  'GA-building1.png', 'haunted-house.png', 'player.png', 
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg',
  'GA-inside.png','GA-room1.jpg','inside-house.jpg', 
  'portal.png', 'basement.jpg', 'final.png', 
  'transparent.png']


const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
  message: "You wake up on a dark road with two choices before you...do you enter the house that screams of malevolence...or do you enter the building that offers knowledge unto madness?",
  level: 0,
  audio: 'ambience.mp3',
}

const hauntedHouse = {
  background: images[8],
  option1: images[9],
  option2: images[9],
  message: "Upon entering, you are confronted with disturbing figures and hear footsteps approaching. Do you head to the basement or run upstairs?",
  level: 1,
  audio: 'demongirl.mp3',
}

const GABuilding = {
  background: images[5],
  option1: images[9],
  option2: images[9],
  message: "Maybe...you should have chosen Flatiron?/n ",
  level: 2,
  audio: 'creaking-door.mp3'
}

const classroom = {
  background: images[4],
  option1: images[12],
  option2: images[12],
  message: "You have been found by the followers...they will now convert you...",
  level: 5,
  // audio: //chanting,
}

const GAInside = {
  background: images[6],
  option1: images[12],
  option2: images[12],
  message: "Ah, I see you've come to join us...welcome to level 6",
  level: 6,
  audio: 'heartbeat.mp3',
}

const basement = {
  background: images[10],
  option1:images[12],
  option2: images[12],
  message: "Why would you go into the basement of a house like this? This is where we like to play...",
  level: 3,
  audio: 'demongirl2.mp3',
}

const upstairs = {
  background: images[11],
  option1: images[9],
  option2: images[9],
  message: "You come upstairs and there's someone on the computer...do you try to climb out through the window or approach them?",
  level: 4,
  audio: 'ambience2.mp3',
}

const escapeRoom = {
  background: "",
  option1: images[12],
  option2: images[12],
  message: "I'm afraid you had a little fall... You survived to level 7",
  level: 7,
  audio: 'campy-laugh.mp3',
}

const final = {
  background: images[11],
  option1: images[12],
  option2: images[12],
  message: "Congratulations...you made it to the final level. Look behind you.",
  level: 8,
  audio: 'hell-ambience.mp3',
}


//---------------------CACHED ELEMENT REFERENCES-----


const player = document.querySelector('#player-figure')

const option1 = document.querySelector("#option1")

const option2 = document.querySelector("#option2")

const message = document.querySelector("#message")

const startBtn = document.querySelector("#start-game")

const replayBtn = document.querySelector("#replay")

// ----------------EVENT LISTENERS---------------

startBtn.addEventListener('click', init)

replayBtn.addEventListener('click', init)

option1.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(classroom)
  } else if (lvlId === 1) {
    replace(basement)
    replayBtn.style.display = "block"
  } else if (lvlId === 0) {
    replace(hauntedHouse)
  } else if (lvlId === 4) {
    replace(escapeRoom)
  }
})

option2.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(GAInside)
  } else if (lvlId === 1) {
    replace(upstairs)
  } else if (lvlId === 0) {
    replace(GABuilding)
  // } else if (lvlId === 4) {
  //   webcam.start()
  }
})

// player.addEventListener('click', () => {
  
// })




// -------------------FUNCTIONS---------------------------
// init()

function init() {
  replace(start)
  toggleStartBtn()
  toggleReplayBtn()
}

function replay() {
  toggleReplayBtn()
  toggleStartBtn()
}

function replace(obj) {
  changeLevel(obj)
  changeBackground(obj) // done
  changeOption1(obj) // done
  changeOption2(obj) // done
  changeMessage(obj) // done
  changeAudio(obj)
}

function toggleStartBtn(evt) {
  let switchBtn1 = startBtn.style.display = 'block' ? startBtn.style.display = 'none' : startBtn.style.display = 'block'
}

// toggleReplayBtn()
function toggleReplayBtn(evt) {
  let switchBtn2 = replayBtn.getAttribute('hidden') !== null ? replayBtn.removeAttribute('hidden') :  replayBtn.setAttribute('hidden', true)
  }
  // replayBtn.removeAttribute('hidden')
  // replayBtn.setAttribute('hidden', true)


function changeBackground(obj) {
  document.body.style.backgroundImage = `url("../assets/images/${obj.background}")`
}

function changeOption1(obj) {
  option1.src=`../assets/images/${obj.option1}`
}

function changeOption2(obj) {
  option2.src=`../assets/images/${obj.option2}`
}

function changeMessage(obj) {
  message.innerHTML = `${obj.message}`
}

function changeLevel(obj) {
  lvlId = obj.level
  return lvlId
}

function changeAudio(obj) {
    let audioFile = new Audio(`../assets/audio/${obj.audio}`)
    audioFile.volume = .25
    audioFile.play()
    audioFile.addEventListener('ended', () => {
      audioFile.currentTime = 0
      audioFile.play()
    }, false)
    }

// function webcamEnding() {

// }

function replay() {
  init()
}