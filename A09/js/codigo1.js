/*
    Esta funcion muestra los valores entrados en el formulario.
    Tambien muestra si la contraseñas son iguales o distintas.
    Previamente valida los datos del formulario para que todos esten cumplimentados mediante la funcion "valida". Se ignora el atributo required de la etiqueta HTML para no mostrar valores vacios en el alert. De esta forma la presentacion no es incongruente.
    Tambien se tratan los botones del formulario "enviar" y "borrar" mediante funciones. Los tipos de los botones se dejan como "button" en lugar de "sumbit" y "reset".
*/
function mostra() {
    var Verror = valida();
    if (Verror == 0) {
        alert(document.getElementById("nombre").value);
        alert(document.getElementById("email").value);
        alert(document.getElementById("psw").value);
        alert(document.getElementById("psw2").value);
        alert(document.getElementById("asunto").value);
        alert(document.getElementById("curso").value);
        alert(document.getElementById("mensaje").value);

        if (document.getElementById("psw").value === document.getElementById("psw2").value){
            alert ("Les passwords son IGUALS");
        }
        else {
            alert ("Les passwords son DIFERENTS")
        }
    }
    else {
        switch (Verror) {
            case 1:
                alert ("El camp NOMBRE no esta cumplimentat")
                break;
            case 2:
                alert ("El camp EMAIL no esta cumplimentat")
                break;;
            case 3:
                alert ("El camp CONTRASEÑA01 no esta cumplimentat")
                break;;
            case 4:
                alert ("El camp CONTRASEÑA02 no esta cumplimentat")
                break;;
            case 5:
                alert ("El camp CURSO no esta cumplimentat")
                break;;
            case 6:
                alert ("El camp MENSAJE no esta cumplimentat")
                break;
        }
    }
}

// Valida campos formulario que no esten vacios.
function valida() {
    if (document.getElementById("nombre").value == "") {
        return 1;
    }
    if (document.getElementById("email").value == "") {
        return 2;
    }
    if (document.getElementById("psw").value == "") {
        return 3;
    }
    if (document.getElementById("psw2").value == "") {
        return 4;
    }
    if (document.getElementById("curso").value == "") {
        return 5;
    }
    if (document.getElementById("mensaje").value == "") {
        return 6;
    }
    return 0;
}

// Neteja camps formulari.
function esborra() {
    document.getElementById("nombre").value="";
    document.getElementById("email").value="";
    document.getElementById("psw").value="";
    document.getElementById("psw2").value="";
    document.getElementById("asunto").value="";
    document.getElementById("curso").value="";
    document.getElementById("mensaje").value="";
}

// Traslada texto copia a nombre formulario.
function copianom(){
    if (document.getElementById("origen").value == "") {
        alert ("EL VALOR A COPIAR, NO ESTA CUMPLIMENTAT");
    }
    else {
        document.getElementById("nombre").value=(document.getElementById("origen").value);
        document.getElementById("origen").value="";
    }
}

// Traslada texto copia a e-mail formulario.
function copiaemail(){
    if (document.getElementById("origen").value == "") {
        alert ("EL VALOR A COPIAR, NO ESTA CUMPLIMENTAT");
    }
    else {
        document.getElementById("email").value=(document.getElementById("origen").value);
        document.getElementById("origen").value="";
    }
}

// Traslada texto copia a texto formulario.
function copiamsj(){
    if (document.getElementById("origen").value == "") {
        alert ("EL VALOR A COPIAR, NO ESTA CUMPLIMENTAT");
    }
    else {
        document.getElementById("mensaje").value=(document.getElementById("origen").value);
        document.getElementById("origen").value="";
    }
}
