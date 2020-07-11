$(function() {

  var $nav = $('.navigation');
  var $burger = $('.hamburger');
  var $fullOpen = $('.full-open-btn');
  var $year = $('.year');

  $burger.on('click', function () {
    $burger.toggleClass('show');
  });

  $burger.click(function(){
    if($nav.hasClass('open')) {
      $nav.removeClass('open');
      $nav.slideUp();
      $('.dark').hide();
    }
    else {
      $nav.addClass('open');
      $nav.slideDown();
      $('.dark').show();
    }
  });

  $fullOpen.click(function() {
    var $result = $('.result');
    if($result.not('open')) {
      $result.addClass('open');
      $result.slideDown(650);
      $('.fa-caret-down').addClass('turn');
    }
    else {
    }
  });

  $year.click(function() {
    var $result = $(this).next('.result');
    if($result.hasClass('open')) {
      $result.removeClass('open');
      $result.slideUp(650);
      $(this).find('.fa-caret-down').removeClass('turn');
    }
    else {
      $result.addClass('open');
      $result.slideDown(650);
      $(this).find('.fa-caret-down').addClass('turn');
    }
  });

  var swiper = new Swiper('.swiper-container', {
    loop:true,
    speed:1200,
    touchRatio:2,
    longSwipesRatio:0.3,
    disableOnInteraction:false,
    pagination: {
		  el: '.swiper-pagination',
		  type: 'bullets',
		  clickable: true
	  },
    autoplay:{
      delay:3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

});
