$(document).ready(function () {
    $(".client-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      nav: true,
      navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
    });
  });


  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
  });