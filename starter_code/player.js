
function Player(game,key1, key2, key3,key4,keyDelete, keyServe) {

    this.game=game;
    
    this.pressedIngredients=[];
    this.clientBurger;
    this.key1=key1;//pan
    this.key2=key2;//queso
    this.key3=key3;//carne
    this.key4=key4;//lechuga
    
    this.ingredientes=[];
    this.keyDelete=keyDelete;
    this.keyServe=keyServe;
    
    //this.setListeners();
    
    this.score=0;
    
    //array con palabras aleatorias mínimo 3
    /*this.secretWord='';//palabra elegida al azar
    this.letters=[];//array de teclas pulsadas por el usuario
    this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
    this.errorsLeft=10;//max de errores*/
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

      this.clientBurger=clientBurger;
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
      
      //var img=new Image();
    
      
      
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
    
             // img.src = 'images/panarriba.png';
              img.src = this.ingredientes[0].img.src;
    
            }else{
    
            //  img.src = 'images/panbajo.png';
           
            img.src = this.ingredientes[1].img.src;
    
            }
    
    
          
    
        // alert('1');
          this.pressedIngredients.push({valor:1,img:img});
          //this.game.ctx.drawImage(this.pan, 500, 300, 130, 130);
          
    
    
        }else if(event.keyCode==this.key2){
       //   alert('2');
    
          var img=new Image();
    
         // img.src = 'images/queso.png';
          img.src = this.ingredientes[2].img.src;

          this.pressedIngredients.push({valor:2,img:img});
    
         // this.game.ctx.drawImage(this.queso, 500, 200, 130, 130);
    
        }else if(event.keyCode==this.key3){
         // alert('3');
          var img=new Image();
    
          //img.src = 'images/carne.png';
          img.src = this.ingredientes[3].img.src;

    
          this.pressedIngredients.push({valor:3,img:img});
         // alert(this.pressedIngredients);
          //this.game.ctx.drawImage(this.carne, 500, 200, 130, 130);
    
    
        }else if(event.keyCode==this.key4){
         // alert('4');
          var img=new Image();
    
         // img.src = 'images/lechuga.png';
         img.src = this.ingredientes[4].img.src;

          this.pressedIngredients.push({valor:4, img:img});
    
         // this.game.ctx.drawImage(this.lechuga, 500, 200, 130, 130);
    
        }else if(event.keyCode==this.keyDelete){
          //alert('delete');
    
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


           // alert('burger player 1 : '+this.pressedIngredients);
    
             
        }
    
    }.bind(this);
    
    document.addEventListener('keydown', this.listener , false);


      /*document.onkeydown = function(event) {
    
   
      }.bind(this);*/
    };




    Player.prototype.removeListener = function() {
      document.removeEventListener('keydown', this.listener);
    };

    /*
     Hangman.prototype.checkIfLetter = function (keyCode) {
    
    
    if(keyCode>=65 && keyCode<=90){
    
    //codigos ascii para letras mayúsculas
    return true;
    
    }else if(keyCode>=97 && keyCode<=122){
    
    return true;
    
    }else{
    
    return false;
    
    }
    
     };
    
    Hangman.prototype.checkClickedLetters = function (key) {
    
    
      if(this.letters.indexOf(key.toUpperCase())===-1){
    
    
          return true;
    
    
      }else{
    
          return false;
    
      }
    
    
    };
    
     Hangman.prototype.addCorrectLetter = function (i) {
     
     
      this.guessedLetter+=this.secretWord[i].toUpperCase();//añadir letra adivinada
    
     return this.checkWinner();
      //hemos ganado?
    
        
     };
    
     Hangman.prototype.addWrongLetter = function (letter) {
    
      var palabraCorrecta=this.secretWord;//palabra correcta
    
      if(palabraCorrecta.indexOf(letter)==-1){
    
    
        this.errorsLeft--;
      }
      
    
    return this.checkGameOver();
    
    };
    
     Hangman.prototype.checkGameOver = function () {
    
    
        if(this.errorsLeft==0){
    
          return true;
          
        }else{
    
    
          return false;
    
        }
    
     };
    */
     Player.prototype.checkWinner = function (clientBurger) {
    
      var selectedBurger=this.clientBurger.ingredientes;//palabra correcta
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
    // console.log('burgerDraw');
      //console.log(this.pressedIngredients.length);
    
        if(this.pressedIngredients.length !==0){
        //  console.log('burgerDraw 11111');
        var y=610;
        
            for(i=0;i<this.pressedIngredients.length;i++){
    
        this.game.ctx.drawImage(this.pressedIngredients[i].img, x, y, 180, 50);
        //alert(this.pressedIngredients[i].img.src);
         //debugger
          y-=40;
            }
      }
     };
    
     Player.prototype.scoreDraw = function (x) {
      // console.log('burgerDraw');
        //console.log(this.pressedIngredients.length);
      // this.game.ctx.drawImage(this.pressedIngredients[i].img, 0, y, 180, 50);
      this.game.ctx.font = '48px serif';  
      this.game.ctx.fillText(this.score,x, 100);

      
       };
    /*
    document.onkeydown = function (e) {
      var winner=false;
      var gameOver=false;
    
      //comprobar si es una letra. sino lo es no hacer nada
    
          if(hangman.checkIfLetter(e.keyCode)){
              
              alert('ES LETRA');
              console.log(e);
    
              //Comprobamos si está pulsada, sino, la añadimos al array de letters.
              //si está pulsada no hacemos nada
    
              if(hangman.checkClickedLetters(e.key)){
       
              hangman.letters.push(e.key);
    
    
              }
              var indice=hangman.secretWord.indexOf(e.key);
              if(indice!==-1){
    
                hangman.guessedLetter+=e.key;
                winner = hangman.addCorrectLetter(indice);
                 //pintarla con writeCorrectLetter
                  canvas.writeCorrectLetter(hangman.secretWord[indice],indice);
                alert('W'+winner);
                alert('acertada'+e.key);
    
              }else{
    
                alert('no');
                gameOver= hangman.addWrongLetter(e.key);
                //pintarla con writeWrongLetter
                alert('gO'+gameOver);
    
              }
    
              
          //comprobamos si está acertada. si lo está llamamos a writeCorrectLetter
          //Sino es acierto llamamos a writeWrongLetter
          
        }
    alert('llega');
         if(winner===true){
           
          alert('GANASTE');
    
        }
         if(gameOver===true){alert('PERDISTE GASTASTE TU 10 INTENTOS');}
      
    };*/
    