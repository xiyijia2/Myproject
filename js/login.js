$(function(){
		
		$("#loginsubmit").click(function(){
			if($(".text").eq(0).val()==""||$(".password").eq(0).val()==""){
				
				$(".error-tip-wp").show().children("p").text("用户名或者密码不能为空");
			
			}else{			
				$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("input").eq(0).val(),password:$("input").eq(1).val()},function(data){
				data = JSON.parse(data);
				if(data == 0){
					$(".error-tip-wp").show().children("p").text("用户名错误,请重新输入");
				}else if(data==2){
					$(".error-tip-wp").show().children("p").text("用户名或密码错误,请重新输入")
				}else{
					$.cookie("username",data.userID,{expires:7,path:"/"});
					location.href = "../index.html";
				}
			})
		}
	})			
			
})


