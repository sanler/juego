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

    //this.sound=new playSound('restaurant');
    //this.sound_level1 = createjs.Sound.play("restaurant", {loop:-1});


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

    this.effects.push(new Effect(
      this,
      'coins'
    ));
    this.effects.push(new Effect(
      this,
      'star'
    ));

}else if(this.level===2){
  //this.sound_level1.paused=true;
    //this.sound=new playSound('restaurant');
    //this.sound_level1 = createjs.Sound.play("restaurant", {loop:-1});

alert('JIJIJIJI');
  this.background = new Background(this,'images/paris.png');

  this.order = new Order(this,1);
  
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
  
      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
  
      // controlamos la velocidad de generación de obstáculos
      /*if (this.framesCounter % 50 === 0) {
      // this.generateObstacle();
      } */
  
      
      this.moveAll();
      this.draw();
      this.person.Hola();
      //this.makeSound();

    //alert('burger');
    

   // alert(client.selectedBurger.ingredientes);
   // document.getElementById('cliente').innerHTML=myBurger.ingredientes;
  


  }.bind(this), 1000 / this.fps);
  };
  

  
  /*Game.prototype.gameOver = function() {
    this.stop();
    
    if(confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  };*/

  Game.prototype.nextClient = function() {


    //alert('this.player1.score'+this.player1.score);
    //alert('this.player2.score'+this.player2.score);

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
   // this.effects[0].draw(this.person.x,this.person.y);

    if(this.person.x>600){

if(!this.person.win){
   this.order.draw();
  
  }else{

    this.effects[0].draw(this.person.x,this.person.y);


  }
  
   this.player1.burgerDraw(721);
   this.player2.burgerDraw(200);

    }

   
  };
  

  Game.prototype.moveAll = function() {
    //this.background.move();
   this.person.move();
    //this.obstacles.forEach(function(obstacle) { obstacle.move(); });
  };

  Game.prototype.stop = function() {
    clearInterval(this.interval);
    instance.paused=true;

  };

 /* Game.prototype.makeSound = function() {

  this.person.playSound();
  
  };

*/
/*Game.prototype.checkState = function() {
  this.player.checkPosition();

  if (!this.objectsFound) {
    this.objects.forEach(function(o, index) {
      if (o.checkPlayerPosition()) {
        createjs.Sound.play(o.className);

        this.effects.push(new Effect(
          this,
          o.x,
          o.y + o.height,
          (o.className === 'cat') ? 'hearts': 'star'
        ));

        this.objects.splice(index, 1);
      }
    }.bind(this));
  }

  this.locks.forEach(function(l, index) {
    if (l.checkPlayerPosition()) {
      this.locks.splice(index, 1);
    }
  }.bind(this));
}*/