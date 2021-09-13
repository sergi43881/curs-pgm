function valida_numero(Vdat) {
  if (isNaN(Vdat)) {
    return false;
  }
  return true;
}
//Calcul area rectangle.
function area_rectangulo(Vbas, Valt) {
    var Varea = (Vbas * Valt);
    return Varea;
}

// Demana primer valor, crida a funcio validació numerica.
do {
    var Vbas = prompt("Entra la base del rectangle.", "0");
    var Vret = valida_numero(Vbas);
    if (Vret == false) {
        alert("Dades incorrectes: No has entrat un numero.")
    }
} while (Vret == false);

// Demana segon valor, crida a funcio validació numerica.
do {
    var Valt = prompt("Entra la alçada del rectangle.", "0");
    var Vret = valida_numero(Valt);
    if (Vret == false) {
        alert("Dades incorrectes: No has entrat un numero.")
    }
} while (Vret == false);

// Crida a funcio calcul area i presenta resultats.
    var Varea = area_rectangulo(Vbas, Valt);
    alert("L'area del rectangle es " + Varea);
