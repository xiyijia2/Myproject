
$(function(){
var str4="";
	var goodsli=document.getElementsByClassName("goodsli")[0];
	console.log(goodsli);
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		async:true,
		dataType:"jsonp",
		success:function(data){
			for(var i=0;i<data.length;i++){
				str4+=`<li>
					<a href="../html/detail.html">
						<img src="${data[i].goodsListImg}" />
					</a>
					<p>
						${data[i].goodsName}
					</p>
					<p>
						活力润泽晚霜豆腐霜清爽平衡保湿 50ml
					</p>
					<p>
						"¥${data[i].price}"
					</p>
				</li>`
			}
			goodsli.innerHTML=str4;
		}
	});	
		//	二级菜单

var third = document.getElementsByClassName("third");
console.log("aaa");
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
					str5+=`<a href="">${data[i][k].con[j]}</a>`								
				}
				str5+=`	</div>
								</div>`
			}
			third[i].innerHTML=str5;			
			
		}		
	}
	})
});