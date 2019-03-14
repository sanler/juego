function Effect(game, type) {
    this.game = game;
   // this.x;
   // this.y;
    this.width = 60;
    this.height = 90;
  
    //this.cont = 0;
  
    this.image = new Image();
    this.image.src = 'images/' + type + '.png';
    this.image.frameIndex = 0;
    
    switch (type) {
      case 'coins':
        this.image.frames = 5;
        break;
      case 'corazones':
        this.image.frames = 10;
        break;
    }
  }
  
  Effect.prototype.draw = function(x,y) {
    //if (this.image.frameIndex < this.image.frames) {
      //this.game.ctx.save();
  
      this.game.ctx.drawImage(
        this.image,
        this.image.frameIndex * Math.floor(this.image.width / this.image.frames),
        0,
        Math.floor(this.image.width / this.image.frames),
        this.image.height,
        x,
        y,
        this.width,
        this.height
      );
  
      this.animateImg();
  
     // this.game.ctx.restore();
    //}
  };
  
 Effect.prototype.animateImg = function() {
    if (this.game.framesCounter % 6 == 0 ) {
      this.image.frameIndex++;
    }else
   // this.cont++;
    if (this.image.frameIndex >= 9) this.image.frameIndex = 0;

  };

  /*Effect.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
  };*/
/*

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
  //};
  
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
  
  /*
  
  Person.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }
  };*/