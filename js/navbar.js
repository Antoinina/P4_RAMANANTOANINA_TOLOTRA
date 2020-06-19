$(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
    $('li').toggleClass('scrolled', $(this).scrollTop() > 20);
});