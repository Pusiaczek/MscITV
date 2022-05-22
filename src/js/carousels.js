$(() => {
  $('.info-bar__content').marquee({
    speed: 100,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
    // delayBeforeStart: 400,
  })

  $('.main-carousel__wrapper').slick({
    infinite: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    // initialSlide: 3,
    slidesToScroll: 1,
  })

  $('.main-carousel__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 0,
    centerPadding: 0,
    asNavFor: '.main-carousel__wrapper',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    // initialSlide: 3,
    arrows: false,
    infinite: false
  });


  // $('.carousel-main-container').owlCarousel({
  //   autoplay: true,
  //   autoplayTimeout: 4500,
  //   autoplayHoverPause: true,
  //   responsiveClass: false,
  //   responsiveRefreshRate: 200,
  //   smartSpeed: 1000,
  //   dotsEach: true,
  //   loop: true,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   margin: 0,
  //   stagePadding: 0,
  //   items: 1
  // })
})




// Main - carousel
// (function () {
//   "use strict";

//   var mainCarousel = function () {
//     $(".carousel-main-container").owlCarousel({
//       autoplay: true,
//       autoplayTimeout: 4500,
//       autoplayHoverPause: true,
//       responsiveClass: false,
//       responsiveRefreshRate: 200,
//       smartSpeed: 1000,
//       dotsEach: true,
//       loop: true,
//       nav: false,
//       dots: false,
//       center: true,
//       margin: 0,
//       stagePadding: 0,
//       items: 1
//     });
//   };

//   (function ($) {
//     mainCarousel();
//   })(jQuery);
// })();

// //Featured-news
// (function () {
//   "use strict";

//   var featuredNews = function () {
//     $(".featured-news-container").owlCarousel({
//       loop: true,
//       center: false,
//       responsiveClass: true,
//       responsiveRefreshRate: 200,
//       stagePadding: 15,
//       nav: false,
//       dots: false,
//       dotsEach: false,
//       smartSpeed: 1000,
//       autoplayTimeout: 3500,
//       autoplayHoverPause: true,
//       responsive: {
//         0: {
//           items: 1,
//           margin: 50,
//           autoplay: true,
//           loop: true,
//         },
//         768: {
//           items: 2,
//           margin: 30,
//           autoplay: true,
//           loop: true,
//         },
//         992: {
//           items: 3,
//           margin: 20,
//           autoplay: true,
//           loop: true,
//         },
//         1200: {
//           items: 4,
//           margin: 30,
//           autoplay: false,
//           loop: false,
//         }
//       }
//     });
//   };

//   (function ($) {
//     featuredNews();
//   })(jQuery);
// })();

// //MONTH TOP
// (function () {
//   "use strict";

//   var monthTopCarousel = function () {
//     $(".month-top-list").owlCarousel({
//       loop: true,
//       center: true,
//       margin: 5,
//       responsiveClass: true,
//       responsiveRefreshRate: 200,
//       nav: false,
//       dots: false,
//       dotsEach: false,
//       smartSpeed: 500,
//       autoplay: true,
//       autoplayTimeout: 2000,
//       autoplayHoverPause: true,
//       responsive: {
//         0: {
//           items: 1,
//           stagePadding: 0,

//         },
//         768: {
//           items: 3,
//           // stagePadding: 100,
//         },
//         992: {
//           items: 3,
//           // stagePadding: 100,
//         },
//         1200: {
//           items: 5,
//           // stagePadding: 75,
//         },
//         1400: {
//           items: 5,
//           // stagePadding: 100,
//         },
//       }
//     });
//   };

//   (function ($) {
//     monthTopCarousel();
//   })(jQuery);
// })();

// //UPCOMING EVENTS
// (function () {
//   "use strict";

//   var upcomingEventCarousel = function () {
//     $(".upcoming-event-list").owlCarousel({
//       loop: true,
//       center: true,
//       margin: 0,
//       responsiveClass: false,
//       nav: false,
//       dots: true,
//       dotsEach: true,
//       smartSpeed: 1500,
//       autoplay: true,
//       autoplayTimeout: 5000,
//       autoplayHoverPause: true,
//       autoHeight: true,
//       items: 1

//     });
//   };

//   (function ($) {
//     upcomingEventCarousel();
//   })(jQuery);
// })();

//
window.dispatchEvent(new Event('resize'))
