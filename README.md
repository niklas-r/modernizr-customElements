modernizr-customElements
========================
Tests if the current browser supports HTML5 and/or custom elements.

Useful for example when writing AngularJS applications.

## How to use
In JS: `if ( Modernizr.customelements ) { /*...*/ };`
In CSS: ` .customelements { color: red; }` or ` .no-customelements { color: hotPink; }`

## Credits 
All credits goes to [aFarkas](https://github.com/aFarkas) for [html5shiv](https://github.com/aFarkas/html5shiv). This repo is just his code wrapped in Modernizr.