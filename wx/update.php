<?php
$name = $_GET['nickName'];
$name = preg_replace('/[\xF0\x9F\x90\xB3]/','',$name);
$username = $_GET['username'];
$username = preg_replace('/[\xF0\x9F\x90\xB3]/','',$username);
$password = $_GET['password'];
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = " update user set user.username = '{$username}',user.password = '{$password}' where user.username = '{$name}'";
$res = mysqli_query($link,$sql);



