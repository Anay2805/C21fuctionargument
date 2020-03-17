var fixedRect, movingRect, box1, box2, box3, box4;
function setup() {
  createCanvas(500,400);
  movingRect = createSprite(150, 200, 70, 20);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
box1 = createSprite(100, 100, 50, 50 );
box1.shapeColor = "green";

box2 = createSprite(200, 100, 40, 50 );
box2.shapeColor = "green";

box3 = createSprite(300, 100, 50, 60 );
box3.shapeColor = "green";

box4 = createSprite(400, 100, 55, 50 );
box4.shapeColor = "green";

  fixedRect = createSprite(130, 270, 30, 50);
  fixedRect.shapeColor = "green";
  
}

function draw() {
  background(0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
 // isTouching(movingRect, box3);
  //sTouching(movingRect, box4);  
  //isTouching(movingRect, box1);  
  //isTouching(movingRect, fixedRect);  
  
  if(isTouching(movingRect, box2)){
    movingRect.shapeColor = "red";
    box2.shapeColor = "red";

  }

  else {
   
    movingRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }


  drawSprites();
}

function isTouching(obj1, obj2){
  
if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2 
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2 
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2 
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2)
     { 
       return true;

      } 
      
  else { 
     
    return false;
  }
}




















