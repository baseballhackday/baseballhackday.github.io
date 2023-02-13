/* Author: Daigo Fujiwara for Boston Baseball Hack Day
*/

$(document).ready(function() {

	$("a.slide").anchorAnimate();
	
});


jQuery.fn.anchorAnimate = function(settings) {
 	settings = jQuery.extend({
		speed : 1100
	}, settings);	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault()
			var locationHref = window.location.href
			var elementClick = $(caller).attr("href")
			
			var destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				window.location.hash = elementClick
			});
		  	return false;
		})
	})
}



$(window).scroll(function(){ 
		var offset = 0;
		var sticky = false;
		var top = $(window).scrollTop();
		
		if ($("#main").offset().top < top) {
			$("nav").addClass("sticky");
			sticky = true;
		} else {
			$("nav").removeClass("sticky");
		}
	});
