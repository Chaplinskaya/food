<?php
$_POST = json_decode(file_get_contents("php://input"), true);
//получить в php коде данные json и с ними поработать
echo var_dump($_POST);
//данные от клиента => в строку и показывает на клиенте

