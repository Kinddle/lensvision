module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: {
            app: 'app'
        },

        connect: {
            options: {
                port: 3000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
              files: ['app/src/sass/**/*.{scss,sass}'],
              tasks: ['sass:dist']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '<%= config.app %>/src/css/{,*/}*.css',
                    '<%= config.app %>/img/{,*/}*',
                ]
            },
        },
        scsslint: {
          allFiles: [
            'app/src/sass/**/*.scss',
          ],
          options: {
            bundleExec: true,
            config: '.scss-lint.yml',
            reporterOutput: 'scss-lint-report.xml',
            colorizeOutput: true
          },
        },
        sass: {                                // Task
          options: {
            sourceMap: true,
            outputStyle: 'compressed'
          },
          dist: {                            // Target
            files: {
              'app/src/css/styles.css': 'app/src/sass/styles.scss'
            }
          },
        },
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['connect:livereload', 'sass:dist', 'watch']);
};
