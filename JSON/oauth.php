<?php
$id=htmlspecialchars(base64_decode($_POST["id"]));
$token=htmlspecialchars(base64_decode($_POST["token"]));
$cache=htmlspecialchars($_GET["_"]);
if (empty($cache)){
	echo "ip has been temporarily suspended";
}else{	
	include 'lib/config.php';
	include 'lib/oauth.php';	
	echo base64_encode(oauth_verify($id,$token,$cache));
}
?>