function comptar(Vparam) {
    var Vnum = Number(0);
    var Vcad = Vparam.split('');   //Convierte la cadena en una tabla

    for (x=0 ; x < Vparam.length ; x++) {
        if (Vcad[x] == "a") {
            Vnum++;
        }
    }
    return Vnum;
}
var Vdata = prompt("entra una cadena de caràcters.") .toLowerCase();
var Vnumero = comptar(Vdata);
alert("La cadena " + Vdata + " repeteix la lletra 'A' " + Vnumero + " cops");
