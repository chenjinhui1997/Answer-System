<?php
$username = $_GET['username'];
$password = $_GET['password'];
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = "select * from user where username='{$username}' and password='{$password}' limit 1";
$res = mysqli_query($link,$sql);
$result = mysqli_num_rows($res);
if($result == 0)
 $check = 0;
else
 $check = 1;
echo $check;