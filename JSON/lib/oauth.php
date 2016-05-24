<?php
function oauth_register($id,$pd){
	include 'database.php';
	mongodb_PUT("/oauth/user/$id",array(
		"pd" => $pd
	));	
}
function oauth_login($id,$pd,$cache){
	if ($id&&$pd&&$cache){
		include 'database.php';
		include 'ip.php';
		$token = mongodb_GET("/oauth/user/$id");		
		$token = json_decode($token, true);
		if($token["http status code"]==404){
			return "ip has been temporarily suspended";
		}else{
			$_etag = $token["_etag"]['$oid'];
			$token = $token["pd"];
			if (strlen($cache)==13 && ip_verify($cache) && strcmp ( $pd, $token ) == 0  ){
				$token = bin2hex(openssl_random_pseudo_bytes(128));
				mongodb_PATCH("/oauth/user/$id",array (
					"token" => $token,
					"ip" => ip_()
				),$_etag);
				ip_reset();
				return $token;
			}
		}
	}
	return "ip has been temporarily suspended";
}
function oauth_verify($id,$pd,$cache){	
	if ($id&&$pd&&$cache){
		include 'database.php';
		include 'ip.php';
		$ip = ip_();
		$token = mongodb_GET("/oauth/user/$id");
		$token = json_decode($token, true);
		if (empty($ip)){
		}else if($token["http status code"]==404){
		}else if (strlen($cache)==13 && ip_verify($cache) && strcmp ( $pd, $token["token"] ) == 0 && $ip==$token["ip"] ){
			ip_reset();
			return $id;
		}
	}
	return "ip has been temporarily suspended";
}
//$id=htmlspecialchars($_GET["id"]);
//$password=htmlspecialchars($_GET["pd"]);
//$token=htmlspecialchars($_GET["token"]);
//echo oauth_login($id,$password);
//echo oauth_verify($id,$token);
//echo $_SERVER['HTTP_X_FORWARDED_FOR'];
//echo print_r($_SERVER);
?>