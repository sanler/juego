function Person(game) {

  this.game = game;
  this.personajes=[];
  this.createClient();
  this.x = this.game.canvas.width * 0.08;
  this.y0 = 250;
  this.y = this.y0;
  this.selectedPerson;
  this.img;
  this.w = 200;
  this.h = 225;
  this.vy = 1;
  this.win=0;
  this.contador=1;

}

Person.prototype.draw = function() {
   
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

};

Person.prototype.animateImg = function() {

  if (this.game.framesCounter % 6 === 0) {
    this.img.frameIndex += 1;
    // Si el frame es el último, se vuelve al primero
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }

};
  
Person.prototype.move = function() {

  if(this.win==0){

    if(this.x<=600){

      this.x+=5;

    }else{

      this.img.src = this.selectedPerson.img2.src;

    }

  }else if(this.win==5){


    this.img.src = this.selectedPerson.img4.src;


  }else if(this.win==1){
  
    this.img.src = this.selectedPerson.img3.src;

    if(this.x<=1200){

      this.x+=5;

    }else{

      this.game.nextClient();

    }

  }
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

  var min=0;
  var max=this.personajes.length;
  var aleatorio= Math.floor(Math.random() * (max - min) + min); 
  this.selectedPerson=this.personajes[aleatorio];
  this.img = this.selectedPerson.img1;
  this.img.src = this.selectedPerson.img1.src;
  this.img.frames = 3;
  this.img.frameIndex = 0;

  return this.personajes[aleatorio];
};

Person.prototype.Hola = function() {
  var saludo;

  if(this.game.level===1){
    saludo='hola';
  }else if(this.game.level===2){
    saludo='bonjour';
  }else if(this.game.level===3){
    saludo='goodmorning';
  }

  if (this.x===601 && this.contador===1) {
    createjs.Sound.play(saludo,{volume:1});
    this.contador=0;    
  }

};

