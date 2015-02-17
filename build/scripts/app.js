(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./isotope.js')();
// require('./menu.js')();
// require('./hover.js')();

},{"./isotope.js":2}],2:[function(require,module,exports){
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
},{"imagesloaded":"imagesloaded","isotope-layout":"isotope-layout"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy9pc290b3BlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi9pc290b3BlLmpzJykoKTtcbi8vIHJlcXVpcmUoJy4vbWVudS5qcycpKCk7XG4vLyByZXF1aXJlKCcuL2hvdmVyLmpzJykoKTtcbiIsInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKTtcbnZhciBpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNvO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc290b3BlLWNvbnRhaW5lcicpXG4gICAgLy9pbml0XG4gICAgaW1hZ2VzTG9hZGVkKGNvbnRhaW5lciwgZnVuY3Rpb24oKSB7XG4gICAgICBpc28gPSBuZXcgSXNvdG9wZShjb250YWluZXIsIHtcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnByb2plY3QtaXRlbScsXG4gICAgICAgIG1hc29ucnk6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aDogMzYwLFxuICAgICAgICAgIGlzRml0V2lkdGg6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7ICAgICAgXG4gICAgfSk7XG5cbiAgICB2YXIgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItY29udGFpbmVyIC5yYW5kb20nKVxuICAgIHZhciBmaWx0ZXJMZW5ndGggPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaT0wOyBpIDwgZmlsdGVyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGaWx0ZXIgPSBmaWx0ZXJzW2ldO1xuICAgICAgICBjdXJyZW50RmlsdGVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFuZG9tID4gMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIHZhciBhbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWNvbnRhaW5lciAuYWxsJyk7XG4gICAgYWxsRmlsdGVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX1cbiAgICAgICAgfSlcbiAgICB9XG59Il19
