var V30 = ["abril","juny","setembre","novembre"];
var V31 = ["gener","març","maig","juliol","agost","octubre","desembre"];

var Vmes = prompt("Introdueix el nom d'un mes", "mes") .toLowerCase();

if (Vmes != "febrer") {
    if (Vmes == V30[0] || Vmes == V30[1] ||Vmes == V30[2] || Vmes == V30[3]) {
        alert ("El mes " + Vmes + " te 30 dies");
        }
        else if (Vmes == V31[0] || Vmes == V31[1] ||Vmes == V31[2] || Vmes == V31[3]|| Vmes == V31[4] ||Vmes == V31[5] ||
            Vmes ==  V31[6]) {
            alert ("El mes " + Vmes + " te 31 dies");
            }
            else {
                alert ("El valor teclejat no es valid");
            }
}
else {
    alert ("El mes " + Vmes + " te 28 dies");
}
