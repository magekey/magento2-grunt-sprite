/**
 * Copyright © MageKey. All rights reserved.
 */

module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('setup', function (target) {
        var fs = require('fs'),
            path = require('path'),
            projectPath = fs.realpathSync('../../../') + '/',
            relativeDirectory = path.relative(projectPath, fs.realpathSync('./')),
            symlinkDirectoryName = 'grunt-tools';

        try {
            fs.symlinkSync(relativeDirectory, projectPath + '/' + symlinkDirectoryName, 'dir');
        } catch (error) {
            grunt.log.errorlns(error);
        }
    });
};
