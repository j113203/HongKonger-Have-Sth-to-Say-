<?php
function mongodb_GET($url){
	$curl = curl_init("http://192.168.137.1:8080$url");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);		
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
	curl_setopt($curl, CURLOPT_TIMEOUT, 1);
	curl_setopt($curl, CURLOPT_HEADER, false);
	$response = curl_exec($curl);
	curl_close($curl);
	return $response;
}
//echo json_decode(mongodb_GET("/oauth/user/?filter={'id':'j113203'}"), true)["_embedded"]["rh:doc"][0]["pd"];
function mongodb_PUT($url,$data){
	$curl = curl_init("http://192.168.137.1:8080$url");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
	curl_setopt($curl, CURLOPT_TIMEOUT, 1);
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json'
	));
	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
	$response = curl_exec($curl);
	curl_close($curl);
	return $response;
}
/*echo mongodb_PUT("/oauth/user/j113203@gmail.com",array (
	"pd" => "8426795130"
));*/
function mongodb_PATCH($url,$data,$_etag){
	$curl = curl_init("http://192.168.137.1:8080$url");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);		
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PATCH");
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_TIMEOUT, 1);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'If-Match: '.$_etag
	));
	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
	$response = curl_exec($curl);
	curl_close($curl);
	return $response;
}
/*echo mongodb_PATCH("/oauth/user/abc",array (
	"token" => "123",
),"570a40956a48681068385633");*/
function mongodb_DELETE($url,$_etag){
	$curl = curl_init("http://192.168.137.1:8080$url");
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);		
	curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");
	curl_setopt($curl, CURLOPT_HEADER, false);
	curl_setopt($curl, CURLOPT_TIMEOUT, 1);
	curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		'If-Match: '.$_etag
	));
	$response = curl_exec($curl);
	curl_close($curl);
	return $response;
}
//echo "DELETE".mongodb_DELETE("/oauth/user/abc","570a41186a48681068385634");

?>