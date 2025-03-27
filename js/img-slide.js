'use strict';

function cambiarImagen(elemento) {
    const imagenPrincipal = document.getElementById("main-image");
    imagenPrincipal.src = elemento.src;
}