// ---------------------VARIABLES------------------------
const images = [
  'GA-building1.png', 'haunted-house.png', 'player.png', 
  'road.jpg', 'classroom.jpg', 'computer-lab.jpg','GA-inside.png','GA-room1.jpg','inside-house.jpg']

const start = {
  background: images[3],
  option1: images[1],
  option2: images[0],
}

// changeBackground(8)

// const hauntedHouse = {
//   background: images[8],
//   option1: images[],
//   option2: images[]
// }

// const GABuilding = {
//   background: images[5],
//   option1: images[],
//   option2: images[]
// }




const scenario = [0,1,2,3,4,5,6,7,8]


// ----------------EVENT LISTENERS AND DOM STUFF----------


const GA = document.querySelector('#GA-building')

const HH = document.querySelector('#haunted-house')

const player = document.querySelector('#player-figure')

GA.addEventListener('click', () => {
  
})

HH.addEventListener('click', () => {
  
})

player.addEventListener('click', () => {
  
})




// -------------------FUNCTIONS---------------------------

function init() {
  changeBackground(3)
  changeOption1()
  changeOption2()
  changeMessage()
}

function render() {

}

a()
// changeOption1('#haunted-house', images[5])
function a (evt) {
  let img = document.createElement('img')
  img.src = `../assets/images/computer-lab.jpg`
  img.id = "hh"
}

function changeBackground(evt) {
  document.body.style.backgroundImage = `url("../assets/images/${images[evt]}")`
}


function changeOption1(remove, add) {
  let image1 = document.querySelector(remove)
  image1.parentNode.removeChild(image1)
  a(add)
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