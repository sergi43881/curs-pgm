// Realitza conversio de Celsius a Fahreheit
function CalculaGrados(VgraC) {
    var VgraC = Number(VgraC);
    var VgraF = Number(VgraF);
    var VgraF = (VgraC * 9 / 5) + 32; //Formula trnasformació graus Celsius a Fahrenheit
    return VgraF;
}

//Valida si les dades son numeriques.
function valida(Vnum) {
    if (isNaN(parseInt(Vnum))) {
           alert("La cadena " + Vnum + " introduïda no és numérica");
           return false;
         }
    return true;
}
//Demana dades fins que siguin correctes.
do {
    var VgraC = prompt("Entra grados Celsius", "0");
    var Vok =valida(VgraC);
} while (Vok == false);

// Crida a funcio de conversio.
var VgraF = CalculaGrados(VgraC);
// Presenta resultats
alert (VgraC + " graus Celsisus, corresponen a " + VgraF + " graus Fahrenheit");
