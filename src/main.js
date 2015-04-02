window.GLOBAL = (function () {

	'use strict';

	require(['App'], function (App) {

		var myApp = new App();
		myApp.attachTo('#wrapper').start();

	});

	return {

		config: {}

	};

}());