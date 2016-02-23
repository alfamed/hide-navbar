;$(function() {

  function mobile_depend(window_width) {
    return $(window).width()<=parseInt(window_width);
  }
    $(window).load(function() {
      var nHeight=$('.navbar').height();
      var hidden=false;
      var slideDuration=500;
      var lastScrollTop;
      var newScrollTop;
      var timerId;
      var hide_navbar = false;

      function hideNavbar() {
        $('.navbar').animate({top: -nHeight + "px"}, {
          duration: slideDuration,
          easing: 'linear',
          start: function() {
            hidden=false;
          },
          done: function() {
            hidden=true;
            hide_navbar=false;
          }
        });

      }; //end hideNavbar function

      if (mobile_depend(768)&&(!hidden)) {
        setTimeout(hideNavbar, 1000); //hide navbar as soon as page loads
      };

      var lastScrollTop = $(window).scrollTop();
      $(window).scroll(function(){
        var newScrollTop = $(window).scrollTop();

        clearTimeout(timerId); //reset timer on scroll
        if (hide_navbar) {
          timerId=setTimeout(hideNavbar, 1000);
        }

        if (hidden) {
          if (newScrollTop < lastScrollTop) {
            $('.navbar').animate({top: 0 +'px'}, {
              duration: slideDuration,
              easing: 'linear',
              start: function() {
                hidden=false;
              },
              done: function() {
                hide_navbar = true;
                timerId=setTimeout(hideNavbar, 2000);
              }
            });//navbar is shown after scroll up
          };
        };

        if ((!hidden)&&(hide_navbar)) {
          $('.navbar').stop().animate({top: 0 + 'px'}, {
            duration: slideDuration,
            easing: 'linear',
            done: function() {
              timerId=setTimeout(hideNavbar, 2000);
            }
          });
        };

        if(!hidden) {
          if (newScrollTop > lastScrollTop) {
            $('.navbar').stop();
            clearTimeout(timerId);
            hideNavbar();
          };
        };

        lastScrollTop = newScrollTop;
      });//end scroll

    });//end load

});//end main function
