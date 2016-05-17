HK.container.callback(HK.title.show("安全檢查","正在檢查您的瀏覽器 ……"),function(){
	if (window.$me){
		Object.defineProperty(window.$me, "oauth", { set: function () {
			shield("插件嘗試竄改您的帳戶登入資料");
		}});
		Object.defineProperty(window.$me, "name", { set: function () {
			shield("插件嘗試竄改您的帳戶登入資料");
		}});
		HK.require("index");
	}else{
		window.$me = {			
			name : "07", 
			oauth : "",
			topic : "",
			post : ""
		};
		if (typeof(Storage) !== "undefined") {
			if (localStorage.getItem("login") && (Date.now() - parseInt(localStorage.getItem("login"))) > 1800000 ){
				localStorage.removeItem("login");
			}
			Storage.prototype.removeItem = function(){				
				shield("插件嘗試竄改登入安全策略");
			};
		}
		HK.require("login");
	}
	function shield(reason){
		window.$me = undefined;
		$("div.inline > form").hide();		
		HK.container.element.html(HK.title.show("我們已阻止以下行為",reason));		
		window.HK = undefined;
		console.log("我們已阻止以下行為: "+reason);
	}
});