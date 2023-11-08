document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario y a los elementos donde se mostrarán los datos guardados
    var form = document.getElementById('contactForm');
    var nombreGuardado = document.getElementById('nombreGuardado');
    var telefonoGuardado = document.getElementById('telefonoGuardado');
    var correoGuardado = document.getElementById('correoGuardado');
    var mensajeGuardado = document.getElementById('mensajeGuardado');

    // Función para guardar datos en localStorage y mostrarlos en el sitio
    function guardarDatos(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var nombre = document.getElementById('nombre').value;
        var telefono = document.getElementById('telefono').value;
        var correo = document.getElementById('correo').value;
        var mensaje = document.getElementById('mensaje').value;

        var datos = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            mensaje: mensaje
        };

        // Convertir el objeto a formato JSON
        var datosJSON = JSON.stringify(datos);

        // Guardar en localStorage
        localStorage.setItem('datosContacto', datosJSON);

        // Mostrar los datos guardados en el sitio
        nombreGuardado.textContent = datos.nombre;
        telefonoGuardado.textContent = datos.telefono;
        correoGuardado.textContent = datos.correo;
        mensajeGuardado.textContent = datos.mensaje;
    }

    // Agregar un evento al formulario para llamar a la función guardarDatos() cuando se envíe
    form.addEventListener('submit', guardarDatos);
});

