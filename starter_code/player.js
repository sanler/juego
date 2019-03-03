
function Player(game,key1, key2, key3,key4,keyDelete, keyServe,clientBurger) {

    this.game=game;
    
    this.pressedIngredients=[];
    this.clientBurger=clientBurger;
    this.key1=key1;//pan
    this.key2=key2;//queso
    this.key3=key3;//carne
    this.key4=key4;//lechuga
    
    this.keyDelete=keyDelete;
    this.keyServe=keyServe;
    
    this.setListeners();
    
    
    
    //array con palabras aleatorias mínimo 3
    /*this.secretWord='';//palabra elegida al azar
    this.letters=[];//array de teclas pulsadas por el usuario
    this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
    this.errorsLeft=10;//max de errores*/
     }
    
    
    
    
     Player.prototype.delete = function () {
    
     };
    
     Player.prototype.serve = function () {
    
    };
    
    Player.prototype.setListeners = function() {
      
      //var img=new Image();
    
      document.onkeydown = function(event) {
    
        if (event.keyCode==this.key1) {
          var img=new Image();
    
          var panDeAbajo=0;
    
    
            
            for(i=0;i<this.pressedIngredients.length;i++){
    
              if(this.pressedIngredients[i].valor===1){
    
                 panDeAbajo=1;
    
              }
    
            }
    
            if(panDeAbajo){
    
              img.src = 'images/panarriba.png';
    
    
            }else{
    
              img.src = 'images/panbajo.png';
    
    
            }
    
    
          
    
        // alert('1');
          this.pressedIngredients.push({valor:1,img:img});
          //this.game.ctx.drawImage(this.pan, 500, 300, 130, 130);
          
    
    
        }else if(event.keyCode==this.key2){
       //   alert('2');
    
          var img=new Image();
    
          img.src = 'images/queso.png';
        
          this.pressedIngredients.push({valor:2,img:img});
    
         // this.game.ctx.drawImage(this.queso, 500, 200, 130, 130);
    
        }else if(event.keyCode==this.key3){
         // alert('3');
          var img=new Image();
    
          img.src = 'images/carne.png';
           
    
          this.pressedIngredients.push({valor:3,img:img});
         // alert(this.pressedIngredients);
          //this.game.ctx.drawImage(this.carne, 500, 200, 130, 130);
    
    
        }else if(event.keyCode==this.key4){
         // alert('4');
          var img=new Image();
    
          img.src = 'images/lechuga.png';
    
          this.pressedIngredients.push({valor:4, img:img});
    
         // this.game.ctx.drawImage(this.lechuga, 500, 200, 130, 130);
    
        }else if(event.keyCode==this.keyDelete){
          //alert('delete');
    
          this.pressedIngredients=[];
    
        }else if(event.keyCode==this.keyServe){
    
           // alert('burger player 1 : '+this.pressedIngredients);
    
             if(this.checkWinner()){
    
                  alert('acierto');
    
    
             }else{
    
              alert('fallo');
    
    
             }
        }
    
      }.bind(this);
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
    
            return true;
    
        }else{
    
          console.log('NOT YET');
         // this.game.person.win=5;
    
          return false;
        }
    
      
     };
    
    
    
     Player.prototype.burgerDraw = function () {
    // console.log('burgerDraw');
      //console.log(this.pressedIngredients.length);
    
        if(this.pressedIngredients.length !==0){
        //  console.log('burgerDraw 11111');
        var y=610;
        
            for(i=0;i<this.pressedIngredients.length;i++){
    
        this.game.ctx.drawImage(this.pressedIngredients[i].img, 721, y, 180, 50);
        //alert(this.pressedIngredients[i].img.src);
         //debugger
          y-=40;
            }
      }
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
    