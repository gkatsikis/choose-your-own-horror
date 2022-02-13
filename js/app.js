// ---------------------VARIABLES------------------------
let lvlId = null

const images = [
  'GA-building1.png', 'haunted-house.png', 'player.png', 
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg','GA-inside.png','GA-room1.jpg','inside-house.jpg', 'portal.png']


const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
  message: "You wake up on a dark road with two choices before you...do you enter the house that screams of malevolence...or do you enter the building that offers knowledge that leads one to madness?",
  level: 0,
}

const hauntedHouse = {
  background: images[8],
  option1: images[9],
  option2: images[9],
  message: "I probably wouldn't choose either of them if i were you",
  level: 1,
}

const GABuilding = {
  background: images[5],
  option1: images[9],
  option2: images[9],
  message: "Maybe...you should have chosen Flatiron?",
  level: 2,
}

const classroom = {
  background: images[4],
  option1: images[9],
  option2: images[9],
  message: "Can't believe it actually worked",
  level: 5,
}

const GAInside = {
  background: images[6],
  option1: images[9],
  option2: images[9],
  message: "Is it working????",
  level: 6,
}

// const basement = {
//   background:
//   option1:
//   option2:
//   message:
//   level: 3
// }

// const upstairs = {
//   background:
//   option1:
//   option2:
//   message:
//   level: 4
// }

// const escape = {
//   background:
//   option1:
//   option2:
//   message:
//   level: 7
// }

// const final = {
//   background:
//   option1:
//   option2:
//   message:
//   level: 8
// }


//---------------------CACHED ELEMENT REFERENCES-----


const player = document.querySelector('#player-figure')

const option1 = document.querySelector("#option1")

const option2 = document.querySelector("#option2")

const message = document.querySelector("#message")

// ----------------EVENT LISTENERS---------------

option1.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(classroom)
  } else if (lvlId === 1) {
    replace(basement)
  } else if (lvlId === 0) {
    replace(hauntedHouse)
  }
})

option2.addEventListener('click', () => {
  if (lvlId === 2) {
    replace(GAInside)
  } else if (lvlId === 1) {
    replace(upstairs)
  } else if (lvlId === 0) {
    replace(GABuilding)
  }
})

player.addEventListener('click', () => {
  
})




// -------------------FUNCTIONS---------------------------
init()

function init() {
  replace(start)
}

function replace(obj) {
  changeLevel(obj)
  changeBackground(obj) // done
  changeOption1(obj) // done
  changeOption2(obj) // done
  changeMessage(obj) // done
}

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

// function webcamEnding() {

// }

function replay() {
  init()
}