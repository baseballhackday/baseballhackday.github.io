/* Author: Daigo Fujiwara for Boston Baseball Hack Day
*/

$(document).ready(function() {

	$("a.slide").anchorAnimate();
	getgmap();
	
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


function getgmap() {
        var myLatlng = new google.maps.LatLng(42.31604341032714, -71.0488709807396);
		var myOptions = {
		  zoom: 14,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		var image = 'img/hackday_40.png';
		var marker = new google.maps.Marker({
			position: myLatlng,
 			icon: image
 		});
		
		// To add the marker to the map, call setMap();
		marker.setMap(map);
		
		}