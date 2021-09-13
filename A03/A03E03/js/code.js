var text01 = prompt("Pots escriure un numero o paraula?" , "0");
var text02 = prompt("Pots escriure un altre numero o paraula?" , "0");
numtex01 = text01.length;
numtex02 = text02.length;

if (numtex01 > numtex02) {
    alert("La cadena " + text01 + " es mes gran que la cadena " + text02 +  " al tindre " + numtex01 + " caracters i l'altre " + numtex02);
    }
    else {
        if (numtex01 < numtex02) {
            alert("La cadena " + text02 + " es mes gran que la cadena " + text01 +  " al tindre " + numtex02 + " caracters i l'altre " + numtex01);
        }
}
