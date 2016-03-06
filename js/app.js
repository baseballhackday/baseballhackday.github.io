$(document).ready(function() {
  //index dropdown
  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
  });

  // If home page, set up function for 
  // document/hero sizing.
  if ($('.hero').length) {
    $(window).resize(assignIndexHeroHeight);
    $(window).trigger('resize');
  }

});

function assignIndexHeroHeight() {
  var $body = $('body');
  var $window = $(window);
  var $hero = $('.hero');
  var $cities = $hero.find('.dropdown-select a');
  var $indexDropdownButton = $hero.find('.dropdown-button');

  // If TypeKit hasn't loaded, button could be wrapping on
  // smaller screens and therefore too large.
  var originalWhiteSpace = $indexDropdownButton.css('white-space');
  $indexDropdownButton.css('white-space', 'nowrap');

  var buttonHeight = $indexDropdownButton.height();
  var minHeight = $body.height() + (buttonHeight * ($cities.length + 1));
  var windowHeight = $window.height();

  if (windowHeight > minHeight) {
    $hero.css('height', '100vh');
  } else {
    $hero.height(minHeight);
  }

  // Reset original CSS
  $indexDropdownButton.css('white-space', originalWhiteSpace);
}