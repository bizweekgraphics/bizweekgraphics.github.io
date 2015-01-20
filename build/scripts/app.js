(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./isotope.js')();
// require('./menu.js')();
// require('./hover.js')();

},{"./isotope.js":2}],2:[function(require,module,exports){
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
},{"isotope-layout":"isotope-layout"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy9pc290b3BlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4vaXNvdG9wZS5qcycpKCk7XG4vLyByZXF1aXJlKCcuL21lbnUuanMnKSgpO1xuLy8gcmVxdWlyZSgnLi9ob3Zlci5qcycpKCk7XG4iLCJ2YXIgSXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyJylcbiAgICAvL2luaXRcbiAgICB2YXIgaXNvID0gbmV3IElzb3RvcGUoY29udGFpbmVyLCB7XG4gICAgICBpdGVtU2VsZWN0b3I6ICcucHJvamVjdC1pdGVtJyxcbiAgICAgIG1hc29ucnk6IHtcbiAgICAgICAgY29sdW1uV2lkdGg6IDEwXG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIC8vIGZpbHRlciBmdW5jdGlvbmFsaXR5XG4gICAgLy8gJCgnI2ZpbHRlcnMgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgLy8gICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgLy8gICAkY29udGFpbmVyLmlzb3RvcGUoeyBmaWx0ZXI6IHNlbGVjdG9yIH0pO1xuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH0pO1xuICAgIC8vICAgICAgIH0pO1xuXG4gICAgLy8gICAkY29udGFpbmVyLnByZWxvYWRlcih7XG4gICAgLy8gICAgIGZhZGVJbjogNzAwLFxuICAgIC8vICAgICBkZWxheSA6IDIwMFxuICAgIC8vICAgfSk7XG59Il19
