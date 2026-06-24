// Botón de sorpresa
const boton = document.getElementById("btnSorpresa");
const mensaje = document.getElementById("mensajeSorpresa");

boton.addEventListener("click", function() {
  mensaje.classList.toggle("oculto");

  if (mensaje.classList.contains("oculto")) {
    boton.textContent = "Haz clic aquí 💖";
  } else {
    boton.textContent = "Ocultar sorpresa 💕";
  }
});

// Foto borrosa que se revela al hacer clic
const fotoSecreta = document.getElementById("fotoSecreta");
const mensajeFoto = document.getElementById("mensajeFoto");

fotoSecreta.addEventListener("click", function() {
  fotoSecreta.classList.add("revelada");
  mensajeFoto.classList.remove("oculto");
});