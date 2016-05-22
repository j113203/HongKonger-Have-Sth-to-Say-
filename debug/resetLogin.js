try {

	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("login");
		localStorage.setItem("login",Date.now()+1800001 );
	}else{
		console.info("登入次數重設成功");
	}
	
}catch(ex) {
	console.warn("登入次數重設失敗。");
	
}