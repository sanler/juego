window.onload = function() {
    var game = new Game("canvas");
    loadSounds();

document.getElementById('start-game-button').onclick = function () {

  //playSound ('restaurant');


    game.start();

  
  };



  function loadSounds() {

    if (!createjs.Sound.initializeDefaultPlugins()) {
      return;
    }
    
    var assetsPath = "Sounds/_assets/audio/";
     var sounds = [
      { src: "restaurant2.mp3", id: "restaurant" },{ src: "paris.mp3", id: "paris" },{ src: "bonjour.mp3", id: "bonjour" },
      { src: "Game-Shot.mp3", id: "shot" },{ src: "acierto.mp3", id: "acierto" },{ src: "campana_entrada.mp3", id: "campana" },{ src: "hello.mp3", id: "hola" }
    //  { src: "chimes.mp3", id: "yarn" },
     
    //{ src: "chimes.mp3", id: "fishbone" }
    ];
    
    createjs.Sound.registerSounds(sounds, assetsPath);
    }

   



  };