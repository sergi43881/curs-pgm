// Paraules en català
catala = new Array("Configuració", " Català", " Castellà", "Font", "Omplir", "Ocupació", "Estudiant", "Treballador", "Nom ", "Cognoms ", "Password: ", "Repeteix el password: ", "Indiqui les seves preferències per favor", "Home", "Dona", "Home", "Dona", "Escull una data: ", " Enviar-ho ", "Seleccioni subgrup d'ocupació");

// Paraules en castellà
castella = new Array("Configuración", " Catalán", " Castellano", "Fuente", "Rellenar", "Ocupación", "Estudiante", "Trabajador", "Nombre ", "Apellidos ", "Password: ", "Repite la password: ", "Indique sus preferéncias por favor", "Hombre", "Mujer", "Hombre", "Mujer", "Elige una fecha: ", " Enviar ", "Seleccione subgrupo de ocupación");

// ID's per traduccions
tid = new Array("legend", "idiomacatala", "idiomacastella", "font", "omplir", "ocupacio", "estudiant", "treballador", "nom", "cognoms", "pass", "passrep", "preferencias", "mas", "fem", "mas1", "fem1", "fecha", "boton", "text2");

// Select dinamic estudiant catala
priestcat = new Array("Primària", "Secundaria", "Batxillerat", "Cicles Formatius", "Universitat", "Altres");
// Select dinamic estudiant castella
priestesp = new Array("Primaria", "Secundaria", "Bachillerato", "Ciclos Formativos", "Universidad", "Otros");
// Select dinamic treballador catala
pritrecat = new Array("Autònom", "Assalariat en empresa privada", "Funcionari", "Atur", "Altres");
// Select dinamic treballador castella
pritreesp = new Array("Autónomo", "Asalariado en empresa privada", "Funcionario", "Desempleo", "Otros");

// Indice de la seleccion de la lista secundaria por si cambian de idioma
reservaindex     = 0;
tipo             = 0;

function traduccio() {
    // recupera idioma a traducir
    boto = document.inscripcio.idioma;
    for (x=0; x < boto.length; x++) {
        valor = boto[x].checked;
        if (valor) {
            tipidioma = boto[x].value;
            if (tipidioma == "idiomacatala") {
                ttra = catala;  // Vuelca tabla catala sobre tabla master
            }
            else {
                ttra = castella; // Vuelca tabla castellano sobre tabla master
            }
            // Substituye texto segun idioma basandose en tabla Id's
            for (i=0; i < ttra.length; i++) {
                document.getElementById(tid[i]).innerHTML = ttra[i];
            }
        }
    }
    // Si existia una seleccion previa, carga traduccion en lista secundaria.
    if (seleccion != " ") {
        selectsecundario()
    // Reserva tipo de seleccion para inicializar posicionamiento en lista secundaria.
        tipo = seleccion.substr(0,1);
    }
}
function selectsecundario() {
    // Recupera opcion clickada en select primario
    listaprim = document.inscripcio.primari;
    seleccion = listaprim.options[listaprim.selectedIndex].text
    switch (seleccion) {
        case "Estudiant":
            pri = priestcat // Vuelca tabla estudiante catala sobre tabla master
            break;
        case "Estudiante":
            pri = priestesp // Vuelca tabla estudiante castellano sobre tabla master
            break;
        case "Treballador":
            pri = pritrecat; // Vuelca tabla trabajador catala sobre tabla master
            break;
        case "Trabajador":
            pri = pritreesp; // Vuelca tabla trabajador castellano sobre tabla master
            break;
    }
    // Control posicionamiento en lista secundaria.
    if (tipo != seleccion.substr(0,1)) {
        tipo = seleccion.substr(0,1);
        reservaindex = 0;
    }

    // Inicializa select secundario
    document.inscripcio.secundari.options.length=0

    // Carga select secundario
    s2 = document.getElementById("listasecundaria");
    for (z=0; z < pri.length; z++) {
        if (reservaindex == z) {
            document.inscripcio.secundari.options[z]=new Option(pri[z], pri[z], false, true);
        }
        else {
            document.inscripcio.secundari.options[z]=new Option(pri[z], pri[z], false, false);
        }
    }
    // Visualiza select secundario
    s2.className = "select2si";
    s2 = document.getElementById("text2");
    s2.className = "select2si";
}
function canvifont() {
    // recupera fuente a cambiar
    boto = document.inscripcio.font;
    for (x=0; x < boto.length; x++) {
        valor = boto[x].checked;
        if (valor) {
            tipfont = boto[x].value;
            document.getElementById("canvilletra").style.fontFamily = tipfont;
        }
    }
}
// Reserva el indice de la seleccion de la lista secundaria por si cambian de idioma
function reserva() {
    reservaindex = document.getElementById("listasecundaria").selectedIndex
}
