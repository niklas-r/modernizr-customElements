'use strict';

/**
 * Taken from https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv.js#L33
 */

Modernizr.addTest('customElements', function() {
  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements = false;

  (function () {
    try {
      var a = document.createElement('a');
      a.innerHTML = '<xyz></xyz>';

      supportsUnknownElements = a.childNodes.length === 1 || (function() {
        // assign a false positive if unable to shiv
        (document.createElement)('a');
        var frag = document.createDocumentFragment();
        return (
          typeof frag.cloneNode === 'undefined' ||
          typeof frag.createDocumentFragment === 'undefined' ||
          typeof frag.createElement === 'undefined'
        );
      }());
    } catch(e) {}
  }());

  return supportsUnknownElements;
});
