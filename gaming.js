/* Funcion para cambiar el Nav a responsive*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Funcion para el carousel */

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;


document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

setInterval(moveToNextSlide,7000);

let juegos = document.querySelectorAll(".juegoDescripcion");

console.log(juegos);

console.log(juegos.length);

console.log(juegos[0].children[1].innerHTML);

class Juego {
    static contadorJuegos= 0;

    constructor(titulo,descripcion,precio) {
        this._juegoID = ++Juego.contadorJuegos;
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._precio = precio;
    }

    get juegoID() {
        return this._juegoID;
    }

    get juegoTitulo() {
        return this._titulo;
    }

    get juegoDescripcion(){
        return this._descripcion;
    }

    get juegoPrecio(){
        return this._precio;
    }

    set juegoTitulo(titulo) {
        this._titulo = titulo;
    }

    set juegoDescripcion(descripcion){
        this._descripcion = descripcion;
    }
    
    set juegoPrecio(precio){
        this._precio = precio;
    }

    resumenJuego() {
        console.log("El juego se llama: " + this.juegoTitulo, ", la descripcion es: " + this.juegoDescripcion + ", el precio es: " + this.juegoPrecio, " y el ID del juego es: " + this.juegoID);
    }

}

let juego1 = new Juego("nierAutomata","Futiristic",4000);
juego1.resumenJuego();

let juego2 = new Juego("Ciberpunk 2077", "Futuristic", 5000);
juego2.resumenJuego();

