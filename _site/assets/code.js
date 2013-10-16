
$( document ).ready(function() {
  // Handler for .ready() called.

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





  // analytics
  $('#download').on('click', function() {
    ga('send', 'event', 'button', 'click', 'download');
  });
  $('#facebook').on('click', function() {
    ga('send', 'event', 'button', 'click', 'facebook');
  });
  $('#twitter').on('click', function() {
    ga('send', 'event', 'button', 'click', 'twitter');
  });
  $('#youtube').on('click', function() {
    ga('send', 'event', 'button', 'click', 'youtube');
  });


});

