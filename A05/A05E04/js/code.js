var edad = prompt("Indica'm la teva edad." , "anys");
edad = Number(edad);

if (edad < 1 || edad > 120) {
            alert("La edad que has entrat, no es correcte");
    }
    else if (edad >= 18) {
        alert("Tens permis d'acces");
        }
        else {
            alert("No disposses de permis. Encara no tens 18 anys.");
        }
