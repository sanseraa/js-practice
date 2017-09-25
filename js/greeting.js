/* This script displays a greeting to the user based upon the current time. 
It is an example from JS book. */

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good Evening';
} else if (hourNow > 12) {
	greeting = 'Good Afternoon';
} else if (hourNow > 0 ) {
	greeting = 'Good Morning';
} else {
	greeting = 'Welcome';
}
document.write(greeting);

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;
var el = document.getElementbyId('cost');
el.textContent = '$' + total;

