function playSound (id) {


    var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: -1, volume: 1})
    createjs.Sound.play(id,props);
 


    //createjs.Sound.play(id,createjs.Sound.INTERRUPT_NONE,0,0,-1,.5,0);
  }