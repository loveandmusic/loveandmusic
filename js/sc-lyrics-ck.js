//sound-cloud歌词同步插件
//需要jquery支持
// 先在网页<script>标签里定义一下 var lyrics = ".lrc文件的路径"
$(document).ready(function(){function t(){var e=$(".sc-position").text().split("."),t=parseInt(e[0])*60+parseInt(e[1]);return t}function n(){var e=t();lyricsBank[e]!=undefined&&$("#lrcBox").html(lyricsBank[e])}var e;lyricsBank=[];$.get(lyrics,function(t,r){function i(t,n,r,i,s,o,u){e=parseInt(n)*60+parseInt(r);lyricsBank[e]=i;return e+i}lyrics=t.replace(/\[(\d\d)\:(\d\d)\.\d\d\]\s(.*(\n|))/g,i);setInterval(n,800)})});