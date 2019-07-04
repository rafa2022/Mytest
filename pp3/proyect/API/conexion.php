<?php
//call config.php
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
/*$dbconn = pg_connect("host=$host; port=$port; dbname=$db; user=$username; password=$password")
    or die('No se ha podido conectar: ' . pg_last_error($e));
   /* $conn_string = "host=$host;port=$port;dbname=$dbname;user=$username;password=$password";
    $dbconn4 = pg_connect($conn_string) or die( "Error al conectar: ".pg_last_error() );
  //  echo ''.$dbconn4;
   /* try{
       
    } catch(){
        
    }*/
?>