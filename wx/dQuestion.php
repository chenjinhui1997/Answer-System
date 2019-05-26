<?php
$questionId = $_GET['questionId'];
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");

$sql = "delete from error where id = '{$questionId}'";
$res = mysqli_query($link,$sql);