$(document).ready(function(){
	$(".platillos").each(function(){
		var platillos_desc = $(this).find(".platillos_desc");
		$(this).on( "mouseenter", function() {
			if($(window).width() > 800){
    			$(platillos_desc).fadeIn("fast");
    		}
  		})
  		.on( "mouseleave", function() {
  			if($(window).width() > 800){
   				$(platillos_desc).fadeOut("slow");
   			}
 		});
	});
	$("#menu_display").click(function(){
		$("#menu_content").toggle();
	});
	$(".menu_element").each(function(){
		$(this).click(function(){
			if($(window).width() <= 800){
				$("#menu_content").fadeOut("slow");
			}
		});
	});
	$(window).resize(function(){
		if($(window).width() <= 800){
			$("#menu_content").hide();
		}else{
			$("#menu_content").show();
		}
	});

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 2000);
	    return false;
	});
});