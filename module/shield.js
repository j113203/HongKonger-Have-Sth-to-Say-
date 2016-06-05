HK.container.callback(HK.title.show("安全檢查","正在檢查您的瀏覽器 ……"),function(){
	
	//var UUID_ = "^"+UUID.toString().replace(/\s/g, "").length;
	
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
				if (UUID("XihqMTEzMjAzKSMxIzEjIzJ6Njg5IyQ=")){
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
		
		(function(x) {			
			window.console.clear = function() {
				x.apply(this, arguments);
				
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
		
				var console_ = ["\n\n"];
				for (var ii = 1; ii <= 50; ii++) {
					console_[0]+= "%c██";
					var a = "color:black;text-shadow:";			
					for (var i = 1; i <= getlength(ii); i++) {
						a+="0 "+i+"em 0 black";
						if (i==getlength(ii)){
							a+=";"
						}else{
							a+=","
						}
					}
					console_.push(a);
				}
				function getlength(i){
					if (i<4){
						return 22;
					}else if (8<i){
						return 22;
					}else{
						return 30-i;
					}
				}		
				console.log.apply(console,console_);
			};
		})(window.console.clear);
		
		if (console.clear){
			//console.clear();
		}
		
		(function(x) {			
			window.HK.require = function() {
				//console.log("require: ");
				if (UUID("XihqMTEzMjAzKSMjIyMjMno2ODkjJA==","XihqMTEzMjAzKSMjMSMjMno2ODkjJA==","XihqMTEzMjAzKSMjMSMjIzEjMSQ=","XihqMTEzMjAzKSMjMSNvbmNsaWNrJA==","XihqMTEzMjAzKSMjIzEjMSQ=")){
					x.apply(this, arguments);
				}else{
					shield("插件嘗試直接存取保護模組");
				}
			};
		})(window.HK.require);
		
		(function(x) {
			window.HK.search = function() {	
				//console.log("search: ");
				if (UUID("XihqMTEzMjAzKSMjIzEjMSQ=","XihqMTEzMjAzKSNvbmNsaWNrJA==")){
					return x.apply(this, arguments);
				}else{					
					shield("插件嘗試直接存取保護模組");
				}
			};
		})(window.HK.search);
		
		(function(x) {
			window.HK.post = function() {
				//console.log("post: ");
				if (UUID("XihqMTEzMjAzKSNvbmNsaWNrJA==")){
					x.apply(this, arguments);
				}else{					
					shield("插件嘗試直接存取保護模組");
				}
			};
		})(window.HK.post);		
		
		(function(x) {
			window.XMLHttpRequest.prototype.open = function() {
				if ( arguments[1].match("^(module\/.*\.js|https:\/\/rest.j113203.me\/JSON\/.*\.php.*)$") ){
					x.apply(this, arguments);
				}else{
					shield("插件嘗試存取未授權的資源");
				}			
			};
		})(window.XMLHttpRequest.prototype.open);
		
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;			
		
		if (MutationObserver){
			var list = ["form","div","#text","table"];
			(new MutationObserver(function(ee){	
				for(var i=0; i<ee.length; ++i) {
					for(var j=0; j<ee[i].addedNodes.length; ++j) {
						if (list.indexOf(ee[i].addedNodes[j].nodeName.toLowerCase())<0){
							shield("插件嘗試建立未授權的物件");
						}
					}
				}
			})).observe(document, {childList: true,subtree: true});
		}else{
			var list = ["div","form","table","p"];
			$(document).on("DOMNodeInserted",function(e){
				if (list.indexOf(e.target.nodeName.toLowerCase())<0){;
					shield("插件嘗試建立未授權的物件");
				}
			});
		}
		
		if (typeof(Storage) !== "undefined") {
			if (localStorage.getItem("login") && (Date.now() - parseInt(atob(localStorage.getItem("login")))) > 1800000 ){
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
			name : "", 
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
		var n = "^(j113203)";
		while(true){
			a = a.callee.caller.arguments;
			var name = a.callee.name || "#";	
			var length = a.callee.toString().replace(/\s/g, "").length;			
			if (a.callee.name){	
				if (a.callee.name=="onclick" || a.callee.length == 0 ){
					length="";
				}				
			}else if(a.callee.length == 0 ){
				length="";
			}else{
				length=a.callee.length;
			}
			n+=name+length;
			if (!a.callee.caller){
				break;
			}			
		}		
		n+="$";
		//IE Fixed
		n=n.replace(/ifireWith81/g, "##2");
		n=n.replace(/fireWith81/g,"#2");
		n=n.replace(/dispatch67/g, "#");
		n=n.replace(/search95/g, "#1");
		n=n.replace(/post49/g, "#1");
		n=n.replace(/get#2each144each33/g, "#1");
		n=n.replace(/get name#2each144each33/g, "#1");
		n=n.replace(/##2#2#/g,"#");
		//n=n.replace(/get#2each/g,"##2#2#");
		console.log(n);
		console.log(btoa(n));
		if (Array.prototype.slice.call(arguments).indexOf(btoa(n)) >= 0){
			return true;
		}else{
			return false;
		}
	}
});