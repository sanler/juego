window.onload = function() {
  
  loadSounds();

  document.getElementById('boton').onclick = function () {

    var ply = document.getElementById('player');
    var oldSrc = ply.src;// just to remember the old source
    ply.src = "";

    document.getElementById('intro').style.visibility = "hidden";
    
    var game = new Game("canvas");
    game.start();
    

  };

  function loadSounds() {

    if (!createjs.Sound.initializeDefaultPlugins()) {
      return;
    }

    var assetsPath = "Sounds/_assets/audio/";

    var sounds = [
    { src: "musicaIntro.mp3", id: "musicaIntro" },
    { src: "restaurant2.mp3", id: "restaurant" },
    { src: "paris.mp3", id: "paris" },
    { src: "bonjour.mp3", id: "bonjour" },
    { src: "Game-Shot.mp3", id: "shot" },
    { src: "acierto.mp3", id: "acierto" },
    { src: "campana_entrada.mp3", id: "campana" },
    { src: "hello.mp3", id: "hola" },
    { src: "fallo_Level1.mp3", id: "fallo_Level1" },
    { src: "ny.mp3", id: "ny" },
    { src: "goodmorning.mp3", id: "goodmorning" },
    { src: "ganador.mp3", id: "ganador" }

    ];

    createjs.Sound.registerSounds(sounds, assetsPath);

  }

};







