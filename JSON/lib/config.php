<?php
$Origin=$_SERVER['HTTP_ORIGIN'];
$Access_Control_Allow_Origin= array("j113203.me","rest.j113203.me");
if (in_array(parse_url($Origin,PHP_URL_HOST), $Access_Control_Allow_Origin)){	
	header("Access-Control-Allow-Origin: $Origin");
}
?>