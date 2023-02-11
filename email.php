<?php
if(isset($_POST['submit'])) {
  $to = "petrilajakub123@gmail.com";
  $to = "benco@spse-po.sk";
  $subject = "Formulár od " . $_POST['name'] . $_POST['surname'] ;
  $message = "Telefónne číslo" . $_POST['number'] ;
  $headers = "Od: " . $_POST['email'];

  mail($to, $subject, $message, $headers);
  echo "Odoslanie emailu prebehlo úspešne!";
}
?>