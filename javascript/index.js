//Game constant and variable
let direction = {x:0 , y:0};
const foodSound = new Audio('./music/food.mp3');
const gameoverSound = new Audio('./music/gameover.mp3');
const moveSound = new Audio('./music/move.mp3');
const musicSound = new Audio('./music/music.mp3');
let lasttimepant = 0;
let score = 0;
let speed = 5;

let snakeArr = [
    {x: 13, y : 15}
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
function isCollide(snake) {
    //If you bump into yourself
    for(let i = 1; i< snakeArr.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
        // if you bump into the wall
        if(snake[0].x >= 18 || snake[0].x <= 0 && snake[0].y >= 18 || snake[0].y <= 0 ){
            return true;
        }
    }
}
function gameEngine(){
    //updating snake array and food 
    if(isCollide(snakeArr)){
        gameoverSound.play();
        musicSound.pause();
        direction = {x:0, y:0};
        alert("game over. press ony key to play again");
        snakeArr = [{x:13, y:15}];
        musicSound.play();
        score = 0;
    }
    // if you have eaten the food, increment the score and regenarate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
        score++;
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+ (b-a) * Math.random()), y: Math.round(a+ (b-a) * Math.random())}
    }

    // moving the snake 
    for (let i = snakeArr.length - 2 ; i >=  0; i--) {
        //const element = array[i]; 
        snakeArr[i+1] = {...snakeArr[i]};    
    }

    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;
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
        direction.x = 0;
        direction.y = -1;

        break;
    case "ArrowDown":
        console.log("ArrowDOWN");
        direction.x = 0;
        direction.y = 1;
        break;
    case "ArrowRight":
        console.log("ArrowRIGHT");
        direction.x = 1;
        direction.y = 0;
        break;
    case "ArrowLeft":
        console.log("ArrowLEFT");
        direction.x = -1;
        direction.y = 0;
        break;
    default:
        break;
  }  
})