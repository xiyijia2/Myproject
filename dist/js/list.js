"use strict";$(function(){var a="",e=document.getElementsByClassName("goodsli")[0];console.log(e),$.ajax({type:"get",url:"http://datainfo.duapp.com/shopdata/getGoods.php",async:!0,dataType:"jsonp",success:function(t){for(var n=0;n<t.length;n++)a+='<li>\n\t\t\t\t\t<a href="../html/detail.html">\n\t\t\t\t\t\t<img src="'+t[n].goodsListImg+'" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t'+t[n].goodsName+'\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t活力润泽晚霜豆腐霜清爽平衡保湿 50ml\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t"¥'+t[n].price+'"\n\t\t\t\t\t</p>\n\t\t\t\t</li>';e.innerHTML=a}});var s=document.getElementsByClassName("third");console.log("aaa"),$.ajax({type:"get",url:"../jsondata/erjicandan.json",async:!0,success:function(t){for(var n=0;n<t.length;n++){for(var a="",e=0;e<t[n].length;e++){a+="<div><h2>"+t[n][e].title+"</h2><div>";for(var o=0;o<t[n][e].con.length;o++)a+='<a href="">'+t[n][e].con[o]+"</a>";a+="\t</div>\n\t\t\t\t\t\t\t\t</div>"}s[n].innerHTML=a}}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiJCIsInN0cjQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwiZ29vZHNsaSIsInR5cGUiLCJ1cmwiLCJhc3luYyIsImRhdGFUeXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJpIiwibGVuZ3RoIiwiZ29vZHNMaXN0SW1nIiwiZ29vZHNOYW1lIiwicHJpY2UiLCJpbm5lckhUTUwiLCJzdHI1IiwiY29uIiwibG9nIiwidGhpcmQiLCJrIiwidGl0bGUiLCJqIl0sIm1hcHBpbmdzIjoiYUFDQUEsRUFBRSxXQUFGQSxJQUFFQyxFQUFBLEdBQ0VBLEVBQUtDLFNBQVRDLHVCQUFBLFdBQUEsR0FDQ0MsUUFBSUMsSUFBQUEsR0FDSkQsRUFBQUEsS0FBQUEsQ0FDQUosS0FBQSxNQUNDTSxJQUFBQSxrREFDQUMsT0FBSSxFQUNKQyxTQUFNLFFBQ05DLFFBQUFBLFNBSk1DLEdBS05DLElBQUFBLElBQVFDLEVBQUEsRUFBQUEsRUFBQUYsRUFBQUcsT0FBU0gsSUFDaEJULEdBQUFBLHlFQWVDUyxFQUFBRSxHQUFBRSxhQWZELG9EQU5GSixFQUFBRSxHQUFBRyxVQU1FLG1IQXdCR0wsRUFEQ0UsR0FBQUksTUF2QkosbUNBNEJEWCxFQUFJWSxVQUFRTCxLQUtUTSxJQUFBQSxFQUFBQSxTQUFBQSx1QkFBK0JDLFNBQy9CZixRQUFBZ0IsSUFBQSxPQUNERixFQUFBQSxLQUFBQSxDQUVBWixLQUFBLE1BQ0RlLElBQUFBLDhCQUVBYixPQUFBLEVBQ0RHLFFBQUEsU0FBQUQsR0FsQkYsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFGLEVBQUFHLE9BQUFELElBQUEsQ0FPRyxJQXhDSCxJQUFBTSxFQUFBLEdBd0NXSSxFQUFFLEVBQUVBLEVBQUVaLEVBQUtFLEdBQUdDLE9BQU9TLElBQUksQ0FDaENKLEdBQUFBLFlBQWtCUixFQUFLRSxHQUFHVSxHQUFHQyxNQUE3QixhQUNBLElBQUksSUFBSUMsRUFBRSxFQUFFQSxFQUFFZCxFQUFLRSxHQUFHVSxHQUFHSCxJQUFJTixPQUFPVyxJQUNuQ04sR0FBQUEsY0FBb0JSLEVBQUtFLEdBQUdVLEdBQUdILElBQUlLLEdBQW5DLE9BRUROLEdBQUFBLG1DQUdERyxFQUFNVCxHQUFHSyxVQUFVQyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZnVuY3Rpb24oKXtcclxudmFyIHN0cjQ9XCJcIjtcclxuXHR2YXIgZ29vZHNsaT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ29vZHNsaVwiKVswXTtcclxuXHRjb25zb2xlLmxvZyhnb29kc2xpKTtcclxuXHQkLmFqYXgoe1xyXG5cdFx0dHlwZTpcImdldFwiLFxyXG5cdFx0dXJsOlwiaHR0cDovL2RhdGFpbmZvLmR1YXBwLmNvbS9zaG9wZGF0YS9nZXRHb29kcy5waHBcIixcclxuXHRcdGFzeW5jOnRydWUsXHJcblx0XHRkYXRhVHlwZTpcImpzb25wXCIsXHJcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0c3RyNCs9YDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIuLi9odG1sL2RldGFpbC5odG1sXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtkYXRhW2ldLmdvb2RzTGlzdEltZ31cIiAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdCR7ZGF0YVtpXS5nb29kc05hbWV9XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx05rS75Yqb5ram5rO95pma6Zyc6LGG6IWQ6Zyc5riF54i95bmz6KGh5L+d5rm/IDUwbWxcclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcIsKlJHtkYXRhW2ldLnByaWNlfVwiXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdH1cclxuXHRcdFx0Z29vZHNsaS5pbm5lckhUTUw9c3RyNDtcclxuXHRcdH1cclxuXHR9KTtcdFxyXG5cdFx0Ly9cdOS6jOe6p+iPnOWNlVxyXG5cclxudmFyIHRoaXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoaXJkXCIpO1xyXG5jb25zb2xlLmxvZyhcImFhYVwiKTtcclxuJC5hamF4KHtcclxuXHR0eXBlOlwiZ2V0XCIsXHJcblx0dXJsOlwiLi4vanNvbmRhdGEvZXJqaWNhbmRhbi5qc29uXCIsXHJcblx0YXN5bmM6dHJ1ZSxcclxuXHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1x0XHRcclxuXHRcdGZvcih2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKXtcclxuXHRcdFx0dmFyIHN0cjU9XCJcIjtcdFx0XHRcclxuXHRcdFx0Zm9yKHZhciBrPTA7azxkYXRhW2ldLmxlbmd0aDtrKyspe1xyXG5cdFx0XHRcdHN0cjUrPWA8ZGl2PjxoMj4ke2RhdGFbaV1ba10udGl0bGV9PC9oMj48ZGl2PmBcclxuXHRcdFx0XHRmb3IodmFyIGo9MDtqPGRhdGFbaV1ba10uY29uLmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0c3RyNSs9YDxhIGhyZWY9XCJcIj4ke2RhdGFbaV1ba10uY29uW2pdfTwvYT5gXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdHI1Kz1gXHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PmBcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlyZFtpXS5pbm5lckhUTUw9c3RyNTtcdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHR9KVxyXG59KTsiXX0=