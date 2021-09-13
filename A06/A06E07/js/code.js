function comptar(Vparam) {
    var Vnum = Number(0);
    var Vcad = Vparam.split('');   //Convierte la cadena en una tabla

    for (x=0 ; x < Vparam.length ; x++) {
        if (Vcad[x] == "a" || Vcad[x] == "e" || Vcad[x] == "i" || Vcad[x] == "o" || Vcad[x] == "u") {
            Vnum++;
        }
    }
    return Vnum;
}
var Vdata = prompt("entra una cadena de caràcters.") .toLowerCase();
var Vnumero = comptar(Vdata);
alert("La cadena " + Vdata + " porta " + Vnumero + " vocals");
