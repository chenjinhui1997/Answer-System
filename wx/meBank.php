<?php
$str = $_GET['myError'];
$ex1 = "/\d+/"; 
preg_match_all($ex1,$str,$error); 
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
foreach($error[0] as $id){
	if($id!='0'){
		$sql = " insert into error(
select * from math where math.id = '{$id}'
);";
$res = mysqli_query($link,$sql);
	}
}

