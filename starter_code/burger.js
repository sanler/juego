var burgerMenu;
function Burger(nombre,ingredientes,imgSrc) {

//Ingredientes pan 1,carne 2, queso 3, lechuga 4
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.img=new Image();
    this.img.src=imgSrc;
    this.width=10;
    this.height=10;
};