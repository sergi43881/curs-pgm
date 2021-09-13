function envia() {
    if (document.inscripcio.password1.value != '' && document.inscripcio.password2.value != '') {
        if (document.inscripcio.password1.value === document.inscripcio.password2.value) {
            alert("Les contrasenyes son IGUALS") ;
        }
        else {
            alert("Les contrasenyes son DIFERENTS") ;
        }
    }
    else {
        alert("Has d'omplir la contrasenya1 i la contrasenya2 perquè pugui validar-ho") ;
    }
}
