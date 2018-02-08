$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    if($('.offcanvas-collapse').hasClass('open')){
    	$('html').css('overflow','hidden');
    	
    }else{
    	$("html").css("overflow", "scroll");
    }
    
  })
})
