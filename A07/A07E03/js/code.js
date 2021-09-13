// Segon la longitud de la cadena mostra un missatge o un altre.
function relacio(Vdat1, Vdat2) {
    var Vlon1 = Vdat1.length;
    var Vlon2 = Vdat2.length;
    if (Vlon1 == Vlon2) {
        return 1;
    }
    else if (Vlon1 < Vlon2) {
        return 2;
        }
        else {
            return 3;
        }
}

// Demana dades.
var Vdat1 = prompt("Entra la primera cadena.", "0");
var Vdat2 = prompt("Entra la segona cadena.", "0");

// Crida a funcio i presenta resultats.
var Valor = relacio(Vdat1, Vdat2);
switch (Valor) {
    case 1:
        alert("La cadena " + Vdat1 + " es igual que la cadena " + Vdat2);
        break;
    case 2:
        alert("La cadena " + Vdat1 + " es mes petita que la cadena " + Vdat2);
        break;
    case 3:
        alert("La cadena " + Vdat1 + " es mes gran que la cadena " + Vdat2);
        break;
}
