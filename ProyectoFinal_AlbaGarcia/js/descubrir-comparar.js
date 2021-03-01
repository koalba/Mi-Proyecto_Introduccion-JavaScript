function descubrirTarjeta() {
  var descubiertas;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );
  if (totalDescubiertas.length > 1) {
    return;
  }
  this.classList.add("descubierta");

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }
  comprobarTarjetas(descubiertas);
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  } else {
    actualizarContador();
  }
}

function comprobarTarjetas(tarjetasDescubiertas) {
  if (
    tarjetasDescubiertas[0].dataset.valor ===
    tarjetasDescubiertas[1].dataset.valor
  ) {
    acierto(tarjetasDescubiertas);
  } else {
    error(tarjetasDescubiertas);
  }
}
