<?php
$name = $_POST['name']; // собираем введенные данные и записываемв переменные
$email = $_POST['email'];
$mes = $_POST['mes'];
$text .= "Имя: $name |"; 
$text .= "Почта: $email |"; 
$text .= "Телефон: $mes \n";
  if (!empty($name) && !empty($email) && !empty($mes)) //если все переменные имеют значения выполняем запись в файл
    {
    $file = fopen ("message.txt", "a+"); //открываем для перезаписи файл message.txt лежаший в одной папке с текущей страницей
    fwrite ($file,$text); // пишем в файл
    fclose ($file); // закрываем файл
    }
    
    
    
 header("Location: pays.html");   
    
    
    
    
    
?>