/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
module.exports = function (grunt) {
  'use strict';

  const path = require('path'),
    merge = require('merge-objects'),
    tasks = grunt.file.expand('./tasks/*.js');

  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, './configs'),
    init: true,
    postProcess: function(config) {
      const userConfig = (function () {
        try {
          return require(config.path.project + '/' + config.path.userConfigFile);
        }
        catch (error) {
          return {};
        }
      })();

      merge(config, userConfig);
      config.sprite._setup(config);
    }
  });

  tasks.push('time-grunt');
  tasks.forEach(function (task) {
    require(task)(grunt);
  });
};
