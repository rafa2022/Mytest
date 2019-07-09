<?php
require 'conexion.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->name) === '')
  {
    return http_response_code(400);
  }
  // desinfeco los datos 
  $name = PDO::quote($conn, trim($request->data->name)); 
  $age = PDO::quote($conn, trim($request->date->age));
  $cellphone = PDO::quoted($conn, trim($request->date->cellphone));
  // Sanitize.
  //$model = mysqli_real_escape_string($con, trim($request->data->model));
  //$name = $conn,trim($request->data->name);  
  //$price = mysqli_real_escape_string($con, (int)$request->data->price);

  // Store.
  $sql = "INSERT INTO contacto (name,age,cell) VALUES ('$name',$age,'$cellphone')";
  $result = pg_query($conn,$sql);
  if($result = pg_query($conn,$sql))
  {
    http_response_code(201);
    $contacto = [
      'name' => $name,
      'age' => $age,
      'cellphone' => $cellphone
    ];
    echo json_encode(['data'=>$contacto]);
  } else {
    http_response_code(422);
  }

}