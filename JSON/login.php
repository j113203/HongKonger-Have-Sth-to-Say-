<?php
$id=htmlspecialchars(base64_decode($_POST["id"]));
$password=htmlspecialchars(base64_decode($_POST["pd"]));
$cache=htmlspecialchars($_GET["_"]);
if (empty($cache)){
	echo "ip has been temporarily suspended";
}else{
	include 'lib/config.php';
	include 'lib/oauth.php';
	echo oauth_login($id,$password,$cache);
}
?>