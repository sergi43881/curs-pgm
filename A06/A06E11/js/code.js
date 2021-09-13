
//Validacio de dades. Retorna varis codis d'error.
function valida(Vdat) {

    // Valida que la cadena tingui 9 caracters.
    var Vllarg = Vdat.length;
    if (Vllarg != 9) {
        return 1;
    }

    // Valida que les 8 primeres posicions siguin numeriques.
    var Vnum = Vdat.substr(0,8);
    var valoresAceptados = /^[0-9]+$/;
    if (Vnum.match(valoresAceptados)){
        } else {
            return 2;
        }

    // Valida que la lletra estigui dintre de les lletres seleccionades.
    var Vlletra = Vdat.substr(8,1);
    var Vlletra = Vlletra.toLowerCase();
    var VtipusLletra = ["t","r","w","a","g","m","y","f","p","d","x","b","n","j","z","s","q","v","h","l","c","k","e"];
    if (VtipusLletra.includes(Vlletra)) {
        } else {
            return 3;
        }

    // Calcul lletra i validació.
    var Vnum = Number(Vnum);
    var Vresto = (Vnum % 23);
    if (VtipusLletra[Vresto] != Vlletra) {
        return 4;
        }
        else {
            return 5;
        }
}

// Demana DNI, crida a funcio validació i mostre missatges segons el retorn.
do {
    var Vdat = prompt("Entra el teu DNI (8 digits i una lletra)");
    var Vret = valida(Vdat);
    switch (Vret) {
        case 1:
            alert("la cadena no te 9 caracters");
            break;
        case 2:
            alert("Els 8 primers caracters no son numerics")
            break;
        case 3:
            alert("Lletra NIF no existeix a la llista.")
            break;
        case 4:
            alert("Lletra NIF no valida per al numero que has entrat.")
            break;
        case 5:
            alert("C O R R E C T E !!")
            break;
    }
} while (Vret != 5);
