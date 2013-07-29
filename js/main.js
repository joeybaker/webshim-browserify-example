var $ = require('jquery')

require('modernizr')
require('./lib/polyfiller.js') // you could also point to 'bower_components/webshim/src/polyfiller.js' if you want to use the default

// polyfill forms for old browsers
$.webshims.setOptions({basePath: '/js/lib/shims/'});
$.webshims.setOptions('forms', {addValidators: true});
$.webshims.polyfill('forms es5');

