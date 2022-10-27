/* Function for responsive Nav */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* Function for carousel*/

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

/* Updates image by removing all images the visible class, adding the hidden class, then, making visible the one in display */

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
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

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

setInterval(moveToNextSlide, 7000);

/*End of carousel */

/*JSON Database for Products */

let juegosDigitales = [
  {
    nombre: "Nier Automata",
    descripcion:
      "Sigue las batallas del androide de combate 2B, su compañero 9S, y el obsoleto prototipo A2, en una guerra de poder entre las máquinas creadas por invasores de otro mundo y los restos de la humanidad.",
    precio: "1200",
    imgPath: "assets/dig/D-NA.jpg",
  },
  {
    nombre: "Ciberpunk 2077",
    descripcion:
      "Sigue la lucha de V mientras lidia con un misterioso implante cibernético que amenaza con sobrescribir su cuerpo con la personalidad y los recuerdos de una celebridad fallecida que solo V percibe.",
    precio: "3500",
    imgPath: "assets/dig/D-CP2077.jpg",
  },
  {
    nombre: "Dragon Age: Inquisition",
    descripcion:
      "Una guerra civil entre los realistas de la emperatriz y una poderosa facción noble liderada por su primo, el Gran Duque Gaspard, se desató en Orlais.",
    precio: "3800",
    imgPath: "assets/dig/D-DAI.jpg",
  },
  {
    nombre: "Dying Light 2",
    descripcion:
      "Dying Light 2 es un videojuego de mundo abierto en primera persona que se sitúa en un mundo postapocalíptico en el que se ha sido víctima de una epidemia zombi.",
    precio: "5200",
    imgPath: "assets/dig/D-DL2.jpg",
  },
  {
    nombre: "Farcry 6",
    descripcion:
      "La historia se desarrolla en Yara, una isla ficticia del Caribe, bajo un régimen comunista aparentemente inspirado en el gobierno de Fidel Castro, quien ejerció el poder de forma dictatorial en Cuba.",
    precio: "5200",
    imgPath: "assets/dig/D-FC6.jpg",
  },
  {
    nombre: "Fallout 4",
    descripcion:
      "Fallout 4 está ambientado en la post-apocalíptica zona estadounidense de la Commonwealth, Massachusetts en el año 2287, 210 años después del inicio de la guerra nuclear que aniquilaria a gran parte de la civilización.",
    precio: "1300",
    imgPath: "assets/dig/D-FO4.jpg",
  },
  {
    nombre: "Mass Effect: Legendary Edition",
    descripcion:
      "Ambientado en 2183, tomas el lugar del o de la comandante Shephard, comandante de la Alianza, en una trama que poco a poco ira desentrañando un complot de proporciones galácticas.",
    precio: "9000",
    imgPath: "assets/dig/D-ME.jpg",
  },
  {
    nombre: "No Man's Sky",
    descripcion:
      "Los jugadores son introducidos en un universo desconocido preparado para ser explorado, donde la información sobre las características, la flora y la fauna de cada planeta puede ser compartida y actualizada por otros jugadores.",
    precio: "1800",
    imgPath: "assets/dig/D-NMS.jpg",
  },
];
let juegosPs4 = [
  {
    nombre: "Call of Duty: MW",
    descripcion:
      "El juego se ambienta en un entorno realista y moderno. Por primera vez en la historia de la franquicia, Call of Duty: Modern Warfare fue compatible con el modo multijugador multiplataforma. ",
    precio: "1500",
    imgPath: "assets/Ps4/PS4-CODMW.jpg",
  },
  {
    nombre: "Devil May Cry 5",
    descripcion:
      "El juego contará con Dante y Nero como personajes jugables, junto a V, un misterioso nuevo cliente que llega a las oficinas de Devil May Cry.5​ Devil May Cry 5 recibió una recepción positiva de parte de la crítica especializada y el público.",
    precio: "2500",
    imgPath: "assets/Ps4/PS4-DMC5.jpg",
  },
  {
    nombre: "God of War: Ragnarok",
    descripcion:
      "El juego se desarrolla en la tierra mitológica nórdica y contará con el protagonista de la serie Kratos, el dios griego de la guerra y su hijo Atreus.",
    precio: "6000",
    imgPath: "assets/Ps4/PS4-GOW.jpg",
  },
  {
    nombre: "Jumanji",
    descripcion:
      "Jumanji es un videojuego de acción y aventura desarrollado por Funsolve y publicado por Outright Games. Basado en Jumanji: Welcome to the Jungle y Jumanji: The Next Level.",
    precio: "1000",
    imgPath: "assets/Ps4/PS4-Jumanji.jpg",
  },
  {
    nombre: "Minecraft",
    descripcion:
      "Minecraft es un juego de mundo abierto, y no tiene un fin claramente definido. Esto permite una gran libertad en cuanto a la elección de su forma de jugar.",
    precio: "800",
    imgPath: "assets/Ps4/PS4-Minecraft.jpg",
  },
  {
    nombre: "Mortal Kombat 11",
    descripcion:
      "Mortal Kombat 11 es un videojuego de lucha 2.5D. Junto con el regreso de los Fatalities y Brutalities, se introducen nuevas características de juego, como Fatal Blows y Krushing Blows.",
    precio: "3500",
    imgPath: "assets/Ps4/PS4-MK11.jpg",
  },
  {
    nombre: "Red Dead Redemption: 2",
    descripcion:
      "Red Dead Redemption 2 es un juego de acción y aventura, jugado tanto como primera como tercera persona, ambientado en el lejano oeste estadounidense y desarrollado en un entorno de mundo abierto con una versión ficticia del oeste.",
    precio: "2500",
    imgPath: "assets/Ps4/PS4-RDR2.jpg",
  },
  {
    nombre: "Spider-Man",
    descripcion:
      "El juego narra una historia completamente original de Spider-Man que no está ligada a películas o cómics anteriores.​ Cubre ambos aspectos del personaje, tanto de Peter Parker como el superhéroe.",
    precio: "4500",
    imgPath: "assets/Ps4/PS4-SM.jpg",
  },
];
let juegosXbox = [
  {
    nombre: "Dishonored 2",
    descripcion:
      "Dishonored 2 es un juego de acción-aventura y sigilo en primera persona. El jugador puede iniciar la campaña con Emily Kaldwin o Corvo Attano (protagonista de Dishonored) los cuales podrán expresarse a lo largo del juego.",
    precio: "1600",
    imgPath: "assets/XBox/XB-DH2.jpg",
  },
  {
    nombre: "Farcry 3",
    descripcion:
      "Far Cry 3 es un videojuego de disparos en primera persona, que contiene elementos de un videojuego de rol, tales como los puntos de experiencia,árboles de habilidades y un menú de creación.",
    precio: "200",
    imgPath: "assets/XBox/XB-FC3.jpg",
  },
  {
    nombre: "Farcry 6",
    descripcion:
      "La historia se desarrolla en Yara, una isla ficticia del Caribe, bajo un régimen comunista aparentemente inspirado en el gobierno de Fidel Castro, quien ejerció el poder de forma dictatorial en Cuba.",
    precio: "5000",
    imgPath: "assets/XBox/XB-FC6.jpg",
  },
  {
    nombre: "Forza Horizon 4",
    descripcion:
      "Forza Horizon 4 es un videojuego de carreras ambientado en un mundo abierto entorno basado en una Gran Bretaña ficticia.",
    precio: "3900",
    imgPath: "assets/XBox/XB-FH4.jpg",
  },
  {
    nombre: "Gears of War 4",
    descripcion:
      "Gears of War 4 o Gears 4 es un videojuego de acción y shooter en tercera persona desarrollado por The Coalition y distribuido por Microsoft. Gears of War 4 tiene lugar 25 años después de los acontecimientos ocurridos en Gears of War 3.",
    precio: "1900",
    imgPath: "assets/XBox/XB-GOW4.jpg",
  },
  {
    nombre: "No Man's Sky",
    descripcion:
      "Los jugadores son introducidos en un universo desconocido preparado para ser explorado, donde la información sobre las características, la flora y la fauna de cada planeta puede ser compartida y actualizada por otros jugadores.",
    precio: "1100",
    imgPath: "assets/XBox/XB-NMS.jpg",
  },
  {
    nombre: "Resident Evil 2",
    descripcion:
      "Resident Evil 2 es un videojuego de disparos en tercera persona perteneciente al género de terror, desarrollado y publicado por Capcom.",
    precio: "1400",
    imgPath: "assets/XBox/XB-RE2.jpg",
  },
  {
    nombre: "State of Decay 2",
    descripcion:
      "State of Decay 2 es un juego de supervivencia zombi en el que la jugabilidad se experimenta desde una perspectiva en tercera persona.​ El juego se desarrolla en un entorno de mundo abierto y presenta un modo de juego cooperativo.",
    precio: "900",
    imgPath: "assets/XBox/XB-SOD2.jpg",
  },
];
let accesorios = [
  {
    nombre: "Auriculares PS4",
    descripcion: "Auriculares PS4 con sonido Hi-Fi y efectos luminosos",
    precio: "8500",
    imgPath: "assets/acc/PS4-Auriculares.jpg",
  },
  {
    nombre: "Auriculares XBox",
    descripcion: "Auriculares XBox con sonido Hi-Fi y extra bass",
    precio: "7300",
    imgPath: "assets/acc/XB-Auriculares.jpg",
  },
  {
    nombre: "Joistick PS4",
    descripcion:
      "Joistick de PS4 inalambrico con capacidad de conexión USB para carga de bateria interna",
    precio: "11000",
    imgPath: "assets/acc/PS4-Joistick.jpg",
  },
  {
    nombre: "Joistick XBox",
    descripcion:
      "Joistick de XBox inalambrico con capacidad de jugar conectando cable. Baterias AA no incluidas",
    precio: "13700",
    imgPath: "assets/acc/XB-Joistick.jpg",
  },
  {
    nombre: "Cable Joistick PS4",
    descripcion: "Cable para cargar bateria de joistick de PS4",
    precio: "2600",
    imgPath: "assets/acc/PS4-cableJoistick.jpg",
  },
  {
    nombre: "Cable Joistick XBox",
    descripcion: "Cable para jugar conectado de joistick de XBox",
    precio: "2100",
    imgPath: "assets/acc/XB-cableJoistick.jpg",
  },
  {
    nombre: "Volante PS4 Logitech G29",
    descripcion:
      "Volante logitech G29 con Pedalera 3 pedales + palanca de 6 cambios en H con reversa.",
    precio: "95000",
    imgPath: "assets/acc/PS4-simVolante.jpg",
  },
  {
    nombre: "Simulador de vuelo XBox Thrustmaster",
    descripcion:
      "Palanca de simulador de vuelo, incluye panel de botones configurables.",
    precio: "73000",
    imgPath: "assets/acc/XB-simVuelo.jpg",
  },
];

