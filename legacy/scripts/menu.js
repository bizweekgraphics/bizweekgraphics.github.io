var $ = require('jquery');

module.exports = function() {
  $(document).ready(function() {
    $('#menubar .open-switch').click(function() {
      if($('#menubar').hasClass('open')) {
        $('#menubar').animate({
          top: -120
        }, function() { 
          $('#menubar').removeClass('open');
        }); 
      } else {
        $('#menubar').animate({
          top: 0
        }, function() { 
          $('#menubar').addClass('open');
        });
      }
    });
  });
}