function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 40;

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
      this.stop();
      this.reset();
      this.start();
    
  };

  Game.prototype.reset = function() {

    this.background = new Background(this);

    this.order = new Order(this);
    
    this.order.getBurger();

    this.player1=new Player(this,38,39,40,37,18,16,this.order.selectedBurger);
    //this.player2=new Player(this,38,39,40,37,18,16,this.order.selectedBurger);
    this.person=new Person(this);
    this.framesCounter = 0;

  };
  
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }; 
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.person.draw();
    if(this.person.x>600){

if(!this.person.win){
   this.order.draw();
  
  }
  
   this.player1.burgerDraw();

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