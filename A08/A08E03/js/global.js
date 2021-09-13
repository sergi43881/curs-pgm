// Inicializa contador:
var x = Number();

function canvicolor() {

    // Define colores
    var Vcolor = ["red", "green", "yellow", "blue", "orange"];

    // Inicializa contador para volver a empezar la tabla de colores.
    if (x == Vcolor.length) {
        x = 0;
    }
    // Cambia color de fondo
    document.getElementById("block").style.backgroundColor = Vcolor[x];
    x++;
}
