module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img-pre/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    // outputStyle: 'compressed',
                    environment: 'development'
                }
            }
        },
        autoprefixer: {
	       	dist: {
        		options: {
  					browsers: ['last 2 version', 'ie 8', 'ie 9'],
				},
                files: {
                    'css/main.css' : 'css/main.css',
                    /** here we put the files we want to be prefixed
                    /** files to make : file to watch */
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: '**/*.scss',
                tasks: ['compass', 'autoprefixer'], /*'autoprefixer'*/
                options: {
                    livereload: true,
                },
            },
            images: {
		      	files: ['img-pre/**/*.{png,jpg,gif}'],
		      	tasks: ['imagemin'],
		      	options: {
		      		// spawn: false,
		      	}
       		},
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'compass', 'autoprefixer', 'watch']); /*'autoprefixer',*/
};
