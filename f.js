class F{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            density:0.5,
            friction:0.9,
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("assets/#.PNG");
        World.add(world,this.body);
        this.r=r
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
    }
}   
 