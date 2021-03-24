class Drop{
    constructor(x,y){

    var options = {
        friction: 3,
        isStatic: false
    }

    this.body = Bodies.circle(x,y,5,options);
    this.x = x;
    this.y = y;
    this.r = 10;     
    World.add(world,this.body);
    }
 
    display(){

    var pos = this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.r,this.r);
    }
}