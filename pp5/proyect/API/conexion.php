<?php
//call config.php
require_once 'config.php';

$dsn = "pgsql:host=$host;
port=$port;
dbname=$db;
user=$username;
password=$pass";

try {
    //create conexion with postgres
    $conn = new PDO($dsn);
    echo "conectado";

} catch (PDOException $e) {
    //error de conexion string
     $e->getMessage();
     $tmp = "Error de conexion.";
    
     //error conexion 
     pg_dump($tmp);
    
} 
?>