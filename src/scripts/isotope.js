var Isotope = require('isotope-layout');

module.exports = function() {

    var container = document.querySelector('#content-container')
    //init
    var iso = new Isotope(container, {
      itemSelector: '.project-item',
      masonry: {
        columnWidth: 10
      }
    });


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