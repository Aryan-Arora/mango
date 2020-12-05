class ground{
    constructor(x,y){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,16000,5,options)
World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, 16000,5);
      }
}