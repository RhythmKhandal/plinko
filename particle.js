class Particle{
constructor(x,y){

    var opt={
        isStatic:true
    }

this.body=Bodies.circle(x,y,15,opt)
this.color=color(random(0,255), random(0,255), random(0,255))
this.radius=15

World.add(world,this.body)
}

display(){

ellipseMode(CENTER)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)


}






}