window.GLOBAL = (function () {

	'use strict';

	require(['App', 'jquery-ui/core'], function (App) {

		var myApp = new App();
		myApp.attachTo('#wrapper').start();

	});

	return {

		config: {}

	};

}());