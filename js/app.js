// $(function(){
//   // bind change event to select
//   $('.city-select').on('change', function () {
//   	  console.log("test");

//       var url = $(this).val(); // get selected value
//       if (url) { // require a URL
//           window.location = url; // redirect
//       }
//       return false;
//   });
// });

$(document).ready(function() {
  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });

  $('option').on('click', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});