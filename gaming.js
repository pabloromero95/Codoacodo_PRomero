
//Objetivos del punto -
 //cuando click en punto saber posicion de punto
 //quitar la clase activo de los puntos
 //añadir la clase activo al punto que le damos click


 //aplicar transform translate a carrousel

const carrousel__container = document.querySelector('carrousel__container');

const punto = document.querySelectorAll('puntos');


 punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * -50;

        carrousel__container.style.transform = 'translateX(${operacion}%)';
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
 }) 