function envia() {
    if (document.inscripcio.nom.value != '' && document.inscripcio.cognoms.value != '') {
        alert(document.inscripcio.nom.value + ' ' + document.inscripcio.cognoms.value);
    }
    else {
        alert("Has d'omplir el nom i cognoms perquè puguis veure'ls") ;
    }
}
