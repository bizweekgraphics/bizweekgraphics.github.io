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

    var filters = document.querySelectorAll('.filter-container li')
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
},{"imagesloaded":"imagesloaded","isotope-layout":"isotope-layout"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy9pc290b3BlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuL2lzb3RvcGUuanMnKSgpO1xuLy8gcmVxdWlyZSgnLi9tZW51LmpzJykoKTtcbi8vIHJlcXVpcmUoJy4vaG92ZXIuanMnKSgpO1xuIiwidmFyIElzb3RvcGUgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpO1xudmFyIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc287XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzb3RvcGUtY29udGFpbmVyJylcbiAgICAvL2luaXRcbiAgICBpbWFnZXNMb2FkZWQoY29udGFpbmVyLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzbyA9IG5ldyBJc290b3BlKGNvbnRhaW5lciwge1xuICAgICAgICBpdGVtU2VsZWN0b3I6ICcucHJvamVjdC1pdGVtJyxcbiAgICAgICAgbWFzb25yeToge1xuICAgICAgICAgIGNvbHVtbldpZHRoOiAzNjAsXG4gICAgICAgICAgaXNGaXRXaWR0aDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTsgICAgICBcbiAgICB9KTtcblxuICAgIHZhciBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1jb250YWluZXIgbGknKVxuICAgIHZhciBmaWx0ZXJMZW5ndGggPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaT0wOyBpIDwgZmlsdGVyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGaWx0ZXIgPSBmaWx0ZXJzW2ldO1xuICAgICAgICBjdXJyZW50RmlsdGVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFuZG9tID4gMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gLy8gZmlsdGVyIGZ1bmN0aW9uYWxpdHlcbiAgICAvLyAkKCcjZmlsdGVycyBhJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAvLyAgIHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAvLyAgICRjb250YWluZXIuaXNvdG9wZSh7IGZpbHRlcjogc2VsZWN0b3IgfSk7XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfSk7XG4gICAgLy8gICAgICAgfSk7XG5cbiAgICAvLyAgICRjb250YWluZXIucHJlbG9hZGVyKHtcbiAgICAvLyAgICAgZmFkZUluOiA3MDAsXG4gICAgLy8gICAgIGRlbGF5IDogMjAwXG4gICAgLy8gICB9KTtcbn0iXX0=
