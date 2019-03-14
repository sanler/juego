function Background(game,fondo) {
    this.game = game;
  
    this.img = new Image();
    this.img.src = fondo;

    this.x = 0;
    this.y = 0;

  }
  
  Background.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  };
  Background.prototype.clear = function() {
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
  };