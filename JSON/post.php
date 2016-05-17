<?php
include 'lib/config.php';

$topic=htmlspecialchars($_GET["topic"]);
$id=htmlspecialchars($_GET["id"]);


if ($topic&&$id){
	
	include 'lib/reply.php';
	$reply=array();
	for ($x = 1; $x <= 10; $x++) {
		array_push($reply, reply("0".$x,$x.$x.$x.$x,"1459602606635"));
	}

	$data=array(
		"topic" => $topic,
		"post" => "標題",
		"motd" => "未定義",
		"redirect" => "",
		"reply" => $reply
	);

	header('Content-Type: application/json');
	echo json_encode($data, JSON_PRETTY_PRINT);
}



?>