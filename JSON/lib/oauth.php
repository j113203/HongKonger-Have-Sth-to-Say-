<?php
function oauth_login($id,$pd){
	if ($id && $pd){
		include 'database.php';
		$token = mongodb_GET("/oauth/user/$id");
		$token = json_decode($token, true);
		$_etag = $token["_etag"]['$oid'];
		$token = $token["pd"];
		if (strcmp ( $pd, $token ) == 0  ){
			$token = bin2hex(openssl_random_pseudo_bytes(128));
			mongodb_PATCH("/oauth/user/$id",array (
				"token" => $token,
				"ip" => $_SERVER['HTTP_X_FORWARDED_FOR']
			),$_etag);
			return $token;
		}
	}
	return "0";
}
function oauth_verify($id,$pd){
	if ($id && $pd){
		include 'database.php';
		$token = mongodb_GET("/oauth/user/$id");
		$token = json_decode($token, true);
		$ip = $token["ip"];
		$token = $token["token"];
		if (strcmp ( $pd, $token ) == 0 && strcmp ( $_SERVER['HTTP_X_FORWARDED_FOR'], $ip ) == 0){
			return "true";
		}
	}	
	return "false";
}	
//$id=htmlspecialchars($_GET["id"]);
//$password=htmlspecialchars($_GET["pd"]);
//$token=htmlspecialchars($_GET["token"]);
//echo oauth_login($id,$password);
//echo oauth_verify($id,$token);
//echo $_SERVER['HTTP_X_FORWARDED_FOR'];
//echo print_r($_SERVER);
?>