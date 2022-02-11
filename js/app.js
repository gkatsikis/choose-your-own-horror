// ---------------------VARIABLES------------------------
const images = [
  'GA-building1.png', 'haunted-house.png', 'player.png', 
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg','GA-inside.png','GA-room1.jpg','inside-house.jpg', 'portal.png']


const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
  message: "Make your choice and stop bothering me",
}

// changeBackground(8)

const hauntedHouse = {
  background: images[8],
  option1: images[9],
  option2: images[9],
  message: "I probably wouldn't choose either of them if i were you",
}

const GABuilding = {
  background: images[5],
  option1: images[9],
  option2: images[9],
  message: "Maybe...you should have chosen Flatiron?"
}







//---------------------CACHED ELEMENT REFERENCES-----


const player = document.querySelector('#player-figure')

const option1 = document.querySelector("#option1")

const option2 = document.querySelector("#option2")


// ----------------EVENT LISTENERS---------------

option1.addEventListener('click', () => {
  
})

option2.addEventListener('click', () => {
  
})

player.addEventListener('click', () => {
  
})




// -------------------FUNCTIONS---------------------------

function init() {
  
}

function render() {

}

function replace (obj) {
  changeBackground(obj) // done
  changeOption1(obj) // done
  changeOption2(obj) // done
  changeMessage(obj)
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

}

function webcamEnding() {

}

function replay() {
  init()
}