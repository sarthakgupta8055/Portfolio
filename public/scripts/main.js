'use strict';
console.log("Hello");
function showLocation(location) {
	console.log(window.location.href);
	window.location.href=location+'.html';
}