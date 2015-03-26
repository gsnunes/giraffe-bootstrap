require.config({
	urlArgs: 'bust=' + (new Date()).getTime(),
	baseUrl: 'src',
	deps: ['main'],
	paths: {
		'requireLib': '../assets/bower_components/requirejs/require',
		'giraffe': '../assets/bower_components/backbone.giraffe/dist/backbone.giraffe.min',
		'jquery': '../assets/bower_components/jquery/dist/jquery.min',
		'lodash': '../assets/bower_components/lodash/lodash.min',
		'backbone': '../assets/bower_components/backbone/backbone-min',
		'text': '../assets/bower_components/requirejs-text/text'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'lodash']
		},
		giraffe: {
			deps: ['backbone']
		},
		main: {
			deps: ['giraffe']
		}
	},
	preserveLicenseComments: false,
	include: ['requireLib'],
	out: 'main-built.js'
});