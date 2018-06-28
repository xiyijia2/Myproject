$(function(){
	var reg= /^[a-zA-Z_]\w{5,12}$/g;
	$("#userName")[0].onchange=function(){
				var val=$("#userName").val();
				if(reg.test(val))
				{
					reg.lastIndex=0;
					$(".error-tip-wp").hide();
					$("#pwd")[0].onchange=function(){
						var val1=$("#pwd").val();						
						if(reg.test(val1))
						{
							reg.lastIndex=0;
							$(".error-tip-wp").hide();	
							$(".sub-btn").click(function(){
							if($("#pwd2").val()==$("#pwd").val()){
								$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$("input").eq(0).val(),password:$("input").eq(1).val()},function(data){
								data = JSON.parse(data);
								if(data == 0){
									alert("用户名重名");
								}else if(data==1){
									location.href = "login.html";
								}else{
									alert("注册失败，请重试");
								}
							})
						}
					})
						}else{
							$(".error-tip-wp").show().children("p").text("密码有数字,字母组成,请重新输入");
						}
					}
				}else{
					
					$(".error-tip-wp").show();
				}
			}				
})
