class Box {
constructor(x,y,width,height){
 var options={

   /* friction:0.05,
    density:0.5*/
 }

   
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    
this.body= Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.Visibility=255
}
display(){
    var pos =this.body.position;
   fill("pink")
  
 
    console.log(this.body.speed)
    if(this.body.speed<3)
{
  
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
else

World.remove(world,this.body)
push()
this.Visibility=this.Visibility-5
tint(255,this.Visibility)
rect(pos.x, pos.y, this.width, this.height);
pop()
}

}


