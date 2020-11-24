var typed = new Typed("#typed", {
  strings: ["Perencanaan", "Implementasi"],
  typeSpeed: 100,
  startDelay: 100,
  loop: true,
  smartBackspace: true,
  backSpeed: 80
});

// navbar

$(document).scroll(function () {
  var $nav = $("#header-nav");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});


// carousel
$(document).ready(function () {
  $("#hero .owl-carousel").owlCarousel();
  $("#berita .owl-carousel").owlCarousel();
});

$('#hero .owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [" ", " "],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})


$("#hero .owl-dots").remove();

// mobile carousel 

var text = $('#hero .carousel-text p a');
var textAwal;
if ($(document).width() < 720) {
  $.each(text, function (i, val) {
    textAwal = $.trim(val.innerHTML);
    val.innerHTML = textAwal.substring(0, 200) + "[...]";
  })
} else {
  $.each(text, function (i, val) {
    textAwal = $.trim(val.innerHTML);
    val.innerHTML = textAwal;
  })
}


//   AOS

function aos_init() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true
  });
}

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true
});


// scroll button hero

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {

        event.preventDefault();

        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 500, function () {
          // Callback after animation
        });
      }
    }
  });
//from : https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(document).on('scroll', function () {
  var y = $(this).scrollTop();
  if (y > 550) {
    $('.scroll-to-top').addClass('fade-in-right');
    $('.scroll-to-top').removeClass('fade-out-right');
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').addClass('fade-out-right');
    $('.scroll-to-top').removeClass('fade-in-right');
    $('.scroll-to-top').fadeOut();


  }
})


// berita carousel

$('#berita .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  rtl: true,
  responsive: {
    0: {
      items: 2,
      margin: 20
    },
    600: {
      items: 2,
      margin: 20
    },
    1000: {
      items: 2
    }
  }
})

$("#berita .owl-nav").remove();

// Galeri isotope and filter
$(window).on('load', function () {
  var portfolioIsotope = $('.galeri-container').isotope({
    itemSelector: '.galeri-item'
  });

  $('#galeri-flters li').on('click', function () {
    $("#galeri-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });


  // Initiate aos_init() function
  aos_init();

});

// flip berita right-side

$(".btn-right-side").on('click', function () {
  $(".btn-right-side").removeClass("active");
  $(this).addClass('active');


  if ($(this).data("berita") == "front") {
    $(".berita-front").removeClass('flip-2-ver-right-1');
    $(".berita-front").addClass('fade-in-left');

    $(".berita-back").removeClass('fade-in-left');
    $(".berita-back").addClass('flip-2-ver-right-1');


    $(".berita-front").css("z-index", "2");
    $(".berita-back").css("z-index", "1");
  } else {
    $(".berita-back").removeClass('flip-2-ver-right-1');
    $(".berita-back").addClass('fade-in-left');

    $(".berita-front").removeClass('fade-in-left');
    $(".berita-front").addClass('flip-2-ver-right-1');

    $(".berita-back").css("z-index", "2");
    $(".berita-front").css("z-index", "1");
  }
})


// form pengaduan

$('.btn-form-pengaduan').on('click', function () {
  $('.btn-form-pengaduan').removeClass('active');
  $(this).addClass('active');


  if ($(this).data('form') == "masyarakat") {
    $('#form-pengaduan').attr('action', 'masyarakat');

  } else {
    $('#form-pengaduan').attr('action', 'karyawan');
  }

  $('#form-pengaduan').addClass('fade-in-left');
  setTimeout(() => {
    $('#form-pengaduan').removeClass('fade-in-left');
  }, 600);

})

$(window).on('load', function () {
  // Mobile Navigation

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('#header-nav').append($mobile_nav);
    $('#header-nav').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><div id="nav-icon3"> <span ></span > <span></span> <span></span> <span></span> </div ></button>');
    $('#header-nav').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('#header-nav').toggleClass('mobile-nav-active');
      // $('#nav-icon3').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('#header-nav').hasClass('mobile-nav-active')) {
          $('#header-nav').removeClass('mobile-nav-active');
          // $('#nav-icon3').toggleClass('icofont-navigation-menu icofont-close');
          $('#nav-icon3').toggleClass('open');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  $('#nav-icon3').click(function () {
    $(this).toggleClass('open');
  });
})


// Berita Mobile {}

var textBerita = $('#berita .item p a');
var textAwalBerita;
if ($(document).width() < 720) {
  $.each(textBerita, function (i, val) {
    textAwalBerita = $.trim(val.innerHTML);

    val.innerHTML = textAwalBerita.substring(0, 150) + "[...]";
  })
} else {
  $.each(textBerita, function (i, val) {
    textAwalBerita = $.trim(val.innerHTML);
    val.innerHTML = textAwalBerita;
  })
}