$(function(){
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
	
	//品牌旗舰取数据
	var str="";
	var List=document.getElementsByClassName("main-list")[0];
	
	$.ajax({
		type:"get",
		url:"jsondata/data.json",
		async:true,
		success:function(data){
			for(var i=0;i<data.length;i++){				
				str+=`<li>
					<a href="">
						<img src="${data[i].burl}" />
						<div class="up">
							<div class="all">
								<img src="${data[i].surl}" />
								<p class="slide">
									<span></span>
								</p>
								<p class="stxt">
									${data[i].p1}
								</p>
								<p class="stxt">
									${data[i].p2}
								</p>
							</div>
						</div>
					</a>
				</li>`
			}		
		List.innerHTML=str;	
			$(".main-list").children().hover(function(){
					$(this).children().children().eq(1).children(".all").animate({top:0},300);
					
				},function(){
					$(this).children().children().eq(1).children(".all").animate({top:100},300)});
		}
	});
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

});