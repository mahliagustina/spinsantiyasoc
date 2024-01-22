<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["Nombre"];
    $razonSocial = $_POST["RazonSocial"];
    $email = $_POST["Email"];
    $mensaje = $_POST["Mensaje"];

    $destinatario = "asesoramiento@estudiospinsantiyasociados.com.ar"; // Reemplaza con tu dirección de correo electrónico

    $asunto = "Nuevo mensaje de formulario de contacto";
    $contenido = "Nombre: $nombre\nRazón Social: $razonSocial\nCorreo: $email\nMensaje: $mensaje";

    // Enviar el correo
    mail($destinatario, $asunto, $contenido);

    // Puedes redirigir a una página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>
