// JavaScript Document
$(function(){	
	/*nav下拉菜单*/

	
	var a=$(window).width();
	$("#list").css("width",a);
	if(a<1200){$("#list").css("width","1200px")}
	$(".link").hover(function(){	
		
		var b=$(window).width();
		if(a!=b){
			if(b>1140){$("#list").css("width",b)}
			else
			{$("#list").css("width","1200px")}
		}
		
		$(".productsMenuButton").addClass("styleborder");
		$(this).css({"border-left":"1px solid #CCC","border-right":"1px solid #CCC"});
		$("#list").css({"display":"block"});
		$("#list").stop().animate({"height":"464px"},300);
		
	},function(){
		$(".productsMenuButton").removeClass("styleborder");
	    $(this).css({"border-left":"1px solid #ffffff","border-right":"1px solid #ffffff"});
		
		$("#list").stop().animate({"height":"0px"},300).delay(300)
		$("#list").css({"border-bottom":"none"});
	})
	
				
	
	
	
	
	
	
	
	
	
	//header经过right变色
	$("header .wrapper p a").hover(function(){
		$("header .wrapper .headLinks #hd_Wis").addClass("qq");
	},function(){
		$("header .wrapper .headLinks #hd_Wis").removeClass("qq");
	})
	
	
	/*nav search获得/失去焦点事件*/	
	$("nav .wrapper #search input:eq(0)").focus(function(){
		$("nav .wrapper #search .searchBox").animate({"width":"180px"},500);	 	
	})
	$("nav .wrapper #search input:eq(0)").blur(function(){
		$("nav .wrapper #search .searchBox").animate({"width":"55px"},500);	
	})
	
	
	$("nav .wrapper #search input:eq(0)").hover(function(){
		$(this).css("color","pink");
		$("nav .wrapper #search button").css("background","url(image/search_04.png) no-repeat")	 	
	},function(){
		$(this).css("color","#000");
		$("nav .wrapper #search button").css("background","url(image/search_03.png) no-repeat")
	})
	
	

	
	//鼠标经过banner nextpage
	$(".container .banner_right .nextpage").hover(function(){
			$(this).animate({"padding-top":"7px","padding-bottom":"7px"},100)	 
		 },function(){
			$(this).animate({"padding-top":"0px","padding-bottom":"0px"},100)	
	})
	
	
		
	
	//图片轮播
	var lis=$(".ulCenter ul li");
	var lislen=lis.length;
	for (var i=0;i<3;i++){
	$(".ulCenter ul").append("<li>"+lis.eq(i).html()+"</li>")}
	for (var i=1;i<4;i++){
	$(".ulCenter ul").prepend("<li>"+lis.eq(lislen-i).html()+"</li>")
	}
	
	var cur=3;
	var lis=$(".ulCenter ul li");
	var lislen=lis.length;
	var imghref = new Array();
	imghref=$(".ulCenter ul span");
	$(".ulCenter ul").css({width:lislen*1140,left:-1140*cur})
	
	function as(){
		cur++;
		$(".ulCenter ul").animate({left:-1140*cur},1000,function(){
			if(cur>=(lislen-3)){
				cur=3;
				$(".ulCenter ul").css({left:-1140*cur});
			}
		});
		fadIO(cur)
	}
	var t=setInterval(as,4000);
	
	
	
	
	function fadIO(c){
		$(".banner_right h1").html(imghref.eq(c).html()).hide().fadeIn(500).delay(2500).fadeOut(700);
	}
	
	
	/*下一张*/ 	
	$(".gori").click(function(){		
		if(!$(".ulCenter ul").is(":animated")){
			clearInterval(t);	
			$(".ulCenter ul").animate({left:-1140*(++cur)},1000,function(){
			if(cur>=13){
				cur=5;
				$(".ulCenter ul").css({left:-1140*cur});
			}
			fadIO(cur)
		});	
		t=setInterval(as,4000);	
		}	
	})
	

	
	/*上一张*/
	$(".gole").click(function(){		
		if(!$(".ulCenter ul").is(":animated")){
			clearInterval(t);
			$(".ulCenter ul").animate({left:-1140*(--cur)},1000,function(){
			if(cur<=1){
				cur=8;
				$(".ulCenter ul").css({left:-1140*cur});
			}
			fadIO(cur)
		});	
		t=setInterval(as,4000);
		}
	})
	
	
	
	//屏幕滚动
	$(".nextpage").click(function(){
   	$('html,body').animate({scrollTop: "740px"},1000);
  	})
	
	

	//正则表达式判断	
	$(".signup_bor a img").click(function(){
		var re=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
		if(re.test($("#signup").val())){
			$(".home-social .wrapper p").text("");
			$(".newsletter").text("Thanks! You've been added to our mailing list.").css("color","#f00")
		}
		else{
			$("#signup").val();
			$(".home-social .wrapper p").text("This value is required").css("color","#f00")
			$("#signup").focus();
		}
	
	})
	
	
	
	
	/*文本框获得焦点*/
	$(".signup_bor a img").click(function(){
		$(".signup_bor input:eq(0)").focus();
		$(".newsletter p").css("display","block")
	})
	
	
	
	
	//home-brands鼠标经过
	$(".home-brands .wrapper ul li img").hover(function(){
		$(this).animate({"opacity":"0.6"},300)
	},function(){
		$(this).animate({"opacity":"1"},300)
	})
	
	
	
	
	
	
	//footer鼠标经过
	$(".home-social .wrapper .social ul li a").hover(function(){
		$(this).animate({"opacity":"0.6"},300)
	},function(){
		$(this).animate({"opacity":"1"},300)
	})
	
	
	
	
})