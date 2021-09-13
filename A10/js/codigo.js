// Variables generales.
error      = (0);  // Error para pregunta no cumplimentada.
conta      = (0);  // Contador parcial para pregunta en funcion valida.
pregunta   = (0);  // Indica la pregunta tratada.
contesta   = (0);  // Variable que indica radio-button checked.
indexus    = (0);  // Indice tabla respuser
puntuacion = (0);  // Puntuacion total examen.
bien       = (0);  // Preguntas respuestas correctamente.
mal        = (0);  // Preguntas respuestas erroneamente.

// Respuestas a las preguntas
respuestas =
 ["fradio011","fradio023","fradio031","fradio041","fradio052","fradio061","fradio071","fradio082","fradio091","fradio103"];
// Tabla radio-butons para validacion.
rbutons = ["fradio011","fradio012","fradio013","fradio021","fradio022","fradio023","fradio031","fradio032","fradio033","fradio041","fradio042","fradio043","fradio051","fradio052","fradio053","fradio061","fradio062","fradio063","fradio071","fradio072","fradio073","fradio081","fradio082","fradio083","fradio091","fradio092","fradio093","fradio101","fradio102","fradio103",];
// Tabla posicionamiento en pantalla para errores.
posicion = ["fradio011","fradio021","fradio031","fradio041","fradio051","fradio061","fradio071","fradio081","fradio091","fradio101"];
// Tabla respuestas usuario.
respuser = new Array();
// Tabla clases para cambio color texto en validacion.
clabel = new Array();

window.onload = function() {
    // realza botones de correccion e inicializacion.
    document.getElementById("botenvia1").onmouseover = overout;
    document.getElementById("botenvia1").onmouseout = overout;
    document.getElementById("botborra1").onmouseover = overout;
    document.getElementById("botborra1").onmouseout = overout;
    document.getElementById("botenvia2").onmouseover = overout;
    document.getElementById("botenvia2").onmouseout = overout;
    document.getElementById("botborra2").onmouseover = overout;
    document.getElementById("botborra2").onmouseout = overout;
}
// Realza botones correccion e inicializacion.
function overout(evento) {
    var evento = evento || window.event;
    var evento = evento.type;
    if (evento == "mouseover") {
        this.style.backgroundColor = "grey";
    }
    if (evento == "mouseout") {
        this.style.backgroundColor = "#f4f4f4";
    }
}
// Cambia el formato del enunciado de la pregunta de negrita a normal cuando seleccionan respuesta.
function textobold(numtext) {
    document.getElementById(numtext).style.fontWeight = "normal";
}
// Inicializa el radio-button donde se ha realizado doble click.
// Controla si esta marcado para inicializar el enunciado de la pregunta de normal a negrita.
function iniradio(numradio, numtext) {
    if (document.getElementById(numradio).checked == true) {
        document.getElementById(numradio).checked = false;
        numradio = numradio.replace('fradio', 'label');
        document.getElementById(numradio).style.fontWeight = "normal";
        document.getElementById(numradio).style.color = "black";
        document.getElementById(numtext).style.fontWeight = "bold";
    }
}
// Boton inicializa. Borra todas las selecciones de radio-buttons existentes e inicializa el enunciado de la pregunta de normal a negrita. Tambien inicializa contadores.
function borrar() {
    location.reload();
    window.scrollTo(0,0);
}
// Valida cumplientacion de todas las preguntas.
// Marca preguntas respondidas y puntua.
// Presenta nota total
function corregir() {
    error = valida();
    if (error == 1) {
        return;
    }
    marcarespuestas();
    presentanotas();
}
// Valida que todas las preguntas esten cumplimentadas. En caso contrario muestra error y posiciona en la pregunta a cumplimentar.
function valida() {
    error = (0);
    conta = Number(0);
    pregunta = Number(1);
    contesta = (0);
    textnorm();
    for (x=0; x < rbutons.length; x++) {
        conta = conta + 1;
        if (document.getElementById(rbutons[x]).checked == true) {
            indexus = pregunta - 1;
            respuser[indexus] = rbutons[x];
            clabel[indexus] = rbutons[x].replace('fradio', 'label');
            contesta = (1);
        }
        if (conta == 3 && contesta == 0) {
            alert("La pregunta " + pregunta + " no esta resposta");
            document.getElementById(posicion[pregunta]).focus();
            return 1;
        }
        else if (conta == 3 && contesta == 1){
            pregunta = pregunta + 1
            contesta = (0);
            conta = (0);
        }
    }
}
// Marca en rojo o verde las respuestas realizadas segun validacion. Puntua el test.
function marcarespuestas() {
    puntuacion = (0);
    bien = (0);
    mal = (0);
    for (x=0; x < respuser.length; x++) {
        if (respuser[x] == respuestas[x]) {
            document.getElementById(clabel[x]).style.color = "green";
            document.getElementById(clabel[x]).style.fontWeight = "bold";
            bien++;
            puntuacion++;
        }
        else {
            document.getElementById(clabel[x]).style.color = "red";
            document.getElementById(clabel[x]).style.fontWeight = "bold";
            mal++;
            puntuacion = puntuacion - 0.25;
        }
    }
}
// Presenta nota del test.
function presentanotas () {
    // Si la puntuacion es negativa, la puntuacion es 0.
    if (puntuacion < 0) {
        puntuacion = 0;
    }
    // preguntas correctas
    document.getElementById("resbe").innerHTML = bien;
    document.getElementById("resbe").style.color = "red";
    document.getElementById("resbe").style.fontWeight = "bold";
    // Preguntas incorrectas
    document.getElementById("resmal").innerHTML = mal;
    document.getElementById("resmal").style.color = "red";
    document.getElementById("resmal").style.fontWeight = "bold";
    // Nota total
    document.getElementById("total").innerHTML = puntuacion;
    document.getElementById("total").style.color = "red";
    document.getElementById("total").style.fontWeight = "bold";
    // Muestra bloque notas
    document.getElementById("notas").style.display = "block";
    window.scrollTo(0,0);
}
// Inicializa atributos preguntas contestadas bien o mal.
function textnorm() {
    for (x=0; x < clabel.length; x++) {
        document.getElementById(clabel[x]).style.color = "black";
        document.getElementById(clabel[x]).style.fontWeight = "normal";
    }
}
// Esconde resultado test.
function volver() {
    document.getElementById("notas").style.display = "none";
    window.scrollTo(0,0);
}
