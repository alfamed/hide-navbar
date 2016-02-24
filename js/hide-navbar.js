;$(function() {
  var $elem = $('nav'),
      animDuration = 1000,
      delay = 2000,
      timerId,
      curScrollPos,
      lastScrollPos;

  function hideElem(){
    this.animate({top: -this.height() + "px"}, {
          duration: animDuration,
          easing: 'linear',
          start: function() {

          },
          done: function() {

          },
          progress: function(){

          },
          always: function(){

          }
        });
  };

  function showElem(){
    this.animate({top: "0px"}, {
          duration: animDuration,
          easing: 'linear',
          start: function() {

          },
          done: function() {

          },
          progress: function(){

          },
          always: function(){

          }
        });
  };

  $(window).load(function(){
    // after all page content had been loaded set the delay to execute hideElem function
    timerId = setTimeout(hideElem.bind($elem), delay);

    curScrollPos = $(window).scrollTop(); //current scroll position (after scroll manipulations)

    $(window).scroll(function(){

      lastScrollPos = $(window).scrollTop() // new scroll position after scroll made

      if (lastScrollPos<curScrollPos) {
        hideElem.call($elem);
      } else {
        showElem.call($elem);
      }

      curScrollPos = lastScrollPos; //set new current scroll position

    });


  });

});
