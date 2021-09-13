function comptar(Vpar01, Vpar02, Vpar03) {
    var Vpar01 = Number(Vpar01);
    var Vpar02 = Number(Vpar02);
    var Vpar03 = Number(Vpar03);
    var Vmedia = (Vpar01+Vpar02+Vpar03)/3;
    alert("La mitjana de " + Vpar01 + " , " + Vpar02 + " i " + Vpar03 + " es " + Vmedia);
}
//Valida si les dades son numeriques. Veure comentari a final de codi
function valida(Vnum) {
    var valoresAceptados = /^[0-9]+$/;
    if (Vnum.match(valoresAceptados)){
        if (Vnum < 0 || Vnum > 999) {
            alert ("La cadena " + Vnum + " introduïda es numérica pero no és vàlida (Valors vàlids, entre 0 i 999)")
        }
    } else {
            alert ("La cadena " + Vnum + " introduïda no és numérica");
    }
}
var Vdat1 = prompt("Entra un primer valor numeric entre 0 i 999");
valida(Vdat1);
var Vdat2 = prompt("Entra un segón valor numeric entre 0 i 999");
valida(Vdat2);
var Vdat3 = prompt("Entra un tercer valor numeric entre 0 i 999");
valida(Vdat3);
comptar(Vdat1, Vdat2, Vdat3);

// La expresión regular que utilizamos es /^[0-9]+$/ y con ella lo que intentamos saber es si la cadena que intentamos validar contiene solo caracteres exclusivamente numéricos. Si analizamos esta expresión obtenemos que la expresión va delimitada por el carácter ‘/’ tanto al inicio como al final. Es importante saber que se pueden usar otros alternativos como delimitadores como pueden ser ( ), { },[ ], < >, o bien # tanto para el delimitador de inicio como el del final, ejemplo: #^[0-9]+$#
