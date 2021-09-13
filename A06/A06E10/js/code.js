function comptar(Vparam) {
    var Vmes = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];

    for (x=0 ; x < 12 ; x++) {
        if (Vmes[x] == Vparam) {
            x++
            return x;
        }
    }
    return false;
}
var Vdata = prompt("entra una mes.") .toLowerCase();
var Vret = comptar(Vdata);
if (Vret != false) {
    alert("El mes " + Vdata + " seleccionat es el numero " + Vret);
}
else {
    alert("La cadena que has teclejat no es un mes");
}
