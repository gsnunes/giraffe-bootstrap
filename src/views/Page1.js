define(['text!views/Page1.html', 'views/NewButtonWidget', 'jquery-ui/datepicker'], function (html, NewButtonWidget, datepicker) {

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
			this.$( "#datepicker" ).datepicker();

			var buttonWidget = new NewButtonWidget();
			buttonWidget.attachTo(this.el);
		}

	});

});