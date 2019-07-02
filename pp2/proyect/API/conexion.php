<?php
//call config.php
require_once 'config.php';

require_once 'config.php';


$dsn = "pgsql:host=$host;port=$port;dbname=$db;user=$username;password=$password";

try{
 // Crear la conexion a la base de datos postgresql
 $conn2 = new PDO($dsn);

 // Mostrar un mensaje si la conexion es efectiva
 if($conn2){
 echo "Conexión a la base de datos <strong>$db</strong> Exitosa!";
 }
}catch (PDOException $e){
 // Reportar mensaje de error
 echo $e->getMessage();
}
?>