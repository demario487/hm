<?php 
session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];
                $emeil = $_POST['emeil'];
		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//save to database
			$user_id = random_num(20);
			$query = "insert into users (user_id,user_name,password,emeil) values ('$user_id','$user_name','$password','$emeil')";

			mysqli_query($con, $query);

			header("Location: index.php");
			die;
		}else
		{
			echo "Please enter some valid information!";
		}
	}
?>


<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles/style.css">  
	<title>Signup</title>
</head>
<body>

	<style type="text/css">
	
	#text{

		height: 25px;
		border-radius: 5px;
		padding: 4px;
		border: solid thin #aaa;
		width: 100%;
	}

	#button{

		padding: 10px;
		width: 100px;
		color: white;
		background-color: lightblue;
		border: none;
	}

	#box{

		background-color: grey;
		margin: auto;
		width: 300px;
		padding: 20px;
	}

	</style>

	<div id="box">
		
		<form method="post">
			<div style="font-size: 20px;margin: 10px;color: white;">Signup</div>
                        <p>Потребителско име:</p>
			<input id="text" type="text" name="user_name"><br><br>
                        <p>Парола:</p>
			<input id="text" type="password" name="password"><br><br>
                        <p>Имейл:</p>
                        <input id="text" type="email" name="emeil"><br><br>
			<input id="button" type="submit" value="Signup"><br><br>

                        <a href="sigin.php">Click to Login</a><br><br>
		</form>
	</div>
</body>

<div id="footer-bg">
                    Всички права запазени &copy; Кристиян Мангелов 2021 <a href="index.php">Начало</a>
                </div>
           