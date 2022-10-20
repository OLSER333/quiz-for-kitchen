<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['name'])) {$name = $_POST['name'];}
$to = "gritsienko.oleg@mail.ru"; /*Укажите ваш адрес электронной почты info-niks@yandex.ru*/
$headers = array(
'From' => 'webmaster@proremont-nvrsk.ru',
'Reply-To' => 'webmaster@proremont-nvrsk.ru',
'X-Mailer' => 'PHP/' . phpversion()
);
$subject = "Заявка с сайта PRO-REMONT";
$message = "\n\nТелефон: $phone \n\nИмя: \n$name";
$send = mail ($to, $subject, $message, $headers);
}
?>