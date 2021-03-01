function calcularPuntuacion() {
  //MONEDAS - 50 m  por cada 2 seguidas.
  var puntuacionTexto;
  var miPuntuacion = document.querySelectorAll(".puntuacion");
  if (puntuacion > 0) {
    puntuacionTexto = puntuacion;
  } else if (puntuacion < 100 && puntuacion > 0) {
    puntuacionTexto = "0" + puntuacion;
  } else {
    puntuacionTexto = "000";
    puntuacion = 0;
  }
  miPuntuacion.forEach(function (elemento) {
    elemento.innerText = puntuacionTexto;
  });
}
