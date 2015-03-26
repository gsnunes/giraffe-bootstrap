define(['text!views/Page1.html'], function (html) {

	'use strict';

	return Giraffe.View.extend({

		template: html,

		initialize: function () {
			console.log('Page1.js');
		}

	});

});