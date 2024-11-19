//** this code for counter-up js init ** start//
const counterUp = window.counterUp.default;

const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting &&!el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add('is-visible');
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const elements = document.querySelectorAll('.counter');
elements.forEach(element => IO.observe(element));
//** this code for counter-up js init ** end//



//** this code for owl carousel ** start//
jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        })
    });
});
});

//** this code for owl carousel ** end//


// solar-page slider start here
$('.solar-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// solar-page slider end here



// solar-page-service slider start here
$('.solar-service').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
// solar-page-service slider end here



$('.latest-project').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
