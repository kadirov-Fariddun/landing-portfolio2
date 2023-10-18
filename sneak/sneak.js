const canvas = document.getElementById('game');// canvas block
const ctx = canvas.getContext('2d');// формат игры  2d


// поле  игры 
const ground = new Image();
ground.src = 'img/ground.png';


// еда змейки 
const foodImg = new Image();
foodImg.src = 'img/food.png';

// размер одного квадратика игрового поля
let box = 32;


// счет в игре
let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box 
};

let sneak = [];
sneak[0] = {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener('keydown', direction);

let dir


function direction(event) {
    if(event.keyCode === 37 && dir !== 'right'){
        dir = 'left';
    }
    else if(event.keyCode === 38 && dir !== 'down' ){
        dir = 'up';
    }
    else if(event.keyCode === 39 && dir !== 'left'){
        dir = 'right';
    }
    else if(event.keyCode === 40 && dir !== 'up'){
        dir = 'down';
    };
}

 function eatTail(head,arr) {
        for (let i = 0; i < arr.length; i++) {
            if(head.x === arr[i].x && head.y === arr[i].y){
                clearInterval(game);
                alert('GAME OVER!!!');
            }
        }
 }



function drawGame() {
    ctx.drawImage(ground,0,0);

    ctx.drawImage(foodImg, food.x, food.y);


    for (let i = 0; i < sneak.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'red';
        ctx.fillRect(sneak[i].x, sneak[i].y, box, box); 
    }


    ctx.fillStyle = 'white';
    ctx.font = '50px Arila';
    ctx.fillText(score, box * 2.5, box * 1.7);

    let sneakX = sneak[0].x;
    let sneakY = sneak[0].y;
    

    if(sneakX === food.x && sneakY === food.y){
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box 
        };
    }
    else{
        sneak.pop();
    }


    if (sneakX < box || sneakX > box * 17 || sneakY < 3 * box || sneakY > box * 17) {
        clearInterval(game);
        alert('GAME OVER!!!');
    }

    if(dir === 'left') sneakX -= box;
    if(dir === 'right') sneakX += box;
    if(dir === 'up') sneakY -= box;
    if(dir === 'down') sneakY += box;

    let newHead = {
        x: sneakX,
        y: sneakY
    };
    eatTail(newHead,sneak);
    sneak.unshift(newHead);

};

let game = setInterval(drawGame,100);