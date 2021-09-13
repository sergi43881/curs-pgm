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

// Variables validacion
cumplimenta1 = false;
cumplimenta2 = false;
adderror = " ";
campovalida = "";
seleccion = "";

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

// Validacion de datos:
function valida() {
    error = valida1()
    if (error) {
        alert("Cumplimente como minimo uno de los dos checkbox");
        return;
    }
    error = valida10()
    if (error) {
        alert("Seleccioni una ocupacio");
        return;
    }
    error = valida2()
    if (error) {
        alert("El nom no esta cumplimentat");
        return;
    }
    error = valida4()
    if (error) {
        alert("El nom no pot començar amb un espai amb blanc");
        return;
    }
    error = valida6()
    if (error) {
        alert("El nom te un format incorrecte. Primera lletra amb majuscules i la resta amb minuscules");
        return;
    }
    error = valida3()
    if (error) {
        alert("El cognom no esta cumplimentat");
        return;
    }
    error = valida5()
    if (error) {
        alert("El cognom no pot començar amb un espai amb blanc");
        return;
    }
    error = valida7()
    if (error) {
        alert("El cognom te un format incorrecte. Primera lletra amb majuscules i la resta amb minuscules");
        return;
    }
    error = valida11()
    if (error) {
        alert("Password no cumplimentada");
        return;
    }
    error = valida12()
    if (error) {
        alert("La Password te que tindre 8 caracters com a minim");
        return;
    }
    error = valida13()
    if (error) {
        alert("La Password ha de contindre mayuscules, minuscules i numeros");
        return;
    }
    error = valida14()
    if (error) {
        alert("La Password2 no es igual que la password1");
        return;
    }
    error = valida8()
    if (error) {
        alert("La data ha de estar cumplimentada");
        return;
    }
    error = valida9()
    if (error) {
        alert("La data escollida no es correspon amb el dia d'avui");
        return;
    }
}
// Validacion 14: La Password2 ha de ser igual que la pasword1.
function valida14() {
    if (document.getElementById("pass1").value != document.getElementById("pass2").value) {
        document.getElementById("pass2").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("pass2").className = "textobienr";
        return false;
    }
}
// Validacion 13: La Password ha de contindre mayuscules, minuscules i numeros.
function valida13() {
    vmay = 0;
    vmin = 0;
    vnum = 0;
    vpas = document.getElementById("pass1").value;
    for (x = 0; x < vpas.length; x++) {
        if (vpas[x] >= 0 && vpas[x] < 10) {
            vnum = 1;
        }
        else if(vpas[x] === vpas[x].toUpperCase()) {
            vmay = 1;
        }
        else if(vpas[x] === vpas[x].toLowerCase()) {
            vmin = 1;
        }
    }
    if (vmay == 1 && vmin == 1 && vnum == 1) {
        document.getElementById("pass1").className = "textobien";
        return false;
    }
    else {
        document.getElementById("pass1").className = "textoerror";
        return true;
    }
}
// Validacion 12: Campo password mas de 8 caracteres.
function valida12() {
    if (document.getElementById("pass1").value.length < 8) {
        document.getElementById("pass1").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("pass1").className = "textobien";
        return false;
    }
}
// Validacion 11: Campo password obligatorio.
function valida11() {
    if (document.getElementById("pass1").value == "") {
        document.getElementById("pass1").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("pass1").className = "textobien";
        return false;
    }
}
// Validacion 10: Comprueba que se haya seleccionado una ocupacion.
function valida10() {
    if (seleccion == "") {
        document.getElementById("ocupacio").className = "radioerror";
        return true;
    }
    else {
        document.getElementById("ocupacio").className = "radiobien";
        return false;
    }
}
// Validacion 9: Comprueba que la data escollida sigui el dia d'avui.
function valida9() {
    // monta fecha actual.
    hoy = new Date();
    dd = hoy.getDate();
    mm = hoy.getMonth()+1;
    yyyy = hoy.getFullYear();
    if(dd < 10) {
        dd = '0' + dd;
    }
    if(mm < 10) {
        mm = '0'+ mm;
    }
    fechaavui = yyyy + "-" + mm + "-" + dd;
    // Recupera campo fecha formulario y valida.
    campovalida = document.getElementById("vfecha").value;
    if (campovalida !== fechaavui) {
        document.getElementById("vfecha").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("vfecha").className = "textobien";
        return false;
    }
}
// Validacion 8: Comprueba que la data escollida estigui cumplimentada
function valida8() {
    campovalida = document.getElementById("vfecha").value;
    if (document.getElementById("vfecha").value == "") {
        document.getElementById("vfecha").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("vfecha").className = "textobien";
        return false;
    }
}
// Validacion 7: Comprueba que campo apellido tenga primera lletra amb majuscules i la resta amb minuscules.
function valida7() {
    campovalida = document.getElementById("vapellido").value;
    for (x = 0; x < campovalida.length; x++) {
        if (x == 0) {
            if (campovalida[x] !== campovalida[x].toUpperCase()) {
                document.getElementById("vapellido").className = "textoerror";
                return true;
            }
        }
        else {
            if (campovalida[x] !== campovalida[x].toLowerCase()) {
                document.getElementById("vapellido").className = "textoerror";
                return true;
            }
        }
    }
}
// Validacion 6: Comprueba que campo nombre tenga primera lletra amb majuscules i la resta amb minuscules.
function valida6() {
    campovalida = document.getElementById("identificadorNom").value;
    for (x = 0; x < campovalida.length; x++) {
        if (x == 0) {
            if (campovalida[x] !== campovalida[x].toUpperCase()) {
                document.getElementById("identificadorNom").className = "textoerror";
                return true;
            }
        }
        else {
            if (campovalida[x] !== campovalida[x].toLowerCase()) {
                document.getElementById("identificadorNom").className = "textoerror";
                return true;
            }
        }
    }
}
// Validacion 5: Comprueba que campo apellido no empiece por un espacio en blanco.
function valida5() {
    campovalida = document.getElementById("vapellido").value;
    campovalida = campovalida.substr(0,1);
    if (campovalida == " ") {
        document.getElementById("vapellido").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("vapellido").className = "textobien";
        return false;
    }
}
// Validacion 4: Comprueba que campo nombre no empiece por un espacio en blanco.
function valida4() {
    campovalida = document.getElementById("identificadorNom").value;
    campovalida = campovalida.substr(0,1);
    if (campovalida == " ") {
        document.getElementById("identificadorNom").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("identificadorNom").className = "textobien";
        return false;
    }
}
// Validacion 3: Comprueba que campo apellido no este vacio.
function valida3() {
    if (document.getElementById("vapellido").value == "") {
        document.getElementById("vapellido").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("vapellido").className = "textobien";
        return false;
    }
}
// Validacion 2: Comprueba que campo nombre no este vacio.
function valida2() {
    if (document.getElementById("identificadorNom").value == "") {
        document.getElementById("identificadorNom").className = "textoerror";
        return true;
    }
    else {
        document.getElementById("identificadorNom").className = "textobien";
        return false;
    }
}
// Validacion 1: Comprueba que uno de los dos checkbox este seleccionado.
function valida1() {
    cumplimenta1 = false;
    cumplimenta2 = false;
    // valida chexbox idioma.
    boto = document.inscripcio.idioma;
    for (x=0; x < boto.length; x++) {
        valor = boto[x].checked;
        if (valor) {
            cumplimenta1 = true;
        }
    }
    // valida chexbox idioma.
    boto = document.inscripcio.font;
    for (x=0; x < boto.length; x++) {
        valor = boto[x].checked;
        if (valor) {
            cumplimenta2 = true;
        }
    }
    if (cumplimenta1 == false && cumplimenta2 == false) {
        document.getElementById("lengua").className = "radioerror";
        document.getElementById("font").className = "radioerror";
        return true;
    }
    else {
        document.getElementById("lengua").className = "radiobien";
        document.getElementById("font").className = "radiobien";
        return false;
    }
}
