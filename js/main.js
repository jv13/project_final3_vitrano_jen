$( '.picSlider' ).picSlider( {
  animate: 'fade'
} );

$( document ).ready( function() {

$( '#menu' ).slicknav( {

// Label for menu button.

// Use an empty string for no label.

'label': 'MENU',

// If true, the mobile menu is a copy of the original.

'duplicate': true,

// The duration of the sliding animation.

'duration': true,

// Easing used for open animations.

'easingOpen': 'swing',

// Easing used for close animations.

'easingClose': 'swing',

// Element, jQuery object, or jQuery selector string to prepend the mobile menu to.

'prependTo': 'body',

// Element type for parent menu items.

'parentTag': 'a',

// Close menu when a link is clicked.

'closeOnClick': false,

// Allow clickable links as parent elements.

allowParentLinks: false,

// If false, parent links will be separated from the sub-menu toggle.

nestedParentLinks: true,

// Show children of parent links by default.

showChildren: false,

// Add branding to menu bar.

brand: '',

// Called after SlickNav creation

init: function() {},

// Called after menu or sub-menu opened.

open: function() {},

// Called after menu or sub-menu closed.

close: function() {}

} );

} );
