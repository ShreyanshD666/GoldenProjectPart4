var gameState = "start";
var bg_img, lvl1_img, lvl1_animation, character_img, character_backImg, character, character_walkForward, character_walkBackward, character_shootBackward, enemy_img, enemy_backImg, enemy_walkForward, enemy_walkBackward, storyImg, storyPg, health, healthBar1, healthBar2, healthBar3, healthBar4, healthBar5, healthBar6, healthBar7, GameOver_img, GameWon_img
var play, story, bg, character, enemy, GameOver, GameWon, mainMenu
var enemyGroup, enemyGroup2
var score=0;
var timer=0;
var count=0;

function preload() {
  bg_img = loadImage("Backgrounds/Title Screen/Title Screen.png");
  lvl1_img = loadAnimation("Backgrounds/Lvl 1/1.png","Backgrounds/Lvl 1/2.png", "Backgrounds/Lvl 1/3.png", "Backgrounds/Lvl 1/4.png", "Backgrounds/Lvl 1/5.png", "Backgrounds/Lvl 1/6.png", "Backgrounds/Lvl 1/7.png", "Backgrounds/Lvl 1/8.png")
  storyPg = loadImage("Backgrounds/Story/StoryPage.png")
  character_img = loadAnimation("Animations/Character Walking Forward/0.png")
  character_backImg = loadAnimation("Animations/Character Walking Backward/0.png")
  character_walkForward = loadAnimation("Animations/Character Walking Forward/0.png", "Animations/Character Walking Forward/1.png", "Animations/Character Walking Forward/2.png", "Animations/Character Walking Forward/3.png", "Animations/Character Walking Forward/4.png", "Animations/Character Walking Forward/5.png", "Animations/Character Walking Forward/6.png", "Animations/Character Walking Forward/7.png", "Animations/Character Walking Forward/8.png")
  character_walkBackward = loadAnimation("Animations/Character Walking Backward/0.png", "Animations/Character Walking Backward/1.png","Animations/Character Walking Backward/2.png", "Animations/Character Walking Backward/3.png", "Animations/Character Walking Backward/4.png", "Animations/Character Walking Backward/5.png", "Animations/Character Walking Backward/6.png", "Animations/Character Walking Backward/7.png", "Animations/Character Walking Backward/8.png", )
  character_shootForward = loadAnimation("Animations/Character Forward Shooting/1-0.png", "Animations/Character Forward Shooting/1-1.png", "Animations/Character Forward Shooting/1-2.png", "Animations/Character Forward Shooting/1-3.png", "Animations/Character Forward Shooting/1-4.png", "Animations/Character Forward Shooting/1-5.png","Animations/Character Forward Shooting/1-6.png","Animations/Character Forward Shooting/1-7.png","Animations/Character Forward Shooting/1-8.png","Animations/Character Forward Shooting/1-9.png","Animations/Character Forward Shooting/1-10.png","Animations/Character Forward Shooting/1-11.png","Animations/Character Forward Shooting/1-12.png","Animations/Character Forward Shooting/1-13.png","Animations/Character Forward Shooting/1-14.png","Animations/Character Forward Shooting/1-15.png","Animations/Character Forward Shooting/1-16.png","Animations/Character Forward Shooting/1-17.png","Animations/Character Forward Shooting/1-18.png","Animations/Character Forward Shooting/1-19.png","Animations/Character Forward Shooting/1-20.png","Animations/Character Forward Shooting/1-21.png","Animations/Character Forward Shooting/1-22.png","Animations/Character Forward Shooting/1-23.png","Animations/Character Forward Shooting/1-24.png","Animations/Character Forward Shooting/1-25.png","Animations/Character Forward Shooting/1-26.png","Animations/Character Forward Shooting/1-27.png","Animations/Character Forward Shooting/1-28.png", "Animations/Character Forward Shooting/1-29.png", "Animations/Character Forward Shooting/1-30.png", "Animations/Character Forward Shooting/1-31.png", "Animations/Character Forward Shooting/1-32.png", "Animations/Character Forward Shooting/1-33.png","Animations/Character Forward Shooting/1-34.png","Animations/Character Forward Shooting/1-35.png","Animations/Character Forward Shooting/1-36.png","Animations/Character Forward Shooting/1-37.png","Animations/Character Forward Shooting/1-38.png","Animations/Character Forward Shooting/1-39.png","Animations/Character Forward Shooting/1-40.png","Animations/Character Forward Shooting/1-41.png","Animations/Character Forward Shooting/1-42.png","Animations/Character Forward Shooting/1-43.png","Animations/Character Forward Shooting/1-44.png","Animations/Character Forward Shooting/1-45.png","Animations/Character Forward Shooting/1-46.png","Animations/Character Forward Shooting/1-47.png","Animations/Character Forward Shooting/1-48.png","Animations/Character Forward Shooting/1-49.png","Animations/Character Forward Shooting/1-50.png","Animations/Character Forward Shooting/1-51.png","Animations/Character Forward Shooting/1-52.png","Animations/Character Forward Shooting/1-53.png","Animations/Character Forward Shooting/1-54.png","Animations/Character Forward Shooting/1-55.png","Animations/Character Forward Shooting/1-56.png","Animations/Character Forward Shooting/1-57.png","Animations/Character Forward Shooting/1-58.png","Animations/Character Forward Shooting/1-59.png","Animations/Character Forward Shooting/1-60.png","Animations/Character Forward Shooting/1-61.png","Animations/Character Forward Shooting/1-62.png","Animations/Character Forward Shooting/1-63.png","Animations/Character Forward Shooting/1-64.png","Animations/Character Forward Shooting/1-65.png","Animations/Character Forward Shooting/1-66.png","Animations/Character Forward Shooting/1-67.png", "Animations/Character Forward Shooting/1-68.png", "Animations/Character Forward Shooting/1-69.png", "Animations/Character Forward Shooting/1-70.png", "Animations/Character Forward Shooting/1-71.png", "Animations/Character Forward Shooting/1-72.png","Animations/Character Forward Shooting/1-73.png","Animations/Character Forward Shooting/1-74.png","Animations/Character Forward Shooting/1-75.png","Animations/Character Forward Shooting/1-76.png","Animations/Character Forward Shooting/1-77.png","Animations/Character Forward Shooting/1-78.png","Animations/Character Forward Shooting/1-79.png","Animations/Character Forward Shooting/1-80.png","Animations/Character Forward Shooting/1-81.png","Animations/Character Forward Shooting/1-82.png","Animations/Character Forward Shooting/1-83.png","Animations/Character Forward Shooting/1-84.png","Animations/Character Forward Shooting/1-85.png","Animations/Character Forward Shooting/1-86.png","Animations/Character Forward Shooting/1-87.png","Animations/Character Forward Shooting/1-88.png","Animations/Character Forward Shooting/1-89.png","Animations/Character Forward Shooting/1-90.png","Animations/Character Forward Shooting/1-91.png",)
  character_shootBackward = loadAnimation("Animations/Character Backward Shooting/1-0.png", "Animations/Character Backward Shooting/1-1.png", "Animations/Character Backward Shooting/1-2.png", "Animations/Character Backward Shooting/1-3.png", "Animations/Character Backward Shooting/1-4.png", "Animations/Character Backward Shooting/1-5.png","Animations/Character Backward Shooting/1-6.png","Animations/Character Backward Shooting/1-7.png","Animations/Character Backward Shooting/1-8.png","Animations/Character Backward Shooting/1-9.png","Animations/Character Backward Shooting/1-10.png","Animations/Character Backward Shooting/1-11.png","Animations/Character Backward Shooting/1-12.png","Animations/Character Backward Shooting/1-13.png","Animations/Character Backward Shooting/1-14.png","Animations/Character Backward Shooting/1-15.png","Animations/Character Backward Shooting/1-16.png","Animations/Character Backward Shooting/1-17.png","Animations/Character Backward Shooting/1-18.png","Animations/Character Backward Shooting/1-19.png","Animations/Character Backward Shooting/1-20.png","Animations/Character Backward Shooting/1-21.png","Animations/Character Backward Shooting/1-22.png","Animations/Character Backward Shooting/1-23.png","Animations/Character Backward Shooting/1-24.png","Animations/Character Backward Shooting/1-25.png","Animations/Character Backward Shooting/1-26.png","Animations/Character Backward Shooting/1-27.png","Animations/Character Backward Shooting/1-28.png", "Animations/Character Backward Shooting/1-29.png", "Animations/Character Backward Shooting/1-30.png", "Animations/Character Backward Shooting/1-31.png", "Animations/Character Backward Shooting/1-32.png", "Animations/Character Backward Shooting/1-33.png","Animations/Character Backward Shooting/1-34.png","Animations/Character Backward Shooting/1-35.png","Animations/Character Backward Shooting/1-36.png","Animations/Character Backward Shooting/1-37.png","Animations/Character Backward Shooting/1-38.png","Animations/Character Backward Shooting/1-39.png","Animations/Character Backward Shooting/1-40.png","Animations/Character Backward Shooting/1-41.png","Animations/Character Backward Shooting/1-42.png","Animations/Character Backward Shooting/1-43.png","Animations/Character Backward Shooting/1-44.png","Animations/Character Backward Shooting/1-45.png","Animations/Character Backward Shooting/1-46.png","Animations/Character Backward Shooting/1-47.png","Animations/Character Backward Shooting/1-48.png","Animations/Character Backward Shooting/1-49.png","Animations/Character Backward Shooting/1-50.png","Animations/Character Backward Shooting/1-51.png","Animations/Character Backward Shooting/1-52.png","Animations/Character Backward Shooting/1-53.png","Animations/Character Backward Shooting/1-54.png","Animations/Character Backward Shooting/1-55.png","Animations/Character Backward Shooting/1-56.png","Animations/Character Backward Shooting/1-57.png","Animations/Character Backward Shooting/1-58.png","Animations/Character Backward Shooting/1-59.png","Animations/Character Backward Shooting/1-60.png","Animations/Character Backward Shooting/1-61.png","Animations/Character Backward Shooting/1-62.png","Animations/Character Backward Shooting/1-63.png","Animations/Character Backward Shooting/1-64.png","Animations/Character Backward Shooting/1-65.png","Animations/Character Backward Shooting/1-66.png","Animations/Character Backward Shooting/1-67.png", "Animations/Character Backward Shooting/1-68.png", "Animations/Character Backward Shooting/1-69.png", "Animations/Character Backward Shooting/1-70.png", "Animations/Character Backward Shooting/1-71.png", "Animations/Character Backward Shooting/1-72.png","Animations/Character Backward Shooting/1-73.png","Animations/Character Backward Shooting/1-74.png","Animations/Character Backward Shooting/1-75.png","Animations/Character Backward Shooting/1-76.png","Animations/Character Backward Shooting/1-77.png","Animations/Character Backward Shooting/1-78.png","Animations/Character Backward Shooting/1-79.png","Animations/Character Backward Shooting/1-80.png","Animations/Character Backward Shooting/1-81.png","Animations/Character Backward Shooting/1-82.png","Animations/Character Backward Shooting/1-83.png","Animations/Character Backward Shooting/1-84.png","Animations/Character Backward Shooting/1-85.png","Animations/Character Backward Shooting/1-86.png","Animations/Character Backward Shooting/1-87.png","Animations/Character Backward Shooting/1-88.png","Animations/Character Backward Shooting/1-89.png","Animations/Character Backward Shooting/1-90.png","Animations/Character Backward Shooting/1-91.png",)
  enemy_img = loadAnimation("Animations/NPC Walking Forward/1.png")
  enemy_backImg = loadAnimation("Animations/NPC Walking Backward/1.png")
  enemy_walkForward = loadAnimation("Animations/NPC Walking Forward/1.png","Animations/NPC Walking Forward/2.png","Animations/NPC Walking Forward/3.png")
  enemy_walkBackward = loadAnimation("Animations/NPC Walking Backward/1.png","Animations/NPC Walking Backward/2.png","Animations/NPC Walking Backward/3.png")
  healthBar1 = loadAnimation("Animations/Healthbar/1.png")
  healthBar2 = loadAnimation("Animations/Healthbar/5.png")
  healthBar3 = loadAnimation("Animations/Healthbar/4.png")
  healthBar4 = loadAnimation("Animations/Healthbar/3.png")
  healthBar5 = loadAnimation("Animations/Healthbar/2.png")
  healthBar6 = loadAnimation("Animations/Healthbar/6.png")
  healthBar7 = loadAnimation("Animations/Healthbar/7.png")
  GameOver_img = loadImage("Backgrounds/GameEnd/GameOver.png");
  GameWon_img = loadImage("Backgrounds/GameEnd/GameWon.png");
  GameFinished_img = loadImage("Backgrounds/GameEnd/GameFinished2.png");
}


