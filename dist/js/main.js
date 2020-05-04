$(document).ready(function(){
    var owl = $(".slaider").owlCarousel({
      nav:false,
      items: 1,
      singleItem: true,
      loop: false,
      dots: false,
    });
    
    // Custom Button
    $('.carousel__arrow_next').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.carousel__arrow_prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });

    $('.subtitle__items > div').click(function(e) {
      e.preventDefault();
      $('.subtitle__items > div').removeClass('subtitle__active');
      $(this).addClass('subtitle__active');
      owl.trigger('to.owl.carousel', [$(this).index()]);
    });

  });