<?php
 
  $to = 'alamri.ghassen@gmail.com';
  $subject = 'Nouvelle demande de contact - Sasnio IT';
  $name = $_POST['name'];
  $email = $_POST['email']; 
  $phone = $_POST['phone']; 
  $form_message = $_POST['message'];

  $headers = "Reply-To: $name <$email>\r\n"; 
  $headers .= "Return-Path: $email\r\n"; 
  $headers .= "From: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: PHP". phpversion() ."\r\n";


  $message = "************************************************** \r\n" .
             "Nouvelle demande via le formulaire de contact Devinfo \r\n" .
             "************************************************** \r\n\n" .    
    
            "Nom complet : " . $name . "\r\n" .
            "E-mail : " . $email . "\r\n" .
            "Téléphone : " . $phone . "\r\n\n" .
            "Message : \r\n" . $form_message . "\r\n"; 

  $mail = mail($to, $subject, $message, $headers); 

?>