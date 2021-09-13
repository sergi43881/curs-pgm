$(document).ready(function() {

    $( "#titol" ).animate({
      width: "100%",
      fontSize: "5em",
      borderWidth: "10px"
    }, 5000 );

    $("#imgusa").fadeIn(5000);
    $("#imgindia").fadeIn(5000);

    $(".gandhi p").mouseover(function(event){
        $("#imggandhi").show(3000);
    });

    $(".martin p").mouseover(function(event){
        $("#imgking").show(3000);
    });

    $(".martin").mouseout(function(event){
        $("#imggandhi").slideUp(3000);
    });

    $(".gandhi").mouseout(function(event){
        $("#imgking").slideUp(3000);
    });

    $(".head").mouseout(function(event){
        $("#imgking").hide(3000);
        $("#imggandhi").hide(3000);
    });

});
