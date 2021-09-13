
// Pasa cadena a minuscules.
function minuscules(Vcad1) {
    var Vcad1 = Vcad1.toLowerCase();
    return Vcad1;
}
// Pasa cadena a majuscules.
function majuscules(Vcad2) {
    var Vcad2 = Vcad2.toUpperCase();
    return Vcad2;
}
// Demana 1ª cadena de caracters, crida a funcio per transformar a minuscules.
    var Vcad1 = prompt("Entra una cadena de caracteres", "0");
    var Vres1 = minuscules(Vcad1);
    alert("Resultat de conversio a minuscules " + Vres1)

// Demana 2ª cadena de caracters, crida a funcio per transformar a majuscules.
    var Vcad2 = prompt("Entra una cadena de caracteres", "0");
    var Vres2 = majuscules(Vcad2);
    alert("Resultat de conversio a majuscules " + Vres2)
