function Order(game,level) {
this.game = game;
//Ingredientes pan 1,queso 2, carne 3, lechuga 4
this.burgers=[];
if(level===1){
this.createBurgerMenu();
}else{
this.createIceCreamMenu();
}
this.max_ingridientes;
this.selectedBurger=[];
}
  


   Order.prototype.createBurgerMenu = function () {
    
    this.burgers[0]= new Burger("tipo 0",[1,2,4,3,4,1],'images/burger0.png');
    this.burgers[1]= new Burger("tipo 1",[1,2,4,4,1], 'images/burger1.png');
    this.burgers[2]= new Burger("tipo 2",[1,4,4,1], 'images/burger2.png');
    this.burgers[3]= new Burger("tipo 3",[1,2,4,3,1], 'images/burger3.png');
  
     };


     Order.prototype.createIceCreamMenu = function () {
    
      this.burgers[0]= new Burger("tipo 0",[1,2,3,4],'images/helado_0.png');
      this.burgers[1]= new Burger("tipo 1",[1,4,3,2], 'images/helado_1.png');
      this.burgers[2]= new Burger("tipo 2",[1,4,3,2,3], 'images/helado_3.png');
      this.burgers[3]= new Burger("tipo 3",[1,4,3,2,3,4], 'images/helado_4.png');
    
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

  this.game.ctx.drawImage(this.selectedBurger.img, 500, 200, 130, 130);

};
