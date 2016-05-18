<?php
$id=htmlspecialchars($_GET["id"]);
$password=htmlspecialchars($_GET["pd"]);
$cache=htmlspecialchars($_GET["_"]);
include 'lib/oauth.php';
echo oauth_login($id,$password);
?>