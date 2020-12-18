//class className
class Box{
    constructor(x,y,width,height){              //function setup()
        //this = reperesent the object of the class
        var options ={
            isStatic: false
        }
    
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
        World.add(world,this.body);
    }

    display(){                  //function draw()
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();

        fill("green");
        stroke ("blue");
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        rectMode(CENTER);
        rect( 0,0,this.width,this.height);   
        pop();
        //this.body.position.x
        //this.width,this,height

    }
}
