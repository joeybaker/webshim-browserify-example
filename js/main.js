var $ = require('jquery')

require('modernizr')
require('./lib/polyfiller.js') // you could also point to 'bower_components/webshim/src/polyfiller.js' if you want to use the default

// polyfill forms for old browsers
$.webshims.setOptions({basePath: '/js/lib/shims/'});
$.webshims.setOptions('forms', {addValidators: true});
$.webshims.polyfill('forms es5');

/* 
if you're just shimming form support, it's probably not necessary to wait 
until the document is ready to bootstrap your app, since it's unlikely most
users would submit the form before webshims finishes loading. However if you
are using another feature that must be present when the app starts (e.g., 
geolocation) you'll probably want to use a document ready event handler:

$(function () {
	
});
*/

