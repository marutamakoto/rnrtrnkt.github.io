/* global $, google */

$('.openbtn').click(function(){
  if($('#header-list-container-sp').is(':visible')){
        $('#header-list-container-sp').slideUp();
    } else {
        $('#header-list-container-sp').slideDown();
    }
});



  var headBg = function() {
    if ($(window).scrollTop() >= 700) {
      $('header').css({'background-color':'#391E88'});
    } else {
      $('header').css({'background-color':'transparent'});
    }
  };

  $(window).on('scroll', headBg);


  var headerHight = 77;

  $('.new-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#news').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });

  $('.ser-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#service').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });


  $('.wor-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#works').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });

  $('.com-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#company').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });

  $('.ser-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#service').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });

  $('.rec-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#recruit').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });

  $('.con-btn').on('click', function(e) {

    e.preventDefault();
  
    
    var contentsTop = $('#contact').offset().top - headerHight;
    $('html, body').animate({ scrollTop: contentsTop }, 500);
  });
