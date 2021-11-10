$('.fixed-menu .menu-opener').click(function() {
  if($('.fixed-menu').hasClass('open')) $('.fixed-menu').removeClass('open');
  else $('.fixed-menu').addClass('open');
});

$('.btn-style').click(function(ev){
  if(!$(this).hasClass('active')){
    $('.items-wrapper > .row').css('transform','translateX(calc(-100% * '+$(this).index()+'))');
    $('.btn-style.active').removeClass('active')
    $(this).addClass('active');
  }
});
