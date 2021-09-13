function muestra() {
    
    // Substituye la clase oculta por visible del segunto parrafo
    var cambiarElemento = document.getElementById("adicional");
    cambiarElemento.className = "visible";

    // Añade clase al link para ocultar el enlace
    var añadirElemento = document.getElementById("enlace");
    añadirElemento.className += "oculto";

}
