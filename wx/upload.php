<?php
$question = $_GET['question'];
$answer = $_GET['answer'];
$A = $_GET['contentA'];
$B = $_GET['contentB'];
$C = $_GET['contentC'];
$D = $_GET['contentD'];
$username = $_GET['username'];
$username = preg_replace('/[\xF0\x9F\x90\xB3]/','',$username);
$link=@mysqli_connect('127.0.0.1','root','','chen','3306');
		if(!$link){
			echo "Α¬½ΣΚ§°ά";	
			echo mysqli_connect_errno();
		}
		mysqli_query($link, "SET NAMES UTF8");
$sql = " insert into upload(question,answer,contentA,contentB,contentC,contentD,username)
values('{$question}','{$answer}','{$A}','{$B}','{$C}','{$D}','{$username}');";
echo $sql;
$res = mysqli_query($link,$sql);



