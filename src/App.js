define(['views/Page1'], function (Page1) {

	'use strict';

	return Giraffe.App.extend({

		initialize: function () {
			console.log('App.js');
		},


		afterRender: function () {
			this.attach(new Page1());
		}

	});

});