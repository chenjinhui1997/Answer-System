<?php
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = " select * from English order by rand() limit 10";
$res = mysqli_query($link,$sql);
$eqBank = [];
while($row = mysqli_fetch_assoc($res)){
$eqBank[]=$row;
}
echo json_encode($eqBank);
