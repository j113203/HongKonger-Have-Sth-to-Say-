<?php
$id=htmlspecialchars($_GET["id"]);
$password=htmlspecialchars($_GET["pd"]);
include 'lib/oauth.php';
echo oauth_login($id,$password);
?>