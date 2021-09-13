function comptar(Vparam) {
    var VnumA = Number(0);
    var VnumE = Number(0);
    var VnumI = Number(0);
    var VnumO = Number(0);
    var VnumU = Number(0);

    var Vcad = Vparam.split('');   //Convierte la cadena en una tabla

    for (x=0 ; x < Vparam.length ; x++) {
        if (Vcad[x] == "a") {
            VnumA++;
            }
            else if (Vcad[x] == "e"){
                 VnumE++;
                }
                else if (Vcad[x] == "i"){
                    VnumI++;
                   }
                   else if (Vcad[x] == "o"){
                       VnumO++;
                   }
                        else if (Vcad[x] == "u"){
                            VnumU++;
                        }
    }
    return [VnumA, VnumE, VnumI, VnumO, VnumU];
}
var Vdata = prompt("entra una cadena de caràcters.") .toLowerCase();
var [VnumA, VnumE, VnumI, VnumO, VnumU] = comptar(Vdata);
alert("La cadena " + Vdata + " porta " + VnumA + " -A- " + VnumE + " -E- " + VnumI + " -I- " + VnumO + " -O- " + VnumU + " -U- ");
