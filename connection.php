<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "monster_agency";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
