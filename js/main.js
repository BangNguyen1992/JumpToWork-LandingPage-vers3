

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
	'use strict';
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	'use strict';
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	'use strict';
  if ($(this).attr('class') !== 'dropdown-toggle active' && $(this).attr('class') !== 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();

  }

});

//Hide dropdown menu when click outside menu
$(document).on('click',function (e) {
    $('#dropdown').collapse('hide')
});

