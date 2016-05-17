loadTime = (window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)/1000;
HK.container.callback("Processed in "+loadTime +" second(s)",function(){
	$("div.inline > form").show().css("display","flex");
	$("div.inline > form").submit(function(){
		return HK.search(document.forms[0].topic.value);
	});
	$("div.inline.logo").click(function(){
		HK.require("member");
	});
});