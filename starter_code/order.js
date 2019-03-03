
function Order(game) {
    this.game = game;
  
  //Ingredientes pan 1,queso 2, carne 3, lechuga 4
  
  this.burgers=[];
  
  this.createBurgerMenu();
  
  this.max_ingridientes;
  
  this.selectedBurger=[];
  
  
  //array con palabras aleatorias mínimo 3
  /*this.secretWord='';//palabra elegida al azar
  this.letters=[];//array de teclas pulsadas por el usuario
  this.guessedLetter='';//cadena con las letras acertadas. La usaremos para ver si hemos ganado
  this.errorsLeft=10;//max de errores*/
   }
  
  
   Order.prototype.createBurgerMenu = function () {
    
    this.burgers[0]= new Burger("tipo 0",[1,2,4,3,4,1],'images/burger0.png');
    this.burgers[1]= new Burger("tipo 1",[1,2,4,4,1], 'images/burger1.png');
    this.burgers[2]= new Burger("tipo 2",[1,4,4,1], 'images/burger2.png');
    this.burgers[3]= new Burger("tipo 3",[1,2,4,3,1], 'images/burger3.png');
  
     };
  
     Order.prototype.getBurger = function () {
        //alert('getBurger');
        var min=0;
        var max=this.burgers.length;
        var aleatorio= Math.floor(Math.random() * (max - min) + min); 
       // alert('a'+aleatorio);
        this.selectedBurger=this.burgers[aleatorio];
  
        return this.burgers[aleatorio];
  
   };
  
  
  
   Order.prototype.draw = function() {
    //alert(this.selectedBurger.img.src);
  
    this.game.ctx.drawImage(this.selectedBurger.img, 500, 200, 130, 130);
  
  
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
  
   Hangman.prototype.checkWinner = function () {
  
    var palabraCorrecta=this.secretWord;//palabra correcta
    var acierto=0;
    var letrasAdivinadas=this.guessedLetter;//letras adivinadas
    
  
    //hemos ganado?
  
      for(i=0;i<palabraCorrecta.length;i++){
  
  
          if(letrasAdivinadas.indexOf(palabraCorrecta[i])!==-1){
  
            acierto++;
  
          }
  
      }
  
      if(acierto===palabraCorrecta.length){
        
          console.log('ACIERTO');
          return true;
  
      }else{
  
        console.log('NOT YET');
        return false;
      }
  
  
  
  
   };
  
  */
  
  
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
    
  };
  */