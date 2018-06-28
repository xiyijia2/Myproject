$(function(){
	
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
	var str1="";
	var Showmessage = document.getElementsByClassName("zhanshi")[0];
	$.ajax({
		type:"get",
		url:"jsondata/bagdata.json",
		async:true,
		success:function(data){
			for(var i=0;i<data.length;i++){
				str1+=`<li>
						<a href="">${data[i]}</a>
					</li>`	
			}
			Showmessage.innerHTML=str1;
		}
	
	})
	var str2="";
	var goodList = document.getElementsByClassName("goodslist")[0];
	console.log(goodList);
	$.ajax({
		type:"get",
		url:"jsondata/picture.json",
		async:true,
		success:function(data){
			for(var i=0;i< data.length;i++){
				str2+=`<li>
						<a href="#">
							<img src="${data[i]}" />
						</a>
					</li>`
			}
			goodList.innerHTML=str2;
		}
	
	})
	var str3="";
	var Oselect=document.getElementsByClassName("select")[0];
	$.ajax({
		type:"get",
		url:"jsondata/last.json",
		async:true,
		success:function(data){
			for(var i=0;i<data.length;i++){
				str3+=`<li>
							<a href="">
								<img src="${data[i]}" /></a>
								<div class="topline" style="width: 0;"></div>
								<div class="rightline" style="height:0;"></div>
								<div class="bottomline" style="width:0;"></div>
								<div class="leftline" style="height:0"></div>
							
						</li>`
			}
			Oselect.innerHTML=str3;
			$(".select li").hover(function(){
			var index=$(this).index();
				$(this).children(".topline").animate({width:194},300).css("overflow","hidden")
				$(this).children(".leftline").animate({height:65},300).css("overflow","hidden")
				$(this).children(".rightline").animate({height:65},300).css("overflow","hidden")
				$(this).children(".bottomline").animate({width:194},300).css("overflow","hidden")
				$(".proright img").attr("src","img/"+(index+1)+"bank.jpg").show();
				
			},function(){
				$(this).children(".topline").animate({width:0},300)
				$(this).children(".leftline").animate({height:0},300)
				$(this).children(".rightline").animate({height:0},300)
				$(this).children(".bottomline").animate({width:0},300)
			})
		}
	})
	
//	二级菜单

var third = document.getElementsByClassName("third");
$.ajax({
	type:"get",
	url:"jsondata/erjicandan.json",
	async:true,
	success:function(data){		
		for(var i=0;i<data.length;i++){
			var str5="";			
			for(var k=0;k<data[i].length;k++){
				str5+=`<div><h2>${data[i][k].title}</h2><div>`
				for(var j=0;j<data[i][k].con.length;j++){
					str5+=`<a href="html/common.html">${data[i][k].con[j]}</a>`								
				}
				str5+=`	</div>
								</div>`
			}
			third[i].innerHTML=str5;
		}		
	}
});
	
})



