$(function () {

  $('.scroll-down').click(function () {
    $('html, body').animate({
      scrollTop: $('#tb').offset().top
    }, 'slow');
    return false;
  });
});