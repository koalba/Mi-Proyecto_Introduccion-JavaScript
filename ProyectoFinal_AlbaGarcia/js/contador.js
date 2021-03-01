function actualizarContador() {
  var movimientosTexto;
  movimientos++;
  movimientosTexto = movimientos;

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }

  document.querySelector("#mov").innerText = movimientosTexto;

  if (movimientos > niveles[nivelActual].movimientosMax - 1) {
    setTimeout(actualizarVidas, 500);
  } else {
    return;
  }
}

function maxContador() {
  var maxContadorTexto = niveles[nivelActual].movimientosMax;
  if (maxContadorTexto < 10) {
    maxContadorTexto = "0" + maxContadorTexto;
  }
  document.querySelector("#mov_total").innerText = maxContadorTexto;
}
