$('.hamburger').on('click', function () {
    $('.menu').addClass('open');
});
  
$( '.menu a' ).on("click", function(){
    $('.menu').removeClass('open');
});