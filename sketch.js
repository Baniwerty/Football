const Engine = Matter.Engine; const World= Matter.World; const Bodies = Matter.Bodies; const Constraint = Matter.Constraint;
var engine,world;
var database,game,player,login,ground;
var gameState=0;
var playerCount=0;


function preload(){

}

function setup(){
createCanvas(windowWidth,windowHeight);
database=firebase.database();
engine = Engine.create(); world = engine.world;
game=new GAME();
game.getState();
game.start();
drawPlayers();
}


function draw(){
Engine.update(engine);
drawSprites()
   football.display();
if(playerCount==2){
game.updateState(1);
}
if (gameState==1){

game.play();


}


}
function drawPlayers(){
football=new F(200,200,10);

}