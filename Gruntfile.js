module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // package configuration
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },

        imagemin: {
            jpgs: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.jpg'],
                    dest: 'dist/images/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html'
                }
            }
        }
    });

    // Default task(s).
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['cssmin','imagemin', 'htmlmin']);
};