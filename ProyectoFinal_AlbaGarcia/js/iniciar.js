function iniciar() {
  niveles = [
    { tarjetas: grupoTarjetas[0], movimientosMax: 3 },
    {
      tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
      movimientosMax: 8,
    },
    ,
    { tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]) },
    {
      tarjetas: grupoTarjetas[0].concat(
        grupoTarjetas[1],
        grupoTarjetas[2],
        grupoTarjetas[3]
      ),
    },
    {
      tarjetas: grupoTarjetas[0].concat(
        grupoTarjetas[1],
        grupoTarjetas[2],
        grupoTarjetas[3],
        grupoTarjetas[4]
      ),
    },
  ];

  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);

  document.querySelector("#mov").innerText = "00";
  maxContador();
  calcularPuntuacion();

  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#menu_principal").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrirTarjeta);
  });
}

vidas();

document.querySelectorAll(".selectButton").forEach(function (elemento) {
  elemento.addEventListener("click", eligeTarjetas);
});

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", iniciar);
});

document.querySelector(".avanzar").addEventListener("click", cargaNivel);

document
  .querySelector(".compra_vidas")
  .addEventListener("click", realizaCompra);
