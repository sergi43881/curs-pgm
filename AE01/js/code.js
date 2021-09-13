// CALCULADORA SERGI TOMAS
// Trabaja con dos funciones:
//      Funcion "numero": Gestiona los digitos.
//      Funcion "opera":  Gestiona las operaciones y teclas de operaciones auxiliares

// Variables generales.
Vprimer  = Number(0);  // Primer operador: Valores 0-> No cumplimentado 1-> Cumplimentado.
Vsegun   = Number(0);  // Segundo operador: Valores 0-> No cumplimentado 1-> Cumplimentado.
Vmrc     = Number(0);  // Tecla MRC: Valores 1-> Visualizacion memoria 2-> Inicializacion.
Vopera   = Number(0);  // Operador +,-,*,/ Valores 0-> no cumplimetado 1-> cumplimentado
Vnum01   = Number(0);  // Valor primer operador
Vnum02   = Number(0);  // Valor segundo operador
Vtotmrc  = Number(0);  // Valor memoria MRC
Vcoma01  = Number(0);  // Indicador coma primer operador: Valores 0-> No cumplimentada 1-> Cumplimentada.
Vcoma02  = Number(0);  // Indicador coma segundo operador: Valores 0-> No cumplimentada 1-> Cumplimentada.
Vtipoper = String();   // Tipo operacion anterior al segundo operador cumplimentado.
Vigual   = Number(0);  // Status tecla = 0-> No cumplimentado 1-> Cumplimentado.
Vcdec01  = Number(0);  // Contador decimales operador 1. (validacion errores de maquina en calculos)
Vcdec02  = Number(0);  // Contador decimales operador 2. (validacion errores de maquina en calculos)

// Funcion numero (Gestion digitos)
function numero(Vnumero) {
    if (Vmrc = 2) {
        Vmrc = 1;
    }
    if (Vigual == 1) {
        Vigual = (0);
        Vprimer = (0);
        Vsegun = (0);
        Vopera = (0);
        Vnum01 = (0);
        Vnum02 = (0);
        Vcoma01 = (0);
        Vcoma02 = (0);
        Vtipoper = String();
        if (Vmrc = 2) {
            Vmrc = 1;
        }
    };
    // Gestion primer operador (gestiona 1 digito o varios digitos con o sin coma)
    if (Vopera == 0) {
        if (Vprimer == 0) {
            Vprimer = Number(1);
            if (Vnumero == ".") {
                Vcoma01 = 1;
                Vnum01 = 0 + Vnumero;
            }
            else {
                Vnum01 = Vnumero;
                if (Vcoma01 == 1) {
                    Vcdec01 = Vcdec01 + 1;
                }
            }
        }
        else {
            if (Vnumero == "." && Vcoma01 == 1) {
            }
            else {
                let vx = ("" + Vnum01);
                if (vx.length < 14) {
                    Vnum01 = ("" + Vnum01 + Vnumero);
                    if (Vcoma01 == 1) {
                        Vcdec01 = Vcdec01 + 1;
                    }
                    if (Vnumero == ".") {
                        Vcoma01 = 1;
                    }
                }
            }
        }
        let vx = ("" + Vnum01);
        if (vx.length < 15) {
            document.getElementById("pantalla").innerHTML = Vnum01;
        }
    }
    // Gestion segundo operador (gestiona 1 digito o varios digitos con o sin coma)
    else {
        if (Vsegun == 0) {
            Vsegun = Number(1);
            if (Vnumero == ".") {
                Vcoma02 = 1;
                Vnum02 = 0 + Vnumero;
            }
            else {
                Vnum02 = Vnumero;
                if (Vcoma02 == 1) {
                    Vcdec02 = Vcdec02 + 1;
                }
            }
        }
        else {
            if (Vnumero == "." && Vcoma02 == 1) {
            }
            else {
                let vx = ("" + Vnum02);
                if (vx.length < 14) {
                    Vnum02 = ("" + Vnum02 + Vnumero);
                    if (Vcoma02 == 1) {
                        Vcdec02 = Vcdec02 + 1;
                    }
                    if (Vnumero == ".") {
                        Vcoma02 = 1;
                    }
                }
            }
        }
        let vx = ("" + Vnum02);
        if (vx.length < 15) {
            document.getElementById("pantalla").innerHTML = Vnum02 + Vtipoper;
        }
    }
}

