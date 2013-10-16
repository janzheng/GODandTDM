
$( document ).ready(function() {
  // Handler for .ready() called.

  console.log('action')
  // $('.main-title').hover(
  $('#page-intro').hover(
    function() {
      $('.wrapper').animate({
          backgroundColor: jQuery.Color( "rgba(0,0,0,0.7)" )
      }, 500 );
    },
    function() {
      $('.wrapper').animate({
          backgroundColor: jQuery.Color( "rgba(0,0,0,1)" )
      }, 500 );
    }
  );
});

