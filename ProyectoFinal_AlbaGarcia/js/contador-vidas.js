//Modificar los corazones, a partir de perder todos los movimientos, y restan mas puntos que ???

function vidas() {
  var misVidas = document.querySelector("#misVidas");
  misVidas.innerHTML = "";

  for (var i = 0; i < 3; i++) {
    var corazon = document.createElement("li");
    corazon.innerHTML = "<i class='fas fa-heart'></i>";
    misVidas.appendChild(corazon);
  }
}

function actualizarVidas() {
  if (movimientos > niveles[nivelActual].movimientosMax - 1) {
    var corazones = document.querySelectorAll(".fas.fa-heart");
    corazones[0].classList.replace("fas", "far");
    iniciar();

    if (corazones.length === 1) {
      setTimeout(gameOver, 500);
      return;
    }
  }
}
