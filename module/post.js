HK.container.callback(HK.title.show(unescape($me.topic),"討論載入中 ……"),function(){	
	$.ajaxSetup({ cache: false });
	$.getJSON( "JSON/post.php?topic="+$me.topic+"&id="+$me.post , function(data){
		if (data){
			output="";
			$(data.reply).each(function(index, reply) {
				output+='<div class="chat'+(reply.user==$me.name?" me":"")+'"><a class="user">'+unescape(reply.user)+'</a><div class="bubble">'+unescape(reply.text)+'</div><a class="date">'+HK.TEMPpool.simplify(parseInt(reply.date))+"</a></div>";
			});
			HK.container.element.html(HK.title.show(unescape(data.post),unescape(data.motd))+output+HK.Fn.Fn_+HK.Fn.Fn("HK.search($me.topic)","chevron-circle-left","返回")+HK.Fn.Fn("HK.post($me.post)","refresh","刷新"));
		}else{
			HK.TEMPpool.onError();
		}
	}).fail(HK.TEMPpool.onError);
});
(function(){
	function onError(){
		HK.container.element.html(HK.title.show(unescape($me.topic),"討論載入失敗。"));
	}
	HK.TEMPpool.onError=onError;
	function simplify(e){
		var t=new Date;return e=new Date(e),e.toISOString().substr(0,10)==t.toISOString().substr(0,10)?e.getHours()==t.getHours()?e.getMinutes()==t.getMinutes()?t.getSeconds()-e.getSeconds()+"秒前":t.getMinutes()-e.getMinutes()+"分鐘前":t.getHours()-e.getHours()+"小時前":e.getFullYear()==t.getFullYear()?e.getMonth()==t.getMonth()?t.getDate()-e.getDate()+"日前":t.getMonth()-e.getMonth()+"個月前":t.getFullYear()-e.getFullYear()+"年前";
	}
	HK.TEMPpool.simplify=simplify;
})();