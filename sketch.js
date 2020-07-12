var gamestate=0,database,Playercount;
var game,form,player;
var playerinfo,distance=0;
var car,car2,car3,car4;
var carimg,car2img,car3img,car4img;
var track;
var ground;
var Cars=[];
function preload(){
carimg=loadImage("images/car1.png");
car2img=loadImage("images/car2.png");
car3img=loadImage("images/car3.png");
car4img=loadImage("images/car4.png");
track=loadImage("images/track.jpg");
ground=loadImage("images/ground.png");
} 
function setup(){
    createCanvas(displayWidth,displayHeight);
   var box = createSprite(200,250,50,50);
    database=firebase.database();
    game=new Game();
    game.readdata();
    game.Start();

}

function draw(){
   
  if(Playercount===4){
      game.Update(1);
  }
  if(gamestate===1){
      clear();
      game.play();
  }
 if(gamestate===2){
game.End();
 }
    
}

