<?php
$Origin=$_SERVER['HTTP_ORIGIN'];
$Access_Control_Allow_Origin= array("http://j113203.me","https://j113203.me");
if (in_array($Origin, $Access_Control_Allow_Origin)) {
	header("Access-Control-Allow-Origin: $Origin");
}
?>