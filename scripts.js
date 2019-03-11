$(function(){
	"use strict";

  $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
  });


  var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: 'avocado.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

});
