<?php
/* https://api.telegram.org/bot1373205365:AAGNUj9EtbQq7LhoLPs2gqbr0jJoKL5pJ0E/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$textadress = $_POST['user_adress'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$text = $_POST['user_massege'];


$token = "1445626348:AAHeXUZ95_iFcH5yGyVCZW2VbU6lK5J_YNw";
$chat_id = "-455887186";
$arr = array(
  'Имя пользователя: ' => $name,
  'Адрес фирмы: ' => $textadress,
  'Email' => $email,
  'Телефон: ' => $phone,
  'Сообщение' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thankYou.html');
} else {
  echo "Error";
}
?>