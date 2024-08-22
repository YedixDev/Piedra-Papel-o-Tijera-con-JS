// Función para los botones
document.getElementById("piedra").addEventListener("click", function () {
  jugar("piedra");
});
document.getElementById("papel").addEventListener("click", function () {
  jugar("papel");
});
document.getElementById("tijera").addEventListener("click", function () {
  jugar("tijera");
});

// Función para jugar
function jugar(eleccionUsuario) {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccionPc = opciones[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (eleccionUsuario === eleccionPc) {
    resultado = "¡Empate!";
  } else if (
    (eleccionUsuario === "piedra" && eleccionPc === "tijera") ||
    (eleccionUsuario === "tijera" && eleccionPc === "papel") ||
    (eleccionUsuario === "papel" && eleccionPc === "piedra")
  ) {
    resultado = `¡Ganaste! Elegiste ${eleccionUsuario} y la computadora eligió ${eleccionPc}.`;
  } else {
    resultado = `¡Perdiste! Elegiste ${eleccionUsuario} y la computadora eligió ${eleccionPc}.`;
  }

  document.getElementById("resultado").textContent = resultado;
}

// Función para vovler a jugar
function repetir() {
  document.getElementById("resultado").textContent = "";
}
