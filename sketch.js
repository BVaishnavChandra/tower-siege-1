const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon , polygon_img , polygon_options;
var MainGround , SubGround1 , SubGround2 ;


function preload() {

 polygon_img = loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;


    MainGround = new Ground(700,height,1400,40);

    SubGround1 = new Ground(550,550,380,20);
    SubGround2 = new Ground(1050,300,380,20);

  
    var polygon_options = {

        restitution : 1.0,
        friction:1.0,
        density:1.0 }


    polygon = Bodies.circle(50,600,20 , polygon_options);
    World.add(world , polygon);

    slingShot= new SlingShot(this.polygon , {x:200 , y:300});

    Block1 = new GreenBlock(430,500,40 ,50);
    Block2 = new GreenBlock(510,500,40 ,50);
    Block3 = new GreenBlock(550,500,40 ,50);
    Block4 = new GreenBlock(590,500,40 ,50);
    Block5 = new GreenBlock(630,500,40 ,50);
    Block6 = new GreenBlock(670,500,40 ,50);
    Block7 = new GreenBlock(470,500,40 ,50);
    //Block8 = new Block(450,500,40 ,50);
    
    //Block9 = new Block(450,400,40 ,50);
    Block10 = new BlueBlock(470,400,40 ,50);
    Block11 = new BlueBlock(510,400,40 ,50);
    Block12 = new BlueBlock(550,400,40 ,50);
    Block13 = new BlueBlock(590,400,40 ,50);
    Block14 = new BlueBlock(630,400,40 ,50);  

    Block15 = new PinkBlock(510,300,40 ,50);
    Block16 = new PinkBlock(550,300,40 ,50);
    Block17 = new PinkBlock(590,300,40 ,50);
    Block18 = new RedBlock(550,200,40 ,50);  

    Block19 = new GreenBlock(920,200,40 ,50);
    Block20 = new GreenBlock(960,200,40 ,50);
    Block21 = new GreenBlock(1000,200,40 ,50);
    Block22 = new GreenBlock(1040,200,40 ,50);
    Block23 = new GreenBlock(1080,200,40 ,50);
    Block24 = new GreenBlock(1120,200,40 ,50);
    Block25 = new GreenBlock(1160,200,40 ,50);

    Block26 = new BlueBlock(1120,100,40,50);
    Block27 = new BlueBlock(1080,100,40,50);
    Block28 = new BlueBlock(1040,100,40,50);
    Block29 = new BlueBlock(1000,100,40,50);
    Block30 = new BlueBlock(960,100,40,50);

    Block31 = new PinkBlock(1000,0,40,50)
    Block32 = new PinkBlock(1040,0,40,50)
    Block33 = new PinkBlock(1080,0,40,50)
    Block34 = new RedBlock(1040,-100,40,50)


}



function draw(){
    background("black")
    Engine.update(engine);

    fill("white");
    textSize(32)   
    textFont("rock well extra bold")  
    text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks" , 150 ,50);
    
    imageMode(CENTER);
    image(polygon_img , polygon.position.x , polygon.position.y , 60 , 60);

    MainGround.display();
    SubGround1.display();
    SubGround2.display();
   
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    //Block8.display();

    //Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();

    Block15.display();
    Block16.display();
    Block17.display();
    Block18.display();

    Block19.display();
    Block20.display();
    Block21.display();
    Block22.display();
    Block23.display();
    Block24.display();
    Block25.display();

    Block26.display();
    Block27.display();
    Block28.display();
    Block29.display();
    Block30.display();
    Block31.display();
    Block32.display();
    Block33.display();
    Block34.display();


    slingShot.display();

}


 function mouseDragged(){

   Matter.Body.setPosition(this.polygon ,{x:mouseX , y:mouseY});

}

 function mouseReleased(){

    slingShot.fly();

}

