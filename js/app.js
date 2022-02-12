// ---------------------VARIABLES------------------------
let lvlId = null

const images = [
  'GA-building1.png', 'haunted-house.png', 'player.png', 
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg','GA-inside.png','GA-room1.jpg','inside-house.jpg', 'portal.png']


const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
  message: "Make your choice and stop bothering me",
  level: 'lvl-0',
}

// changeBackground(8)

const hauntedHouse = {
  background: images[8],
  option1: images[9],
  option2: images[9],
  message: "I probably wouldn't choose either of them if i were you",
  level: 'lvl-1',
}

const GABuilding = {
  background: images[5],
  option1: images[9],
  option2: images[9],
  message: "Maybe...you should have chosen Flatiron?",
  level: 'lvl-2',
}

const classroom = {
  background: images[4],
  option1: images[9],
  option2: images[9],
  message: "Can't believe it actually worked",
  level: 'lvl-5',
}





//---------------------CACHED ELEMENT REFERENCES-----


const player = document.querySelector('#player-figure')

const option1 = document.querySelector("#option1")

const option2 = document.querySelector("#option2")

const message = document.querySelector("#message")

let test = document.querySelector('p')

// ----------------EVENT LISTENERS---------------

option1.addEventListener('click', () => {
  if (lvlId === 'lvl-2') {
    replace(classroom)
  } else if (lvlId === 'lvl-0') {
    replace(hauntedHouse)
  }
})

option2.addEventListener('click', () => {
  
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
  let lvlId = document.querySelector(`#${obj.level}`)
  document.createElement('div', { id : `${obj.level}`})
  return lvlId
}

function webcamEnding() {

}

function replay() {
  init()
}