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
    }
    , shell: {
      // copy the shims from bower components to a publicly accessible directory
      // where they can be loaded async by the webshims polyfiller.js
      cpShims: {
        command: 'rm -rf ' + path.join(path.dirname('<%= browserify.main.dest %>'), '/lib/shims')
          + '&& cp -r ' + path.join(components, '/webshim/demos/js-webshim/dev/shims') + path.join(path.dirname('<%= browserify.main.dest %>'), '/lib/')
      }
    }
  });
  
  // so much smarter than manually requiring
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.registerTask('js', ['shell:cpShims', 'browserify'])
};
