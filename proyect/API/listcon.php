<?php 
    #call conexion 
    require_once 'conexion.php';

    $contactos =[];
    $sql ="SELECT id, name, age, cell FROM contacto;";
    $search = $conn->prepare($sql);
    #genero una  array
    $search->execute(array());
    $rows = $search->fetchALL(PDO::FETCH_ASSOC);
    ?>