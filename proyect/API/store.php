<?php
require 'conexion.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->model) === '' || (int)$request->data->price < 1)
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $model = mysqli_real_escape_string($con, trim($request->data->model));
  $price = mysqli_real_escape_string($con, (int)$request->data->price);
 # $result = pg_query_params( $conn, // database connection 'SELECT * FROM foo WHERE bar = $1 AND baz = $2', // query using placeholders array('value 1','value 2') // all values for the placeholders in a single array );

  // Store.
  $sql = "INSERT INTO contacto (name,age,cell) VALUES ('Julio',23,'3012546589')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'model' => $model,
      'price' => $price,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}