
function Player(game,key1, key2, key3,key4,keyDelete, keyServe) {

this.game=game;
this.pressedIngredients=[];
this.clientBurger;

this.key1=key1;//pan
this.key2=key2;//queso
this.key3=key3;//carne
this.key4=key4;//lechuga
this.keyDelete=keyDelete;
this.keyServe=keyServe;

this.ingredientes=[];
this.score=0;

}

Player.prototype.burgerIngredients = function () {

  var img0=new Image();
  img0.src = 'images/panarriba.png';
  var img1=new Image();
  img1.src = 'images/panbajo.png';
  var img2=new Image();
  img2.src = 'images/queso.png'; 
  var img3=new Image();
  img3.src = 'images/carne.png';
  var img4=new Image();
  img4.src = 'images/lechuga.png';

  this.ingredientes[0]={nombre:'panarriba', img:img0};
  this.ingredientes[1]={nombre:'panbajo', img:img1};
  this.ingredientes[2]={nombre:'queso', img:img2};
  this.ingredientes[3]={nombre:'carne', img:img3};
  this.ingredientes[4]={nombre:'lechuga', img:img4};

};

Player.prototype.iceCreamIngredients = function () {

  //this.clientBurger=clientBurger;

  var img0=new Image();
  img0.src = 'images/cucurucho.png';
  var img1=new Image();
  img1.src = 'images/cucurucho.png';
  var img2=new Image();
  img2.src = 'images/bola1.png'; 
  var img3=new Image();
  img3.src = 'images/bola2.png';
  var img4=new Image();
  img4.src = 'images/bola3.png';

  this.ingredientes[0]={nombre:'cucurucho', img:img0};
  this.ingredientes[1]={nombre:'cucurucho', img:img1};
  this.ingredientes[2]={nombre:'bola1', img:img2};
  this.ingredientes[3]={nombre:'bola2', img:img3};
  this.ingredientes[4]={nombre:'bola3', img:img4};


  
};
     
Player.prototype.burgerOrder = function (clientBurger) {

  this.clientBurger=clientBurger;

};

Player.prototype.scores = function () {

  this.score++;

};

Player.prototype.delete = function () {

  this.pressedIngredients=[];

};

Player.prototype.serve = function () {

};
    
Player.prototype.setListeners = function() {

  this.listener =function(event) {

    if (event.keyCode==this.key1) {

      var img=new Image();

      var panDeAbajo=0;

      for(i=0;i<this.pressedIngredients.length;i++){

        if(this.pressedIngredients[i].valor===1){

          panDeAbajo=1;

        }

      }

      if(panDeAbajo){

        img.src = this.ingredientes[0].img.src;

      }else{

        img.src = this.ingredientes[1].img.src;

      }

      this.pressedIngredients.push({valor:1,img:img});


    }else if(event.keyCode==this.key2){

      var img=new Image();

      img.src = this.ingredientes[2].img.src;

      this.pressedIngredients.push({valor:2,img:img});

    }else if(event.keyCode==this.key3){

      var img=new Image();

      img.src = this.ingredientes[3].img.src;

      this.pressedIngredients.push({valor:3,img:img});

    }else if(event.keyCode==this.key4){

      var img=new Image();

      img.src = this.ingredientes[4].img.src;

      this.pressedIngredients.push({valor:4, img:img});


    }else if(event.keyCode==this.keyDelete){

      this.pressedIngredients=[];

    }else if(event.keyCode==this.keyServe){

      if(this.keyServe===16){ 

        this.game.player2.removeListener();

        if(this.checkWinner()){

          alert('acierto');
          this.game.player1.removeListener();

        }else{
      
          alert('fallo');
          this.game.player2.setListeners();
        }

      }else if(this.keyServe===32){

        this.game.player1.removeListener();

        if(this.checkWinner()){

          alert('acierto');
          this.game.player2.removeListener();

        }else{

          alert('fallo');
          this.game.player1.setListeners();

        }
      }

    }

  }.bind(this);

  document.addEventListener('keydown', this.listener , false);

};

Player.prototype.removeListener = function() {
  
  document.removeEventListener('keydown', this.listener);

};

Player.prototype.checkWinner = function (clientBurger) {

  var selectedBurger=this.clientBurger.ingredientes;//ingredientes correctos
  var acierto=1;
  var i=0;
  var playerIngredients=this.pressedIngredients;

  if(selectedBurger.length===playerIngredients.length){

    while((acierto==1)&& (i<selectedBurger.length)){

      if(selectedBurger[i]!==playerIngredients[i].valor){

        acierto=0;

      }else{

        i++;

      }
    }
    //hemos ganado?
  }else{

    acierto=0;

  }

  if(acierto===1){

    console.log('ACIERTO');
    this.game.person.win=1;
    this.scores();
    createjs.Sound.play('acierto');

    return true;

  }else{

    console.log('NOT YET');
    // this.game.person.win=5;
    createjs.Sound.play('shot');

    return false;

  }

};
    
Player.prototype.burgerDraw = function (x) {

  if(this.pressedIngredients.length !==0){

    var y=610;

    for(i=0;i<this.pressedIngredients.length;i++){

      this.game.ctx.drawImage(this.pressedIngredients[i].img, x, y, 180, 50);
      y-=40;

    }
  }

};
    
Player.prototype.scoreDraw = function (x) {

  this.game.ctx.font = '48px serif';  
  this.game.ctx.fillText(this.score,x, 100);

};
  