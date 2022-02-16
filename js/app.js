// ---------------------VARIABLES------------------------
let lvlId = null

const images = [
  'GA-building1.png', 'haunted-house.png', 'player2.png',
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg',
  'GA-inside.png', 'GA-room1.jpg', 'inside-house.jpg',
  'portal.png', 'basement.jpg', 'final.png',
  'transparent.png', 'window.png', 'up-arrow.png', 'down-arrow.png']

const lvlAudio = {
  0: 'ambience.mp3',
  1: 'demongirl.mp3',
  2: 'creaking-door.mp3',
  3: 'demongirl2.mp3',
  4: 'ambience2.mp3',
  5: 'chanting.mp3',
  6: 'heartbeat.mp3',
  7: 'campy-laugh.mp3',
  8: 'hell-ambience.mp3',
}

let audioFile = new Audio('../assets/audio/ambience.mp3')

const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
  message: "You wake up on a dark road with two choices before you...do you enter the house that screams of malevolence...or do you enter the building where you faintly hear the sound of chanting?",
  level: 0,
  audio: 'ambience.mp3'
}

const hauntedHouse = {
  background: images[8],
  option1: images[14],
  option2: images[15],
  message: "Upon entering, you are confronted with disturbing figures and hear footsteps approaching. Do you run upstairs or head to the basement?",
  level: 1,
  audio: 'demongirl.mp3',
}

const GABuilding = {
  background: images[5],
  option1: images[12],
  option2: images[12],
  message: "Maybe...you should have chosen Flatiron? There's the sound of faint chanting. Do you head towards it or head away?",
  level: 2,
  audio: '',
}

const basement = {
  background: images[10],
  option1: images[12],
  option2: images[12],
  message: "Why would you go into the basement of a house like this? This is where we like to play...<br/> You have died horrifically.",
  level: 3,
  audio: 'demongirl2.mp3'
}

const upstairs = {
  background: images[11],
  option1: images[13],
  option2: images[12],
  message: "You come upstairs and there's someone on the computer...do you try to climb out through the window or approach them?",
  level: 4,
  audio: 'ambience2.mp3'
}

const classroom = {
  background: images[4],
  option1: images[12],
  option2: images[12],
  message: "You have been found by the followers...they will now convert you...<br/> You have died by not taking a break from coding",
  level: 5,
  audio: 'chanting2.mp3',
}

const GAInside = {
  background: images[6],
  option1: images[12],
  option2: images[12],
  message: "Ah, I see you've come to join us...congratulations on seeing the light<br/> You have survived",
  level: 6,
  audio: 'campy-laugh.mp3'
}

const escapeRoom = {
  background: images[3],
  option1: images[12],
  option2: images[12],
  message: "I'm afraid you had a little fall... watch your step next time...<br/> You have died by clumsiness",
  level: 7,
  audio: 'heartbeat.mp3'
}

const final = {
  background: images[11],
  option1: images[12],
  option2: images[12],
  message: "Congratulations...you made it to the final level. Look behind you<br/> <br/> <br/> <br/>You have died by...you'll see",
  level: 8,
  audio: 'hell-ambience.mp3'
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

replayBtn.addEventListener('click', replay)

option1.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(classroom)
    toggleReplayBtn()
  } else if (lvlId === 1) {
    replace(upstairs)
    player.setAttribute('hidden', true)
  } else if (lvlId === 0) {
    replace(hauntedHouse)
  } else if (lvlId === 4) {
    replace(escapeRoom)
    toggleReplayBtn()
  }
})

option2.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(GAInside)
    toggleReplayBtn()
  } else if (lvlId === 1) {
    replace(basement)
    player.setAttribute('hidden', true)
    toggleReplayBtn()
  } else if (lvlId === 0) {
    replace(GABuilding)
    option1.addEventListener('mouseover', chant)
  } else if (lvlId === 4) {
    replace(final)
    toggleReplayBtn()
    player.setAttribute('hidden', true)
  }
})

player.addEventListener('click', () => {
  audioFile = new Audio(`../assets/audio/breathing.mp3`)
  audioFile.volume = .25
  audioFile.play()
})

// -------------------FUNCTIONS---------------------------

function init() {
  replace(start)
  toggleStartBtn()
}

function replay() {
  toggleReplayBtn()
  replace(start)
  player.removeAttribute('hidden')
}

function replace(obj) {
  changeLevel(obj) // done
  changeBackground(obj) // done
  changeOption1(obj) // done
  changeOption2(obj) // done
  changeMessage(obj) // done
  changeAudio(obj) //done
}

function toggleStartBtn(evt) {
  let switchBtn1 = startBtn.getAttribute('hidden') === null ? startBtn.setAttribute('hidden', true) : startBtn.removeAttribute('hidden')
}

function toggleReplayBtn(evt) {
  let switchBtn2 = replayBtn.getAttribute('hidden') !== null ? replayBtn.removeAttribute('hidden') : replayBtn.setAttribute('hidden', true)
}

function changeBackground(obj) {
  document.body.style.backgroundImage = `url("../assets/images/${obj.background}")`
}

function changeOption1(obj) {
  option1.src = `../assets/images/${obj.option1}`
}

function changeOption2(obj) {
  option2.src = `../assets/images/${obj.option2}`
}

function changeMessage(obj) {
  message.innerHTML = `${obj.message}`
}

function changeLevel(obj) {
  lvlId = obj.level
  // audio[lvlId].pause()
  return lvlId
}

function chant() {
  let chanting = new Audio('../assets/audio/chanting.mp3')
  chanting.volume = .05
  chanting.play()
  setTimeout(() => {
    chant.chanting.stop()
  }, 1000)
}

function changeAudio(obj) {
  audioFile.pause()
  audioFile = new Audio(`../assets/audio/${obj.audio}`)
  audioFile.volume = .25
  audioFile.play()
  audioFile.addEventListener('ended', () => {
    audioFile.currentTime = 0
    audioFile.play()
  }, false)
}

