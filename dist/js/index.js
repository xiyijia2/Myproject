"use strict";$(function(){$(".link-middle li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),$(".link-right li").eq(2).hover(function(){$(".secondM").show()},function(){$(".secondM").hide()}),$(".link-right li").eq(9).hover(function(){$(".right").show()},function(){$(".right").hide()}),$(".cart").hover(function(){$(this).css({"border-bottom":0,"z-index":7,"box-shadow":"0 0 0 #fff"}),$(".erji").show()},function(){$(".erji").hide(),$(this).css({border:"1px solid #dfdfdf","box-shadow":" 0 0 3px #999999"})}),$("#carousel_1").FtCarousel();var n="",e=document.getElementsByClassName("main-list")[0];$.ajax({type:"get",url:"jsondata/data.json",async:!0,success:function(t){for(var i=0;i<t.length;i++)n+='<li>\n\t\t\t\t\t<a href="">\n\t\t\t\t\t\t<img src="'+t[i].burl+'" />\n\t\t\t\t\t\t<div class="up">\n\t\t\t\t\t\t\t<div class="all">\n\t\t\t\t\t\t\t\t<img src="'+t[i].surl+'" />\n\t\t\t\t\t\t\t\t<p class="slide">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="stxt">\n\t\t\t\t\t\t\t\t\t'+t[i].p1+'\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="stxt">\n\t\t\t\t\t\t\t\t\t'+t[i].p2+"\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</li>";e.innerHTML=n,$(".main-list").children().hover(function(){$(this).children().children().eq(1).children(".all").animate({top:0},300)},function(){$(this).children().children().eq(1).children(".all").animate({top:100},300)})}}),$(".hotflag").hover(function(){$(this).children(".showflag").animate({opacity:1},300),$(this).children(".topline").animate({width:166},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:85},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:166},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:85},300).css("overflow","hidden"),$(this).children(".chname").css("color","#C69C6D")},function(){$(this).children(".showflag").animate({opacity:0},300),$(this).children(".topline").animate({width:0},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:0},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:0},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:0},300).css("overflow","hidden")});var t=0;$(".left_btn").click(function(){return t<=0?$(".flagbox").css("left","0"):t<3&&(t--,$(".flagbox").animate({left:-t*$(".flagbox li").width()},300)),!1}),$(".right_btn").click(function(){return 2<++t?$(".flagbox").css("left","-2420px"):$(".flagbox").animate({left:-t*$(".flagbox li").width()},300),!1}),$(".store-link li").mouseenter(function(){var t=$(this).index();$(this).css("background","#000").siblings().css("background","#999"),$(".store-box>ul>li").eq(t).show().siblings().hide()}),$(".topall").hover(function(){$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".top2").hover(function(){$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".bottom1").hover(function(){$(this).children(".bottomtxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".bottomtxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".shopcenter li").hover(function(){$(this).children(".shopbox").animate({top:-50},300)},function(){$(this).children(".shopbox").animate({top:0},300)});var s="",l=document.getElementsByClassName("zhanshi")[0];console.log(l),$.ajax({type:"get",url:"jsondata/bagdata.json",async:!0,success:function(t){for(var i=0;i<t.length;i++)s+='<li>\n\t\t\t\t\t\t<a href="">'+t[i]+"</a>\n\t\t\t\t\t</li>";l.innerHTML=s}});var i=0;$(".circle span").eq(i).css("background","#C69C6D").siblings().css("background","#666666"),$(".b-next").click(function(){return 5==++i&&(i=1,$(".slidebox").css("left",0)),4==i&&$(".circle span").eq(0).css("background","#C69C6D").siblings().css("background","#666666"),$(".slidebox").animate({left:220*-i},300),$(".circle span").eq(i).css("background","#C69C6D").siblings().css("background","#666666"),!1}),$(".b-pre").click(function(){return--i<0&&(i=3,$(".slidebox").css("left",220*-(i+1))),$(".circle span").eq(i).css("background","#C69C6D").siblings().css("background","#666666"),$(".slidebox").animate({left:220*-i},300),!1});var o="",a=document.getElementsByClassName("goodslist");$.ajax({type:"get",url:"jsondata/picture.json",async:!0,success:function(t){for(var i=0;i<t.length;i++)o+='<li>\n\t\t\t\t\t\t<a href="">\n\t\t\t\t\t\t\t<img src="'+t[i]+'" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>';a.innerHTML=o}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJob3ZlciIsInRoaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZXEiLCJoaWRlIiwic2hvdyIsImNzcyIsImJvcmRlci1ib3R0b20iLCJ6LWluZGV4IiwiYm94LXNoYWRvdyIsInN0ciIsImJvcmRlciIsInR5cGUiLCJGdENhcm91c2VsIiwic3VjY2VzcyIsIkxpc3QiLCJkb2N1bWVudCIsImkiLCJhamF4IiwiZGF0YSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYnVybCIsInN1cmwiLCJwMSIsInAyIiwiaW5kZXgiLCJhbmltYXRlIiwidG9wIiwiY2xpY2siLCJvcGFjaXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwibW91c2VlbnRlciIsInN0cjEiLCJTaG93bWVzc2FnZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwic2libGluZ3MiLCJhc3luYyIsImluZGV4MSIsImxvZyIsInVybCIsImlubmVySFRNTCIsInN0cjIiLCJnb29kTGlzdCJdLCJtYXBwaW5ncyI6ImFBQUFBLEVBQUUsV0FDREEsRUFBRSxtQkFBbUJDLE1BRHBCLFdBQ0NELEVBQUFFLE1BQUFDLFNBQUYsVUFBQSxXQUtFSCxFQUFFRSxNQUFNRSxZQUFZLFdBS3BCSixFQUFBQSxrQkFBQUssR0FBQSxHQUFBSixNQUZGLFdBS0VELEVBQUUsWUFBWU0sUUFHaEJOLFdBRUVBLEVBQUUsWUFBVU8sU0FJWlAsRUFORixrQkFBQUssR0FBQSxHQUFBSixNQVFBRCxXQUNDQSxFQUFFLFVBQVVPLFFBRGIsV0FJQ1AsRUFBRSxVQUFTTSxTQUpaTixFQUFFLFNBQVNDLE1BQU0sV0FRakJELEVBQUFFLE1BQUFNLElBQUEsQ0FBQUMsZ0JBQUEsRUFBQUMsVUFBQSxFQUFBQyxhQUFBLGVBQ0FYLEVBQUUsU0FBQU8sUUFOQSxXQVFGUCxFQUFBLFNBQUFNLE9BQ0FOLEVBQUFFLE1BQUlVLElBQUosQ0FBQUMsT0FBQSxvQkFBQUYsYUFBQSx1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ZGRsZSBsaVwiKS5ob3ZlcihcclxuXHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoXCJob3ZlclwiKTtcclxuXHR9LFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcImhvdmVyXCIpXHJcblx0XHR9XHJcblx0KTtcclxuXHQkKFwiLmxpbmstcmlnaHQgbGlcIikuZXEoMikuaG92ZXIoXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLnNlY29uZE1cIikuc2hvdygpO1xyXG5cdFx0fSxcclxuXHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoXCIuc2Vjb25kTVwiKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0KTtcclxuXHQkKFwiLmxpbmstcmlnaHQgbGlcIikuZXEoOSkuaG92ZXIoXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLnJpZ2h0XCIpLnNob3coKTtcclxuXHRcdH0sXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLnJpZ2h0XCIpLmhpZGUoKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdCQoXCIuY2FydFwiKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5jc3Moe1wiYm9yZGVyLWJvdHRvbVwiOjAsXCJ6LWluZGV4XCI6NyxcImJveC1zaGFkb3dcIjpcIjAgMCAwICNmZmZcIn0pXHJcblx0XHQkKFwiLmVyamlcIikuc2hvdygpO1xyXG5cdH0sZnVuY3Rpb24oKXtcdFx0XHJcblx0XHQkKFwiLmVyamlcIikuaGlkZSgpO1xyXG5cdFx0JCh0aGlzKS5jc3Moe1wiYm9yZGVyXCI6XCIxcHggc29saWQgI2RmZGZkZlwiLFwiYm94LXNoYWRvd1wiOlwiIDAgMCAzcHggIzk5OTk5OVwifSlcclxuXHR9KTtcclxuXHRcclxuXHQvL+i9ruaSreWbvlxyXG5cdCQoXCIjY2Fyb3VzZWxfMVwiKS5GdENhcm91c2VsKCk7XHJcblx0XHJcblx0Ly/lk4HniYzml5foiLDlj5bmlbDmja5cclxuXHR2YXIgc3RyPVwiXCI7XHJcblx0dmFyIExpc3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tbGlzdFwiKVswXTtcclxuXHRcclxuXHQkLmFqYXgoe1xyXG5cdFx0dHlwZTpcImdldFwiLFxyXG5cdFx0dXJsOlwianNvbmRhdGEvZGF0YS5qc29uXCIsXHJcblx0XHRhc3luYzp0cnVlLFxyXG5cdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1x0XHRcdFx0XHJcblx0XHRcdFx0c3RyKz1gPGxpPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7ZGF0YVtpXS5idXJsfVwiIC8+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ1cFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtkYXRhW2ldLnN1cmx9XCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic2xpZGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJzdHh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCR7ZGF0YVtpXS5wMX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwic3R4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQke2RhdGFbaV0ucDJ9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0TGlzdC5pbm5lckhUTUw9c3RyO1x0XHJcblx0XHRcdCQoXCIubWFpbi1saXN0XCIpLmNoaWxkcmVuKCkuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmVxKDEpLmNoaWxkcmVuKFwiLmFsbFwiKS5hbmltYXRlKHt0b3A6MH0sMzAwKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmVxKDEpLmNoaWxkcmVuKFwiLmFsbFwiKS5hbmltYXRlKHt0b3A6MTAwfSwzMDApfSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JChcIi5ob3RmbGFnXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnNob3dmbGFnXCIpLmFuaW1hdGUoe29wYWNpdHk6MX0sMzAwKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wbGluZVwiKS5hbmltYXRlKHt3aWR0aDoxNjZ9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIubGVmdGxpbmVcIikuYW5pbWF0ZSh7aGVpZ2h0Ojg1fSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmJvdHRvbWxpbmVcIikuYW5pbWF0ZSh7d2lkdGg6MTY2fSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnJpZ2h0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6ODV9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuY2huYW1lXCIpLmNzcyhcImNvbG9yXCIsXCIjQzY5QzZEXCIpO1xyXG5cdFxyXG5cdH0sZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5zaG93ZmxhZ1wiKS5hbmltYXRlKHtvcGFjaXR5OjB9LDMwMCk7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcGxpbmVcIikuYW5pbWF0ZSh7d2lkdGg6MH0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5sZWZ0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6MH0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5ib3R0b21saW5lXCIpLmFuaW1hdGUoe3dpZHRoOjB9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIucmlnaHRsaW5lXCIpLmFuaW1hdGUoe2hlaWdodDowfSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0dmFyIGluZGV4PTA7XHJcblx0JChcIi5sZWZ0X2J0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0aWYoaW5kZXg8PTApe1xyXG5cdFx0XHQkKFwiLmZsYWdib3hcIikuY3NzKFwibGVmdFwiLFwiMFwiKVxyXG5cdFx0fWVsc2UgaWYoaW5kZXg8Myl7XHJcblx0XHRcdGluZGV4LS07XHJcblx0XHRcdCQoXCIuZmxhZ2JveFwiKS5hbmltYXRlKHtsZWZ0Oi1pbmRleCokKFwiLmZsYWdib3ggbGlcIikud2lkdGgoKX0sMzAwKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KVxyXG5cdCQoXCIucmlnaHRfYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdGluZGV4Kys7XHJcblx0XHRpZihpbmRleD4yKXtcclxuXHRcdFx0JChcIi5mbGFnYm94XCIpLmNzcyhcImxlZnRcIixcIi0yNDIwcHhcIilcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQkKFwiLmZsYWdib3hcIikuYW5pbWF0ZSh7bGVmdDotaW5kZXgqJChcIi5mbGFnYm94IGxpXCIpLndpZHRoKCl9LDMwMCk7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pXHJcblx0XHJcblx0JChcIi5zdG9yZS1saW5rIGxpXCIpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcclxuXHRcclxuXHRcdHZhciBpbmRleD0kKHRoaXMpLmluZGV4KCk7XHJcblx0XHQkKHRoaXMpLmNzcyhcImJhY2tncm91bmRcIixcIiMwMDBcIikuc2libGluZ3MoKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjOTk5XCIpO1xyXG5cdFx0JChcIi5zdG9yZS1ib3g+dWw+bGlcIikuZXEoaW5kZXgpLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcclxuXHR9KVxyXG5cdCQoXCIudG9wYWxsXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcHR4dFwiKS5hbmltYXRlKHtsZWZ0Oi0yMH0sMzAwKS5zaWJsaW5ncygpLmFuaW1hdGUoe2xlZnQ6MjB9LDMwMCk7XHJcblx0fSxmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi50b3B0eHRcIikuYW5pbWF0ZSh7bGVmdDowfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDowfSwzMDApO1xyXG5cdH0pXHJcblx0JChcIi50b3AyXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcHR4dFwiKS5hbmltYXRlKHtsZWZ0Oi0yMH0sMzAwKS5zaWJsaW5ncygpLmFuaW1hdGUoe2xlZnQ6MjB9LDMwMCk7XHJcblx0fSxmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi50b3B0eHRcIikuYW5pbWF0ZSh7bGVmdDowfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDowfSwzMDApO1xyXG5cdH0pXHJcblx0JChcIi5ib3R0b20xXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmJvdHRvbXR4dFwiKS5hbmltYXRlKHtsZWZ0Oi0yMH0sMzAwKS5zaWJsaW5ncygpLmFuaW1hdGUoe2xlZnQ6MjB9LDMwMCk7XHJcblx0fSxmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5ib3R0b210eHRcIikuYW5pbWF0ZSh7bGVmdDowfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDowfSwzMDApO1xyXG5cdH0pXHJcblx0JChcIi5zaG9wY2VudGVyIGxpXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnNob3Bib3hcIikuYW5pbWF0ZSh7dG9wOi01MH0sMzAwKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnNob3Bib3hcIikuYW5pbWF0ZSh7dG9wOjB9LDMwMCk7XHJcblx0fSlcclxuXHR2YXIgc3RyMT1cIlwiO1xyXG5cdHZhciBTaG93bWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ6aGFuc2hpXCIpWzBdO1xyXG5cdGNvbnNvbGUubG9nKFNob3dtZXNzYWdlKTtcclxuXHQkLmFqYXgoe1xyXG5cdFx0dHlwZTpcImdldFwiLFxyXG5cdFx0dXJsOlwianNvbmRhdGEvYmFnZGF0YS5qc29uXCIsXHJcblx0XHRhc3luYzp0cnVlLFxyXG5cdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdHN0cjErPWA8bGk+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIj4ke2RhdGFbaV19PC9hPlxyXG5cdFx0XHRcdFx0PC9saT5gXHRcclxuXHRcdFx0fVxyXG5cdFx0XHRTaG93bWVzc2FnZS5pbm5lckhUTUw9c3RyMTtcclxuXHRcdH1cclxuXHRcclxuXHR9KVxyXG5cdFx0XHJcblx0dmFyIGluZGV4MT0wO1xyXG5cdCQoXCIuY2lyY2xlIHNwYW5cIikuZXEoaW5kZXgxKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjQzY5QzZEXCIpLnNpYmxpbmdzKCkuY3NzKFwiYmFja2dyb3VuZFwiLFwiIzY2NjY2NlwiKTtcclxuXHQkKFwiLmItbmV4dFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0aW5kZXgxKys7XHRcdFxyXG5cdFx0aWYoaW5kZXgxPT01KXtcclxuXHRcdFx0aW5kZXgxPTE7XHJcblx0XHRcdCQoXCIuc2xpZGVib3hcIikuY3NzKFwibGVmdFwiLDApO1xyXG5cdFx0fVxyXG5cdFx0aWYoaW5kZXgxPT00KXtcclxuXHRcdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcSgwKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjQzY5QzZEXCIpLnNpYmxpbmdzKCkuY3NzKFwiYmFja2dyb3VuZFwiLFwiIzY2NjY2NlwiKTtcclxuXHRcdH1cclxuXHRcdCQoXCIuc2xpZGVib3hcIikuYW5pbWF0ZSh7bGVmdDotaW5kZXgxKjIyMH0sMzAwKTtcclxuXHRcdFxyXG5cdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcShpbmRleDEpLmNzcyhcImJhY2tncm91bmRcIixcIiNDNjlDNkRcIikuc2libGluZ3MoKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjNjY2NjY2XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHQkKFwiLmItcHJlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRpbmRleDEtLTtcdFx0XHJcblx0XHRpZihpbmRleDE8MCl7XHJcblx0XHRcdGluZGV4MT0zO1xyXG5cdFx0XHQkKFwiLnNsaWRlYm94XCIpLmNzcyhcImxlZnRcIiwtKGluZGV4MSsxKSoyMjApO1x0XHRcdFxyXG5cdFx0fVxyXG5cdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcShpbmRleDEpLmNzcyhcImJhY2tncm91bmRcIixcIiNDNjlDNkRcIikuc2libGluZ3MoKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjNjY2NjY2XCIpO1xyXG5cdFx0JChcIi5zbGlkZWJveFwiKS5hbmltYXRlKHtsZWZ0Oi1pbmRleDEqMjIwfSwzMDApO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pXHJcblx0dmFyIHN0cjI9XCJcIjtcclxuXHR2YXIgZ29vZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ29vZHNsaXN0XCIpO1xyXG5cdCQuYWpheCh7XHJcblx0XHR0eXBlOlwiZ2V0XCIsXHJcblx0XHR1cmw6XCJqc29uZGF0YS9waWN0dXJlLmpzb25cIixcclxuXHRcdGFzeW5jOnRydWUsXHJcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPCBkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdHN0cjIrPWA8bGk+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7ZGF0YVtpXX1cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0fVxyXG5cdFx0XHRnb29kTGlzdC5pbm5lckhUTUw9c3RyMjtcclxuXHRcdH1cclxuXHRcclxuXHR9KVxyXG5cdFxyXG59KTsiXX0=
