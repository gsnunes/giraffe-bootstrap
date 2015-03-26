console.log('main.js');

require(['App'], function (App) {

	'use strict';

	var myApp = new App();
	myApp.attachTo('#wrapper');

});