function valida_numero(Vdat) {
  if (isNaN(Vdat)) {
    return false;
  }
  return true;
}
//Calcul area cercle.
function area_cercle(Vrad) {
    var Vpi = Number(3.1416);
    var Varea = (Vrad * Vrad) * Vpi ;
    var Varea = Varea.toFixed(2);
    return Varea;
}

// Demana radi del cercle, crida a funcio validació numerica.
do {
    var Vrad = prompt("Entra el radi del cercle.", "0");
    var Vret = valida_numero(Vrad);
    if (Vret == false) {
        alert("Dades incorrectes: No has entrat un numero.")
    }
} while (Vret == false);

// Crida a funcio calcul area i presenta resultats.
    var Varea = area_cercle(Vrad);
    alert("L'area del cercle es " + Varea);
