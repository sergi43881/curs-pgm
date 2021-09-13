function valida_numero(Vcat) {
  if (isNaN(Vcat)) {
    return false;
  }
    return true;
}
// Tria numeros parells i senars.
function parells_senars(Vcad) {
    var Vpar = new Array();
    var Vsen = new Array();
    for (x=0; x < Vcad.length; x++) {
        var Vrest = (Vcad[x] % 2);
        if (Vrest == 0) {
            Vpar[Vpar.length] = Vcad[x];
        }
        else {
            Vsen[Vsen.length] = Vcad[x];
        }
    }
    return [Vpar, Vsen];
}
// Demana cadena de numeros, crida a funcio validació numerica.
do {
    var Vcad = prompt("Entra una cadena de numeros.", "0");
    var Vret = valida_numero(Vcad);
    if (Vret == false) {
        alert("Dades incorrectes: Hi ha un o mes caractes que no son numeros.")
    }
} while (Vret == false);
// Crida a funcio calcul area i presenta resultats.
    var [Vpar, Vsen] = parells_senars(Vcad);
    alert("Numeros parells de la cadena trobats (" + Vpar + ") Numeros senars de la cadena trobats (" + Vsen +")");
