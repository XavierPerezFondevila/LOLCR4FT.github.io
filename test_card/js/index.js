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


let jqxhr = $.ajax( "example.php" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second complete" );
});