var marca = prompt("Indica'm la marca del cotxe." , "marca del cotxe");
var model = prompt("Ara el model del cotxe?" , "model del cotxe");

if (marca == "ford") {
        if (model == "fiesta") {
            alert("Disposes d'un descompte del 5%!!");
        }
        else if (model == "focus") {
            alert("Disposes d'un descompte del 10%!!");
            }
            else {
                alert("No disposses de cap descompte");
            }
}
    else {
        alert("No disposses de cap descompte.");
    }
