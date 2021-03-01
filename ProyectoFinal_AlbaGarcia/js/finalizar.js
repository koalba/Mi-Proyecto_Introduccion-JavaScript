function finalizar() {
  if (nivelActual < niveles.length - 1) {
    calcularPuntuacion();
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    calcularPuntuacion();
    document.querySelector("#endGame").classList.add("visible");
    nivelActual = 0;
    puntuacion = 0;
    nivelActual = 0;
    puntuacionTotal = 0;
    vidas();
    actualizaNivel();
  }
}
