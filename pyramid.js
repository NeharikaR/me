class Blocks{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      if (this.body.speed<5){
        push();
        fill("red")
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y,this.width,this.height)
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
      
    }

    score(){
      if(this.Visiblity<0 && this.Visiblity>-185){
        score++
      }
    }
}
