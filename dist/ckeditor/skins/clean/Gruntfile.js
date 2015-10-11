﻿module.exports = function(grunt) {
    var config = grunt.file.readJSON(__dirname + '/package.json');


    grunt.initConfig({
        'pkg': config,
        'svg_fallback': {
            'options': {
                //'debug': true,
                'svgclass': 'cke_svgicon',
                'closetags': false,
                'movestyles': true
                //'usei8class': true,
                //'svgstyle': 'pointer-events: none; visibility: hidden;'
            },
            'your_target': {
                'src': 'src-images/',
                'dest': 'images/'
            }
        }
    });

    grunt.loadTasks(__dirname + '/node_modules/svg_fallback/tasks');
};
