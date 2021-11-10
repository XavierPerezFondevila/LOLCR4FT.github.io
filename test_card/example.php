<?php 

$enlace = mysqli_connect("127.0.0.1", "root", "", "test");

$res = $enlace->query("select * from tes");
while($fila = $res->fetch_assoc($res)){
  echo $fila;
}

?>