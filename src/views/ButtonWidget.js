define(['text!views/ButtonWidget.html'], function (html) {

	'use strict';

	return Giraffe.View.extend({

		template: html,

		ui: {
			'$button': 'span'
		},

		serialize: function() {
			return {name: 'test'};
		},

		events: {
			'click $button': function () {
				console.log(this.$button);
				console.log('test button');
			}
		},

		initialize: function () {
			console.log('ButtonWidget.js');
			this.test();
		},

		test: function () {
			console.log('test');
		}

	});

});