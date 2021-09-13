var nota01 = prompt("Primera nota" , "0");
var nota02 = prompt("Segona nota" , "0");
var nota03 = prompt("Tercera nota" , "0");

nota01 = Number(nota01)
nota02 = Number(nota02)
nota03 = Number(nota03)

var promigc = (nota01+nota02+nota03) /3;
var promig = promigc.toFixed(2);

if (promig >= 5) {
    alert("Estas aprobat!!! amb un promig de  " + promig);
    }
    else {
    alert("HAS SUSPES amb un promig de  " + promig);
    }
