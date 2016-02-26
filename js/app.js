$(document).ready(function() {
  //index dropdown
  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
  });

    // bind change event to select
  $('.city-select').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });

});