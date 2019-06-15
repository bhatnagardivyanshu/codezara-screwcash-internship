$(window).load(function() {

$("#demo").flexisel({

  //  The initial number of visible items in the carousel
  visibleItems: 5, 

  // Sets the initial number of items that you want to scroll.
//  itemsTo<a href="http://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: 3,

  // Speed of the scrolling animation
  animationSpeed: 1000, 

  // Sets whether or not the carousel wraps infinitely
  infinite: true,

  // The left/right arrows will be added to the element with this selector instead of the default
  navigationTargetSelector: null,

  // Auto scrolling
  autoPlay: {
    enable: false,
    interval: 5000,
    pauseOnHover: true
  },

  // Custom breakpoints for responsive design
  responsiveBreakpoints: { 
    portrait: { 
      changePoint:480,
      visibleItems: 1,
      itemsToScroll: 1
    }, 
    landscape: { 
      changePoint:640,
      visibleItems: 2,
      itemsToScroll: 2
    },
    tablet: { 
      changePoint:768,
      visibleItems: 3,
      itemsToScroll: 3
    }
  },

  // callbacks
  loaded: function(){ },
  before: function(){ },
  after: function(){ }

});  

});