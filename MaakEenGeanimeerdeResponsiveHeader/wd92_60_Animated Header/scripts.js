(function() {

  'use strict';

  var main = document.querySelector("main"),
      header = document.querySelector("header"),
      hHeight;

  function setTopHeight() {
    hHeight = header.offsetHeight;
    main.style.paddingTop = hHeight + "px";
  }

  function onScroll() {

    window.addEventListener("scroll", callbackFunc);

    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 50) {
        header.classList.add("scroller");
      } else {
        header.classList.remove("scroller");
      }
    }
  }

  window.onload = function() {
    setTopHeight();
    onScroll();
  };

  window.onresize = function() {
    setTopHeight();
   // onScroll();
  };
})();