// config.php

// Incluir la clase de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'ruta/a/tu/PHPMailer/src/Exception.php';
require 'ruta/a/tu/PHPMailer/src/PHPMailer.php';
require 'ruta/a/tu/PHPMailer/src/SMTP.php';

// Crear una nueva instancia de PHPMailer
$mail = new PHPMailer(true);

// Configuración del servidor SMTP
$mail->isSMTP();
$mail->Host = 'tu_servidor_smtp';
$mail->SMTPAuth = true;
$mail->Username = 'tu_correo_smtp';
$mail->Password = 'tu_contraseña_smtp';
$mail->SMTPSecure = 'tls'; // O 'ssl' dependiendo de tu servidor
$mail->Port = 587; // Ajusta el puerto según la configuración de tu servidor

// Configuración adicional
$mail->setFrom('tucorreo@gmail.com', 'Tu Nombre');
$mail->addReplyTo('tucorreo@gmail.com', 'Tu Nombre');
$mail->CharSet = 'UTF-8';

// Resto de la configuración...
