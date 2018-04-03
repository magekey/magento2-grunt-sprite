/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
module.exports = function (grunt) {
  'use strict';

  const _ = require('underscore'),
    path = require('path'),
    merge = require('merge-objects'),
    tasks = grunt.file.expand('./tasks/*.js');

  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, './configs'),
    init: true,
    postProcess: function(config) {
      let userConfig = (function () {
        try {
          return require(config.path.project + '/' + config.path.userConfigFile);
        }
        catch (error) {
          return {};
        }
      })();
      merge(config, userConfig);

      config.updateTemplateVar = function (vars) {
        let template = {};
        _.each(vars, function(value, key) {
          if (typeof value == 'string') {
            template = _.template(value);
            value = template(config.path);
          }
          vars[key] = value;
        });
        return vars;
      };

      config.updateTemplateVar(config.path);
      config.spriteConfig.setup(config);
    }
  });

  tasks.forEach(function (task) {
    require(task)(grunt);
  });
};
