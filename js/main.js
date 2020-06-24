$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('smaller');
  } else {
    $('nav').removeClass('smaller');
  }
});