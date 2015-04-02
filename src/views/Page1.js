define(['text!views/Page1.html', 'views/NewButtonWidget'], function (html, NewButtonWidget) {

	'use strict';

	return Giraffe.View.extend({

		template: html,

		serialize: function() {
			return {name: 'my view'};
		},

		initialize: function () {
			console.log('Page1.js');
		},

		afterRender: function () {
			var buttonWidget = new NewButtonWidget();
			buttonWidget.attachTo(this.el);
		}

	});

});