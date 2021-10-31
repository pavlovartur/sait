$(document).ready(function () {
setTimeout(function(){//функция для переноса пользователя на верх страницы
        window.scrollTo(0, 0);
    }, 1);
 $(window).scroll(function() {
 	var scrollTop = 70;
    if ($(window).scrollTop()>=scrollTop){
    	$('.header-top').css({'background':'black','z-index':'5'});
      $('.nav ul').css({'background':'black','z-index':'5'});	
    }
    if ($(window).scrollTop()<=scrollTop){
    	$('.header-top').css({'background':'','z-index':'5'});
       $('.nav ul').css({'background':'','z-index':'5'});	
    }
 });
 let p=0;
 $(".nav-menu").click(function(){
    if(p==0){
      $(".nav ul").css({'display':'flex'});
      p=1;
      return p;
    }
    else{
      $(".nav ul").css({'display':'none'});
      p=0;
      return p;
    }
   
 });
$("a[href*=#]").on("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 777);
e.preventDefault();
return false;
});
$(".logo").click(function(){
$(".link").removeClass("active");
});
$(".link").click(function(){
	$(".link").removeClass("active");
	$(this).addClass("active");

	});
});