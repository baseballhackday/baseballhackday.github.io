


$(function(){
  // bind change event to select
  $('.city-select').on('change', function () {
  	  console.log("test");

      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});


//on standby
// $(function() {
// 	$("dropdown-button").click(function(){
// 		var $button, $menu;
// 		$button = $(this);
// 		$menu = $buton.siblings(".dropdown-menu");
// 	})
// })