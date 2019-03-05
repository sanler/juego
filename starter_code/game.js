function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 40;
    this.level=1;

    
    this.player1=new Player(this,38,39,40,37,18,16);
    this.player2=new Player(this,68,86,67,88,90,32);

    this.reset();
  }
  
  Game.prototype.start = function() {

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

    alert('this.player1.score'+this.player1.score);
    alert('this.player2.score'+this.player2.score);

        if(this.player1.score===3 ||this.player2.score===3){


        this.level=2;

        }else if(this.player1.score===6 ||this.player2.score===6){


          this.level=3;
  
          }

       

      this.stop();
      this.reset();
      this.start();
    
  };

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
}else if(this.level===2){
alert('level2');
  this.background = new Background(this,'images/paris.jpg');

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
  };