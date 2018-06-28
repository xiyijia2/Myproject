$(function(){
	
			//	二级菜单
var third = document.getElementsByClassName("third");
$.ajax({
	type:"get",
	url:"../jsondata/erjicandan.json",
	async:true,
	success:function(data){		
		for(var i=0;i<data.length;i++){
			var str5="";			
			for(var k=0;k<data[i].length;k++){
				str5+=`<div><h2>${data[i][k].title}</h2><div>`
				for(var j=0;j<data[i][k].con.length;j++){
					str5+=`<a href="common.html">${data[i][k].con[j]}</a>`								
				}
				str5+=`	</div>
								</div>`
			}
			third[i].innerHTML=str5;			
			
		}		
	}
});

//放大镜功能
	$(".big").mouseover(function(){
		$(".fdj").show();
		$(".fd").show();
		
	})
	$(".big").mouseout(function(){
		$(".fdj").hide();
		$(".fd").hide();
		
	})
	$(".big").mousemove(function(e){
		var evt=e||event;
		var x=evt.pageX-$(".goods_left").offset().left;
		var y=evt.pageY-$(".goods_left").offset().top;
		var _left = x-$(".fdj").innerWidth()/2;
		var _top =y-$(".fdj").innerHeight()/2;
		if(_left<=0){
			_left=0;			
		}
		if(_left>=$(".big").innerWidth()-$(".fdj").innerWidth()){
			
			_left=$(".big").innerWidth()-$(".fdj").innerWidth();
		}
		
		if(_top<=0){
			_top=0;
		}
		if(_top>=$(".big").innerHeight()-$(".fdj").innerHeight()){
			_top=$(".big").innerHeight()-$(".fdj").innerHeight();	
		}
		$(".fdj").css({"left":_left,"top":_top});
		
		//右边大小变化
		$(".bigp").css({"left":-_left/$(".big").innerWidth()*$(".bigp").innerWidth(),
		"top":-_top/$(".bigp").innerHeight()*$(".bigp").innerHeight()});
	})
	
	//取商品详细信息
	var goodsid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
		
		$(".smallp").attr("src",data[0].goodsListImg);
		$(".bigp").attr("src",$(".smallp").attr("src"));
		
		
		$(".ft_28").text(data[0].price);
		$(".names").text(data[0].goodsName);
		var str="";	
		
		var url=JSON.parse(data[0].goodsBenUrl);
		for(var i=0;i<url.length;i++){
			
			str+=`
				<li>
					<img class="tu1" src=${url[i]} />
				</li>
			`
		}
		$(".smalltu")[0].innerHTML=str;
		

		//读取购物车数据
		//查看购物车： http://datainfo.duapp.com/shopdata/getCar.php
		//参数：此接口为JSONP格式	返回值
		//userID:用户名
		
			//更新购物车
			var num=0;
			var cur=data[0];
			$("#addcar").click(function(){				
				$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){					
					
					for( var i=0;i<data.length;i++){
						
						if(cur.goodsID==data[i].goodsID){
							
							num = parseInt(data[i].number);								
						}
					}				
					var Num = num + parseInt($(".txt1").val());
					
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:cur.goodsID,number: Num},function(data){
					
					if(data==0){
						alert("添加失败");
					}
					if(data==1){
						alert("添加成功")
						location.href="../html/shopcar.html";
					}
				})		
			})	
		})
	
	})
			//大图同步小图
		$(".smalltu li").click(function(){
			var picurl = $(this).children("img").attr("src");
			$(".smallp").attr("src",picurl);
			$(".bigp").attr("src",$(".smallp").attr("src"));		
		})
		var index=0;
		$(".lf").click(function(){
			index--;
			if(index<0){
				index=0;
				$(".smalltu").animate({left:-index*85},300);
			}else{
				$(".smalltu").animate({left:-index*85},300);
				
			}
			
			
		});
		
		$(".lr").click(function(){
			index++;
			$(".smalltu").animate({left:-index*85},300);
			if(index>$(".smalltu").children().length){
				index = $(".smalltu").children().length;
				$(".smalltu").animate({left:-index*85},300);
			}else{
				$(".smalltu").animate({left:-index*85},300);
			}
		})
		var num=1;
		$(".add").click(function(){
			num++;
			$(".txt1").val(num);
			return false;
		})
		$(".reduce").click(function(){			
			num--;
			if(num<=0){
				num=0;
			}
			$(".txt1").val(num);
			return false;
		})
	
});
