function traspassar() {
    if (document.inscripcio.w3review.value == '') {
        alert("Entra qualsevol cosa a l'area de text") ;
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
    document.replica.w3review.value = document.inscripcio.w3review.value;
}