/* End of JSON Database */

/* Function for data distribution */

let gameTitles = document.querySelectorAll(".juegoTitulo");
let gameDescription = document.querySelectorAll(".juegoDescripcion");
let gamePrice = document.querySelectorAll(".juegoPrecio");
let gameImgPath = document.querySelectorAll(".juegoImg");

/*Section 1: Juegos Digitales, Section 2: Juegos PS4, 
Section 3: Juegos Xbox, Section 4: Accesorios */

function fillData(section, arr) {
  if (section == 1) {
    for (let i = 0; i < 8; i++) {
      gameTitles[i].textContent = arr[i].nombre;
      gameDescription[i].textContent = arr[i].descripcion;
      gamePrice[i].textContent = "Precio: $" + arr[i].precio;
      gameImgPath[i].setAttribute("src", arr[i].imgPath);
    }
  } else if (section == 2) {
    for (let i = 8; i <= 15; i++) {
      gameTitles[i].textContent = arr[i - 8].nombre;
      gameDescription[i].textContent = arr[i - 8].descripcion;
      gamePrice[i].textContent = "Precio: $" + arr[i - 8].precio;
      gameImgPath[i].setAttribute("src", arr[i - 8].imgPath);
    }
  } else if (section == 3) {
    for (let i = 16; i <= 23; i++) {
      gameTitles[i].textContent = arr[i - 16].nombre;
      gameDescription[i].textContent = arr[i - 16].descripcion;
      gamePrice[i].textContent = "Precio: $" + arr[i - 16].precio;
      gameImgPath[i].setAttribute("src", arr[i - 16].imgPath);
    }
  } else if (section == 4) {
    for (let i = 24; i <= 31; i++) {
      gameTitles[i].textContent = arr[i - 24].nombre;
      gameDescription[i].textContent = arr[i - 24].descripcion;
      gamePrice[i].textContent = "Precio: $" + arr[i - 24].precio;
      gameImgPath[i].setAttribute("src", arr[i - 24].imgPath);
    }
  } else if (section > 4 || section < 0) {
    console.log("ingrese una seccion entre 1 y 4");
  }
}

