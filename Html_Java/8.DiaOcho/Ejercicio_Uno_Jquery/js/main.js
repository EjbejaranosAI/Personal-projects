$(window).on("load", function() {



    $(function() {

        $("#segundo").css({
            "background-color": "red"
        });

        $("#btn1").click(function() {
            alert("Hola");
        });

        $("#btn2").dblclick(function() {
            $("#segundo").hide();
        });

        $("#btn3").click(function() {
            $("#segundo").show();
        });


        $("#primero").mouseenter(function() {

            $("#segundo").slideDown();

        });

        $("#primero").mouseleave(function() {

            $("#segundo").slideUp();

        });
        //Realizar alarmas con el texto
        $("#btn4").click(function() {
            alert($("#primero").text());
        });

    });

})