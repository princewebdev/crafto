// atropos js here
document.addEventListener('DOMContentLoaded', function () {
  const feature = Atropos({
    el: '.feature-atropos',
    activeOffset: 40,
    shadow: false,
  });
});

// owl carusel js here
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
