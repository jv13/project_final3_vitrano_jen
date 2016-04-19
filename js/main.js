// jQuery for header hamburger nav
$( function() {
		$( '#menu' ).slicknav();
} );

// jQuery homepage slider
jQuery( document ).ready( function() {
  jQuery( '.carousel' ).slippry();
} );

var appOne = document.getElementById( 'chbrd' );

appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>cheesy bread</p><p>New to our app menus</p><p>$2.99</p>';
		document.getElementsByClassName( 'menuitems' )[ 0 ].appendChild( myApp );
} );
