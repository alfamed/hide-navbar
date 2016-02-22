;$(function(){
  // TODO: navigation bar element must be hiddent in idle
  // REVIEW: code must be readable!
    function mobile_depend(window_w) {
        return $(window).width() <= parseInt(window_w);
    };

    $(window).load(function(){

        var hidden = false,
            slideDuration = 500,
            curTimer,
            scrollTimer,
            scrolling,
            readyToHide = false,
            elemHeight = $('nav').height();

        function hide_nav() {
            $('nav').animate({top:-elemHeight+'px'},{
                duration: slideDuration,
                easing: 'linear',
                start: function(){
                    hidden = false;
                },
                done: function(){
                    hidden = true;
                    readyToHide = false;
                }
            });
        };

        function is_scrolling() {
            // TODO: return true if scrolling, false - not scrolling
        };

        if (!hidden&&mobile_depend(2000)) {
            $('nav').delay(3000).animate({top:-elemHeight+'px'},{
                duration: 1000,
                easing: 'linear',
                done: function(){
                    hidden = true;
                }
            });
        };

        var lastScroll = $(window).scrollTop();

        $(window).scroll(function(){

            clearTimeout(curTimer);
            if (readyToHide) {
                curTimer = setTimeout(hide_nav, 1000);
            }

            var currentScroll = $(window).scrollTop();

            if (hidden&&mobile_depend(2000)) {

                if (currentScroll<lastScroll) {

                    $('nav').animate({top:'0px'},{
                        duration: slideDuration,
                        easing: 'linear',
                        start: function(){
                            hidden = false;
                        },
                        done: function(){
                            readyToHide = true;
                            curTimer = setTimeout(hide_nav, 1000);
                        }
                    });

                };
            };

            if (!hidden&&(currentScroll>lastScroll)&&curTimer) {
                $('nav').stop();
                clearTimeout(curTimer);
                hide_nav();
            };

            lastScroll = currentScroll;
        });

    });
});
