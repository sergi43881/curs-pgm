$(document).ready(function() {

    document.getElementById("c01").classList.add("fa-minus");
    document.getElementById("c02").classList.add("fa-minus");
    document.getElementById("c03").classList.add("fa-minus");
    document.getElementById("c04").classList.add("fa-minus");
    status01 = "show";
    status02 = "show";
    status03 = "show";
    status04 = "show";


    $("#c01").click(function(event){
        if (status01 == "show") {
            $("#p01").hide(3000);
            document.getElementById("c01").classList.remove("fa-minus");
            document.getElementById("c01").classList.add("fa-plus");
            status01 = "minus"
        }
        else {
            $("#p01").show(3000);
            document.getElementById("c01").classList.remove("fa-plus");
            document.getElementById("c01").classList.add("fa-minus");
            status01 = "show"
        }
    });
    $("#c02").click(function(event){
        if (status02 == "show") {
            document.getElementById("c02").classList.remove("fa-minus");
            document.getElementById("c02").classList.add("fa-plus");
            $("#p02").hide(3000);
            status02 = "minus"
        }
        else {
            $("#p02").show(3000);
            document.getElementById("c02").classList.remove("fa-plus");
            document.getElementById("c02").classList.add("fa-minus");
            status02 = "show"
        }
    });
    $("#c03").click(function(event){
        if (status03 == "show") {
            $("#p03").hide(3000);
            document.getElementById("c03").classList.remove("fa-minus");
            document.getElementById("c03").classList.add("fa-plus");
            status03 = "minus"
        }
        else {
            $("#p03").show(3000);
            document.getElementById("c03").classList.remove("fa-plus");
            document.getElementById("c03").classList.add("fa-minus");
            status01 = "show"
        }
    });
    $("#c04").click(function(event){
        if (status04 == "show") {
            $("#p04").hide(3000);
            document.getElementById("c04").classList.remove("fa-minus");
            document.getElementById("c04").classList.add("fa-plus");
            status04 = "minus"
        }
        else {
            $("#p04").show(3000);
            document.getElementById("c04").classList.remove("fa-plus");
            document.getElementById("c04").classList.add("fa-minus");
            status04 = "show"
        }
    });
});
