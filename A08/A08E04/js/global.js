// Inicializa contador:
var ample = Number(500);
var alt = Number(200);

function mesgran() {
    ample = ample + (ample*10)/100;
    alt  = alt + (alt*10)/100;
    document.getElementById("block").style.width = (ample+"px");
    document.getElementById("block").style.height = (alt+"px");
}
function mespetit() {
    ample = ample - (ample*10)/100;
    alt  = alt - (alt*10)/100;
    document.getElementById("block").style.width = (ample+"px");
    document.getElementById("block").style.height = (alt+"px");
}
