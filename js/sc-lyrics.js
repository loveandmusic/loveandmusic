//sound-cloud歌词同步插件
//需要jquery支持
// 先在网页<script>标签里定义一下 var lyrics = ".lrc文件的路径"

$(document).ready(function() {

		//定义全局变量
		var lyricsTime;
		lyricsBank = [];

		// 获得正在播放的秒数
		function currentTime(){
			var timeraw = $(".sc-position").text().split(".");
			var time = parseInt(timeraw[0])*60 + parseInt(timeraw[1]);
			return time;
		};

		//display lyrics function
		function display(){
			var currenttime = currentTime();
			if( lyricsBank[currenttime] != undefined ){
				$("#lrcBox").html(lyricsBank[currenttime]);
			};
		};



		//ajax获得lrc文件
		
		$.get(lyrics, function(data, textStatus){


			// 回调函数
			// 用秒数当做下标，将对应歌词存入数组 lyricsBank
			function replacer(match, p1, p2, p3, p4, offset, string){

			lyricsTime = parseInt(p1)*60 + parseInt(p2);
			lyricsBank[lyricsTime]= p3;
			return lyricsTime + p3;
			};

			lyrics = data.replace(/\[(\d\d)\:(\d\d)\.\d\d\]\s(.*(\n|))/g, replacer);

			//每秒检测播放秒数并输出
			setInterval(display, 800);
			
		});

});