/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
module.exports = function (grunt) {
  'use strict';

  const _ = require('underscore'),
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
