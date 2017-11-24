/**
 * Copyright © MageKey. All rights reserved.
 */

module.exports = function (grunt) {
    'use strict';

    var _ = require('underscore'),
        path = require('path'),
        configDir = './configs',
        tasks = grunt.file.expand('./tasks/*.js');

    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, configDir),
        init: true,
        jitGrunt: {
            staticMappings: {
                usebanner: 'grunt-banner'
            }
        }
    });

    tasks.forEach(function (task) {
        require(task)(grunt);
    });

    _.each({
        default: function () {
            grunt.log.subhead('Please run "grunt --help" to show available tasks.');
        }
    }, function (task, name) {
        grunt.registerTask(name, task);
    });
};
