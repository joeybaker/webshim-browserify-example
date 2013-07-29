var $ = require('jquery')

require('modernizr')
require('./lib/polyfiller.js')

// polyfill forms for old browsers
$.webshims.setOptions({basePath: '/js/lib/shims/'});
$.webshims.setOptions('forms', {addValidators: true});
$.webshims.polyfill('forms es5');

