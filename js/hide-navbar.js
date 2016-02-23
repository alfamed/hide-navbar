;$(function() {

  function mobile_depend(window_width) {
    return $(window).width()<=parseInt(window_width);
  }
    $(window).load(function() {
      var nHeight=$('.navbar').height();
      var state=false;
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
            state=false;
          },
          done: function() {
            state=true;
            hide_navbar=false;
          }
        });
      };//end hideNavbar function
      console.log($(window).width()<=768);
      if (mobile_depend(768)&&(!state)) {
        alert('hide_navbar');
        setTimeout(hideNavbar(),1000);//hide navbar as soon as page loads
      };

      var lastScrollTop = $(window).scrollTop();
      $(window).scroll(function(){
        var newScrollTop = $(window).scrollTop();

        clearTimeout(timerId);
        if(hide_navbar) {
          timerId=setTimeout(hideNavbar, 1000);
        }

        if (state) {
          if (newScrollTop < lastScrollTop) {
            $('.navbar').animate({top: 0 +'px'}, {
              duration: slideDuration,
              easing: 'linear',
              start: function() {
                state=false;
              },
              done: function() {
                timerId=setTimeout(hideNavbar, 2000);
              }

            });//navbar is shown after scroll up

          };

        };
        if(!state) {
          if (newScrollTop > lastScrollTop) {
              clearTimeout(timerId);
              hideNavbar();
          };
        };

        lastScrollTop = newScrollTop;
      });//end scroll

    });//end load

});//end main function
