<?php

$frm_name  = "Youname";
$recepient = "vasiliy.dpk@gmail.com";
$sitename  = "Binary-Uno";
$subject   = "New message from \"$sitename\"";

$first_name = trim($_POST["first_name"]);
$last_name = trim($_POST["last_name"]);
$country = trim($_POST["country"]);
$phone_code = trim($_POST["phone_code"]);
$phone_number = trim($_POST["phone_number"]);
$email = trim($_POST["email"]);

$from=getenv("HTTP_REFERER");

$message = "
<b>First Name:</b> $first_name <br>
<b>Last Name:</b> $last_name <br>
<b>Country:</b> $country <br>
<b>Phone code:</b> $phone_code <br>
<b>Phone number:</b> $phone_number <br>
<b>Email:</b> $email <br>
<b>Web-site adress:</b> $from 
";

$handle = fopen("emails.txt", "at");
fwrite($handle, $email.', ');
fclose($handle);


mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

?>