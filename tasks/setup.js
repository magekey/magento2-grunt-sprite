/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('setup', function () {
    const fs = require('fs'),
      path = require('path'),
      configPath = grunt.config.get('path'),
      relativeDirectory = path.relative(configPath.project, fs.realpathSync('./'));

    try {
      fs.symlinkSync(relativeDirectory, configPath.project + '/' + configPath.symlinkDirectoryName, 'dir');
    }
    catch (error) {
      grunt.log.errorlns(error);
    }
  });
};
