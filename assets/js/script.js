/* Anchor Scroll Button */

$(document).on('click', 'div[href^="#"]', function (event) {
    event.preventDefault();

    var target = $($.attr(this, 'href'));
    var offset = 360;

    $('html, body').animate({
        scrollTop: target.offset().top - offset
    }, 400);
});
