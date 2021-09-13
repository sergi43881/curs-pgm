casilla = 0;            // Boton activo
b01 = " ";              // Valor boton 01
b02 = " ";              // Valor boton 02
b03 = " ";              // Valor boton 03
b04 = " ";              // Valor boton 04
b05 = " ";              // Valor boton 05
b06 = " ";              // Valor boton 06
b07 = " ";              // Valor boton 07
b08 = " ";              // Valor boton 08
b09 = " ";              // Valor boton 09
ganaX = false;          // Resultado comprobacion. Ganan las X
ganaO = false;          // Resultado comprobacion. Ganan las O
moviments = Number(0);  //Numero de movimientos en tablero (maximo 9)
mov01 = (0);            // Indicador primer movimiento
auto = (0);             // Indicador de movimiento automatico (juego de maquina)

// Segun el boton clikado, cumplimenta movimiento. Tambien controla el clik sobre boton cumplimentado.
function valida(casilla) {
    switch (casilla) {
        case '1':
            if (document.tablero.bot01.value != " ") {
                return;
            }
            document.tablero.bot01.value = "X";
            break;
        case '2':
            if (document.tablero.bot02.value != " ") {
                return;
            }
            document.tablero.bot02.value = "X";
            break;
        case '3':
            if (document.tablero.bot03.value != " ") {
                return;
            }
            document.tablero.bot03.value = "X";
            break;
        case '4':
            if (document.tablero.bot04.value != " ") {
                return;
            }
            document.tablero.bot04.value = "X";
            break;
        case '5':
            if (document.tablero.bot05.value != " ") {
                return;
            }
            document.tablero.bot05.value = "X";
            break;
        case '6':
            if (document.tablero.bot06.value != " ") {
                return;
            }
            document.tablero.bot06.value = "X";
            break;
        case '7':
            if (document.tablero.bot07.value != " ") {
                return;
            }
            document.tablero.bot07.value = "X";
            break;
        case '8':
            if (document.tablero.bot08.value != " ") {
                return;
            }
            document.tablero.bot08.value = "X";
            break;
        case '9':
            if (document.tablero.bot09.value != " ") {
                return;
            }
            document.tablero.bot09.value = "X";
            break;
    }

    // Carga tablero
    carga();

    // Movimientos de maquina
    auto = automatico();
    if (auto == "1") {
        moviments++;
        carga();
    }

    // Valida si las X ganan
    ganaX = compruebaX();
    if (ganaX) {
        alert("HAS GUANYAT!!");
        inicia();
        return;
    }

    // Valida si las O ganan
    ganaO = compruebaO();
    if (ganaO) {
        alert("HAS PERDUT");
        inicia();
        return;
    }

    // Si se han hecho 9 movientos nadie gana
    moviments++;
    if (moviments == 9) {
        alert("NINGU GUANYA");
        inicia()
        return;
    }
}

// Carga valores en tablero
function carga() {
    b01 = document.tablero.bot01.value;
    b02 = document.tablero.bot02.value;
    b03 = document.tablero.bot03.value;
    b04 = document.tablero.bot04.value;
    b05 = document.tablero.bot05.value;
    b06 = document.tablero.bot06.value;
    b07 = document.tablero.bot07.value;
    b08 = document.tablero.bot08.value;
    b09 = document.tablero.bot09.value;
}

// Comprueba jugada ganadora con X
function compruebaX() {
    if (b01 == "X" && b02 == "X" && b03 == "X") {
      return true;
    }
    if (b04 == "X" && b05 == "X" && b06 == "X") {
      return true;
    }
    if (b07 == "X" && b08 == "X" && b09 == "X") {
      return true;
    }
    if (b01 == "X" && b04 == "X" && b07 == "X") {
      return true;
    }
    if (b02 == "X" && b05 == "X" && b08 == "X") {
      return true;
    }
    if (b03 == "X" && b06 == "X" && b09 == "X") {
      return true;
    }
    if (b01 == "X" && b05 == "X" && b09 == "X") {
      return true;
    }
    if (b03 == "X" && b05 == "X" && b07 == "X") {
      return true;
    }
}

