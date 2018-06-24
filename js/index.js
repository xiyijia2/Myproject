$(function(){
	$(".link-middle li").hover(
		function(){
			$(this).addClass("hover");
	},
		function(){
			$(this).removeClass("hover")
		}
	)
	$(".link-right li").eq(2).hover(
		function(){
			$(".secondM").show();
		},
		function(){
			$(".secondM").hide();
		}
	)
	$(".link-right li").eq(9).hover(
		function(){
			$(".right").show();
		},
		function(){
			$(".right").hide();
		}
	)
	$(".cart").hover(function(){
		$(this).css({"border-bottom":0,"z-index":7,"box-shadow":"0 0 0 #fff"})
		$(".erji").show();
	},function(){		
		$(".erji").hide();
		$(this).css({"border":"1px solid #dfdfdf","box-shadow":" 0 0 3px #999999"})
	})
	
	//轮播图
	$("#carousel_1").FtCarousel();
	
	//品牌旗舰
	$(".main-list li").hover(function(){
		$(this).children(".all").animate({top:0},500);
		
		
		console.log($(this).children());
	},function(){
		$(this).children(".all").animate({top:100},500)
	})
	
	

})
