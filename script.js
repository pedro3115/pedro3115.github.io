$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $('.menu').addClass('fixed');
      $('main').css('padding-top','50px');
    } else {
      $('.menu').removeClass('fixed');
      $('main').css('padding-top','');
    }
  });
});
