module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
	      main: {
	        src: './js/main.js'
	        , dest: './public/js/main.js'
	        , options: {
	          debug: true
	          , shim: {
	            jquery: {
	              path: './bower_components/jquery/jquery.js'
	              , exports: '$'
	            }
	            , modernizr: {
	              path: './bower_components/webshim/demos/js-webshim/dev/extras/modernizr-custom.js'
	              , exports: 'Modernizr'
	            }
	          }
	        }
	      }
	  	},

	  	shell: {
			cpShims: {
				command: 'rm -rf public/js/shims && cp -r bower_components/webshim/demos/js-webshim/dev/shims public/js/lib'
			}
		}
	});

};
