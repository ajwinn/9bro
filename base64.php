<?php 

//get the q parameter from URL
$q=$_GET["q"];

echo base64_encode(file_get_contents($q)); 
?>