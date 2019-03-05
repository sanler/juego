window.onload = function() {

  var soundID = "Thunder";
  var sounds=[];

  loadSounds(sounds);
 /* function loadSound () {
    createjs.Sound.registerSound("_assets/audio/Game-Shot.ogg", soundID);
  }*/


  function loadSounds(sounds) {
if (!createjs.Sound.initializeDefaultPlugins()) {
  return;
}

var assetsPath = "_assets/audio/";
 sounds = [
  { src: "restaurant2.mp3", id: "restaurant" },
  { src: "Game-Shot.mp3", id: "shot" }
//  { src: "chimes.mp3", id: "yarn" },
 
//{ src: "chimes.mp3", id: "fishbone" }
];

createjs.Sound.registerSounds(sounds, assetsPath);
}


  function playSound (id) {


    var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: -1, volume: 1})
    createjs.Sound.play(id,props);
 


    //createjs.Sound.play(id,createjs.Sound.INTERRUPT_NONE,0,0,-1,.5,0);
  }

document.getElementById('restaurant').onclick = function () {

  playSound('restaurant');

  
  };

  document.getElementById('shot').onclick = function () {

    playSound('shot');  
    
    };

  };