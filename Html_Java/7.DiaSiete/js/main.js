window.onload = function() {
    document.formularioContacto.nombre.focus();

    const loginUsername = document.getElementById('login-username');
    const password = document.getElementById('login-password');

    const btn = document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault()

        if (loginUsername === "" && password === "") {

            alert('¡Hola, ESTAN VACIOS LOS LOGINS!');
        } else if (loginUsername !== "" || password !== "") {
            alert('¡Hola, TU LOGINS TIENEN ALGO DE INFORMACIÓN!');
        } else {
            alert('¡Hola, SORPRESA, PASO ALGO RARO!');
        }


    });




}