fillData(1, juegosDigitales);
fillData(2, juegosPs4);
fillData(3, juegosXbox);
fillData(4, accesorios);

/* End of data distribution function */

/* Function of GamePrices API*/

let responseFiltered = [];

fetch("https://api.bluelytics.com.ar/v2/latest")
.then((response) => response.json())
.then(data => {
  console.log(data);
  let listPrice = document.querySelectorAll(".tableLow");
  listPrice[0].textContent = data.blue.value_sell;
  listPrice[1].innerHTML = data.blue_euro.value_sell;
})
.catch((err) =>console.log(err));

/* Alternative Object DB Model

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

 End of Object DB Model*/

const doc = document;
function docQSA(selector) { return doc.querySelectorAll(selector) };
function docQS(selector) { return doc.querySelector(selector) };
function docGEBI(selector) { return doc.getElementById(selector); };

let nameError = docGEBI("nombre-error");
let telError = docGEBI("tel-error");
let emailError = docGEBI("email-error");
let mensajeError = docGEBI("msg-error");
let submitError = docGEBI("submit-error");
let productError = docGEBI("product-error");
let checkboxError = docGEBI("checkgroup-error");
let checkJD = docGEBI("f_juegosDig");
let checkJPS = docGEBI("f_juegosPs4");
let checkJXB = docGEBI("f_juegosXbox");
let checkAcc = docGEBI("f_accesorios");
let checkOtros = docGEBI("f_otro");

