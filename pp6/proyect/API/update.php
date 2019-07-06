<?php
require 'conexion.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if ((int)$request->data->id) {
    return http_response_code(400);
  }
    
  // Sanitize.
  //$id = ($conn, (int)$request->data->id);
 /* $id = ($conn, (int)$request->data->id);
  $name = ($conn,(string)($request->data->name);
  $age  =($conn, (string)$request->data->age);
  $cellphone =($conn, (int)$request->data->cellphone);
*/
  $spl = "UPDATE contacto SET name = $name, age =$age, cellphone = $cellphone WHERE id = $id";
  // Update.
  //$sql = "UPDATE `cars` SET `model`='$model',`price`='$price' WHERE `id` = '{$id}' LIMIT 1";
  $result = pg_query($conn,$sql);
  if(pg_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}