class LOGIN{
    constructor(){
    this.input=createInput("").attribute("placeholder","Write your name ");
    this.playButton=createButton("Join the room");
    this.title=createElement("h2");
    this.greeting=createElement("h2");
    this.image=loadImage("assets/FTF.gif");
    this.reset=createButton("RESET");
    }
    setElementPosition(){
        this.input.position(width/2-100,height/2+100);
        this.playButton.position(width/2-90,height/2+170);
        this.title.position(100,100);
        this.greeting.position(width/2-300,height/2+100)
        this.reset.position(200,200);
    }
    setElementStyle(){
      this.input.class("input");
      this.playButton.class("button");  
      this.greeting.class("greeting");
      this.title.class("gameTitle");
      this.reset.class("button")

    }
    hide(){
      this.playButton.hide();
      this.input.hide();
      this.greeting.hide();
          }
          mousePress(){
            this.playButton.mousePressed(()=>{
              this.playButton.hide();
              this.input.hide();
              var message=`Welcome ${this.input.value()}<br> Waiting for players to join`;
              this.greeting.html(message);
              playerCount++;
              player.updateCount(playerCount);
            })
          }
    display(){
      image(this.image,0,0,windowWidth,windowHeight);
    this.setElementPosition();
    this.setElementStyle();
    this.mousePress();
    this.reset.mousePressed(()=>{
      game.updateState(0);
      player.updateCount(0);
    });
    }
    
}