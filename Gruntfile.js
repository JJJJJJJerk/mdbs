module.exports = function (grunt) {
    grunt.initConfig({


        //编译scss
        sass: {
            dist: {
                style: 'compact',
                check: true,
                files: {
                    'css/all.css': 'sass/app.scss',
                }
            }
        },

        //合并css
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'css/all.min.css': [
                        "css/all.css",
                        "css/my.css"
                    ]
                }
            }
        },


    });


    // Load all grunt tasks


    // Compress JS Files
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //编译 sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Lint CSS
    grunt.loadNpmTasks('grunt-contrib-csslint');
    //concat 合并css
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('all', ['sass', 'cssmin']);
};
