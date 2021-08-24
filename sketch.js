const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var elsa;
var distance;
var gameState = "onSling"
var divisions =[];
var x=5;
var y=5;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");

     elsaimgd=loadImage("sprites/elsaf.png");
    elsaimgu=loadImage("sprites/elsab.png");
    elsaimgl=loadImage("sprites/elsal.png");
    elsaimgr=loadImage("sprites/elsar.png");
}

function setup(){
    var canvas = createCanvas(1365,653);
    engine = Engine.create();
    world = engine.world;

    //wall1
      for (var k = 683; k <=2000; k = k + 2000) {
        divisions.push(new Divisions(k, 80, 1100, 10));
      }
    //wall2
      for (var k = 138; k <=2400; k = k + 2400) {
        divisions.push(new Divisions(k, 369, 10, 355));
      }
    //wall3
      for (var k = 683; k <=3200; k = k + 3200) {
        divisions.push(new Divisions(k, 550, 1100, 10));
       }
    //wall4
      for (var k = 1228; k <=4000; k = k + 4000) {
        divisions.push(new Divisions(k, 445, 10, 200));
      }
    //wall5
      for (var k = 138; k <=4800; k = k + 4800) {
        divisions.push(new Divisions(k, 110, 10,50));
      }
    //wall6
      for (var k = 1228; k <=5600; k = k + 5600) {
        divisions.push(new Divisions(k, 185, 10, 200));
      }
    //obs1
      for (var k = 1000; k <=6400; k = k + 6400) {
        divisions.push(new Divisions(k, 455, 10, 180));
      }
    //obs2
      for (var k = 600; k <=7200; k = k + 7200) {
        divisions.push(new Divisions(k, 455, 10, 180));
      }
    //obs3
      for (var k = 800; k <=9000; k = k + 9000) {
        divisions.push(new Divisions(k, 390 ,10, 180));
      }
   //obs4
      for (var k = 800; k <=9000; k = k + 9000) {
        divisions.push(new Divisions(k, 300 ,500, 10));
      }
          //obs5
          for (var k = 350; k <=6400; k = k + 6400) {
            divisions.push(new Divisions(k, 350, 280, 10));
          }
        //obs6
          for (var k = 490; k <=7200; k = k + 7200) {
            divisions.push(new Divisions(k, 220, 10, 270));
          }
        //obs7
          for (var k = 1100; k <=9000; k = k + 9000) {
            divisions.push(new Divisions(k, 160 ,10, 150));
          }
       //obs8
          for (var k = 250; k <=9000; k = k + 9000) {
            divisions.push(new Divisions(k, 245 ,10, 200));
          }
          //obs9
          for (var k = 330; k <=7200; k = k + 7200) {
            divisions.push(new Divisions(k, 220, 150, 10));
          }
               //obs10
               for (var k = 800; k <=9000; k = k + 9000) {
                divisions.push(new Divisions(k, 220 ,10, 150));
              }
           //obs11
              for (var k = 923; k <=9000; k = k + 9000) {
                divisions.push(new Divisions(k, 200 ,235, 10));
              }
                 //obs12
                 for (var k = 1080; k <=9000; k = k + 9000) {
                  divisions.push(new Divisions(k, 450 ,150, 10));
                }
             //obs11
                for (var k = 677; k <=9000; k = k + 9000) {
                  divisions.push(new Divisions(k, 200 ,235, 10));
                }
                elsa = new Elsa();
                
              
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);

    keyPressed();  
    
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }
    elsa.display(); 
   
}

// function mouseDragged(){
//     if(gameState!=="launched"){
//         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//     }
//    }


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }

 function keyPressed(){
     if(keyCode === LEFT_ARROW){
      image( elsaimgl,60,60)
     // Matter.Body.applyForce(elsa.body,elsa.body.position,{x:-50,y:0});
     }

    if(keyCode === UP_ARROW ){
      image( elsaimgu,60,60) 
    //Matter.Body.applyForce(elsa.body,elsa.body.position,{x:0 ,y:-5});
    }

    if(keyCode === RIGHT_ARROW){
      image( elsaimgr,60,60) 
     // Matter.Body.setPosition(elsa.body, {'x': elsa.x+x , 'y': elsa.y});
    }

    if(keyCode === DOWN_ARROW){
     // image( elsaimgd,60,60) 
      Matter.Body.setVelocity(elsaimgd, { x: 0, y: 10 });
    }
  }