function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });

  if (tarjetasSeguidas === true) {
    puntuacion = puntuacion + 50;
    tarjetasSeguidas = false;
    calcularPuntuacion();
    actualizaCompra();
    return;
  }
  tarjetasSeguidas = true;
  calcularPuntuacion();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
