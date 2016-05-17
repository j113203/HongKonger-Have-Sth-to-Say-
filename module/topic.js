HK.container.callback(HK.title.show(unescape($me.topic),"話題載入中 ……"),function(){	
	$.ajaxSetup({ cache: false });
	$.getJSON( "JSON/topic.php?topic="+$me.topic , function(data){
		if (data){
			output="";
			$(data.posts).each(function(index, posts) {
				output+='<tr onclick="HK.post(\''+posts.id+'\')"><td>'+unescape(posts.title)+"</td><td>"+posts.score+"</td></tr>";
			});
			HK.container.element.html(HK.title.show(unescape(data.topic),unescape(data.motd))+'<table class="full-width"><thead><tr><th class="title">標題</th><th class="score">評分</th></tr></thead>'+output+"</table>"+HK.Fn.Fn_+HK.Fn.Fn("","plus","話題")+HK.Fn.Fn("HK.search($me.topic)","refresh","刷新"))
		}else{
			onError();
		}
	}).fail(onError);
	function onError(){
		HK.container.element.html(HK.title.show(unescape($me.topic),"話題載入失敗。"));
	}
});