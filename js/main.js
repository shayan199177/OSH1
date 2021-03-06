

// $(document).ready(function () {
//     $(".dropdown, .btn-group").hover(function () {
//         var dropdownMenu = $(this).children(".dropdown-menu");
//         if (dropdownMenu.is(":visible")) {
//             dropdownMenu.parent().toggleClass("open");
//         }
//     });
// });

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




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
jQuery('.slider-page-item').owlCarousel({
    rtl: true,
    loop: true,
    margin: 5,
    nav: true,
    autoplay: false,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    navText: ["<i class=\"fas fa-angle-right arrow-right\"></i>", "<i class=\"fas fa-angle-left arrow-left\"></i>"],
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
jQuery('.items-products').owlCarousel({
    rtl: true,
    loop: false,
    autoplay: false,
    touchDrag: false,
    mouseDrag: false,
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
            items: 3
        },
        1200: {
            items: 4
        },
    }
});
jQuery('.items-dmv').owlCarousel({
    rtl: true,
    loop: false,
    autoplay: false,
    touchDrag: false,
    mouseDrag: false,
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
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        },
    }
});

// $(function () {
//     $("#bootnavbar").bootnavbar();
// });

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


// x zoom

$(document).ready(function () {
    $(".xzoom").xzoom();
});

// // price range
//
//
// $("#ex2").slider({});
//
// // end price range
//
// var div = document.getElementById("aerobot");
// window.onscroll = function() {
//     var bodyHeight	= parseInt(getComputedStyle(document.body).height, 10);
//     var scrollLimit = bodyHeight - window.innerHeight;
//     var scrollTop	= document.body.scrollTop;
//     var scrollPCT	= (scrollTop / (scrollLimit/100)) / 100;
//     img.style.top	= bodyHeight * scrollPCT - img.offsetHeight + "px" ;
// }

// $.fn.xzoom.defaults = {
//     // position: 'left', //top, left, right, bottom, inside, lens, fullscreen, #ID
//     // mposition: 'inside', //inside, fullscreen
//     rootOutput: true,
//     // Xoffset: 0,
//     // Yoffset: 0,
//     fadeIn: true,
//     fadeTrans: false,
//     fadeOut: true,
//     smoothZoomMove: 3,
//     smoothLensMove: 1,
//     smoothScale: 0,
//     defaultScale: 0, //from -1 to 1, that means -100% till 100% scale
//     scroll: false,
//     tint: false, //'#color'
//     tintOpacity: 0.0,
//     lens: false, //'#color'
//     lensOpacity: 0.0,
//     lensShape: 'box', //'box', 'circle'
//     zoomWidth: 'auto',
//     zoomHeight: 'auto',
//     sourceClass: 'xzoom-source',
//     loadingClass: 'xzoom-loading',
//     lensClass: 'xzoom-lens',
//     zoomClass: 'xzoom-preview',
//     activeClass: 'xactive',
//     hover: false,
//     adaptive: true,
//     lensReverse: false,
//     adaptiveReverse: false,
//     title: false,
//     // titleClass: 'xzoom-caption',
//     // bg: false //zoom image output as background
// };

$('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');
    if (e.type === 'mouseenter')_d.addClass('show');
    setTimeout(function(){
        _d.toggleClass('show', _d.is(':hover'));
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },300);
});
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// range price

(function() {

    var parent = document.querySelector(".price-slider");
    if(!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();