// Comprueba jugada ganadora con O
function compruebaO() {
    if (b01 == "O" && b02 == "O" && b03 == "O") {
      return true;
    }
    if (b04 == "O" && b05 == "O" && b06 == "O") {
      return true;
    }
    if (b07 == "O" && b08 == "O" && b09 == "O") {
      return true;
    }
    if (b01 == "O" && b04 == "O" && b07 == "O") {
      return true;
    }
    if (b02 == "O" && b05 == "O" && b08 == "O") {
      return true;
    }
    if (b03 == "O" && b06 == "O" && b09 == "O") {
      return true;
    }
    if (b01 == "O" && b05 == "O" && b09 == "O") {
      return true;
    }
    if (b03 == "O" && b05 == "O" && b07 == "O") {
      return true;
    }
}

// Cumplimenta jugada automatica (respuesta de maquina)
function automatico() {
    auto = 0;
    if (b01 == "X" && b02 == "X" && b03 == " " || b01 == "O" && b02 == "O" && b03 == " " ) {
        document.tablero.bot03.value = "O";
        return 1;
    }
    if (b02 == "X" && b03 == "X" && b01 == " " || b02 == "O" && b03 == "O" && b01 == " ") {
        document.tablero.bot01.value = "O";
        return 1;
    }
    if (b04 == "X" && b05 == "X" && b06 == " " || b04 == "O" && b05 == "O" && b06 == " ") {
        document.tablero.bot06.value = "O";
        return 1;
    }
    if (b05 == "X" && b06 == "X" && b04 == " " || b05 == "O" && b06 == "O" && b04 == " ") {
        document.tablero.bot04.value = "O";
        return 1;
    }
    if (b07 == "X" && b08 == "X" && b09 == " " || b07 == "O" && b08 == "O" && b09 == " ") {
        document.tablero.bot09.value = "O";
        return 1;
        }
    if (b08 == "X" && b09 == "X" && b07 == " " || b08 == "O" && b09 == "O" && b07 == " ") {
        document.tablero.bot07.value = "O";
        return 1;
    }
    if (b01 == "X" && b05 == "X" && b09 == " " || b01 == "O" && b05 == "O" && b09 == " ") {
        document.tablero.bot09.value = "O";
        return 1;
    }
    if (b05 == "X" && b09 == "X" && b01 == " " || b05 == "O" && b09 == "O" && b01 == " ") {
        document.tablero.bot01.value = "O";
        return 1;
    }
    if (b03 == "X" && b05 == "X" && b07 == " " || b03 == "O" && b05 == "O" && b07 == " ") {
        document.tablero.bot07.value = "O";
        return 1;
    }
    if (b07 == "X" && b05 == "X" && b03 == " " || b07 == "O" && b05 == "O" && b03 == " ") {
        document.tablero.bot03.value = "O";
        return 1;
    }
    if (b01 == "X" && b03 == "X" && b02 == " " || b01 == "O" && b03 == "O" && b02 == " ") {
        document.tablero.bot02.value = "O";
        return 1;
    }
    if (b04 == "X" && b06 == "X" && b05 == " " || b04 == "O" && b06 == "O" && b05 == " ") {
        document.tablero.bot05.value = "O";
        return 1;
    }
    if (b07 == "X" && b09 == "X" && b08 == " " || b07 == "O" && b09 == "O" && b08 == " ") {
        document.tablero.bot08.value = "O";
        return 1;
    }
    if (b01 == "X" && b07 == "X" && b04 == " " || b01 == "O" && b07 == "O" && b04 == " ") {
        document.tablero.bot04.value = "O";
        return 1;
    }
    if (b02 == "X" && b08 == "X" && b05 == " " || b02 == "O" && b08 == "O" && b05 == " ") {
        document.tablero.bot05.value = "O";
        return 1;
    }
    if (b03 == "X" && b09 == "X" && b06 == " " || b03 == "O" && b09 == "O" && b06 == " ") {
        document.tablero.bot06.value = "O";
        return 1;
    }
    if (b01 == "X" && b05 == "X" && b09 == " " || b01 == "O" && b05 == "O" && b09 == " ") {
        document.tablero.bot09.value = "O";
        return 1;
    }
    if (b04 == "X" && b07 == "X" && b01 == " " || b04 == "O" && b07 == "O" && b01 == " ") {
        document.tablero.bot01.value = "O";
        return 1;
    }
    if (b05 == "X" && b08 == "X" && b02 == " " || b05 == "O" && b08 == "O" && b02 == " ") {
        document.tablero.bot02.value = "O";
        return 1;
    }
    if (b06 == "X" && b09 == "X" && b03 == " " || b06 == "O" && b09 == "O" && b03 == " ") {
        document.tablero.bot03.value = "O";
        return 1;
    }
    if (b01 == "X" && b04 == "X" && b07 == " " || b01 == "O" && b04 == "O" && b07 == " ") {
        document.tablero.bot07.value = "O";
        return 1;
    }
    if (b02 == "X" && b05 == "X" && b08 == " " || b02 == "O" && b05 == "O" && b08 == " ") {
        document.tablero.bot08.value = "O";
        return 1;
    }
    if (b03 == "X" && b06 == "X" && b09 == " " || b03 == "O" && b06 == "O" && b09 == " ") {
        document.tablero.bot09.value = "O";
        return 1;
    }
    if (b01 == "X" && b09 == "X" && b05 == " " || b01 == "O" && b09 == "O" && b05 == " ") {
        document.tablero.bot05.value = "O";
        return 1;
    }
    if (b03 == "X" && b07 == "X" && b05 == " " || b03 == "O" && b07 == "O" && b05 == " ") {
        document.tablero.bot05.value = "O";
        return 1;
    }
    if (mov01 == "0" && b05 == " ") {
        document.tablero.bot05.value = "O";
        mov01 = 1;
        return 1;
    }
    if (mov01 == "0" && b05 == "X") {
        document.tablero.bot01.value = "O";
        mov01 = 1;
        return 1;
    }
    if (mov01 == "1" && b05 == "O") {
        if (b08 == "X" && b09 == " ") {
            document.tablero.bot09.value = "O";
            return 1;
        }
        if (b09 == "X" && b06 == " ") {
            document.tablero.bot06.value = "O";
            return 1;
        }
        if (b06 == "X" && b09 == " ") {
            document.tablero.bot09.value = "O";
            return 1;
        }
        if (b04 == "X" && b01 == " ") {
            document.tablero.bot01.value = "O";
            return 1;
        }
        if (b07 == "X" && b01 == " ") {
            document.tablero.bot01.value = "O";
            return 1;
        }
    }
    if (mov01 == "1" && b05 == "X") {
        if (b09 == "X" && b06 == " ") {
            document.tablero.bot06.value = "O";
            return 1;
        }
    }
}

// Inicializa tablero
function inicia() {
    document.tablero.bot01.value = " ";
    document.tablero.bot02.value = " ";
    document.tablero.bot03.value = " ";
    document.tablero.bot04.value = " ";
    document.tablero.bot05.value = " ";
    document.tablero.bot06.value = " ";
    document.tablero.bot07.value = " ";
    document.tablero.bot08.value = " ";
    document.tablero.bot09.value = " ";
    b01 = " ";
    b02 = " ";
    b03 = " ";
    b04 = " ";
    b05 = " ";
    b06 = " ";
    b07 = " ";
    b08 = " ";
    b09 = " ";
    ganaX = false;
    ganaO = false;
    moviments = 0;
    mov01 = 0;
}
