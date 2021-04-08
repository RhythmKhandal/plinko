 class Plinko{
 constructor(x,y){

     var opt={
         isStatic:true
     }

     
     this.body=Matter.Bodies.circle(x,y,17,opt)
     //this.x=x
     //this.y=y
    this.radius=17

    Matter.World.add(world,this.body)
 }

 display(){

    
     ellipseMode(CENTER)
     ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
 }



 }

