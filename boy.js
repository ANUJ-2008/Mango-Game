class Boy 
{
  constructor(x, y) 
  {
    var options = 
    {
        'restitution':0.0,
        'friction':0.3,
        'density':1.0

    }
    this.body = Bodies.rectangle(x, y,50,50, options);
    
    World.add(world, this.body);
  }
  display()
  {
    this.image=loadImage("boy.png")
    var pos =this.body.position;
    var angle = this.body.angle;
    fill("green")
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}