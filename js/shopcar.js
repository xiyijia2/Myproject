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
	//查看购物车	
			$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
			
			adddata();
			//刷新购物车
			function adddata(){
				$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
				var str8="";
				for( var i=0;i<data.length;i++){					
				str8+=`<li >
						<input type="checkbox" class="checkbox_c" name="check"/>							
						<a href="">
							<img src="${data[i].goodsListImg}"/>
						</a>
					<div class="title">${data[i].goodsName}</div>
					<div class="attr">
						Red
					</div>
					<div class="attr1">${data[i].price}</div>
					<div class="sign" goodsid="${data[i].goodsID
}">
						<em class="reduce">-</em>
						<input type="text" value="${data[i].number}" class="txt1"/>
						<em class="add">+</em>
					</div>
					<div class="activity">11</div>
					<div class="taxtag">
						<span>${data[i].price*data[i].number}</span>
						<p>税费信息</p>
						<p class="tax">税费说明：
根据相关部门关于跨境电子商务零售进口税收政策的要求，该商品需要交纳15%~35%的关税。
关税计算公式：购买价格*税率（15~35%）。查看详情</p>
					</div>
					<div class="del">
						<span>删除</span>
						<p>移入收藏夹</p>
						<b></b>
						<strong>定制包装</strong>
					</div>`
			}
			$(".addgood")[0].innerHTML=str8;
			function reflsh(Num,goodsID){
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsID,number: Num},function(data){
					console.log(data,"成功");
				})		
			}
			
			function change1(){
				console.log($(this))
				 var tolPrice = $(this).parent().parent().children(".attr1")*$(this).parent().children(".txt1").val();
				 $(this).parent().parent().children(".taxtag").children("span").html(tolPrice);
			}
		
		$(".sign .reduce").click(function(){
			var goodsID=$(this).parent().attr("goodsid");
			var Num=$(this).parent().children(".txt1").val();
				Num--; 
				if(Num<=1){
					Num=1;
				}
				$(this).parent().children(".txt1").val(Num);
				
				console.log($(this).parent().parent().children(".attr1").text())
				var tolPrice = $(this).parent().parent().children(".attr1").text()*Num;
				 $(this).parent().parent().children(".taxtag").children("span").html(tolPrice);
				total();
				reflsh(Num,goodsID);
				//adddata();
			}) 	
			
		$(".sign .add").click(function(){
			var goodsID=$(this).parent().attr("goodsid");	
			var Num=$(this).parent().children(".txt1").val();
			Num++;
			$(this).parent().children(".txt1").val(Num);
			 var tolPrice = $(this).parent().parent().children(".attr1").text()*Num;
			 $(this).parent().parent().children(".taxtag").children("span").html(tolPrice);
			
			total();
			reflsh(Num,goodsID);
			//adddata();
			return false;
		})
		$(".del span").click(function(){
			var goodsid=$(this).parent().parent().children(".sign").attr("goodsid");
			$(this).parent().parent().slideUp(400,function(){
				$(this).remove();
			});
			reflsh(0,goodsid);
			
		})
		function total(){
			var sum=0;
			var num=0;
			for(var j=0;j<$(".addgood").children().length;j++){
				var sum=sum + parseInt($(".addgood li").eq(j).children(".taxtag").children("span").text());
				var num=num + parseInt($(".addgood li").eq(j).children(".sign").children(".txt1").val());
				$(".g_right strong").text(sum);
				$(".g_right i").text(num);
			}
		}
		total();
		
	})
		
}				
	
		$(".checkall").click(function(){
			
			$(".checkbox_c").prop("checked",$(this).prop("checked"));
		})
		$(".checkbox_c").click(function(){
			if($("checkbox_c:checked").length==$(".checkbox_c").length){
				$(".checkall").prop("checked",true);
			}else{
				$(".checkall").prop("checked",false);
				
			}
		})
	})
})
