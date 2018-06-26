$(function(){
	//搜索商品
	var str="";
	var tip=document.getElementById("tip");	
	var oTxt=document.getElementById("txt");
	oTxt.oninput=function(){
		var val=oTxt.value;
		$.ajax({
		type:"get",
		url:"https://suggest.taobao.com/sug?code=utf-8&q="+val+"&_ksTS=1528373225105_827&callback=?&k=1&area=c2c&bucketid=13",
		
		async:true,
		dataType:"jsonp",
		success:function(data){
			var first=data.result;
			console.log(first);
			
			for(var i=0;i<first.length;i++){
				str+="<li><a href ='https://s.taobao.com/search?q="+first[i][0]+"'>"+first[i][0]+"</a></li>";			
			}
			tip.innerHTML=str;
		}
		
		
	});
	oTxt.onblur=function(){
			
		$("#tip").remove();
	}
				
}
	
	
	
	$(".link-middle li").hover(
		function(){
			$(this).addClass("hover");
	},
		function(){
			$(this).removeClass("hover")
		}
	);
	$(".link-right li").eq(2).hover(
		function(){
			$(".secondM").show();
		},
		function(){
			$(".secondM").hide();
		}
	);
	$(".link-right li").eq(9).hover(
		function(){
			$(".right").show();
		},
		function(){
			$(".right").hide();
		}
	);
	$(".cart").hover(function(){
		$(this).css({"border-bottom":0,"z-index":7,"box-shadow":"0 0 0 #fff"})
		$(".erji").show();
	},function(){		
		$(".erji").hide();
		$(this).css({"border":"1px solid #dfdfdf","box-shadow":" 0 0 3px #999999"})
	});
	
	//轮播图
	$("#carousel_1").FtCarousel();
	
//	//品牌旗舰取数据
//	var str="";
//	var List=document.getElementsByClassName("main-list")[0];
//	
//	$.ajax({
//		type:"get",
//		url:"jsondata/data.json",
//		async:true,
//		success:function(data){
//			for(var i=0;i<data.length;i++){				
//				str+=`<li>
//					<a href="">
//						<img src="${data[i].burl}" />
//						<div class="up">
//							<div class="all">
//								<img src="${data[i].surl}" />
//								<p class="slide">
//									<span></span>
//								</p>
//								<p class="stxt">
//									${data[i].p1}
//								</p>
//								<p class="stxt">
//									${data[i].p2}
//								</p>
//							</div>
//						</div>
//					</a>
//				</li>`
//			}		
//		List.innerHTML=str;	
//			$(".main-list").children().hover(function(){
//					$(this).children().children().eq(1).children(".all").animate({top:0},300);
//					
//				},function(){
//					$(this).children().children().eq(1).children(".all").animate({top:100},300)});
//		}
//	});
	$(".hotflag").hover(function(){
		$(this).children(".showflag").animate({opacity:1},300);
		$(this).children(".topline").animate({width:166},300).css("overflow","hidden");
		$(this).children(".leftline").animate({height:85},300).css("overflow","hidden");
		$(this).children(".bottomline").animate({width:166},300).css("overflow","hidden");
		$(this).children(".rightline").animate({height:85},300).css("overflow","hidden");
		$(this).children(".chname").css("color","#C69C6D");
	
	},function(){
			$(this).children(".showflag").animate({opacity:0},300);
		$(this).children(".topline").animate({width:0},300).css("overflow","hidden");
		$(this).children(".leftline").animate({height:0},300).css("overflow","hidden");
		$(this).children(".bottomline").animate({width:0},300).css("overflow","hidden");
		$(this).children(".rightline").animate({height:0},300).css("overflow","hidden");
	});
	
	
	var index=0;
	$(".left_btn").click(function(){
		if(index<=0){
			$(".flagbox").css("left","0")
		}else if(index<3){
			index--;
			$(".flagbox").animate({left:-index*$(".flagbox li").width()},300);
		}
		return false;
	})
	$(".right_btn").click(function(){
		
		index++;
		if(index>2){
			$(".flagbox").css("left","-2420px")
		}else{
			$(".flagbox").animate({left:-index*$(".flagbox li").width()},300);	
		}
		
		return false;
	})
	
	$(".store-link li").mouseenter(function(){
	
		var index=$(this).index();
		$(this).css("background","#000").siblings().css("background","#999");
		$(".store-box>ul>li").eq(index).show().siblings().hide();
	})
	$(".topall").hover(function(){
	
		$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300);
	},function(){
		$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300);
	})
	$(".top2").hover(function(){
	
		$(this).children(".toptxt").animate({left:-20},300).siblings().animate({left:20},300);
	},function(){
		$(this).children(".toptxt").animate({left:0},300).siblings().animate({left:0},300);
	})
	$(".bottom1").hover(function(){
	
		$(this).children(".bottomtxt").animate({left:-20},300).siblings().animate({left:20},300);
	},function(){
		$(this).children(".bottomtxt").animate({left:0},300).siblings().animate({left:0},300);
	})
	$(".shopcenter li").hover(function(){
		$(this).children(".shopbox").animate({top:-50},300);
	},function(){
		$(this).children(".shopbox").animate({top:0},300);
	})
