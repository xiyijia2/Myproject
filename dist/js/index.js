"use strict";$(function(){var o=document.getElementById("tip"),i=document.getElementById("txt");i.onfocus=i.oninput=function(){$("#tip").show();var t=i.value;$.ajax({type:"get",url:"https://suggest.taobao.com/sug?code=utf-8&q="+t+"&_ksTS=1528373225105_827&callback=?&k=1&area=c2c&bucketid=13",async:!0,dataType:"jsonp",success:function(t){for(var i="",e=t.result,n=0;n<e.length;n++)i+="<li><a href ='https://s.taobao.com/search?q="+e[n][0]+"'>"+e[n][0]+"</a></li>";o.innerHTML=i}}),i.onblur=function(){$("#tip").hide()}},$(".link-middle li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),$(".link-right li").eq(2).hover(function(){$(".secondM").show()},function(){$(".secondM").hide()}),$(".link-right li").eq(9).hover(function(){$(".right").show()},function(){$(".right").hide()}),$(".cart").hover(function(){$(this).css({"border-bottom":0,"z-index":7,"box-shadow":"0 0 0 #fff"}),$(".erji").show()},function(){$(".erji").hide(),$(this).css({border:"1px solid #dfdfdf","box-shadow":" 0 0 3px #999999"})}),$("#carousel_1").FtCarousel(),$(".hotflag").hover(function(){$(this).children(".showflag").animate({opacity:1},300),$(this).children(".topline").animate({width:166},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:85},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:166},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:85},300).css("overflow","hidden"),$(this).children(".chname").css("color","#C69C6D")},function(){$(this).children(".showflag").animate({opacity:0},300),$(this).children(".topline").animate({width:0},300).css("overflow","hidden"),$(this).children(".leftline").animate({height:0},300).css("overflow","hidden"),$(this).children(".bottomline").animate({width:0},300).css("overflow","hidden"),$(this).children(".rightline").animate({height:0},300).css("overflow","hidden")});var t=0;$(".left_btn").click(function(){return t<=0?$(".flagbox").css("left","0"):t<3&&(t--,$(".flagbox").animate({left:-t*$(".flagbox li").width()},300)),!1}),$(".right_btn").click(function(){return 2<++t?$(".flagbox").css("left","-2420px"):$(".flagbox").animate({left:-t*$(".flagbox li").width()},300),!1}),$(".store-link li").mouseenter(function(){var t=$(this).index();$(this).css("background","#000").siblings().css("background","#999"),$(".store-box>ul>li").eq(t).show().siblings().hide()}),$(".topall").hover(function(){$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".top2").hover(function(){$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".bottom1").hover(function(){$(this).children(".bottomtxt").animate({left:-20},300).siblings().animate({left:20},300)},function(){$(this).children(".bottomtxt").animate({left:0},300).siblings().animate({left:0},300)}),$(".shopcenter li").hover(function(){$(this).children(".shopbox").animate({top:-50},300)},function(){$(this).children(".shopbox").animate({top:0},300)});var e=0;$(".circle span").eq(e).css("background","#C69C6D").siblings().css("background","#666666"),$(".b-next").click(function(){return 5==++e&&(e=1,$(".slidebox").css("left",0)),4==e&&$(".circle span").eq(0).css("background","#C69C6D").siblings().css("background","#666666"),$(".slidebox").animate({left:220*-e},300),$(".circle span").eq(e).css("background","#C69C6D").siblings().css("background","#666666"),!1}),$(".b-pre").click(function(){return--e<0&&(e=3,$(".slidebox").css("left",220*-(e+1))),$(".circle span").eq(e).css("background","#C69C6D").siblings().css("background","#666666"),$(".slidebox").animate({left:220*-e},300),!1}),$(".topone li").hover(function(){$(this).children(".menumess").show()},function(){$(this).children(".menumess").hide()}),$(".bottomone li").hover(function(){$(this).children(".menumess").show()},function(){$(this).children(".menumess").hide()}),window.onscroll=function(){$(".topbtn").click(function(){$("html,body").animate({scrollTop:0},500)})};var n=0;$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(t){for(var i=0;i<t.length;i++)n+=parseInt(t[i].number);$("#cartnum").text(n),console.log(n)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJ0aXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib1R4dCIsIm9uZm9jdXMiLCJ2YWx1ZSIsImFqYXgiLCJ0eXBlIiwidmFsIiwidXJsIiwiZGF0YVR5cGUiLCJhc3luYyIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0Iiwic3RyIiwiaSIsImZpcnN0IiwibGVuZ3RoIiwib25ibHVyIiwiaG92ZXIiLCJ0aGlzIiwicmVtb3ZlQ2xhc3MiLCJlcSIsInNob3ciLCJoaWRlIiwiY3NzIiwiYm9yZGVyLWJvdHRvbSIsInotaW5kZXgiLCJib3gtc2hhZG93IiwiYm9yZGVyIiwiRnRDYXJvdXNlbCIsImNoaWxkcmVuIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4IiwiY2xpY2siLCJsZWZ0IiwibW91c2VlbnRlciIsInNpYmxpbmdzIiwidG9wIiwiaW5kZXgxIiwiZ2V0SlNPTiIsIm51bSIsInBhcnNlSW50IiwibnVtYmVyIiwiY29uc29sZSIsInNjcm9sbFRvcCIsInVzZXJJRCIsImNvb2tpZSIsInRleHQiLCJsb2ciXSwibWFwcGluZ3MiOiJhQUFBQSxFQUFFLFdBQ0QsSUFBQUMsRUFBQUMsU0FBQUMsZUFBQSxPQUdJQyxFQUFLRixTQUFTQyxlQUFlLE9BRGpDQyxFQUFJSCxRQUFJQyxFQUFTQyxRQUFBQSxXQUNqQkgsRUFBQSxRQUFTRSxPQUNURSxJQUFLQyxFQUFBQSxFQUFMQyxNQUNDTixFQUFFTyxLQUFBLENBQ0ZDLEtBQUlDLE1BQ0pULElBQUVPLCtDQUFLRSxFQUFBLCtEQUVQQyxPQUFJLEVBR0pDLFNBQVMsUUFEVEMsUUFBTSxTQUpDQyxHQU9OLElBRkRGLElBQUFBLEVBQUFBLEdBQ0FHLEVBQVFELEVBQUFFLE9BQ0hDLEVBQUFBLEVBQUlDLEVBQVJDLEVBQUFDLE9BQUFGLElBQ0FELEdBQUlFLCtDQUFKQSxFQUFBRCxHQUFBLEdBQUEsS0FBQUMsRUFBQUQsR0FBQSxH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QmUsV0FBQWYsSUFBQSxhQUFBLFdBRUQzQixFQUFFLGFBQUFrQyxRQUFtQlUsQ0FBQUEsS0FBWSxLQUFKakIsR0FBSSxLQUVqQzNCLEVBQUEsZ0JBQUF3QixHQUFBb0IsR0FBQWpCLElBQUEsYUFBQSxXQUFBZSxXQUFBZixJQUFBLGFBQUEsWUFFRixJQUVBM0IsRUFBQSxVQUFBdUMsTUFBQSxXQVFBLFFBUEFLLEVBQ0EsSUFDQUEsRUFBQSxFQUNBNUMsRUFBQSxhQUFBMkIsSUFBQSxPQUFBLE1BQUFpQixFQUFBLEtBRUE1QyxFQUFBLGdCQUFBd0IsR0FBQW9CLEdBQUFqQixJQUFBLGFBQUEsV0FBQWUsV0FBQWYsSUFBQSxhQUFBLFdBQ0EzQixFQUFBLGFBQUFrQyxRQUFBLENBQUFNLEtBQUEsS0FBQUksR0FBQSxNQUNBLElBNkNDNUMsRUFBRSxjQUFjcUIsTUFBTSxXQWFyQnJCLEVBQUVzQixNQUFBVyxTQUFXTSxhQUFNZCxRQUNsQnpCLFdBRUFBLEVBSERzQixNQUFBVyxTQUFBLGFBQUFQLFNBTUExQixFQUFBLGlCQUFBcUIsTUFBQSxXQUNBckIsRUFBRTZDLE1BQUZaLFNBQVUsYUFBQVIsUUFDVCxXQUNDcUIsRUFBQUEsTUFBSUEsU0FBSUMsYUFBaUJDLFNBRzNCQyxPQUFBQSxTQUFBLFdBMVNGakQsRUFBQSxXQUFBdUMsTUFBQSxXQStSR3ZDLEVBQUUsYUFBYWtDLFFBQVEsQ0FBQ2dCLFVBQVksR0FBRyxRQUt4QyxJQUFJSixFQUFJLEVBQ1I5QyxFQUFFNkMsUUFBUSwyREFBMkQsQ0FBQ00sT0FBT25ELEVBQUVvRCxPQUFPLGFBQWEsU0FBU3ZDLEdBQzNHLElBQUksSUFBSUksRUFBRSxFQUFFQSxFQUFFSixFQUFLTSxPQUFPRixJQUN6QjZCLEdBQVFDLFNBQVNsQyxFQUFLSSxHQUFHK0IsUUFFM0JoRCxFQUFFLFlBQVlxRCxLQUFLUCxHQUNuQkcsUUFBUUssSUFBSVIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblx0Ly/mkJzntKLllYblk4FcclxuXHRcclxuXHR2YXIgdGlwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGlwXCIpO1x0XHJcblx0dmFyIG9UeHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRcIik7XHJcblx0b1R4dC5vbmZvY3VzID0gb1R4dC5vbmlucHV0PWZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiI3RpcFwiKS5zaG93KCk7XHJcblx0XHR2YXIgdmFsPW9UeHQudmFsdWU7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0dHlwZTpcImdldFwiLFxyXG5cdFx0dXJsOlwiaHR0cHM6Ly9zdWdnZXN0LnRhb2Jhby5jb20vc3VnP2NvZGU9dXRmLTgmcT1cIit2YWwrXCImX2tzVFM9MTUyODM3MzIyNTEwNV84MjcmY2FsbGJhY2s9PyZrPTEmYXJlYT1jMmMmYnVja2V0aWQ9MTNcIixcclxuXHRcdFxyXG5cdFx0YXN5bmM6dHJ1ZSxcclxuXHRcdGRhdGFUeXBlOlwianNvbnBcIixcclxuXHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdHZhciBzdHI9XCJcIjtcclxuXHRcdFx0dmFyIGZpcnN0PWRhdGEucmVzdWx0O1x0XHRcdFxyXG5cdFx0XHRmb3IodmFyIGk9MDtpPGZpcnN0Lmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdHN0cis9XCI8bGk+PGEgaHJlZiA9J2h0dHBzOi8vcy50YW9iYW8uY29tL3NlYXJjaD9xPVwiK2ZpcnN0W2ldWzBdK1wiJz5cIitmaXJzdFtpXVswXStcIjwvYT48L2xpPlwiO1x0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdHRpcC5pbm5lckhUTUw9c3RyO1xyXG5cdFx0fVxyXG5cdFx0XHRcdFxyXG5cdH0pO1xyXG5cdG9UeHQub25ibHVyPWZ1bmN0aW9uKCl7XHJcblx0XHRcdFxyXG5cdFx0JChcIiN0aXBcIikuaGlkZSgpO1xyXG5cdH1cclxuXHRcdFx0XHRcclxufVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdCQoXCIubGluay1taWRkbGUgbGlcIikuaG92ZXIoXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwiaG92ZXJcIik7XHJcblx0fSxcclxuXHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKVxyXG5cdFx0fVxyXG5cdCk7XHJcblx0JChcIi5saW5rLXJpZ2h0IGxpXCIpLmVxKDIpLmhvdmVyKFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5zZWNvbmRNXCIpLnNob3coKTtcclxuXHRcdH0sXHJcblx0XHRmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiLnNlY29uZE1cIikuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0JChcIi5saW5rLXJpZ2h0IGxpXCIpLmVxKDkpLmhvdmVyKFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5yaWdodFwiKS5zaG93KCk7XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0JChcIi5yaWdodFwiKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0KTtcclxuXHQkKFwiLmNhcnRcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY3NzKHtcImJvcmRlci1ib3R0b21cIjowLFwiei1pbmRleFwiOjcsXCJib3gtc2hhZG93XCI6XCIwIDAgMCAjZmZmXCJ9KVxyXG5cdFx0JChcIi5lcmppXCIpLnNob3coKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHRcdFxyXG5cdFx0JChcIi5lcmppXCIpLmhpZGUoKTtcclxuXHRcdCQodGhpcykuY3NzKHtcImJvcmRlclwiOlwiMXB4IHNvbGlkICNkZmRmZGZcIixcImJveC1zaGFkb3dcIjpcIiAwIDAgM3B4ICM5OTk5OTlcIn0pXHJcblx0fSk7XHJcblx0XHJcblx0Ly/ova7mkq3lm75cclxuXHQkKFwiI2Nhcm91c2VsXzFcIikuRnRDYXJvdXNlbCgpO1xyXG5cdFxyXG4vL1x0Ly/lk4HniYzml5foiLDlj5bmlbDmja5cclxuLy9cdHZhciBzdHI9XCJcIjtcclxuLy9cdHZhciBMaXN0PWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWxpc3RcIilbMF07XHJcbi8vXHRcclxuLy9cdCQuYWpheCh7XHJcbi8vXHRcdHR5cGU6XCJnZXRcIixcclxuLy9cdFx0dXJsOlwianNvbmRhdGEvZGF0YS5qc29uXCIsXHJcbi8vXHRcdGFzeW5jOnRydWUsXHJcbi8vXHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcbi8vXHRcdFx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1x0XHRcdFx0XHJcbi8vXHRcdFx0XHRzdHIrPWA8bGk+XHJcbi8vXHRcdFx0XHRcdDxhIGhyZWY9XCJcIj5cclxuLy9cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7ZGF0YVtpXS5idXJsfVwiIC8+XHJcbi8vXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInVwXCI+XHJcbi8vXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWxsXCI+XHJcbi8vXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtkYXRhW2ldLnN1cmx9XCIgLz5cclxuLy9cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJzbGlkZVwiPlxyXG4vL1x0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuLy9cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG4vL1x0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInN0eHRcIj5cclxuLy9cdFx0XHRcdFx0XHRcdFx0XHQke2RhdGFbaV0ucDF9XHJcbi8vXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuLy9cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJzdHh0XCI+XHJcbi8vXHRcdFx0XHRcdFx0XHRcdFx0JHtkYXRhW2ldLnAyfVxyXG4vL1x0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcbi8vXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy9cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy9cdFx0XHRcdFx0PC9hPlxyXG4vL1x0XHRcdFx0PC9saT5gXHJcbi8vXHRcdFx0fVx0XHRcclxuLy9cdFx0TGlzdC5pbm5lckhUTUw9c3RyO1x0XHJcbi8vXHRcdFx0JChcIi5tYWluLWxpc3RcIikuY2hpbGRyZW4oKS5ob3ZlcihmdW5jdGlvbigpe1xyXG4vL1x0XHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5lcSgxKS5jaGlsZHJlbihcIi5hbGxcIikuYW5pbWF0ZSh7dG9wOjB9LDMwMCk7XHJcbi8vXHRcdFx0XHRcdFxyXG4vL1x0XHRcdFx0fSxmdW5jdGlvbigpe1xyXG4vL1x0XHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5lcSgxKS5jaGlsZHJlbihcIi5hbGxcIikuYW5pbWF0ZSh7dG9wOjEwMH0sMzAwKX0pO1xyXG4vL1x0XHR9XHJcbi8vXHR9KTtcclxuXHQkKFwiLmhvdGZsYWdcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuc2hvd2ZsYWdcIikuYW5pbWF0ZSh7b3BhY2l0eToxfSwzMDApO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi50b3BsaW5lXCIpLmFuaW1hdGUoe3dpZHRoOjE2Nn0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5sZWZ0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6ODV9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuYm90dG9tbGluZVwiKS5hbmltYXRlKHt3aWR0aDoxNjZ9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIucmlnaHRsaW5lXCIpLmFuaW1hdGUoe2hlaWdodDo4NX0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5jaG5hbWVcIikuY3NzKFwiY29sb3JcIixcIiNDNjlDNkRcIik7XHJcblx0XHJcblx0fSxmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnNob3dmbGFnXCIpLmFuaW1hdGUoe29wYWNpdHk6MH0sMzAwKTtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wbGluZVwiKS5hbmltYXRlKHt3aWR0aDowfSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmxlZnRsaW5lXCIpLmFuaW1hdGUoe2hlaWdodDowfSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmJvdHRvbWxpbmVcIikuYW5pbWF0ZSh7d2lkdGg6MH0sMzAwKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpO1xyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5yaWdodGxpbmVcIikuYW5pbWF0ZSh7aGVpZ2h0OjB9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHR2YXIgaW5kZXg9MDtcclxuXHQkKFwiLmxlZnRfYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRpZihpbmRleDw9MCl7XHJcblx0XHRcdCQoXCIuZmxhZ2JveFwiKS5jc3MoXCJsZWZ0XCIsXCIwXCIpXHJcblx0XHR9ZWxzZSBpZihpbmRleDwzKXtcclxuXHRcdFx0aW5kZXgtLTtcclxuXHRcdFx0JChcIi5mbGFnYm94XCIpLmFuaW1hdGUoe2xlZnQ6LWluZGV4KiQoXCIuZmxhZ2JveCBsaVwiKS53aWR0aCgpfSwzMDApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pXHJcblx0JChcIi5yaWdodF9idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFxyXG5cdFx0aW5kZXgrKztcclxuXHRcdGlmKGluZGV4PjIpe1xyXG5cdFx0XHQkKFwiLmZsYWdib3hcIikuY3NzKFwibGVmdFwiLFwiLTI0MjBweFwiKVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoXCIuZmxhZ2JveFwiKS5hbmltYXRlKHtsZWZ0Oi1pbmRleCokKFwiLmZsYWdib3ggbGlcIikud2lkdGgoKX0sMzAwKTtcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHRcclxuXHQkKFwiLnN0b3JlLWxpbmsgbGlcIikubW91c2VlbnRlcihmdW5jdGlvbigpe1xyXG5cdFxyXG5cdFx0dmFyIGluZGV4PSQodGhpcykuaW5kZXgoKTtcclxuXHRcdCQodGhpcykuY3NzKFwiYmFja2dyb3VuZFwiLFwiIzAwMFwiKS5zaWJsaW5ncygpLmNzcyhcImJhY2tncm91bmRcIixcIiM5OTlcIik7XHJcblx0XHQkKFwiLnN0b3JlLWJveD51bD5saVwiKS5lcShpbmRleCkuc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xyXG5cdH0pXHJcblx0JChcIi50b3BhbGxcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wdHh0XCIpLmFuaW1hdGUoe2xlZnQ6LTIwfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDoyMH0sMzAwKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcHR4dFwiKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCkuc2libGluZ3MoKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCk7XHJcblx0fSlcclxuXHQkKFwiLnRvcDJcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wdHh0XCIpLmFuaW1hdGUoe2xlZnQ6LTIwfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDoyMH0sMzAwKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnRvcHR4dFwiKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCkuc2libGluZ3MoKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCk7XHJcblx0fSlcclxuXHQkKFwiLmJvdHRvbTFcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuYm90dG9tdHh0XCIpLmFuaW1hdGUoe2xlZnQ6LTIwfSwzMDApLnNpYmxpbmdzKCkuYW5pbWF0ZSh7bGVmdDoyMH0sMzAwKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmJvdHRvbXR4dFwiKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCkuc2libGluZ3MoKS5hbmltYXRlKHtsZWZ0OjB9LDMwMCk7XHJcblx0fSlcclxuXHQkKFwiLnNob3BjZW50ZXIgbGlcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuc2hvcGJveFwiKS5hbmltYXRlKHt0b3A6LTUwfSwzMDApO1xyXG5cdH0sZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuY2hpbGRyZW4oXCIuc2hvcGJveFwiKS5hbmltYXRlKHt0b3A6MH0sMzAwKTtcclxuXHR9KVxyXG4vL1x0dmFyIHN0cjE9XCJcIjtcclxuLy9cdHZhciBTaG93bWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ6aGFuc2hpXCIpWzBdO1xyXG4vL1x0JC5hamF4KHtcclxuLy9cdFx0dHlwZTpcImdldFwiLFxyXG4vL1x0XHR1cmw6XCJqc29uZGF0YS9iYWdkYXRhLmpzb25cIixcclxuLy9cdFx0YXN5bmM6dHJ1ZSxcclxuLy9cdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuLy9cdFx0XHRmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcbi8vXHRcdFx0XHRzdHIxKz1gPGxpPlxyXG4vL1x0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIj4ke2RhdGFbaV19PC9hPlxyXG4vL1x0XHRcdFx0XHQ8L2xpPmBcdFxyXG4vL1x0XHRcdH1cclxuLy9cdFx0XHRTaG93bWVzc2FnZS5pbm5lckhUTUw9c3RyMTtcclxuLy9cdFx0fVxyXG4vL1x0XHJcbi8vXHR9KVxyXG5cdFx0XHJcblx0dmFyIGluZGV4MT0wO1xyXG5cdCQoXCIuY2lyY2xlIHNwYW5cIikuZXEoaW5kZXgxKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjQzY5QzZEXCIpLnNpYmxpbmdzKCkuY3NzKFwiYmFja2dyb3VuZFwiLFwiIzY2NjY2NlwiKTtcclxuXHQkKFwiLmItbmV4dFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0aW5kZXgxKys7XHRcdFxyXG5cdFx0aWYoaW5kZXgxPT01KXtcclxuXHRcdFx0aW5kZXgxPTE7XHJcblx0XHRcdCQoXCIuc2xpZGVib3hcIikuY3NzKFwibGVmdFwiLDApO1xyXG5cdFx0fVxyXG5cdFx0aWYoaW5kZXgxPT00KXtcclxuXHRcdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcSgwKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjQzY5QzZEXCIpLnNpYmxpbmdzKCkuY3NzKFwiYmFja2dyb3VuZFwiLFwiIzY2NjY2NlwiKTtcclxuXHRcdH1cclxuXHRcdCQoXCIuc2xpZGVib3hcIikuYW5pbWF0ZSh7bGVmdDotaW5kZXgxKjIyMH0sMzAwKTtcclxuXHRcdFxyXG5cdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcShpbmRleDEpLmNzcyhcImJhY2tncm91bmRcIixcIiNDNjlDNkRcIikuc2libGluZ3MoKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjNjY2NjY2XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHQkKFwiLmItcHJlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRpbmRleDEtLTtcdFx0XHJcblx0XHRpZihpbmRleDE8MCl7XHJcblx0XHRcdGluZGV4MT0zO1xyXG5cdFx0XHQkKFwiLnNsaWRlYm94XCIpLmNzcyhcImxlZnRcIiwtKGluZGV4MSsxKSoyMjApO1x0XHRcdFxyXG5cdFx0fVxyXG5cdFx0JChcIi5jaXJjbGUgc3BhblwiKS5lcShpbmRleDEpLmNzcyhcImJhY2tncm91bmRcIixcIiNDNjlDNkRcIikuc2libGluZ3MoKS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjNjY2NjY2XCIpO1xyXG5cdFx0JChcIi5zbGlkZWJveFwiKS5hbmltYXRlKHtsZWZ0Oi1pbmRleDEqMjIwfSwzMDApO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pXHJcbi8vXHR2YXIgc3RyMj1cIlwiO1xyXG4vL1x0dmFyIGdvb2RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdvb2RzbGlzdFwiKVswXTtcclxuLy9cdGNvbnNvbGUubG9nKGdvb2RMaXN0KTtcclxuLy9cdCQuYWpheCh7XHJcbi8vXHRcdHR5cGU6XCJnZXRcIixcclxuLy9cdFx0dXJsOlwianNvbmRhdGEvcGljdHVyZS5qc29uXCIsXHJcbi8vXHRcdGFzeW5jOnRydWUsXHJcbi8vXHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcbi8vXHRcdFx0Zm9yKHZhciBpPTA7aTwgZGF0YS5sZW5ndGg7aSsrKXtcclxuLy9cdFx0XHRcdHN0cjIrPWA8bGk+XHJcbi8vXHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cclxuLy9cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtkYXRhW2ldfVwiIC8+XHJcbi8vXHRcdFx0XHRcdFx0PC9hPlxyXG4vL1x0XHRcdFx0XHQ8L2xpPmBcclxuLy9cdFx0XHR9XHJcbi8vXHRcdFx0Z29vZExpc3QuaW5uZXJIVE1MPXN0cjI7XHJcbi8vXHRcdH1cclxuLy9cdFxyXG4vL1x0fSlcclxuLy9cdHZhciBzdHIzPVwiXCI7XHJcbi8vXHR2YXIgT3NlbGVjdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0XCIpWzBdO1xyXG4vL1x0JC5hamF4KHtcclxuLy9cdFx0dHlwZTpcImdldFwiLFxyXG4vL1x0XHR1cmw6XCJqc29uZGF0YS9sYXN0Lmpzb25cIixcclxuLy9cdFx0YXN5bmM6dHJ1ZSxcclxuLy9cdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuLy9cdFx0XHRmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcbi8vXHRcdFx0XHRzdHIzKz1gPGxpPlxyXG4vL1x0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiPlxyXG4vL1x0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7ZGF0YVtpXX1cIiAvPjwvYT5cclxuLy9cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvcGxpbmVcIiBzdHlsZT1cIndpZHRoOiAwO1wiPjwvZGl2PlxyXG4vL1x0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRsaW5lXCIgc3R5bGU9XCJoZWlnaHQ6MDtcIj48L2Rpdj5cclxuLy9cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJvdHRvbWxpbmVcIiBzdHlsZT1cIndpZHRoOjA7XCI+PC9kaXY+XHJcbi8vXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZWZ0bGluZVwiIHN0eWxlPVwiaGVpZ2h0OjBcIj48L2Rpdj5cclxuLy9cdFx0XHRcdFx0XHRcdFxyXG4vL1x0XHRcdFx0XHRcdDwvbGk+YFxyXG4vL1x0XHRcdH1cclxuLy9cdFx0XHRPc2VsZWN0LmlubmVySFRNTD1zdHIzO1xyXG4vL1x0XHRcdCQoXCIuc2VsZWN0IGxpXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcbi8vXHRcdFx0dmFyIGluZGV4PSQodGhpcykuaW5kZXgoKTtcclxuLy9cdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wbGluZVwiKS5hbmltYXRlKHt3aWR0aDoxOTR9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKVxyXG4vL1x0XHRcdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5sZWZ0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6NjV9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKVxyXG4vL1x0XHRcdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5yaWdodGxpbmVcIikuYW5pbWF0ZSh7aGVpZ2h0OjY1fSwzMDApLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIilcclxuLy9cdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oXCIuYm90dG9tbGluZVwiKS5hbmltYXRlKHt3aWR0aDoxOTR9LDMwMCkuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKVxyXG4vL1x0XHRcdFx0JChcIi5wcm9yaWdodCBpbWdcIikuYXR0cihcInNyY1wiLFwiaW1nL1wiKyhpbmRleCsxKStcImJhbmsuanBnXCIpLnNob3coKTtcclxuLy9cdFx0XHRcdFxyXG4vL1x0XHRcdH0sZnVuY3Rpb24oKXtcclxuLy9cdFx0XHRcdCQodGhpcykuY2hpbGRyZW4oXCIudG9wbGluZVwiKS5hbmltYXRlKHt3aWR0aDowfSwzMDApXHJcbi8vXHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLmxlZnRsaW5lXCIpLmFuaW1hdGUoe2hlaWdodDowfSwzMDApXHJcbi8vXHRcdFx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnJpZ2h0bGluZVwiKS5hbmltYXRlKHtoZWlnaHQ6MH0sMzAwKVxyXG4vL1x0XHRcdFx0JCh0aGlzKS5jaGlsZHJlbihcIi5ib3R0b21saW5lXCIpLmFuaW1hdGUoe3dpZHRoOjB9LDMwMClcclxuLy9cdFx0XHR9KVxyXG4vL1x0XHR9XHJcbi8vXHR9KVxyXG5cdFxyXG5cdCQoXCIudG9wb25lIGxpXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLm1lbnVtZXNzXCIpLnNob3coKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLm1lbnVtZXNzXCIpLmhpZGUoKTtcclxuXHR9KVxyXG5cdCQoXCIuYm90dG9tb25lIGxpXCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLm1lbnVtZXNzXCIpLnNob3coKTtcclxuXHR9LGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLm1lbnVtZXNzXCIpLmhpZGUoKTtcclxuXHR9KVxyXG5cdFxyXG5cdHdpbmRvdy5vbnNjcm9sbD1mdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0XHQkKFwiLnRvcGJ0blwiKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoe1wic2Nyb2xsVG9wXCI6MH0sNTAwKVxyXG5cdFx0XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0fVxyXG5cdFx0dmFyIG51bT0wO1xyXG5cdFx0JC5nZXRKU09OKFwiaHR0cDovL2RhdGFpbmZvLmR1YXBwLmNvbS9zaG9wZGF0YS9nZXRDYXIucGhwP2NhbGxiYWNrPT9cIix7dXNlcklEOiQuY29va2llKFwidXNlcm5hbWVcIil9LGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0bnVtPW51bStwYXJzZUludChkYXRhW2ldLm51bWJlcik7XHJcblx0XHRcdH1cclxuXHRcdCQoXCIjY2FydG51bVwiKS50ZXh0KG51bSk7XHJcblx0XHRjb25zb2xlLmxvZyhudW0pO1xyXG5cdH0pXHJcblx0XHRcclxuXHRcclxufSk7Il19
