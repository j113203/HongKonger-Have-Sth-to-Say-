<?php
function post($id,$score,$title) {
	return array(
			"id" => "$id",
			"score" => "$score",
			"title" => "$title"
		);	
}
?>