// Funcion "opera" (Gestiona operaciones y teclas auxiliares)
function opera(Voperador) {

    Vigual = 0;

    // Tecla C
    if (Voperador == "C") {
        document.getElementById("pantalla").innerHTML = "0";
        if (Vmrc = 2) {
            Vmrc = 1;
        }
        if (Vsegun == 1) {
            document.getElementById("pantalla").innerHTML = "0" + Vtipoper;
            Vnum02 = (0);
            Vsegun = (0);
            Vcoma02 = (0);
            Vcdec02 = (0);
            return;
        }
        if (Vprimer == 1) {
            Vnum01 = (0);
            Vprimer = (0);
            Vcoma01 = (0);
            Vcdec01 = (0);
            Vopera = (0);
            Vtipoper = ('');
            return;
        }
    }

    // Tecla AC
    if (Voperador == "AC") {
        document.getElementById("pantalla").innerHTML = "0"
        Vprimer = (0);
        Vsegun = (0);
        Vopera = (0);
        Vnum01 = (0);
        Vnum02 = (0);
        Vcoma01 = (0);
        Vcoma02 = (0);
        Vcdec01 = (0);
        Vcdec02 = (0);
        Vtipoper = String();
        if (Vmrc = 2) {
            Vmrc = 1;
        }
        return;
    }

    // Bloquea operaciones si el primer operador no esta cumplimentado
    if (Vprimer == "0" && Voperador != "MRC") {
        return
    }

    // Tecla %
    if (Voperador == "%" && Vsegun == 1) {
        if (Vtipoper == "+" || Vtipoper == "-" || Vtipoper == "/" || Vtipoper == "*") {
            Vnum01 = Number(Vnum01 * 1);
            Vnum02 = Number(Vnum02 * 1);
            Vpercent = Number(Vnum01 * Vnum02) / 100;
            switch (Vtipoper) {
                case "+":
                    document.getElementById("pantalla").innerHTML = Vnum01 + Vpercent;
                    Vnum01 = Vnum01 + Vpercent;
                    break;
                case "-":
                    document.getElementById("pantalla").innerHTML = Vnum01 - Vpercent;
                    Vnum01 = Vnum01 - Vpercent;
                    break;
                case "/":
                    document.getElementById("pantalla").innerHTML = Vnum01 / Vpercent;
                    Vnum01 = Vnum01 / Vpercent;
                    break;
                case "*":
                    document.getElementById("pantalla").innerHTML = Vpercent;
                    Vnum01 = Vpercent;
                    break;
            }
            Vnum02 = 0;
            Vsegun = 0;
            Vcoma02 = (0);
            Vcdec02 = (0);
            return;
        }
    }

    // Tecla +/-
    if (Voperador == "+/-") {
        if (Vnum02 != 0) {
            Vnum02 = Number(Vnum02 * -1);
            document.getElementById("pantalla").innerHTML = Vnum02;
            document.getElementById("pantalla").innerHTML += Vtipoper;
        }
        else if (Vopera == 0) {
                Vnum01 = Number(Vnum01 * -1);
                document.getElementById("pantalla").innerHTML = Vnum01;
                document.getElementById("pantalla").innerHTML += Vtipoper;
        }
    }

    // Teclas + , - , * , /
    if (Voperador == "+" || Voperador == "-" || Voperador == "*" || Voperador == "/"){
        if (Vsegun == 1){
            Vnum01 = Number(Vnum01 * 1);
            Vnum02 = Number(Vnum02 * 1);
            if (Vcdec02 > Vcdec01) {
                Vcdec01 = Vcdec02;
            }
            switch (Vtipoper) {
                case "+":
                    Vnum01 = (Vnum01 + Vnum02).toFixed(Vcdec01);
                    document.getElementById("pantalla").innerHTML = Vnum01;
                    break;
                case "-":
                    Vnum01 = (Vnum01 - Vnum02).toFixed(Vcdec01);
                    document.getElementById("pantalla").innerHTML = Vnum01;
                    break;
                case "*":
                    Vnum01 = (Vnum01 * Vnum02).toFixed(Vcdec01);
                    document.getElementById("pantalla").innerHTML = Vnum01;
                    break;
                case "/":
                    document.getElementById("pantalla").innerHTML = Vnum01 / Vnum02;
                    Vnum01 = Vnum01 / Vnum02;
                    break;
            }
            document.getElementById("pantalla").innerHTML += Voperador;
            Vnum02 = 0;
            Vsegun = 0;
            Vcoma02 = (0);
            Vcdec02 = (0);
            Vtipoper = Voperador;
        }
        else {
            if (Vopera == 0) {
                Vopera = (1);
            }
            else {
                document.getElementById("pantalla").innerHTML = Vnum01;
            }
            document.getElementById("pantalla").innerHTML += Voperador;
            Vtipoper = Voperador;
        }
    }

    // Tecla =
    if (Voperador == "=" && Vsegun == 1) {
        Vnum01 = Number(Vnum01 * 1);
        Vnum02 = Number(Vnum02 * 1);
        if (Vcdec02 > Vcdec01) {
            Vcdec01 = Vcdec02;
        }
        switch (Vtipoper) {
            case "+":
                Vnum01 = (Vnum01 + Vnum02).toFixed(Vcdec01);
                document.getElementById("pantalla").innerHTML = Vnum01;
                break;
            case "-":
                Vnum01 = (Vnum01 - Vnum02).toFixed(Vcdec01);
                document.getElementById("pantalla").innerHTML = Vnum01;
                break;
            case "*":
                Vnum01 = (Vnum01 * Vnum02).toFixed(Vcdec01);
                document.getElementById("pantalla").innerHTML = Vnum01;
                break;
            case "/":
                document.getElementById("pantalla").innerHTML = Vnum01 / Vnum02;
                Vnum01 = Vnum01 / Vnum02;
                break;
        }
        Vopera = (0);
        Vtipoper = ('');
        Vnum02 = 0;
        Vsegun = 0;
        Vcoma02 = (0);
        Vcdec02 = (0);
        Vigual = 1;
        return;
    }

    // Teclas M+, M-, MRC
    if (Voperador == "M+" || Voperador == "M-" || Voperador == "MRC") {
        Vnum01 = Number(Vnum01 * 1);
        Vnum02 = Number(Vnum02 * 1);
        if (Vcdec02 > Vcdec01) {
            Vcdec01 = Vcdec02;
        }
        switch (Voperador) {
            case "M+":
                if (Vnum02 != 0) {
                    Vtotmrc = (Vtotmrc + Vnum02);
                }
                else {
                    Vtotmrc = (Vtotmrc + Vnum01);
                }
                var cambiarElemento = document.getElementById("memoria");
                cambiarElemento.className = "memoriasi";
                Vmrc = 1;
                Vopera = 0;
                Vprimer = Vtotmrc;
                Vigual = 1;
                break;
            case "M-":
                if (Vnum02 != 0) {
                    Vtotmrc = Vtotmrc - Vnum02;
                }
                else {
                    Vtotmrc = Vtotmrc - Vnum01;
                }
                var cambiarElemento = document.getElementById("memoria");
                cambiarElemento.className = "memoriasi";
                Vmrc = 1;
                Vopera = 0;
                Vprimer = 0;
                Vnum01 = Vtotmrc;
                Vigual = 1;
                break;
            case "MRC":
                if (Vmrc == 2) {
                    var cambiarElemento = document.getElementById("memoria");
                    cambiarElemento.className = "memoriano";
                    document.getElementById("pantalla").innerHTML = 0;
                    Vmrc = 0;
                    Vtotmrc = 0;
                    Vnum01 = 0;
                    Vprimer = 0;
                }
                if (Vmrc == 1) {
                    document.getElementById("pantalla").innerHTML = Vtotmrc;
                    Vmrc = 2;
                    Vprimer = 1;
                    Vnum01 = Vtotmrc;
                    Vigual = 1;
                }
                break;
            }
            Vopera = (0);
            Vsegun = (0);
            Vnum02 = (0);
            Vcoma01 = (0);
            Vcoma02 = (0);
            Vcdec01 = (0);
            Vcdec02 = (0);
            Vtipoper = String();
    }
}
