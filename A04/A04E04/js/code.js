var orige = prompt("Indica'm l'origen del viatje." , "origen");
var desti = prompt("Indica'm el desti del viatje." , "desti");

if (orige == "palma" || "Palma") {
    if (desti == "barcelona" || "Barcelona") {
        alert("Disposses d'un descompte del 5%");
        }
        else if (desti == "madrid" || "Madrid") {
            alert("Disposses d'un descompte del 10%");
            }
            else if (desti == "valencia" || "Valencia") {
                    alert("Disposses d'un descompte del 15%");
                }
                else {
                    alert("No disposses de cap descompte");
                }
}
else {
    alert("No disposses de cap descompte.");
}
