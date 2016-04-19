// jQuery for header hamburger nav
$( function() {
		$( '#menu' ).slicknav();
} );

// jQuery homepage slider
jQuery( document ).ready( function() {
  jQuery( '.carousel' ).slippry();
} );

// Listen for click event on id="chbrd", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'chbrd' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>cheesy bread</h4><p>$2.99</p><p>Pizza dough stuffed and topped with garlic spread and freshly shredded mozzarella served with warm pizza sauce and lite ranch dressing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 0 ].appendChild( myApp );
} );

// Listen for click event on id="tatr", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'tatr' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>tater tots</h4><p>$3.99</p><p>Oven-baked french fries lightly salted and served with ketchup and lite ranch dressing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 1 ].appendChild( myApp );
} );

// Listen for click event on id="mozstks", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'mozstks' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>mozerella sticks</h4><p>$5.99</p><p>Crispy golden sticks with mozerella cheese in the middle, served with marinara sauce.</p>';
		document.getElementsByClassName( 'menuitems' )[ 2 ].appendChild( myApp );
} );

// Listen for click event on id="macnches", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'macnches' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>mac and cheese bites</h4><p>$4.99</p><p>Crispy golden bite size nuggets filled with our four cheese mac and cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 3 ].appendChild( myApp );
} );

// Listen for click event on id="cheepiz", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'cheepiz' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>cheese pizza</h4><p>$7.99</p><p>Four cheese pizza.</p>';
		document.getElementsByClassName( 'menuitems' )[ 4 ].appendChild( myApp );
} );

// Listen for click event on id="peppiz", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'peppiz' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>pepperoni pizza</h4><p>$9.99</p><p>Cheese pizza topped with pepperoni.</p>';
		document.getElementsByClassName( 'menuitems' )[ 5 ].appendChild( myApp );
} );

// Listen for click event on id="vegpiz", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'vegpiz' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>veggi pizza</h4><p>$8.99</p><p>Cheese pizza topped with olives, pepers, and mushrooms</p>';
		document.getElementsByClassName( 'menuitems' )[ 6 ].appendChild( myApp );
} );

// Listen for click event on id="macpiz", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'macpiz' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>mac and cheese pizza</h4><p>$10.99</p><p>Pizza dough topped with our four cheese mac and cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 7 ].appendChild( myApp );
} );

// Listen for click event on id="ckfg", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'ckfg' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>chicken fingers</h4><p>$8.99</p><p>Golden crispy chicken fingers with your choice of dipping sauce. Comes with fries.</p>';
		document.getElementsByClassName( 'menuitems' )[ 8 ].appendChild( myApp );
} );

// Listen for click event on id="spmt", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'spmt' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>spahgetti and meatballs</h4><p>$6.99</p><p>Linguine topped with marinara sauce with meatballs</p>';
		document.getElementsByClassName( 'menuitems' )[ 9 ].appendChild( myApp );
} );

// Listen for click event on id="ckwp", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'ckwp' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>chicken caesar wrap</h4><p>$8.99</p><p>A whole-wheat tortilla wrap filled with chicken breast, Romaine lettuce, Caesar dressing and Parmesan cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 10 ].appendChild( myApp );
} );

// Listen for click event on id="cheebrgr", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'cheebrgr' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>cheese burger</h4><p>$9.99</p><p>100% grass fed angus beef cooked to your liking topped with cheddar cheese, bacon, lettuce, and tomato. Comes with fries.</p>';
		document.getElementsByClassName( 'menuitems' )[ 11 ].appendChild( myApp );
} );

// Listen for click event on id="cinbrst", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'cinbrst' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>cinnamon breadstick</h4><p>$4.99</p><p>Freshly baked, topped with cinnamon spread and shortbread topping, and drizzled with sugar icing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 12 ].appendChild( myApp );
} );

// Listen for click event on id="apppiz", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'apppiz' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>Apple Pizza</h4><p>$3.99</p><p>An individual-size pizza topped with cinnamon apples and shortbread topping, and drizzled with sweet icing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 13 ].appendChild( myApp );
} );

// Listen for click event on id="chur", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'chur' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>churros</h4><p>$2.99</p><p>Served with both salted caramel and white chocolate icing sauce.</p>';
		document.getElementsByClassName( 'menuitems' )[ 14 ].appendChild( myApp );
} );

// Listen for click event on id="pizcoki", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'pizcoki' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>pizza cookie</h4><p>$4.99</p><p>An Individual-size pizza made with cookie dough and topped with chocolate chips.</p>';
		document.getElementsByClassName( 'menuitems' )[ 15 ].appendChild( myApp );
} );

// Listen for click event on id="sda", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'sda' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>soda</h4><p>$2.99</p><p>Refills on all soft drinks! Pepsi, Mountain Dew, Mug, Sierra Mist</p>';
		document.getElementsByClassName( 'menuitems' )[ 16 ].appendChild( myApp );
} );

// Listen for click event on id="jce", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'jce' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>juice</h4><p>$1.99</p><p>Tropicana, Gatorade, Hi-C</p>';
		document.getElementsByClassName( 'menuitems' )[ 17 ].appendChild( myApp );
} );

// Listen for click event on id="wtr", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'wtr' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>bottled water</h4><p>$1.99</p><p>Aquafina bottled water</p>';
		document.getElementsByClassName( 'menuitems' )[ 18 ].appendChild( myApp );
} );

// Listen for click event on id="slrp", when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'slrp' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<h4>slurpie</h4><p>$3.99</p><p>Flavors: lime, cherry, coca-cola, berry, and raspberry.</p>';
		document.getElementsByClassName( 'menuitems' )[ 19 ].appendChild( myApp );
} );
