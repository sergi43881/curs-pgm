window.onload = function() {

    // Cuenta numero de enlaces.
    var Vnum = document.getElementsByTagName("a").length;
    alert("Nombre d'enllaços de la pàgina " + Vnum);

    // Muestra el texto del penultimo enlace.
    var Vdir = document.getElementsByTagName("a");
    var Vnum = --Vnum;
    alert("Direcció a la que enllaça el penúltim enllaç " + Vdir[Vnum]);

    // Muestra el numero de enlaces que contienen "http://prueba/"
    var Vprova = 0;

    for (x = 0; x < Vdir.length; x++) {
        var campo = Vdir[x];
        var campo = ('"' + campo + '"');
        if (campo.includes("http://prueba/")) {
            Vprova++;
        }
    }
    alert("Nombre d'enllaços que enllacen a http://prueba/ " + Vprova);

    // Cuenta numero de enlaces en el parrafo 3.
    parrafo3 = document.getElementsByTagName("p")[2];
    Vnum = parrafo3.getElementsByTagName("a").length;
    alert("Nombre d'enllaços del tercer paragraf " + Vnum);
}
