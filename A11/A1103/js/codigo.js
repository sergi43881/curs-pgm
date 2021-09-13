function traspassar() {
    if (document.inscripcio.nom.value == '') {
            alert("Cumplmenta el nom") ;
            return;
    }
    if (document.inscripcio.cognoms.value == '') {
        alert("Cumplmenta els cognoms") ;
        return;
    }
    if (document.inscripcio.password1.value == '') {
        alert("Cumplmenta la contrasenya") ;
        return;
    }
    if (document.inscripcio.password2.value == '') {
        alert("Repeteix la contrasenya") ;
        return;
    }
    if (document.inscripcio.password1.value != document.inscripcio.password2.value) {
        alert("Les contrasenyes son DIFERENTS") ;
    }
    document.replica.nom.value = document.inscripcio.nom.value;
    document.replica.cognoms.value = document.inscripcio.cognoms.value;
    document.replica.password1.value = document.inscripcio.password1.value;
    document.replica.password2.value = document.inscripcio.password2.value;
    document.replica.conector.value = document.inscripcio.conector.value;
}
