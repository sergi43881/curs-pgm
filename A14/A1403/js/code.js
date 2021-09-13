$(document).ready(function() {

    $(".gandhi h2").mouseover(function(evento){
        $("#imggandhi").css("display", "none");
    });

    $(".gandhi h2").mouseout(function(evento){
        $("#imggandhi").css("display", "inline");
    });

    $(".martin h2").mouseover(function(evento){
        $("#imgking").css("display", "none");
        });

    $(".martin h2").mouseout(function(evento){
        $("#imgking").css("display", "inline");
    });
});
