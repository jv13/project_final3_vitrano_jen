//jQuery creates a hover effect on the id easteregg,
//onhover, its adds a class of surprise which changes the color
//to blue and replaces the text "its out of this world fun!".
//one the hover is removed it is replaced with origional text and color
$( document ).ready( function() {
    $( '#easteregg' ).hover( function() {
			$( '#easteregg' ).addClass( 'surprise' ).text( 'Its out of this world fun!' );
		}, function() {
			$( '#easteregg' ).removeClass( 'surprise' ).text( 'welcome to pizza planet' );
		} );
} );

// jQuery for header hamburger nav
$( function() {
		$( '#menu' ).slicknav();
} );

// jQuery homepage slider
jQuery( document ).ready( function() {
  jQuery( '.carousel' ).slippry();
} );

// Listen for click event on id="dishoftheday" or h2 "Pizza planet menu",
//when clicked create article that adds menu special dish of the day.
var dish = document.getElementById( 'dishoftheday' );
dish.addEventListener( 'click', function() {
    var myDish = document.createElement( 'article' );
		myDish.innerHTML = '<h4>Dish of the day: Bacon Mac and Cheese Pizza!</h4>';
		document.getElementsByClassName( 'menutitle' )[ 0 ].appendChild( myDish );
} );

// Listen for click event on id="chbrd",
//when clicked create article that adds item name, description, and price.
var appOne = document.getElementById( 'chbrd' );
appOne.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Pizza dough stuffed and topped with garlic spread' +
		'and freshly shredded mozzarella served with warm pizza sauce and lite ranch dressing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 0 ].appendChild( myApp );
} );

// Listen for click event on id="tatr",
//when clicked create article that adds item name, description, and price.
var appTwo = document.getElementById( 'tatr' );
appTwo.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Oven-baked french fries lightly salted and served' +
		'with ketchup and lite ranch dressing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 1 ].appendChild( myApp );
} );

// Listen for click event on id="mozstks",
//when clicked create article that adds item name, description, and price.
var appThree = document.getElementById( 'mozstks' );
appThree.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Crispy golden sticks with mozerella cheese' +
		'in the middle, served with marinara sauce.</p>';
		document.getElementsByClassName( 'menuitems' )[ 2 ].appendChild( myApp );
} );

// Listen for click event on id="macnches",
//when clicked create article that adds item name, description, and price.
var appFour = document.getElementById( 'macnches' );
appFour.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Crispy golden bite size nuggets filled with' +
		'our four cheese mac and cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 3 ].appendChild( myApp );
} );

// Listen for click event on id="cheepiz",
//when clicked create article that adds item name, description, and price.
var appFive = document.getElementById( 'cheepiz' );
appFive.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Four cheese pizza.</p>';
		document.getElementsByClassName( 'menuitems' )[ 4 ].appendChild( myApp );
} );

// Listen for click event on id="peppiz",
//when clicked create article that adds item name, description, and price.
var appSix = document.getElementById( 'peppiz' );
appSix.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Cheese pizza topped with pepperoni.</p>';
		document.getElementsByClassName( 'menuitems' )[ 5 ].appendChild( myApp );
} );

// Listen for click event on id="vegpiz",
//when clicked create article that adds item name, description, and price.
var appSeven = document.getElementById( 'vegpiz' );
appSeven.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Cheese pizza topped with olives, pepers, and mushrooms</p>';
		document.getElementsByClassName( 'menuitems' )[ 6 ].appendChild( myApp );
} );

// Listen for click event on id="macpiz",
//when clicked create article that adds item name, description, and price.
var appEight = document.getElementById( 'macpiz' );
appEight.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Pizza dough topped with our four cheese mac and cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 7 ].appendChild( myApp );
} );

// Listen for click event on id="ckfg",
//when clicked create article that adds item name, description, and price.
var appNine = document.getElementById( 'ckfg' );
appNine.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Golden crispy chicken fingers with your choice' +
		'of dipping sauce. Comes with fries.</p>';
		document.getElementsByClassName( 'menuitems' )[ 8 ].appendChild( myApp );
} );

