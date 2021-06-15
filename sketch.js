var canvas,backgroundImage,bandit,knight,bandit2,bandit3,boss;
var banditImg,bandit2Img,bandit3Img,bossImg,knightImg;
function preload(){
    banditImg = loadImage("Images/bandit.png");
    bandit2Img = loadImage("Images/bandit2.png");
    bandit3Img = loadImage("Images/bandit3.png");
    bossImg = loadImage("Images/boss.png");
    knightImg = loadImage("Images/knight.png");

}

function setup(){
    createCanvas(1200,800);
    var knight = createSprite(750,600,50,50);
    knight.addAnimation("knight",knightImg)
}

function draw(){
    background("white")
    drawSprites();
}