function validateName(){
  let name = docGEBI("contactName").value;
  if (name.length == 0) {
    nameError.textContent = "Se requiere el nombre";
    nameError.style.color = "red";
    return false;
  } 
  else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) || !name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.textContent = "Se requiere el nombre completo";
    nameError.style.color = "red";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  nameError.style.color = "green";
  return true;
}

function validateTel(){
  let tel = docGEBI("contactTel").value;
  if (tel.length == 0) {
    telError.textContent = "Se requiere un teléfono";
    telError.style.color = "red";
    return false;
  }
  else if (tel.length < 8) {
    telError.textContent = "Debe tener al menos menos 8 dígitos";
    telError.style.color = "red";
    return false;
  }
  else if (tel.length > 10) {
    telError.textContent = "Máximo 10 dígitos";
    telError.style.color = "red";
    return false;
  }
  else if (!tel.match(/^[0-9]{6,10}$/)){
    telError.textContent = "Inserte números solamente";
    telError.style.color = "red";
    return false;
  }
  telError.innerHTML = '<i class="fas fa-check-circle"></i>';
  telError.style.color = "green";
  return true;
}

function validateEmail(){
  let email = docGEBI("contactEmail").value;
  if (email.length == 0){
      emailError.textContent = "Se requiere un email";
      emailError.style.color = "red";
      return false;
    }
  else if(!email.match(/^[A-Za-z\._$#%&()/\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.textContent = "Email inválido";
      emailError.style.color = "red";
      return false;
    }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  emailError.style.color = "green";
  return true;
}

function validateMsg(){
  let msg = docGEBI("contactMsg").value;
  let required = 30;
  let left = required - msg.length;

  if(left > 0) {
      mensajeError.textContent = "Quedan " + left + " caracteres por agregar";
      mensajeError.style.color = "red";
      return false;
    }
  mensajeError.innerHTML = '<i class="fas fa-check-circle"></i>';
  mensajeError.style.color = "green";
  return true;
}

function validateProduct(){
  let product = docGEBI("contactProduct").value;
  if(product.length == 0) {
      productError.textContent = "Ingrese un producto";
      productError.style.color = "red";
      return false;
  }
  productError.innerHTML = '<i class="fas fa-check-circle"></i>';
  productError.style.color = "green";
  return true;
}

function validateCheckGroup(){
  if(!checkJD.checked && !checkJPS.checked && !checkJXB.checked && !checkAcc.checked && !checkOtros.checked){
    checkboxError.textContent = "Seleccione al menos una opción";
    checkboxError.style.color = "red";
    return false;
  }
  checkboxError.innerHTML = '<i class="fas fa-check-circle"></i>';
  checkboxError.style.color = "green";
  return true;
}

function validate() {
  if(!validateName() || !validateTel() || !validateEmail() || !validateCheckGroup() || !validateProduct() || !validateMsg()){
    submitError.style.display = "block"
    submitError.textContent = "Por favor corrija los errores para enviar";
    setTimeout(function(){submitError.style.display = "none";}, 3000)
    return false;
  }
}