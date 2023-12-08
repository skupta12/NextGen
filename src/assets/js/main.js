/*
 * MIGOTHEMES Template Personal Portfolio
 * Created by: MIGOTHEMES
 * Version: 1
 */

/* INDEX OF CONTENTS JAVASCRIPT
==================================================

==================================================
*/

(function ($) {
  "use strict";

  var GOS = {};

  var plugin_track = "assets/js/vendor/";
  $.fn.exists = function () {
    return this.length > 0;
  };

  // -----------------------
  // ByteMuse Scroll it
  // -----------------------

  GOS.scroll_it = function () {
    var scrollIt = $(".scroll-it");

    if (scrollIt.length > 0) {
      scrollIt.each(function () {
        $.scrollIt({
          upKey: 38, // key code to navigate to the next section
          downKey: 40, // key code to navigate to the previous section
          easing: "linear", // the easing function for animation
          scrollTime: 600, // how long (in ms) the animation takes
          activeClass: "active", // class given to the active nav element
          onPageChange: null, // function(pageIndex) that is called when page is changed
          topOffset: -50, // offste (in px) for fixed top navigation
        });
      });
    }
  };

  // -----------------------
  // Owl Carousel
  // -----------------------

  GOS.swiper = function () {
    var owlCarousel = $(".owl-carousel");
    if (owlCarousel.length > 0) {
      loadScript(plugin_track + "owl-carousel/owl.carousel.min.js", function () {
          owlCarousel.each(function () {
            var $this = $(this),
            $items = $this.data("items") ? $this.data("items") : 1,
            $loop = $this.attr("data-loop") ? $this.data("loop") : true,
            $navdots = $this.data("nav-dots") ? $this.data("nav-dots") : false,
            $navarrow = $this.data("nav-arrow") ? $this.data("nav-arrow") : false,
            $autoplay = $this.attr("data-autoplay") ? $this.data("autoplay") : true,
            $autospeed = $this.attr("data-autospeed") ? $this.data("autospeed") : 5000,
            $smartspeed = $this.attr("data-smartspeed") ? $this.data("smartspeed") : 1000,
            $autohgt = $this.data("autoheight") ? $this.data("autoheight") : false,
            $CenterSlider = $this.data("center") ? $this.data("center") : false,
            $space = $this.attr("data-space") ? $this.data("space") : 30;

            $(this).owlCarousel({
              loop: $loop,
              items: $items,
              responsive: {
                0: {
                  items: $this.data("xs-items") ? $this.data("xs-items") : 1,
                },
                640: {
                  items: $this.data("sm-items") ? $this.data("sm-items") : 1,
                },
                768: {
                  items: $this.data("md-items") ? $this.data("md-items") : 1,
                },
                1024: {
                  items: $this.data("lg-items") ? $this.data("lg-items") : 1,
                },
                1200: { items: $items },
              },

              dots: $navdots,
              autoplayTimeout: $autospeed,
              smartSpeed: $smartspeed,
              autoHeight: $autohgt,
              center: $CenterSlider,
              margin: $space,
              nav: $navarrow,
              autoplay: $autoplay,
              autoplayHoverPause: true,
            });
          });
        }
      );
    }
  };

   // -----------------------
  // Aos
  // -----------------------

  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
  });

   // -----------------------
  // Magnific Popup
  // -----------------------

  GOS.gallery = function () {
    if ($(".lightbox-gallery").length > 0 || $(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0) {
        loadScript(plugin_track + 'magnific-popup/jquery.magnific-popup.min.js', function () {
            if ($(".lightbox-gallery").length > 0) {
                $('.lightbox-gallery').magnificPopup({
                    delegate: '.gallery-link',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-fade',
                    fixedContentPos: true,
                    closeBtnInside: false,
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after current image
                    }
                });
            }
            if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0) {
                $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true,
                   
                });
            }
            if ($(".px_modal").length > 0) {
                $('.px_modal').magnificPopup({
                    type: 'inline',
                    midClick: true,
                    mainClass: 'mfp-fade'
                });
            }
        });
    }
}


  // -----------------------
  // Menu toggle
  // -----------------------

  GOS.menu_toggle = function () {
    const burger = document.querySelector(".burger-menu");
    const primaryHeader = document.querySelector(".primary-header");

    burger.addEventListener("click", function () {
      primaryHeader.classList.toggle("open-menu");
    });

    const nav = document.querySelectorAll(".nav a");
    nav.forEach(function (link) {
      link.addEventListener("click", function () {
        const isBurgerVisible = window.getComputedStyle(burger).display !== "none";
        if (isBurgerVisible) {
          primaryHeader.classList.remove("open-menu");
        }
      });
    });
  };

  // -----------------------
  // Header
  // -----------------------

  GOS.header_change = function () {
    var header = $(".primary-header");

    if ($(window).scrollTop() >= 80) {
      header.addClass("header-onscroll");
    } else {
      header.removeClass("header-onscroll");
    }
  };

  // -----------------------
  // Accordion
  // -----------------------

  GOS.accordion = function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    function toggleActiveAccordion(event, header) {
      const activeAccordion = document.querySelector(".accordion.active");
      const accordion = header.parentElement;
      const body = header.nextElementSibling;

      if (activeAccordion && activeAccordion !== accordion) {
        activeAccordion.querySelector(".accordion-item").style.maxHeight = 0;
        activeAccordion.classList.remove("active");
      }

      accordion.classList.toggle("active");

      if (accordion.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = 0;
      }
    }

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", (event) => {
        toggleActiveAccordion(event, header);
      });
    });
  };

  // -----------------------
  // Counter
  // -----------------------

  //   $(".counter").appear(function() {
  //     $(this).each(function() {
  //         $(this).prop("Counter", 0).animate({
  //             Counter: $(this).text()
  //         }, {
  //             duration: 2000,
  //             easing: "swing",
  //             step: function(e) {
  //                 $(this).text(Math.ceil(e))
  //             }
  //         })
  //     })
  // }, {
  //     accX: 0,
  //     accY: -10
  // });

  // -----------------------
  // Scroll to top
  // -----------------------

  GOS.scroll_to_top = function () {
    var scrollToTopButton = $(".scroll-to-top");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 500) {
        scrollToTopButton.fadeIn();
      } else {
        scrollToTopButton.fadeOut();
      }
    });
  };

  $(document).ready(function () {
    GOS.scroll_it();
    GOS.swiper();
    GOS.menu_toggle();
    GOS.gallery();
    GOS.scroll_to_top();
    GOS.accordion();
    GOS.header_change();
  });

  $(window).on("scroll", function () {
    GOS.header_change();
  });

  // Window on Resize
  $(window).on("resize", function () {});

  var _arr = {};

  function loadScript(scriptName, callback) {
    if (!_arr[scriptName]) {
      _arr[scriptName] = true;
      var body = document.getElementsByTagName("body")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptName;
      script.onload = callback;
      body.appendChild(script);
    } else if (callback) {
      callback();
    }
  }

})(jQuery);
