HK.container.callback(HK.title.show("安全檢查","正在檢查您的瀏覽器 ……"),function(){
	if (window.$me){
		var oauth = $me.oauth;
		Object.defineProperty(window.$me, "oauth", { 
			get: function () {
				if (arguments.callee.caller){
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
				if (arguments.callee.caller){
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
				if (arguments.callee.caller){
					x.apply(this, arguments);
				}else{
					shield("用家嘗試直接存取保護模組");
				}
			};
		})(window.HK.require);
		
		(function(x) {
			window.HK.search = function() {
				if (arguments.callee.caller){
					return x.apply(this, arguments);
				}else{
					shield("用家嘗試直接存取保護模組");
				}
			};
		})(window.HK.search);
		
		(function(x) {
			window.HK.post = function() {
				if (arguments.callee.caller){
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
});