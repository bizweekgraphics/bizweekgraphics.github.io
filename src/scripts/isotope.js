var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

module.exports = function() {
    var iso;

    var container = document.querySelector('#isotope-container')
    //init
    imagesLoaded(container, function() {
      iso = new Isotope(container, {
        itemSelector: '.project-item',
        masonry: {
          columnWidth: 360,
          isFitWidth: true
        }
      });      
    });

    var filters = document.querySelectorAll('.filter-container .random')
    var filterLength = filters.length;

    for(var i=0; i < filterLength; i++) {
        var currentFilter = filters[i];
        currentFilter.onclick = function() {
            iso.arrange({
                filter: function(itemElem) {
                    var random = Math.random();
                    return random > 0.5;
                }
            })
        }        
    }

    var allFilter = document.querySelector('.filter-container .all');
    allFilter.onclick = function() {
        iso.arrange({
            filter: function() {return true}
        })
    }
}