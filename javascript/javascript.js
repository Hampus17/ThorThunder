// TODO: When scrolling down make the navbar background blurry or a dark shade of grey
// TODO:
console.log("test")
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('blur');
    }
    else {
        $('nav').removeClass('blur');
    }
})
