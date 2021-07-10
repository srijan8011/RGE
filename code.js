var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c0a886be-c740-4b7d-b023-d831c22808dc","4fbde6e3-cba1-4fdc-b0dc-7e107a0866c4","48b42710-55f0-4173-b563-102db5f654fb","e2dd1acf-03c1-4fc9-b54b-3807ec37641f","395c2d26-5912-4265-a5ec-c3f3b886ce4f","c8755e8a-eb77-4a64-98d1-5f227aa6f7a2","8056d0ef-dadd-4b5e-b690-dc9645eaea0d","b9640893-f30c-4455-83af-7e9f20afe6af","5a20eb5e-ae47-4510-9442-9cfc91cc3795"],"propsByKey":{"c0a886be-c740-4b7d-b023-d831c22808dc":{"name":"ruby","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"XZzWwfa2E0nzwaYEh4OFRq36OOwDsTmF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/c0a886be-c740-4b7d-b023-d831c22808dc.png"},"4fbde6e3-cba1-4fdc-b0dc-7e107a0866c4":{"name":"gold","sourceUrl":null,"frameSize":{"x":50,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"pFvM2d5bki05XkyAoeoOW3UnGHES191z","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":42},"rootRelativePath":"assets/4fbde6e3-cba1-4fdc-b0dc-7e107a0866c4.png"},"48b42710-55f0-4173-b563-102db5f654fb":{"name":"emerald","sourceUrl":null,"frameSize":{"x":50,"y":71},"frameCount":1,"looping":true,"frameDelay":12,"version":"mguUI1q8V8f79A.ULVSd.AMsO.aHojLZ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":71},"rootRelativePath":"assets/48b42710-55f0-4173-b563-102db5f654fb.png"},"e2dd1acf-03c1-4fc9-b54b-3807ec37641f":{"name":"diamond","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"sgPRRdVBJYiuRqSVra2vST4JqZIhaH4x","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/e2dd1acf-03c1-4fc9-b54b-3807ec37641f.png"},"395c2d26-5912-4265-a5ec-c3f3b886ce4f":{"name":"laser","sourceUrl":null,"frameSize":{"x":150,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vf98B51Dvh1XodX2NSMkGphjPyeJonXX","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":48},"rootRelativePath":"assets/395c2d26-5912-4265-a5ec-c3f3b886ce4f.png"},"c8755e8a-eb77-4a64-98d1-5f227aa6f7a2":{"name":"laser_2","sourceUrl":null,"frameSize":{"x":46,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"sRrrSJIrLo9tHBwpDk6ZDDe_vNuOPI_Z","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":150},"rootRelativePath":"assets/c8755e8a-eb77-4a64-98d1-5f227aa6f7a2.png"},"8056d0ef-dadd-4b5e-b690-dc9645eaea0d":{"name":"y_walk_r","sourceUrl":null,"frameSize":{"x":70,"y":86},"frameCount":2,"looping":true,"frameDelay":12,"version":"A8Tooy9l9Z20jWcBTM8DBY9k2suIWZL2","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":86},"rootRelativePath":"assets/8056d0ef-dadd-4b5e-b690-dc9645eaea0d.png"},"b9640893-f30c-4455-83af-7e9f20afe6af":{"name":"y_walk_l","sourceUrl":null,"frameSize":{"x":41,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"0y7ZvsMJJSOCW3m8DErzOu9kFAe6kmH_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":50},"rootRelativePath":"assets/b9640893-f30c-4455-83af-7e9f20afe6af.png"},"5a20eb5e-ae47-4510-9442-9cfc91cc3795":{"name":"y_alien","sourceUrl":"assets/api/v1/animation-library/gamelab/hqQGdMdKGlhSG.CyibUP63V1cTWJfult/category_fantasy/alienYellow.png","frameSize":{"x":66,"y":82},"frameCount":1,"looping":true,"frameDelay":2,"version":"hqQGdMdKGlhSG.CyibUP63V1cTWJfult","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":82},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hqQGdMdKGlhSG.CyibUP63V1cTWJfult/category_fantasy/alienYellow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(50, 340, 50, 50);
player.shapeColor = "grey";
player.setAnimation("y_alien");

var ruby = createSprite(50, 70, 50, 50);
ruby.shapeColor = "red";
ruby.setAnimation("ruby");

var gold = createSprite(280, 100, 50, 50);
gold.shapeColor = "gold";
gold.setAnimation("gold");

var emerald = createSprite(350, 330, 50, 50);
emerald.shapeColor = "green";
emerald.setAnimation("emerald");

var laser1 = createSprite(160, 60, 140, 10);
laser1.shapeColor = "orange";

var laser2 = createSprite(55, 200, 10, 140);
laser2.shapeColor = "orange";

var laser3 = createSprite(280, 320, 10, 140);
laser3.shapeColor = "orange";

var score = 0;

var gameState = "start";

function draw() {
  background("turquoise");
  
  createEdgeSprites();
  
  textSize(25);
  stroke("blue");
  fill("blue");
  text("Score: " + score, 10, 25);
  
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser3.bounceOff(emerald);
  player.bounceOff(edges);
  
  if(gameState === "start") {
    gameStart();
  }
  if(gameState === "play") {
    gamePlay();
  }
  if(gameState === "end") {
    gameEnd();
  }
  
  
  drawSprites();
}

function gameStart() {
  textSize(20);
  stroke("blue");
  fill("blue");
  text("PRESS 'ENTER' TO BEGIN", 100, 200);
  
  if(keyDown("enter")) {
    laser1.velocityY = -3;
    laser2.velocityX = 3;
    laser3.velocityX = -3;
    
    gameState = "play";
  }
}
function gamePlay() {
  if(keyDown("up")) {
    player.y = player.y - 10;
  }
  if(keyDown("down")) {
    player.y = player.y + 10;
  }
  if(keyDown("right")) {
    player.x = player.x + 10;
  }
  if(keyDown("left")) {
    player.x = player.x - 10;
  }
  
  if(player.isTouching(ruby)) {
    score = score + 1;
    ruby.destroy();
  }
  if(player.isTouching(gold)) {
    score = score + 1;
    gold.destroy();
  }
  if(player.isTouching(emerald)) {
    score = score + 1;
    emerald.destroy();
  }
  
  if(player.isTouching(laser1) || player.isTouching(laser2) || player.isTouching(laser3)) {
    player.x = 50;
    player.y = 340;
  }
  
  if(score === 3){
    gameState = "end";
  }
  
  
}
function gameEnd() {
  if(score === 3) {
    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    ruby.destroy();
    emerald.destroy();
    gold.destroy();
  textSize(17);
  stroke("blue");
  fill("blue");
  text("CONGRATS! YOU COLLECTED ALL THE GEMS!", 10, 200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
