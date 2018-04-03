/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
'use strict';

const fs = require('fs');

module.exports = {
  userConfigFile: 'grunt-sprite-config',
  symlinkDirectoryName: 'grunt-sprite',
  project: fs.realpathSync('../../../'),
  src: fs.realpathSync('')
};
