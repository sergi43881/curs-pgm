var Vmes = prompt("Entra un número de mes (1 al 12)", "numero");
Vmes = Number(Vmes);
V30 = Number(30);
V31 = Number(31);

if (Vmes >= 1 && Vmes <= 12) {
    if (Vmes == 2) {
        alert ("El mes " + Vmes + " te 28 dies");
        }
        else if (Vmes == 4 || Vmes == 6 || Vmes == 9 || Vmes ==11) {
                alert ("El mes " + Vmes + " te " + V30 + " dies");
                }
                else {
                    alert ("El mes " + Vmes + " te " + V31 + " dies");
                }
}
else {
    alert ("El valor teclejat no es valid");
}
