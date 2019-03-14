var instance;
var soundParis;

function Game(canvadId) {

  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 40;
  this.level=1;
  this.effects = [];
  this.player1=new Player(this,38,39,40,37,18,16);
  this.player2=new Player(this,68,86,67,88,90,32);
  this.reset();

}

Game.prototype.reset = function() {

  if(this.level===1){

    this.background = new Background(this,'images/fondo1.png');
    this.order = new Order(this,this.level);
    this.order.getBurger();
    this.player1.delete();
    this.player2.delete();
    this.player1.burgerIngredients();
    this.player2.burgerIngredients();
    this.player1.setListeners();
    this.player2.setListeners();
    this.player1.burgerOrder(this.order.selectedBurger);
    this.player2.burgerOrder(this.order.selectedBurger);
    this.person=new Person(this);
    this.person.getClient();
    this.framesCounter = 0;
    this.effects.push(new Effect(this,'coins'));
    this.effects.push(new Effect(this,'corazones'));

  }else if(this.level===2){

    this.background = new Background(this,'images/paris.png');
    this.order = new Order(this,2);
    this.order.getBurger();
    this.player1.delete();
    this.player2.delete();
    this.player1.iceCreamIngredients();
    this.player2.iceCreamIngredients();
    this.player1.setListeners();
    this.player2.setListeners();
    this.player1.burgerOrder(this.order.selectedBurger);
    this.player2.burgerOrder(this.order.selectedBurger);
    this.person=new Person(this);
    this.person.getClient();
    this.framesCounter = 0;

  }

};
  
Game.prototype.start = function() {

  if(this.level===1){

    instance = createjs.Sound.play("restaurant", {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 1});
    instance.paused=false;

  }else if(this.level===2){

  }

  createjs.Sound.play('campana');

  this.interval = setInterval(function() {
  this.clear();
  this.framesCounter++;

  if (this.framesCounter > 1000) {
  this.framesCounter = 0;
  }

  this.moveAll();
  this.draw();
  this.person.Hola();

  }.bind(this), 1000 / this.fps);

};

Game.prototype.nextClient = function() {

  if(this.player1.score===3 ||this.player2.score===3){

    this.level=2;
    soundParis = createjs.Sound.play("paris", {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.2});
    soundParis.paused=false;

  }else if(this.player1.score===6 ||this.player2.score===6){

    this.level=3;

  }

  this.stop();
  this.reset();
  this.start();

};
 
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 
  
Game.prototype.draw = function() {
  
  this.background.draw();
  this.person.draw();
  this.player1.scoreDraw(900);
  this.player2.scoreDraw(100);

  if(this.person.x>600){

    if(!this.person.win){

    this.order.draw();

    }else{

    this.effects[0].draw(this.person.x+70,this.person.y-80);

    }

  this.player1.burgerDraw(721);
  this.player2.burgerDraw(200);

  }

};
  
Game.prototype.moveAll = function() {

  this.person.move();

};

Game.prototype.stop = function() {

  clearInterval(this.interval);
  instance.paused=true;

};

 