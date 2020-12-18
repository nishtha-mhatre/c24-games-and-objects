//class className
class Ground{
    constructor(){              //function setup()
        //this = reperesent the object of the class
        var options ={
            isStatic: true
        }
    
       this.body = Bodies.rectangle(200,390,400,20,options);
        World.add(world,this.body);
    }

    display(){                  //function draw()
        var pos = this.body.position;
        fill("brown");
        stroke ("yellow");
        strokeWeight(3);
        rectMode(CENTER);
        rect( pos.x, pos.y,400,20);   

    }
}