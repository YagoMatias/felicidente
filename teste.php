<?php

    $dsn = 'mysql:host=db;port=3306;dbname=sys';
    $dbuser = 'root';
    $dbpass = 'root';

    try{
        $pdo = new PDO($dsn,$dbuser, $dbpass);
        echo "Conectado!";

    }catch (PDOException $e){
        echo $e->getMessage();
    }

    phpinfo();