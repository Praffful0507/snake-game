//Game constant and variable
let direction = {x:0 , y:0};
const foodSound = new Audio('food.mp3');
const gameoverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let lasttimepant = 0;
let speed = 2;

let snakeArr = [
    {x: 13, y : 15},
    {x:14, y:15}
]
let food = {x:5, y : 7};
// game function
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if((ctime - lasttimepant) /1000 < 1/speed){
        return;
    }
    lasttimepant = ctime;
    gameEngine();
}

function gameEngine(){
    //updating snake array and food 

    // display the snake 
    board.innerHTML = "";
    snakeArr.forEach((e , index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
        snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })

    //display the food 
    foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);

}

//main logic start here

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
  direction = {x:0 , y: 1};
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
        console.log("ArrowUP");
        break;
    case "ArrowDown":
        console.log("ArrowDOWN");
        break;
    case "ArrowRight":
        console.log("ArrowRIGHT");
        break;
    case "ArrowLeft":
        console.log("ArrowLEFT");
        break;
    default:
        break;
  }  
})