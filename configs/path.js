/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
'use strict';

const fs = require('fs');

module.exports = {
  userConfigFile: 'grunt-sprite-config',
  symlinkDirectoryName: 'grunt-tools',
  project: fs.realpathSync('../../../'),
  src: fs.realpathSync('')
};
