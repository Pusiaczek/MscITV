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
    infinite: true

  })

  $('.main-carousel__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    centerPadding: 0,
    asNavFor: '.main-carousel__wrapper',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    useCSS: false,
    // initialSlide: 3,
    arrows: false,
    infinite: true
  });


  $(".featured-news__wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 0,
    dots: false,
    focusOnSelect: true,
    useCSS: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    // variableWidth: true,
    // centerMode: true,
    // mobileFirst: true,
    autoplaySpeed: 10000,
    mobileFirst: false,
    respondTo: "min",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

        }
      }]
  });

  $(".month-top__list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 0,
    dots: false,
    focusOnSelect: true,
    useCSS: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      }]
  });


  $(".upcoming-event-list").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: false,
    nav: false,
    dots: true,
    dotsEach: true,
    smartSpeed: 1500,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 1

  });

})




window.dispatchEvent(new Event('resize'))
