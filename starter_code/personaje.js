function Person(game) {
    this.game = game;
   
    this.personajes=[];
    this.createClient();
    this.x = this.game.canvas.width * 0.08;
  
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height * 0.3;
    this.y = this.y0;
  
    this.selectedPerson;

    //seleccionar cliente aleatorio del array personajes
    this.img;
    //this.img.src = this.selectedPerson.img1.src;
    
    // número de imágenes diferentes
  
    // medidas de la imagen a representar en el canvas
    this.w = 200;
    this.h = 225;
  
    this.vy = 1;
    this.win=0;
  
   
  
  
    //this.bullets = [];
  
    //this.setListeners();
  }
  
  var TOP_KEY = 38;
  var SPACE = 32;
  
  Person.prototype.draw = function() {
    // Documentación drawImage:
    // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  
    this.animateImg();
  
    /*this.bullets = this.bullets.filter(function(bullet) {
      return bullet.x < this.game.canvas.width;
    }.bind(this));*/
  
    /*this.bullets.forEach(function(bullet) {
      bullet.draw();
      bullet.move();
    });*/
  };
  
  /*Person.prototype.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === TOP_KEY && this.y == this.y0) {
        this.y -= 5;
        this.vy -= 10;
      } else if (event.keyCode == SPACE) {
        this.shoot();
      }
    }.bind(this);
  };*/
  
  
  
  Person.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
  };
  
  Person.prototype.move = function() {
    // Aumenta la velocidad en el eje y.
    //var gravity = 0.4;
  
   // while(this.x<=600){
  
   if(this.win==0){
  
    if(this.x<=600){
    
      this.x+=5;
    
    }else{
    
        this.img.src = this.selectedPerson.img2.src;
        
        
        
      }
  
   //}else if(this.win==5){
    //    this.img.src = 'images/cliente1_bad.png';
  
   }else if(this.win==1){
  
  //  this.img.src = 'images/cliente1_win.png'; //caritas felices con estrellas

    this.img.src = this.selectedPerson.img3.src;

   if(this.x<=1200){
    
      this.x+=5;
    
    }else{
  
  
      this.game.nextClient();
  
    }
  
   }
     //}
    // solo salta cuando el personaje está en el suelo
   /* if (this.y >= this.y0) {
      this.vy = 1;
      this.y = this.y0;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }*/
  };
  
  Person.prototype.createClient = function() {
   
    this.img1 = new Image();
    this.img1.src = 'images/cliente1_arrival.png';
    
    this.img2 = new Image();
    this.img2.src = 'images/cliente1_order.png';
    
    this.img3 = new Image();
    this.img3.src = 'images/cliente1_win.png';
    
    this.img4 = new Image();
    this.img4.src = 'images/cliente1_bad.png';
  
    this.personajes.push({img1: this.img1, img2: this.img2, img3: this.img3, img4: this.img4});
    
    this.img1 = new Image();
    this.img1.src = 'images/cliente2_arrival.png';
    
    this.img2 = new Image();
    this.img2.src = 'images/cliente2_order.png';
    
    this.img3 = new Image();
    this.img3.src = 'images/cliente2_win.png';
    
    this.img4 = new Image();
    this.img4.src = 'images/cliente2_bad.png';
  
    this.personajes.push({img1: this.img1, img2: this.img2, img3: this.img3, img4: this.img4});
    
    this.img1 = new Image();
    this.img1.src = 'images/cliente3_arrival.png';
    
    this.img2 = new Image();
    this.img2.src = 'images/cliente3_order.png';
    
    this.img3 = new Image();
    this.img3.src = 'images/cliente3_win.png';
    
    this.img4 = new Image();
    this.img4.src = 'images/cliente3_bad.png';
  
    this.personajes.push({img1: this.img1, img2: this.img2, img3: this.img3, img4: this.img4});
    
  
  };

  Person.prototype.getClient = function () {
    //alert('getBurger');
    var min=0;
    var max=this.personajes.length;
    var aleatorio= Math.floor(Math.random() * (max - min) + min); 
   // alert('a'+aleatorio);
    this.selectedPerson=this.personajes[aleatorio];
    this.img = this.selectedPerson.img1;
    this.img.src = this.selectedPerson.img1.src;



    this.img.frames = 3;
    this.img.frameIndex = 0;
  
    return this.personajes[aleatorio];

};