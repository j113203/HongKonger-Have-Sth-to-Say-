<?php
function ip_(){
	return trim(explode(",",$_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
}
function ip_verify($cache){
	include 'database.php';
	$ip = ip_();
	$token = mongodb_GET("/oauth/ip/$ip");
	$token = json_decode($token,  true);
	if (empty($ip)){
		return false;
	}else if($token["http status code"]==404){
		$token = mongodb_PUT("/oauth/ip/$ip",array(
			"count" => 1,
			"cache" => $cache
		));	
		return true;
	}else{		
		mongodb_PATCH("/oauth/ip/$ip",array (		
			"count" => $token["count"]+1,
			"cache" => $cache
		), $token["_etag"]['$oid']);
		if($token["count"]<=5 && $cache > $token["cache"]){
			return true;			
		}else if($token["count"]<=10 && $cache-$token["cache"]>1800000 ){
			return true;
		}else{
			return false;
		}	
	}
}
function ip_reset(){
	include 'database.php';
	$ip = ip_();
	$token = mongodb_GET("/oauth/ip/$ip");
	$token = json_decode($token,  true);
	if (empty($ip)){
		return false;
	}else{	
		mongodb_PATCH("/oauth/ip/$ip",array (		
			"count" => 0,
		), $token["_etag"]['$oid']);
		return true;
	}
}
?>