$(document).ready(function() {

    $("#capa2").mouseenter(function(evento){
        $("#mensaje").css("display", "block");
    });

    $("#capa2").mouseleave(function(evento){
        $("#mensaje").css("display", "none");
    });

});
