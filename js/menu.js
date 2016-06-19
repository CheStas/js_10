$(document).ready(function() {
    var $open = $('.open');
    $open.mouseenter( function() {
        var $submenu = $(this).children('.submenu');
        $submenu.slideToggle();
    });

    $open.mouseleave( function() {
        var $submenu = $(this).children('.submenu');
        $submenu.slideToggle();
    });

    $('.menu').mouseenter(function() {
        $('.menu').animate({backgroundColor: '#ff2100'
        }, 1000 );
    });

    $('.menu').mouseleave(function() {
        $('.menu').animate({backgroundColor: '#FF6464'
    }, 1000 );
    });

    $('.submenu').mouseenter(function() {
        $('.submenu').animate({backgroundColor: '#C41A38'
        }, 1000 );
    });

    $('.submenu').mouseleave(function() {
        $('.submenu').animate({backgroundColor: '#E14B4B'
        }, 1000 );
    });
});