// Listen for click event on id="spmt",
//when clicked create article that adds item name, description, and price.
var appTen = document.getElementById( 'spmt' );
appTen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Linguine topped with marinara sauce with meatballs</p>';
		document.getElementsByClassName( 'menuitems' )[ 9 ].appendChild( myApp );
} );

// Listen for click event on id="ckwp",
//when clicked create article that adds item name, description, and price.
var appEleven = document.getElementById( 'ckwp' );
appEleven.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>A whole-wheat tortilla wrap filled with chicken breast,' +
		' Romaine lettuce, Caesar dressing and Parmesan cheese.</p>';
		document.getElementsByClassName( 'menuitems' )[ 10 ].appendChild( myApp );
} );

// Listen for click event on id="cheebrgr",
//when clicked create article that adds item name, description, and price.
var appTwelve = document.getElementById( 'cheebrgr' );
appTwelve.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>100% grass fed angus beef cooked to your liking topped' +
		'with cheddar cheese, bacon, lettuce, and tomato. Comes with fries.</p>';
		document.getElementsByClassName( 'menuitems' )[ 11 ].appendChild( myApp );
} );

// Listen for click event on id="cinbrst",
//when clicked create article that adds item name, description, and price.
var appThirteen = document.getElementById( 'cinbrst' );
appThirteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Freshly baked, topped with cinnamon spread and ' +
		'shortbread topping, and drizzled with sugar icing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 12 ].appendChild( myApp );
} );

// Listen for click event on id="apppiz",
//when clicked create article that adds item name, description, and price.
var appFourteen = document.getElementById( 'apppiz' );
appFourteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>An individual-size pizza topped with cinnamon apples' +
		'and shortbread topping, and drizzled with sweet icing.</p>';
		document.getElementsByClassName( 'menuitems' )[ 13 ].appendChild( myApp );
} );

// Listen for click event on id="chur",
//when clicked create article that adds item name, description, and price.
var appFifteen = document.getElementById( 'chur' );
appFifteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Served with both salted caramel and white chocolate' +
		'icing sauce.</p>';
		document.getElementsByClassName( 'menuitems' )[ 14 ].appendChild( myApp );
} );

// Listen for click event on id="pizcoki",
//when clicked create article that adds item name, description, and price.
var appSixteen = document.getElementById( 'pizcoki' );
appSixteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>An Individual-size pizza made with cookie dough' +
		'and topped with chocolate chips.</p>';
		document.getElementsByClassName( 'menuitems' )[ 15 ].appendChild( myApp );
} );

// Listen for click event on id="sda",
//when clicked create article that adds item name, description, and price.
var appSeventeen = document.getElementById( 'sda' );
appSeventeen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Refills on all soft drinks! Pepsi, Mountain Dew,' +
		' Mug, Sierra Mist</p>';
		document.getElementsByClassName( 'menuitems' )[ 16 ].appendChild( myApp );
} );

// Listen for click event on id="jce",
//when clicked create article that adds item name, description, and price.
var appEighteen = document.getElementById( 'jce' );
appEighteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Tropicana, Gatorade, Hi-C</p>';
		document.getElementsByClassName( 'menuitems' )[ 17 ].appendChild( myApp );
} );

// Listen for click event on id="wtr", when clicked
//create article that adds item name, description, and price.
var appNineteen = document.getElementById( 'wtr' );
appNineteen.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Aquafina bottled water</p>';
		document.getElementsByClassName( 'menuitems' )[ 18 ].appendChild( myApp );
} );

// Listen for click event on id="slrp",
//when clicked create article that adds item name, description, and price.
var appTwenty = document.getElementById( 'slrp' );
appTwenty.addEventListener( 'click', function() {
    var myApp = document.createElement( 'article' );
		myApp.innerHTML = '<p>Flavors: lime, cherry, coca-cola, berry, and raspberry.</p>';
		document.getElementsByClassName( 'menuitems' )[ 19 ].appendChild( myApp );
} );
