var $ = require('jquery');

module.exports = function() {
  $(document).ready(function() {
    //Check for touch-screen mobile devices and show hidden content
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      $('.project-meta').css('opacity', '1');
    };

    $(".project-item").unbind('mouseenter').unbind('mouseleave'); // reset the hover to prevent doubling
    $(".project-item").bind("mouseenter",function() { // create hover
      $(".thumb-title", this).fadeTo("slow", 1); // Sets the opacity to 100% on hover   
    }).bind("mouseleave",function(){   
            $(".thumb-title", this).fadeTo("slow", 0); // Sets the opacity back to 0 on mouseout
    });
  });
}