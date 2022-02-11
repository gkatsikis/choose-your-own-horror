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



function changeBackground(obj) {
  document.body.style.backgroundImage = `url("../assets/images/${obj.background}")`
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
  changeOption1(obj)
  changeOption2(obj)
  changeMessage(obj)
}


// changeOption1('#haunted-house', images[5])
function changeImageSrc (evt, newSrc) {
  evt.src=`../assets/images/${newSrc}`
}




function changeOption1(remove, add) {
  let image1 = document.querySelector(remove)
  image1.parentNode.removeChild(image1)
}

function changeOption2(evt) {

}

function changeMessage(evt) {

}

function webcamEnding() {

}

function replay() {
  init()
}