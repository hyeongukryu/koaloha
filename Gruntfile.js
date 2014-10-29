/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    mochaTest: {
      test: {
        options: {
          run: true,
          debug: true,
          reporter: 'spec'
        },
        src: 'test/*'
      }
    },
    jshint: {
      options: {
        nonbsp: true,
        nonew: true,
        esnext: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noyield: true,
        undef: true,
        unused: true,
        node: true,
        quotmark: 'single'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      test: {
        options: {
          globals: {
            describe: true,
            it: true
          }
        },
        src: ['test/*']
      },
      lib: {
        src: ['lib/*']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint:test', 'jshint:lib', 'mochaTest']);
};
