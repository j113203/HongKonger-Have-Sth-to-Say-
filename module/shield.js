HK.container.callback(HK.title.show("安全檢查","正在檢查您的瀏覽器 ……"),function(){
	if (window.$me){
		var oauth = $me.oauth;
		Object.defineProperty(window.$me, "oauth", { 
			get: function () {
				var UUID_ = UUID(arguments);
				console.log("oauth: "+UUID_);
				if (UUID_ == "z:348"){
					return oauth;
				}else{
					shield("用家嘗試直接存取帳戶登入資料");
				}
			},
			set: function () {
				shield("插件嘗試竄改您的帳戶登入資料");
			}
		});
		var name = $me.name;
		Object.defineProperty(window.$me, "name", { 
			get: function () {
				var UUID_ = UUID(arguments);
				console.log("name: "+UUID_);
				if (UUID_ == "z:348"){
					return name;
				}else{
					shield("用家嘗試直接存取帳戶登入資料");
				}
			},
			set: function () {
				shield("插件嘗試竄改您的帳戶登入資料");
			}
		});
		
		HK.require("index");
	}else{
		
		(function(x) {			
			window.HK.require = function() {
				var UUID_ = UUID(arguments);
				if (UUID_ == "z:348" || UUID_ == "debug:onclick:49" || UUID_ == "112" || UUID_ == "onclick:43" || UUID_ == "onclick:50" || UUID_ == "onclick:47" ){
					x.apply(this, arguments);
				}else{
					shield("用家嘗試直接存取保護模組");
				}
			};
		})(window.HK.require);
		
		(function(x) {
			window.HK.search = function() {				
				var UUID_ = UUID(arguments);
				if (UUID_ == "112" || UUID_ == "onclick:50"){
					return x.apply(this, arguments);
				}else{
					shield("用家嘗試直接存取保護模組");
				}
			};
		})(window.HK.search);
		
		(function(x) {
			window.HK.post = function() {
				var UUID_ = UUID(arguments);
				if (UUID_ == "onclick:43" || UUID_ == "onclick:47"){
					x.apply(this, arguments);
				}else{
					shield("用家嘗試直接存取保護模組");
				}
			};
		})(window.HK.post);
		
		(function(x) {
			window.XMLHttpRequest.prototype.open = function() {				
				if ( arguments[1].match("^(module\/.*\.js|JSON\/.*\.php.*)$") ){
					x.apply(this, arguments);
				}else{
					shield("插件嘗試存取未授權的資源");
				}			
			};
		})(window.XMLHttpRequest.prototype.open);
		
		
		
		if (typeof(Storage) !== "undefined") {
			if (localStorage.getItem("login") && (Date.now() - parseInt(localStorage.getItem("login"))) > 1800000 ){
				localStorage.removeItem("login");
			}
			Storage.prototype.removeItem = function(){				
				shield("插件嘗試竄改登入安全策略");
			};
		}
		
		window.$me = {			
			name : "07", 
			oauth : "",
			topic : "",
			post : ""
		};
		
		Object.preventExtensions(window.HK);
		Object.preventExtensions(window.$me);
		
		HK.require("login");
		
	}
	function shield(reason){
		window.$me = undefined;
		$("div.inline > form").hide();		
		HK.container.element.html(HK.title.show("我們已阻止以下行為",reason));		
		window.HK = undefined;
		console.warn("我們已阻止以下行為: "+reason);
	}
	function UUID(a){		
		var name = "";
		while(a.callee.caller){
			a = a.callee.caller.arguments;
			if (a.callee.name){
				name+=a.callee.name+":";
			}		
		}	
		window.A = a;
		return name+a.callee.toString().length;
	}
	
});