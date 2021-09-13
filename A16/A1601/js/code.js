function selectparagraf(lletra) {
    // Recupera opcion clickada en select primario
    listaparagraf = document.getElementById("master");
    if (listaparagraf.options[listaparagraf.selectedIndex].value == "cap") {
        alert("Tens que triar un paragraf per fer el canvi");
    }
    else {
        switch (parraf) {
            case "primer":
                $("#noticia1").hide(500);
                $("#noticia1").css("font-size", lletra);
                $("#noticia1").show(3000);
                document.getElementById("noticia1").classList.remove("marco");
            break;
            case "segon":
                $("#noticia2").hide(500);
                $("#noticia2").css("font-size", lletra);
                $("#noticia2").show(3000);
                document.getElementById("noticia2").classList.remove("marco");
            break;
            case "tercer":
                $("#noticia3").hide(500);
                $("#noticia3").css("font-size", lletra);
                $("#noticia3").show(3000);
                document.getElementById("noticia3").classList.remove("marco");
            break;
                }
    }
}
function cmarco() {
    listaparagraf = document.getElementById("master");
    parraf = listaparagraf.options[listaparagraf.selectedIndex].value
    switch (parraf) {
        case "primer":
            document.getElementById("noticia1").classList.add("marco");
            document.getElementById("noticia2").classList.remove("marco");
            document.getElementById("noticia3").classList.remove("marco");
            break;
        case "segon":
            document.getElementById("noticia2").classList.add("marco");
            document.getElementById("noticia1").classList.remove("marco");
            document.getElementById("noticia3").classList.remove("marco");
            break;
        case "tercer":
            document.getElementById("noticia3").classList.add("marco");
            document.getElementById("noticia1").classList.remove("marco");
            document.getElementById("noticia2").classList.remove("marco");
            break;
    }
}
function not01() {
    $("#noticia1").css("font-size", "12px");
    document.getElementById("noticia1").classList.remove("marco");
    $( "#tit01" ).animate({
        width: "100%",
        fontSize: "15px",
        borderWidth: "10px"
    }, 2000 );
    $( "#tit01" ).animate({
        width: "100%",
        fontSize: "2em",
        borderWidth: "10px"
    }, 2000 );
}
function not02() {
    $("#noticia2").css("font-size", "12px");
    document.getElementById("noticia2").classList.remove("marco");
    $( "#tit02" ).animate({
        width: "100%",
        fontSize: "15px",
        borderWidth: "10px"
    }, 2000 );
    $( "#tit02" ).animate({
        width: "100%",
        fontSize: "2em",
        borderWidth: "10px"
    }, 2000 );
}
function not03() {
    $("#noticia3").css("font-size", "12px");
    document.getElementById("noticia3").classList.remove("marco");
    $( "#tit03" ).animate({
        width: "100%",
        fontSize: "15px",
        borderWidth: "10px"
    }, 2000 );
    $( "#tit03" ).animate({
        width: "100%",
        fontSize: "2em",
        borderWidth: "10px"
    }, 2000 );
}
