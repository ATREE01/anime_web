/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];

let gameframe = 0;

class Enemy {
    constructor(){
        this.image = new Image();
        this.image.src = 'game_img/enemy1.png';
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 6 + 1);
    }
    update(){
        this.x += Math.random() * 15 - 7.5;
        this.y += Math.random() * 15 - 7.5;
        if(gameframe % this.flapSpeed === 0)
            this.frame++;
        this.frame %= 4;
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0,this.spriteWidth, this.spriteHeight, 
        this.x, this.y, this.width, this.height);
    }
}

for(let i = 0 ; i < numberOfEnemies; i++)
   enemiesArray.push(new Enemy());

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameframe++;
    requestAnimationFrame(animate);
}

animate();

console.log();