<?php
include("cfg.php");
// include("datosbd.php");

$nombre= $_POST['username'];
$email= $_POST['email'];
$contraseña = $_POST['password'];


$insertarDentroTabla = "INSERT INTO  javercel VALUES("."NULL, '" .$_POST['username'] . "','" .$_POST['email'] . "','" . $_POST['password']."');";
$conexion_BD = mysqli_connect($servidor,$usuariobd,$pass);
if(!$conexion_BD){
  echo "ERROR no se puede conectar con el servidor.<br>";
}else{
  echo "conectado con el servidor<br>";
  $result = mysqli_select_db($conexion_BD, $bd);
  //Conectamos con la base de datos.
  if(!$result){
    echo "ERROR no se ha podido conectar con la base de datos<br>";
  }else{
    echo "conectado con la base de datos<br>";
    $result = mysqli_query($conexion_BD, $insertarDentroTabla);
    if(!$result){
      echo "ERROR no se pueden insertar los valores en la tabla, revisalos.<br>";
    }else{
      echo "Se han insertado los valores correctamente.<br>";
      echo "<a href ='index.php'>Volver al Índice</a><br>";
    }
  }
}

mysqli_close($conexion_BD);









 ?>
