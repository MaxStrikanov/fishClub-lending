<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6037128965:AAFLmI1biwh--7nNrJXOAIfdpApFkJM6Qig";

//Сюда вставляем chat_id -1001842846270
$chat_id = "-1001541711508";


//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $msg = ($_POST['msg']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Сообщение:' => $msg,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo '<div> Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</div>';
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo '<div> Что-то пошло не так. ПОпробуйте отправить форму ещё раз.</div>';
    }
}

?>