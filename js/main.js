const menuIcon = document.querySelector(".humberger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click" ,() => {
    navbar.classList.toggle("change");
});

$(document).ready(function () {
    $(".dropdown, .btn-group").hover(function () {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight(85) + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

jQuery('.slider-1').owlCarousel({
    rtl: true,
    loop: false,
    nav: true,
    height: true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 4
        },
        319: {
            items: 4
        },
        535: {
            items: 4
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
});
jQuery('.slider-2').owlCarousel({
    rtl: true,
    loop: false,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ["<i class=\"fas fa-angle-right arrow-right\"></i>", "<i class=\"fas fa-angle-left arrow-left\"></i>"],
    responsive: {
        0: {
            items: 1
        },
        546: {
            items: 1
        },
        619: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1116: {
            items: 2
        },
        1200: {
            items: 2
        },
    }
});
jQuery('.slider-article').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        319: {
            items: 3
        },
        535: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
jQuery('.slider-videos').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        319: {
            items: 3
        },
        535: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
jQuery('.slider-offer').owlCarousel({
    rtl: true,
    loop: true,
    margin: 5,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        444: {
            items: 2
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        },
    }
});
jQuery('.slider-top').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        444: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        },
    }
});

$(function () {
    $("#bootnavbar").bootnavbar();
});

(function($) {
    var defaults={
        sm : 540,
        md : 720,
        lg : 960,
        xl : 1140,
        navbar_expand: 'lg'
    };
    $.fn.bootnavbar = function() {

        var screen_width = $(document).width();

        if(screen_width >= defaults.lg){
            $(this).find('.dropdown').hover(function() {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                    $(this).removeClass('animated fadeIn');
                });
            }, function() {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            });
        }

        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });
    };
})(jQuery);