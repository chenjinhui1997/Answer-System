<?php
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = " select * from Math order by rand() limit 10";
$res = mysqli_query($link,$sql);
$mqBank = [];
while($row = mysqli_fetch_assoc($res)){
$mqBank[]=$row;
}
echo json_encode($mqBank);
