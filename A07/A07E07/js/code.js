
// Pasa cadena a minuscules.
function minuscules(Vcad) {
    var Vcad = Vcad.toLowerCase();
    return Vcad;
}
// Pasa cadena a majuscules.
function majuscules(Vcad) {
    var Vcad = Vcad.toUpperCase();
    return Vcad;
}

// Demana cadena de caracters.
    var Vcad = prompt("Entra una cadena de caracteres", "0");
// Demana tipus de conversio, validant.
do {
    var Vok = 0;
    var Vconv = prompt("Indica tipus de conversio. Per majuscules(maj). Per minuscules(min)");
    if (Vconv == "maj") {
        var Vcad = majuscules(Vcad);
        alert("Resultat de conversio a majuscules " + Vcad);
    }
    else if (Vconv == "min") {
        var Vcad = minuscules(Vcad);
        alert("Resultat de conversio a majuscules " + Vcad);
        }
        else {
            alert("El tipus de conversio que has entrat, no es correcte. Per majuscules(maj). Per minuscules(min)");
            var Vok = 1;
        }
} while (Vok == 1);