function setup() {
  createCanvas(1400,800);
  bg = createSprite(700,400,1400,800);
  bg.addImage(bg_img);
  bg.scale = 0.3
  lvl1_animation = createSprite(700, 400, 1200, 800);
  storyImg = createSprite(700, 400, 1200, 800);
  storyImg.scale = 0.7
  play = createSprite(685, 550, 220, 50);
  story = createSprite(685, 710, 220, 50);
  play.visible = false
  story.visible = false
  lvl1_animation.visible = false
  lvl1_animation.addAnimation("lvl1", lvl1_img)
  character = createSprite(700, 660, 50, 50);
  character.setCollider("rectangle", 0,0,40,50);
  //character.debug = true
  character.addAnimation("characterB", character_backImg);
  character.addAnimation("character", character_img);
  character.addAnimation("character_forward", character_walkForward);
  character.addAnimation("character_backward", character_walkBackward);
  character.addAnimation("character_forwardShoot", character_shootForward);
  character.addAnimation("character_backwardShoot", character_shootBackward);
  character.scale = 2.3
  character.visible = false
  storyImg.addImage("story", storyPg)
  storyImg.visible = false
  health = createSprite(150, 110, 200, 50);
  health.addAnimation("healthBarImg1", healthBar1);
  health.addAnimation("healthBarImg2", healthBar2);
  health.addAnimation("healthBarImg3", healthBar3);
  health.addAnimation("healthBarImg4", healthBar4);
  health.addAnimation("healthBarImg5", healthBar5);
  health.addAnimation("healthBarImg6", healthBar6);
  health.addAnimation("healthBarImg7", healthBar7);
  health.scale = 0.4
  health.visible = false;
  GameOver = createSprite(700, 400, 1200, 800);
  GameOver.addImage(GameOver_img);
  GameOver.scale = 2
  GameOver.visible = false;
  GameWon = createSprite(700, 400, 1200, 800);
  GameWon.addImage(GameWon_img);
  GameWon.scale = 2
  GameWon.visible = false;
  GameFinished = createSprite(700, 400, 1200, 800);
  GameFinished.addImage(GameFinished_img)
  GameFinished.scale = 0.5
  GameFinished.visible = false;
  //mainMenu = createSprite(698, 630, 120, 50);
  //mainMenu.visible = false;
  enemyGroup = new Group() 
  enemyGroup2 = new Group()
}

