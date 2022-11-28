//Game constant and variable
let direction = {x:0 , y:0};
const foodSound = new Audio('../music/food.mp3');
const gameoverSound = new Audio('../music/gameover.mp3');
const moveSound = new Audio('../music/move.mp3');
const musicSound = new Audio('../music/music.mp3');
let lasttimepant = 0;
let speed = 2;

let snakeArr = [
    {x: 13, y : 15}
]
// game function
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
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
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })

}

//main logic start here

window.requestAnimationFrame(main);