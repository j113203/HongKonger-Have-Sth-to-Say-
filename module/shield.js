HK.container.callback(HK.title.show("安全檢查","正在檢查您的瀏覽器 ……"),function(){
	
	var UUID_ = "^"+UUID.toString().replace(/\s/g, "").length;
	
	if (window.$me){
		var oauth = $me.oauth;
		Object.defineProperty(window.$me, "oauth", { 
			get: function () {
				//console.log("oauth: ");
				if (UUID()){
					return oauth;
				}else{
					shield("插件嘗試直接存取帳戶登入資料");
				}
			},
			set: function () {
				shield("插件嘗試竄改您的帳戶登入資料");
			}
		});
		var name = $me.name;
		Object.defineProperty(window.$me, "name", { 
			get: function () {
				//console.log("name: ");
				if (UUID(UUID_+"###2#2#1#1###2z689##$",
						UUID_+"get name##2each144each33#1##fireWith81z689##$")){
					return name;
				}else{
					shield("插件嘗試直接存取帳戶登入資料");
				}
			},
			set: function () {
				shield("插件嘗試竄改您的帳戶登入資料");
			}
		});
		
		HK.require("index");
	}else{
		
		console.clear();
		
		console.info("%c港人有%c云%c\n\n","width: 8em;font-size: 30px;font-weight: 300;font-family: '微軟正黑體'","width: 8em;font-size: 30px;font-weight: 300;font-family: '微軟正黑體';border-bottom: 1px dotted #000;text-decoration: none;","");
		console.group("把文字貼在這裏，不會因此 ……");
		console.warn("擁有管理權限");
		console.warn("獲得額外的功能");
		console.warn("速度得到優化");
		console.warn("重設登入次數");	
		console.groupEnd();
		
		console.group("繼續要貼上的話，您 需承擔以下的可能性。");
		console.warn("密碼外洩");
		console.warn("對話外洩");
		console.warn("帳號凍結");		
		console.groupEnd();
		
		(function(x) {			
			window.HK.require = function() {
				//console.log("require");
				if (UUID(UUID_+"#########2z689##$",UUID_+"###1###2z689##$",UUID_+"##debug#onclick#$",UUID_+"###1#####1#1$",UUID_+"###1##onclick#$",UUID_+"#####1#1$",
						UUID_+"########fireWith81z689##$",UUID_+"###1##fireWith81z689##$",UUID_+"####dispatch671#1$",UUID_+"##search95####dispatch671#1$",UUID_+"##search95##onclick#$",UUID_+"##post49##onclick#$")){
					x.apply(this, arguments);
				}else{
					shield("插件嘗試直接存取保護模組");
				}
			};
		})(window.HK.require);
		
		(function(x) {
			window.HK.search = function() {	
				//console.log("search: ");
				if (UUID(UUID_+"#####1#1$",UUID_+"##onclick#$",
						UUID_+"####dispatch671#1$")){
					return x.apply(this, arguments);
				}else{					
					shield("插件嘗試直接存取保護模組");
				}
			};
		})(window.HK.search);
		
		(function(x) {
			window.HK.post = function() {
				//console.log("post: ");
				if (UUID(UUID_+"##onclick#$")){
					x.apply(this, arguments);
				}else{					
					shield("插件嘗試直接存取保護模組");
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
		
		$(document).on("DOMNodeInserted",function(e){
			var list = ["div","form","table","p"];
			if (list.indexOf(e.target.nodeName.toLowerCase())<0){
				shield("插件嘗試建立未授權的物件");
			}
		});
		
		if (typeof(Storage) !== "undefined") {
			if (localStorage.getItem("login") && (parseInt(localStorage.getItem("login")) - Date.now()) > 1800000 ){
				localStorage.removeItem("login");
			}
			Storage.prototype.removeItem = function(){				
				shield("插件嘗試竄改登入安全策略");
			};			
			(function(x) {
				Storage.prototype.setItem = function(key) {	
					if (key=="login" && localStorage.getItem("login")){
						shield("插件嘗試竄改登入安全策略");
					}else{
						x.apply(this, arguments);
					}
				};
			})(Storage.prototype.setItem);
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
	
	function UUID(){
		var a = arguments;
		var n = "^"+a.callee.toString().replace(/\s/g, "").length;
		while(true){
			a = a.callee.caller.arguments;
			var name = a.callee.name || "#";
			var length = a.callee.toString().replace(/\s/g, "").length;
			
			if (a.callee.name){	
				if (a.callee.name=="onclick" || a.callee.length == 0 ){
					length="#";			
				}				
			}else if(a.callee.length == 0 ){
				length="#";
			}else{
				length=a.callee.length;
			}
			//console.log(a.callee);
			n+=name+length;				
			if (!a.callee.caller){
				break;
			}			
		}		
		n+="$";
		//console.log(n);
		if (Array.prototype.slice.call(arguments).indexOf(n) >= 0){
			return true;
		}else{
			return false;
		}
	}
});