function draw() {
  background("white");

  
  if(mousePressedOver(play) && gameState === "start"){
    gameState = "level1"
    bg.visible = false
    lvl1_animation.visible = true
    lvl1_animation.scale = 2.5
    character.visible = true
    health.visible = false
    console.log("Level 1");
  }

  if(mousePressedOver(story) && gameState === "start"){
    gameState = "story"
    bg.visible = false
    lvl1_animation.visible = false
    storyImg.visible = true
    lvl1_animation.scale = 2.5
    character.visible = false
    enemyGroup.visible = false
    enemyGroup2.visible = false
    health.visible = false
    console.log("Story");
  }


  if(gameState === "level1"){
    spawnEnemies();
    spawnEnemies2();
    textSize(30);
    textFont("Trebuchet MS");
    text("Score: "+ score, 1250, 60);
    textSize(30);
    textFont("Trebuchet MS");
    timer=Math.round(frameCount/30);
    text("Timer: "+ timer, 1050, 60);
  }

  /*if(enemyGroup.isTouching(character)){
    health.changeAnimation("healthBarImg2", healthBar2);
    count = 1;
  }

  if(enemyGroup.isTouching(character) && count == 1){
    health.changeAnimation("healthBarImg3", healthBar3);
    count = 2;
  }
  
  if(enemyGroup.isTouching(character) && count == 2){
    health.changeAnimation("healthBarImg4", healthBar4);
    count = 3;
  }
    
  if(enemyGroup.isTouching(character) && count == 3){
    health.changeAnimation("healthBarImg5", healthBar5);
    count = 4;
  }
  
  if(enemyGroup.isTouching(character) && count == 4){
    health.changeAnimation("healthBarImg6", healthBar6);
    count = 5;
  }
            
  if(enemyGroup.isTouching(character) && count == 5){
    health.changeAnimation("healthBarImg7", healthBar7);
  }


  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg2", healthBar2);
  }

  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg3", healthBar3);
  }

  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg4", healthBar4);
  }

  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg5", healthBar5);
  }
  
  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg6", healthBar6);
  }
  
  if(enemyGroup2.isTouching(character)){
    health.changeAnimation("healthBarImg7", healthBar7);
  }*/

  if(timer === 10){
    gameState = "gameWon"
  }

  if(gameState === "start"){
    bg.visible = true
    lvl1_animation.visible = false
    character.visible = false
    health.visible = false
    GameOver.visible = false
    //mainMenu.visible = false
  }

  if(gameState === "gameOver"){
    bg.visible = false
    lvl1_animation.visible = false
    character.visible = false
    health.visible = false
    GameOver.visible = true
    //mainMenu.visible = false
    enemyGroup.destroyEach()
    enemyGroup2.destroyEach()
    textSize(40);
    fill(226)
    text("score", 747, 390)
    console.log("gameOver");
  }

  if(gameState === "gameWon"){
    bg.visible = false
    lvl1_animation.visible = false
    character.visible = false
    health.visible = false
    GameWon.visible = false
    GameFinished.visible = true
    enemyGroup.destroyEach()
    enemyGroup2.destroyEach()
    textSize(40);
    fill(0)
    text(score, 1275, 299)
    console.log("gameWon");
  }

  if(keyDown(32) && gameState === "gameWon"){
    window.location.reload()
  }
  
  if(keyDown(RIGHT_ARROW)){
    character.changeAnimation("character_forward", character_walkForward);
    character.velocityX = 6
  }

  if(keyWentUp(RIGHT_ARROW)){
    character.changeAnimation("character", character_img)
    character.velocityX = 0
  }

  
  if(keyDown(LEFT_ARROW)){
    character.changeAnimation("character_backward", character_walkBackward);
    character.velocityX = -6
  }

  if(keyWentUp(LEFT_ARROW)){
    character.changeAnimation("characterB", character_backImg)
    character.velocityX = 0
  }


  if(keyDown(90)){
    character.changeAnimation("character_forwardShoot", character_shootForward)
    character.velocityX = 0
    character.scale = 0.5
    character.setCollider("rectangle", 100,0,590,60);
    if(enemyGroup.collide(character)){
      enemyGroup.destroyEach()
      score = score + 10;
    }
  }


  if(keyWentUp(90)){
    character.changeAnimation("character", character_img)
    character.velocityX = 0
    character.scale = 2.3
    character.setCollider("rectangle", 0,0,40,50);
  }

  
  
  if(keyDown(88)){
    character.changeAnimation("character_backwardShoot", character_shootBackward)
    character.velocityX = 0
    character.scale = 0.5
    character.setCollider("rectangle", -50,0,590,60);
    if(enemyGroup2.collide(character)){
      enemyGroup2.destroyEach()
      score = score + 10;
    }
  }
  

  if(keyWentUp(88)){
    character.changeAnimation("characterB", character_backImg)
    character.velocityX = 0
    character.scale = 2.3
    character.setCollider("rectangle", 0,0,40,50);
    
  }

  
  drawSprites();
  createEdgeSprites();
}

function spawnEnemies() {
  //write code here to spawn the enemies
  if (frameCount % 120 === 0) {
    enemy = createSprite(1400,650,40,10);
    //enemy.x = Math.round(random(1100,1400));
    //enemy.addAnimation("enemyB", enemy_backImg);
    enemy.addAnimation("enemyForward", enemy_walkBackward)
    enemy.scale = 0.25;
    enemy.velocityX = -4
    enemy.lifetime = 370;
    
    enemyGroup.add(enemy);
  }
}

function spawnEnemies2() {
  if (frameCount % 120 === 0) {
    enemy = createSprite(0,650,40,10);
    //enemy.x = Math.round(random(1100,1400));
    //enemy.addAnimation("enemy", enemy_img);
    enemy.addAnimation("enemyForward", enemy_walkForward)
    enemy.scale = 0.25;
    enemy.velocityX = +4
    enemy.lifetime = 370;
    
    enemyGroup2.add(enemy);


  }
}



