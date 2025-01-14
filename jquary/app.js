$( function() {
  $( "#accordion" ).accordion();
  $( "#tabs" ).tabs();
  $(".sliders").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
} );