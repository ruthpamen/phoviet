
$('#next').click(function (){
  
	if($('.on-screen').next().length == 0){
	  $('.on-screen').removeClass('on-screen come-in').addClass('out-screen');
	  $('.image-box').first('image-box').removeClass('out-screen').addClass('come-in on-screen');
	}
	else
	  $('.on-screen').removeClass('on-screen come-in').addClass('out-screen').next('.image-box').addClass('come-in on-screen');
  });
  $('#prev').click(function (){
	
	if($('.on-screen').prev().length == 0){
	  $('.on-screen').removeClass('on-screen come-in').addClass('out-screen');
	  $('.image-box').last('image-box').removeClass('out-screen').addClass('come-in on-screen');
	}
	else
	  $('.on-screen').removeClass('on-screen come-in').addClass('out-screen').prev('.image-box').addClass('come-in on-screen');
  });





  $(document).ready(function(){
	$(".fancybox").fancybox({
		  openEffect: "none",
		  closeEffect: "none"
	  });
	  
	  $(".zoom").hover(function(){
		  
		  $(this).addClass('transition');
	  }, function(){
		  
		  $(this).removeClass('transition');
	  });
  });
	  

