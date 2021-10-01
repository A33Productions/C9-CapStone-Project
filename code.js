var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  c1 = createSprite(100,130,10,10);
  c1.shapeColor = "red";
  c2 = createSprite(215,130,10,10);
  c2.shapeColor = "red";
  c3 = createSprite(165,250,10,10);
  c3.shapeColor = "red";
  c4 = createSprite(270,250,10,10);
  c4.shapeColor = "red";
  
 
//add the velocity to make the car move.
c1.velocityY=8;
c2.velocityY=8;
c3.velocityY=8;
c4.velocityY=8;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  c1.bounceOff(boundary1);
  c1.bounceOff(boundary2);
  c2.bounceOff(boundary1);
  c2.bounceOff(boundary2);
  c3.bounceOff(boundary1);
  c3.bounceOff(boundary2);
  c4.bounceOff(boundary1);
  c4.bounceOff(boundary2);
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  if (keyDown("left")){
sam.velocityX=-3;
sam.velocityY=0;
}
if(keyDown("right")){
  sam.velocityX=3;
}
if(sam.isTouching(c1)||sam.isTouching(c2)||sam.isTouching(c3)||sam.isTouching(c4)){
  sam.x=20;
  sam.y=190;
  life=life+1;
}
if(keyWentUp("left")){
  sam.velocityX=0;
  sam.velocityY=0;
}
if(keyWentUp("right")){
  sam.velocityX=0;
  sam.velocityY=0;
}
 drawSprites();
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
