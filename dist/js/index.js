"use strict";$(function(){$(".link-middle li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),$(".link-right li").eq(2).hover(function(){$(".secondM").show()},function(){$(".secondM").hide()}),$(".link-right li").eq(9).hover(function(){$(".right").show()},function(){$(".right").hide()}),$(".cart").hover(function(){$(this).css({"border-bottom":0,"z-index":7,"box-shadow":"0 0 0 #fff"}),$(".erji").show()},function(){$(".erji").hide(),$(this).css({border:"1px solid #dfdfdf","box-shadow":" 0 0 3px #999999"})}),$("#carousel_1").FtCarousel();var n="",e=document.getElementsByClassName("main-list")[0];$.ajax({type:"get",url:"jsondata/data.json",async:!0,success:function(t){for(var i=0;i<t.length;i++)n+='<li>\n\t\t\t\t\t<a href="">\n\t\t\t\t\t\t<img src="'+t[i].burl+'" />\n\t\t\t\t\t\t<div class="up">\n\t\t\t\t\t\t\t<div class="all">\n\t\t\t\t\t\t\t\t<img src="'+t[i].surl+'" />\n\t\t\t\t\t\t\t\t<p class="slide">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="stxt">\n\t\t\t\t\t\t\t\t\t'+t[i].p1+'\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="stxt">\n\t\t\t\t\t\t\t\t\t'+t[i].p2+"\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</li>";e.innerHTML=n,$(".main-list").children().hover(function(){$(this).children().children().eq(1).children(".all").animate({top:0},300)},function(){$(this).children().children().eq(1).children(".all").animate({top:100},300)})}}),$(".hotflag").hover(function(){$(this).children(".showflag").animate({opacity:1},300),$(this).children(".topline").animate({width:166},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:85},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:166},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:85},300).css("overflow","hidden"),$(this).children(".chname").css("color","#C69C6D")},function(){$(this).children(".showflag").animate({opacity:0},300),$(this).children(".topline").animate({width:0},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:0},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:0},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:0},300).css("overflow","hidden")});var t=0;$(".left_btn").click(function(){return t<=0?$(".flagbox").css("left","0"):t<3&&(t--,$(".flagbox").animate({left:-t*$(".flagbox li").width()},300)),!1}),$(".right_btn").click(function(){return 2<++t?$(".flagbox").css("left","-2420px"):$(".flagbox").animate({left:-t*$(".flagbox li").width()},300),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJob3ZlciIsInRoaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZXEiLCJoaWRlIiwic2hvdyIsImNzcyIsImJvcmRlci1ib3R0b20iLCJ6LWluZGV4IiwiYm94LXNoYWRvdyIsInN0ciIsImJvcmRlciIsInR5cGUiLCJGdENhcm91c2VsIiwic3VjY2VzcyIsIkxpc3QiLCJkb2N1bWVudCIsImkiLCJhamF4IiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYnVybCIsInN1cmwiLCJwMSIsInAyIiwiaW5kZXgiLCJhbmltYXRlIiwidG9wIiwiY2xpY2siLCJvcGFjaXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiYUFBQUEsRUFBRSxXQUNEQSxFQUFFLG1CQUFtQkMsTUFEcEIsV0FDQ0QsRUFBQUUsTUFBQUMsU0FBRixVQUFBLFdBS0VILEVBQUVFLE1BQU1FLFlBQVksV0FLcEJKLEVBQUFBLGtCQUFBSyxHQUFBLEdBQUFKLE1BRkYsV0FLRUQsRUFBRSxZQUFZTSxRQUdoQk4sV0FFRUEsRUFBRSxZQUFVTyxTQUlaUCxFQU5GLGtCQUFBSyxHQUFBLEdBQUFKLE1BUUFELFdBQ0NBLEVBQUUsVUFBVU8sUUFEYixXQUlDUCxFQUFFLFVBQVNNLFNBSlpOLEVBQUUsU0FBU0MsTUFBTSxXQVFqQkQsRUFBQUUsTUFBQU0sSUFBQSxDQUFBQyxnQkFBQSxFQUFBQyxVQUFBLEVBQUFDLGFBQUEsZUFDQVgsRUFBRSxTQUFBTyxRQU5BLFdBUUZQLEVBQUEsU0FBQU0sT0FDQU4sRUFBQUUsTUFBSVUsSUFBSixDQUFBQyxPQUFBLG9CQUFBRixhQUFBLHVCQUlDRyxFQUFBQSxlQURNQyxhQUlOQyxJQUFBQSxFQUFBQSxHQUNDQyxFQUFJQyxTQUFRQyx1QkFBa0IsYUFBQSxHQW9CN0JuQixFQUFBb0IsS0FBQSxDQUNGSCxLQUFBQSxNQUNDakIsSUFBRSxxQkFDQUEsT0FBRSxFQUVGZ0IsUUFBQyxTQUFVSyxHQUNYckIsSUFBRSxJQUFGbUIsRUFBUUcsRUFBQUEsRUFBQUEsRUFBUkMsT0FBbUJELElBSnJCVixHQUFBQSxzREEzQkZTLEVBQUFGLEdBQUFLLEtBMkJFLGtHQVNnQkgsRUFBQUYsR0FBQU0sS0FUaEIsdUpBZUFKLEVBQVVGLEdBQUFPLEdBZlYsK0VBa0JPSixFQUFBQSxHQUFTSyxHQWxCaEIsa0dBMEJEVixFQUFHVyxVQUFIaEIsRUFDQ1osRUFBRSxjQUFZUSxXQUFXUCxNQUF6QixXQURERCxFQUFBRSxNQUVTMEIsV0FBUU4sV0FBQWpCLEdBQUEsR0FBQWlCLFNBQUEsUUFBQU8sUUFBQSxDQUFBQyxJQUFBLEdBQUEsTUFFZCxXQUNGOUIsRUFBQUUsTUFBQW9CLFdBQUFBLFdBQUFqQixHQUFBLEdBQUFpQixTQUFBLFFBQUFPLFFBQUEsQ0FBQUMsSUFBQSxLQUFBLFVBR0Y5QixFQUFFLFlBQUZDLE1BQWdCOEIsV0ExQmYvQixFQUFFRSxNQUFNb0IsU0FBUyxhQUFhTyxRQUFRLENBQUNHLFFBQVEsR0FBRyxLQTRCbERKLEVBQUFBLE1BQUFBLFNBQUFBLFlBQUFBLFFBQUFBLENBQUFBLE1BQUFBLEtBQUFBLEtBQUFBLElBQUFBLFdBQUFBLFVBQ0E1QixFQUFBRSxNQUFHMEIsU0FBUSxhQUFBQyxRQUFBLENBQUFJLE9BQUEsSUFBQSxLQUFBekIsSUFBQSxXQUFBLFVBQ1ZSLEVBQUFBLE1BQUVzQixTQUFZZCxlQUFXcUIsUUFBekIsQ0FBQUssTUFBQSxLQUFBLEtBQUExQixJQUFBLFdBQUEsVUFDQVIsRUFGREUsTUFFS29CLFNBQUEsY0FBQU8sUUFBQSxDQUFBSSxPQUFBLElBQUEsS0FBQXpCLElBQUEsV0FBQSxVQUNKUixFQUFBQSxNQUFFc0IsU0FBWU8sV0FBU00sSUFBTVAsUUFBTTVCLFlBekJuQyxXQTRCREEsRUFBQUUsTUFBT29CLFNBQVAsYUFBQU8sUUFBQSxDQUFBRyxRQUFBLEdBQUEsS0FURGhDLEVBQUFFLE1BQUFvQixTQUFBLFlBQUFPLFFBQUEsQ0FBQUssTUFBQSxHQUFBLEtBQUExQixJQUFBLFdBQUEsVUFyR0RSLEVBQUFFLE1BQUFvQixTQUFBLGFBQUFPLFFBQUEsQ0FBQUksT0FBQSxHQUFBLEtBQUF6QixJQUFBLFdBQUEsVUFzRkVSLEVBQUVFLE1BQU1vQixTQUFTLGVBQWVPLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHLEtBQUsxQixJQUFJLFdBQVcsVUFDdEVSLEVBQUVFLE1BQU1vQixTQUFTLGNBQWNPLFFBQVEsQ0FBQ0ksT0FBTyxHQUFHLEtBQUt6QixJQUFJLFdBQVcsWUFJdkUsSUFBSW9CLEVBQU0sRUFDVjVCLEVBQUUsYUFBYStCLE1BQU0sV0FPcEIsT0FOR0gsR0FBTyxFQUNUNUIsRUFBRSxZQUFZUSxJQUFJLE9BQU8sS0FDakJvQixFQUFNLElBQ2RBLElBQ0E1QixFQUFFLFlBQVk2QixRQUFRLENBQUNNLE1BQU1QLEVBQU01QixFQUFFLGVBQWVrQyxTQUFTLE9BRXZELElBRVJsQyxFQUFFLGNBQWMrQixNQUFNLFdBU3JCLE9BTlMsSUFEVEgsRUFFQzVCLEVBQUUsWUFBWVEsSUFBSSxPQUFPLFdBRXpCUixFQUFFLFlBQVk2QixRQUFRLENBQUNNLE1BQU1QLEVBQU01QixFQUFFLGVBQWVrQyxTQUFTLE1BR3ZEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cdCQoXCIubGluay1taWRkbGUgbGlcIikuaG92ZXIoXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiaG92ZXJcIik7XHJcblx0fSxcclxuXHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKVxyXG5cdFx0fVxyXG5cdCk7XHJcblx0JChcIi5saW5rLXJpZ2h0IGxpXCIpLmVxKDIpLmhvdmVyKFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5zZWNvbmRNXCIpLnNob3coKTtcclxuXHRcdH0sXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLnNlY29uZE1cIikuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0JChcIi5saW5rLXJpZ2h0IGxpXCIpLmVxKDkpLmhvdmVyKFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5yaWdodFwiKS5zaG93KCk7XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5yaWdodFwiKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0KTtcclxuXHQkKFwiLmNhcnRcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY3NzKHtcImJvcmRlci1ib3R0b21cIjowLFwiei1pbmRleFwiOjcsXCJib3gtc2hhZG93XCI6XCIwIDAgMCAjZmZmXCJ9KVxyXG5cdFx0JChcIi5lcmppXCIpLnNob3coKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHRcdFxyXG5cdFx0JChcIi5lcmppXCIpLmhpZGUoKTtcclxuXHRcdCQodGhpcykuY3NzKHtcImJvcmRlclwiOlwiMXB4IHNvbGlkICNkZmRmZGZcIixcImJveC1zaGFkb3dcIjpcIiAwIDAgM3B4ICM5OTk5OTlcIn0pXHJcblx0fSk7XHJcblx0XHJcblx0Ly/ova7mkq3lm75cclxuXHQkKFwiI2Nhcm91c2VsXzFcIikuRnRDYXJvdXNlbCgpO1xyXG5cdFxyXG5cdC8v5ZOB54mM5peX6Iiw5Y+W5pWw5o2uXHJcblx0dmFyIHN0cj1cIlwiO1xyXG5cdHZhciBMaXN0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWxpc3RcIilbMF07XHJcblx0XHJcblx0JC5hamF4KHtcclxuXHRcdHR5cGU6XCJnZXRcIixcclxuXHRcdHVybDpcImpzb25kYXRhL2RhdGEuanNvblwiLFxyXG5cdFx0YXN5bmM6dHJ1ZSxcclxuXHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdGZvcih2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKXtcdFx0XHRcdFxyXG5cdFx0XHRcdHN0cis9YDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIke2RhdGFbaV0uYnVybH1cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7ZGF0YVtpXS5zdXJsfVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInNsaWRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic3R4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQke2RhdGFbaV0ucDF9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInN0eHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JHtkYXRhW2ldLnAyfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0fVx0XHRcclxuXHRcdExpc3QuaW5uZXJIVE1MPXN0cjtcdFxyXG5cdFx0XHQkKFwiLm1haW4tbGlzdFwiKS5jaGlsZHJlbigpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5lcSgxKS5jaGlsZHJlbihcIi5hbGxcIikuYW5pbWF0ZSh7dG9wOjB9LDMwMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5lcSgxKS5jaGlsZHJlbihcIi5hbGxcIikuYW5pbWF0ZSh7dG9wOjEwMH0sMzAwKX0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoXCIuaG90ZmxhZ1wiKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5zaG93ZmxhZ1wiKS5hbmltYXRlKHtvcGFjaXR5OjF9LDMwMCk7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcGxpbmVcIikuYW5pbWF0ZSh7d2lkdGg6MTY2fSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmxlZnRsaW5lXCIpLmFuaW1hdGUoe2hlaWdodDo4NX0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5ib3R0b21saW5lXCIpLmFuaW1hdGUoe3dpZHRoOjE2Nn0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5yaWdodGxpbmVcIikuYW5pbWF0ZSh7aGVpZ2h0Ojg1fSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmNobmFtZVwiKS5jc3MoXCJjb2xvclwiLFwiI0M2OUM2RFwiKTtcclxuXHRcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQodGhpcykuY2hpbGRyZW4oXCIuc2hvd2ZsYWdcIikuYW5pbWF0ZSh7b3BhY2l0eTowfSwzMDApO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi50b3BsaW5lXCIpLmFuaW1hdGUoe3dpZHRoOjB9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIubGVmdGxpbmVcIikuYW5pbWF0ZSh7aGVpZ2h0OjB9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuYm90dG9tbGluZVwiKS5hbmltYXRlKHt3aWR0aDowfSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnJpZ2h0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6MH0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdHZhciBpbmRleD0wO1xyXG5cdCQoXCIubGVmdF9idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdGlmKGluZGV4PD0wKXtcclxuXHRcdFx0JChcIi5mbGFnYm94XCIpLmNzcyhcImxlZnRcIixcIjBcIilcclxuXHRcdH1lbHNlIGlmKGluZGV4PDMpe1xyXG5cdFx0XHRpbmRleC0tO1xyXG5cdFx0XHQkKFwiLmZsYWdib3hcIikuYW5pbWF0ZSh7bGVmdDotaW5kZXgqJChcIi5mbGFnYm94IGxpXCIpLndpZHRoKCl9LDMwMCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHQkKFwiLnJpZ2h0X2J0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0XHRpbmRleCsrO1xyXG5cdFx0aWYoaW5kZXg+Mil7XHJcblx0XHRcdCQoXCIuZmxhZ2JveFwiKS5jc3MoXCJsZWZ0XCIsXCItMjQyMHB4XCIpXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JChcIi5mbGFnYm94XCIpLmFuaW1hdGUoe2xlZnQ6LWluZGV4KiQoXCIuZmxhZ2JveCBsaVwiKS53aWR0aCgpfSwzMDApO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KVxyXG5cclxufSk7Il19
