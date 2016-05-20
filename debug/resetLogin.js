try {

	if (typeof(Storage) !== "undefined") {
		
	}else{
		console.info("登入次數重設成功");
	}
	
}catch(ex) {
	
	console.warn("登入次數重設失敗。");
	
}