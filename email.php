<?php

$name = $_REQUEST['name'];
$Reason = $_REQUEST['Reason'];
$message = $_REQUEST['message'];
$content = $name."\n"."\n".$message;


mail("elicvlahos@gmail.com",$Reason,$content);

header('Location: http://127.0.0.1:5500/please(2).html');
?>