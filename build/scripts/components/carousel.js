var app = app || {};
var win = $(window);
(function($){
  app.carousel = {
  	initializeSlider : function () {
      console.log("initialize slider");
  		$('.my-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        appendDots: $('.arrows')
      });
  	},
    init : function() {
      app.carousel.els = {
    	  carousel : $('.my-carousel'),
      };
      console.log('init');
      app.carousel.initializeSlider();

    }
  };
  jQuery(document).ready(function() {
    app.carousel.init();
    $('body').css({"visibility":"visible"});
  });
}(jQuery));
