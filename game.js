class GAME{
    constructor(){
    this.fc=loadImage("assets/Football Court.webp");
   
    }
    
    getState(){
    database.ref("gameState").on("value",function(data){
    gameState=data.val();
    });
    }
    updateState(state){
    database.ref("/").update({gameState:state});
    }
    start(){
    if (gameState==0){
    login=new LOGIN();
    login.display();
    player=new PLAYER();
    player.getCount();
    
    }
    }
    
    play(){
    login.hide();
    image(this.fc,0,0,displayWidth,displayHeight);
    
    
    }
}