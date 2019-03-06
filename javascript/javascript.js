// TODO: When scrolling down make the navbar background blurry or a dark shade of grey
// TODO:
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(100)
    .next()
    .fadeIn(100)
    .end()
    .appendTo('#slideshow');
},  3000);
