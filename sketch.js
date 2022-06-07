

var naveImg, nave;
var alienigena1, alienigena2, alienigena3, alienigena4;
var meteoro1, meteoro2;
var estrelas;
var satel;
var back;
var ba;
var vida = 150;
var score = 0;
var groupM, groupA1, groupA2, groupA3, groupA4, groupE, groupB;
var stage = true;


var engine, world;

function preload() {
  naveImg = loadImage("nave.png");
  alienigena1 = loadImage("Alienigena verde.png");
  alienigena2 = loadImage("Alienigena roxo.png");
  alienigena3 = loadImage("Alienigena azul.png");
  alienigena4 = loadImage("Alienigena cinza.png");
  estrelas = loadImage("estrela.png");
  meteoro1 = loadImage("meteoro.png");
  meteoro2 = loadImage("meteoro 2.png");
  satel = loadImage("satellite.png");
  back = loadImage("background.jpg");
}

function setup() {
  createCanvas(600,1000);

   ba = createSprite(300,500);
  ba.addImage("back",back);
  ba.scale = 1.5;
  nave = createSprite(300,890, 0, 0);
  nave.addImage("naveImg",naveImg);
  nave.scale = 0.15;

  groupA1 = new Group();
  groupA2 = new Group();
  groupA3 = new Group();
  groupA4 = new Group();
  groupM = new Group();
  groupE = new Group();
  groupB = new Group();


 


}

function draw() {
  background(189);
  if(stage){
     move();
     if(keyDown(UP_ARROW)){
       ba.y += 5;
       if(ba.y>1000){
         ba.y = 500;
       }
       meteoro();
       alien();
       estrela();
    }
    if(nave.isTouching(groupM)){
      vida -= 10;
    }
    if(nave.isTouching(groupA1)){
      vida += 5;
    }
    if(nave.isTouching(groupA2)){
      score += 35;
    }
    if(nave.isTouching(groupA3)){
      groupB.setVelocityYEach(15);
    }
    if(nave.isTouching(groupA4)){
      groupM.destroyEach();

    }
    if(nave.isTouching(groupE)){
      score += 20;
    }
  }
  

 drawSprites();
 
}

function move(){

  if(keyDown(LEFT_ARROW)){
     nave.x -= 5;
  }

  if(keyDown(RIGHT_ARROW)){
    nave.x += 5;
  }
}

function meteoro(){

  if(frameCount%80==0){
   var me = createSprite(random(100,500), -50);
   me.velocityY = 5;
   switch(Math.round(random(1,2))){
     case 1: me.addImage("meteoro", meteoro1); 
     me.scale = 0.12;
     break;
     case 2: me.addImage("meteoro", meteoro2); 
     me.scale = 0.20;
     break;
     case 2: me.addImage("meteoro", meteoro2); 
     me.scale = 0.20;
     break;
     
    
   }
   groupM.add(me);
   
  }
}

function alien(){

  if(frameCount%100==0){
   var A = createSprite(random(100,500), -50);
   A.velocityY = 5;
   switch(Math.round(random(1,4))){

     case 1: A.addImage("alienigena", alienigena1); 
     groupA1.add(A);
     A.scale = 0.10;
     break;

     case 2: A.addImage("alienigena", alienigena2); 
     groupA2.add(A);
     A.scale = 0.10;
     break;

     case 3: A.addImage("alienigena", alienigena3); 
     groupA3.add(A);
     A.scale = 0.10;
     break;

     case 4: A.addImage("alienigena", alienigena4); 
     groupA4.add(A);
     A.scale = 0.10;
     break;
    
   }

   
  }
}

function estrela(){

  if(frameCount%50==0){
   var es = createSprite(random(100,500), -50);
   es.velocityY = 5;
   groupE.add(es);
   es.addImage("estrela", estrelas);
   es.scale = 0.05;
   
  }
}



