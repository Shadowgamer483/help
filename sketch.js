var hpenemy,hpplayer,enemy
var hpimage,hpplayerimage,enemyimage
function preload(){
 hpimage= loadImage("images/enemy hp.png")
 hpplayerimage= loadImage("images/player hp.png")
enemyimage= loadAnimation("images/m1.png","images/m2.png","images/m3.png","images/m4.png",
"images/m5.png","images/m6.png","images/m7.png","images/m8.png","images/m9.png","images/m10.png",
"images/m11.png")

}
function setup(){
  createCanvas(displayWidth,displayHeight)
hpplayer=createSprite(displayWidth/9,70,10,10)
hpplayer.addImage(hpplayerimage);
hpplayer.scale=0.2;
enemy=createSprite(displayWidth/2,displayHeight-100,10,10)
enemy.addAnimation("enemy",enemyimage);




}
function draw() {
background("black");
  drawSprites();




  
}













