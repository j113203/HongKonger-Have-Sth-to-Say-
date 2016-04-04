<?php

$topic=htmlspecialchars($_GET["topic"]);

if ($topic){
	
	include 'lib/post.php';
	$post=array();
	for ($x = 1; $x <= 10; $x++) {
		array_push($post, post("0".$x,"0",$x.$x.$x.$x));
	}

	$data=array(
		"topic" => $topic,
		"motd" => "未定義",
		"redirect" => "",
		"posts" => $post
	);

	header('Content-Type: application/json');
	echo json_encode($data, JSON_PRETTY_PRINT);
}



?>