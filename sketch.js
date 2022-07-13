var sp
var spImg,player,playerImg,e1,e2,e3,e1img,e2img,e3img,bu
var bulletGroup,enemy1Group,enemy2Group,enemy3Group
var score = 0 
function preload(){
spImg = loadImage("space10.png")
playerImg = loadImage("enemy40.png")
e1img = loadImage("enemy10.png")
e2img = loadImage("enemy20.png")
e3img = loadImage("enemy30.png")
}


function setup(){
  createCanvas(400,400)  
  sp = createSprite(200,200,400,400)
  sp.addImage(spImg)
  sp.velocityY = 4
  sp.scale = 3
  
  player = createSprite(250,350,20,20)
  player.addImage(playerImg)
  player.x = mouseX

  bulletGroup = new Group()
  enemy1Group = new Group()
  enemy2Group = new Group()
  enemy3Group = new Group()

}

function draw(){
  background("white")
  player.x = mouseX
  if(sp.y > 600){
   sp.y = 200
  }
  
  var R = Math.round(random(1,3))
  console.log(R)
  if(frameCount% 80===0){
  if(R === 1){
    enemy1()
  }
  else if(R === 2){
    enemy2()
  }
  else {
    enemy3()
  }
}
if (keyDown('space')){
 bullet()
}
if(bulletGroup.isTouching(enemy1Group)){
enemy1Group.destroyEach();
bulletGroup.destroyEach();
score = score+1
}
if(bulletGroup.isTouching(enemy2Group)){
  enemy2Group.destroyEach();
  bulletGroup.destroyEach();
  score = score+1
  }
  if(bulletGroup.isTouching(enemy3Group)){
    enemy3Group.destroyEach();
    bulletGroup.destroyEach();
    score = score+1
    }     
  drawSprites()
  text(score,40,50) 
}

function enemy1 (){
  e1 = createSprite(random(50,350),0,10,10)
  e1.addImage(e1img)
  e1.velocityY = 3
  e1.lifetime = 135
  enemy1Group.add(e1)
}

function enemy2 (){
  e2 = createSprite(random(50,350),0,10,10)
  e2.addImage(e2img)
  e2.velocityY = 3
  e2.lifetime = 135
  enemy2Group.add(e2)
}

function enemy3 (){
  e3 = createSprite(random(50,350),0,10,10)
  e3.addImage(e3img)
  e3.velocityY = 3
  e3.lifetime = 135
  enemy3Group.add(e3)
}
function bullet(){
bu = createSprite(200,400,7,40)
bu.shapeColor = 'red'
bu.velocityY = -2
bu.x = player.x
bu.y = player.y
bulletGroup.add(bu)
}
//speed = distance time
