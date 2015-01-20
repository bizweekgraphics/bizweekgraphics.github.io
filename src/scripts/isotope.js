var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

module.exports = function() {

    var container = document.querySelector('#isotope-container')
    //init
    imagesLoaded(container, function() {
      var iso = new Isotope(container, {
        itemSelector: '.project-item',
        masonry: {
          columnWidth: 270,
          isFitWidth: true
        }
      });      
    })



    // // filter functionality
    // $('#filters a').click(function(){
    //   var selector = $(this).attr('data-filter');
    //   $container.isotope({ filter: selector });
    //   return false;
    // });
    //       });

    //   $container.preloader({
    //     fadeIn: 700,
    //     delay : 200
    //   });
}