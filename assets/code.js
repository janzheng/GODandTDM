
    $(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        updateURL: true,
        loop: false
      });

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
      $('#download-1').on('click', function() {
        ga('send', 'event', 'download', 'download-1');
        console.log('download-1 clicked');
      });
      $('#download-2').on('click', function() {
        ga('send', 'event', 'download', 'download-2');
        console.log('download-2 clicked');
      });
      $('#facebook').on('click', function() {
        ga('send', 'event', 'social', 'facebook');
      });
      $('#twitter').on('click', function() {
        ga('send', 'event', 'social', 'twitter');
      });
      $('#youtube').on('click', function() {
        ga('send', 'event', 'social', 'youtube');
      });

    });
    