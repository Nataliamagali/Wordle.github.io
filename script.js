let intentos = 6;

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

let diccionario = ["MATON", "ACTOR", "BACHE", "CABRA", "RATON"];
let posicion = Math.floor(Math.random() * diccionario.length);
let palabra = diccionario[posicion];
console.log(palabra);

function intentar() {
  const INTENTO = leerIntento();

  if (INTENTO === palabra) {
    console.log("GANASTE!=)");
    terminar("GANASTE!!FELICIDADES!")
    return;
  }
  for (let letra in palabra) {
    if (INTENTO[letra] === palabra[letra]) {
      console.log(INTENTO[letra], "VERDE");
    } else if (palabra.includes(INTENTO[letra])) {
      console.log(INTENTO[letra], "AMARILLO");
    } else {
      console.log(INTENTO[letra], "GRIS");
    }
  }
  intentos--;
  if (intentos == 0) {
    console.log("PERDISTE!");
    terminar("<h2>PERDISTE!</h2>")
  }
  
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";

  for (let letra in palabra) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (INTENTO[letra] === palabra[letra]) {
      //VERDE
      SPAN.innerHTML = INTENTO[letra];
      SPAN.style.backgroundColor = "green";
    } else if (palabra.includes(INTENTO[letra])) {
      //AMARILLO
      SPAN.innerHTML = INTENTO[letra];
      SPAN.style.backgroundColor = "yellow";
    } else {
      //GRIS
      SPAN.innerHTML = INTENTO[letra];
      SPAN.style.backgroundColor = "grey";
    }
    ROW.appendChild(SPAN);
  }
  GRID.appendChild(ROW);
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase();
  return intento;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}