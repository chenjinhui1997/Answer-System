<?php
$username = $_GET['username'];
$username = preg_replace('/[\xF0\x9F\x90\xB3]/','',$username);
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = "select user.password from user where user.username = '{$username}'";
$res = mysqli_query($link,$sql);
$password = mysqli_fetch_assoc($res);
echo json_encode($password);