//	var str1="";
//	var Showmessage = document.getElementsByClassName("zhanshi")[0];
//	$.ajax({
//		type:"get",
//		url:"jsondata/bagdata.json",
//		async:true,
//		success:function(data){
//			for(var i=0;i<data.length;i++){
//				str1+=`<li>
//						<a href="">${data[i]}</a>
//					</li>`	
//			}
//			Showmessage.innerHTML=str1;
//		}
//	
//	})
		
	var index1=0;
	$(".circle span").eq(index1).css("background","#C69C6D").siblings().css("background","#666666");
	$(".b-next").click(function(){
		index1++;		
		if(index1==5){
			index1=1;
			$(".slidebox").css("left",0);
		}
		if(index1==4){
			$(".circle span").eq(0).css("background","#C69C6D").siblings().css("background","#666666");
		}
		$(".slidebox").animate({left:-index1*220},300);
		
		$(".circle span").eq(index1).css("background","#C69C6D").siblings().css("background","#666666");
		
		return false;
	})
	$(".b-pre").click(function(){
		index1--;		
		if(index1<0){
			index1=3;
			$(".slidebox").css("left",-(index1+1)*220);			
		}
		$(".circle span").eq(index1).css("background","#C69C6D").siblings().css("background","#666666");
		$(".slidebox").animate({left:-index1*220},300);
		return false;
	})
//	var str2="";
//	var goodList = document.getElementsByClassName("goodslist")[0];
//	console.log(goodList);
//	$.ajax({
//		type:"get",
//		url:"jsondata/picture.json",
//		async:true,
//		success:function(data){
//			for(var i=0;i< data.length;i++){
//				str2+=`<li>
//						<a href="#">
//							<img src="${data[i]}" />
//						</a>
//					</li>`
//			}
//			goodList.innerHTML=str2;
//		}
//	
//	})
//	var str3="";
//	var Oselect=document.getElementsByClassName("select")[0];
//	$.ajax({
//		type:"get",
//		url:"jsondata/last.json",
//		async:true,
//		success:function(data){
//			for(var i=0;i<data.length;i++){
//				str3+=`<li>
//							<a href="">
//								<img src="${data[i]}" /></a>
//								<div class="topline" style="width: 0;"></div>
//								<div class="rightline" style="height:0;"></div>
//								<div class="bottomline" style="width:0;"></div>
//								<div class="leftline" style="height:0"></div>
//							
//						</li>`
//			}
//			Oselect.innerHTML=str3;
//			$(".select li").hover(function(){
//			var index=$(this).index();
//				$(this).children(".topline").animate({width:194},300).css("overflow","hidden")
//				$(this).children(".leftline").animate({height:65},300).css("overflow","hidden")
//				$(this).children(".rightline").animate({height:65},300).css("overflow","hidden")
//				$(this).children(".bottomline").animate({width:194},300).css("overflow","hidden")
//				$(".proright img").attr("src","img/"+(index+1)+"bank.jpg").show();
//				
//			},function(){
//				$(this).children(".topline").animate({width:0},300)
//				$(this).children(".leftline").animate({height:0},300)
//				$(this).children(".rightline").animate({height:0},300)
//				$(this).children(".bottomline").animate({width:0},300)
//			})
//		}
//	})
	
	$(".topone li").hover(function(){
		$(this).children(".menumess").show();
	},function(){
		$(this).children(".menumess").hide();
	})
	$(".bottomone li").hover(function(){
		$(this).children(".menumess").show();
	},function(){
		$(this).children(".menumess").hide();
	})
	
	window.onscroll=function(){
		
		$(".topbtn").click(function(){
			$("html,body").animate({"scrollTop":0},500)
		
		})
		
	}
	
});