/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
'use strict';

const _ = require('underscore'),
  fs = require('fs');

module.exports = {
  _defaultOptions: {
    src: "<%= theme %>/images/sprite/*.png",
    dest: "<%= theme %>/images/sprite.png",
    padding: 5,
    destCss: "<%= theme %>/css/source/_sprite.less",
    cssTemplate: "<%= src %>/templates/less.template.handlebars",
    imgPath: "../images/sprite.png",
    algorithm: "binary-tree",
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name;
    }
  },
  _setup: function (config) {
    const checkDirectory = function (path) {
      try {
        return fs.realpathSync(path);
      }
      catch (e) {
        return false;
      }
    };
    _.each(config.themes, function(theme, name) {
      const themePath = config.path.project + '/app/design/' + theme.area + '/' + theme.name + '/web';
      if (checkDirectory(themePath)) {
        config.sprite[name] = {};
        _.each(config.sprite._defaultOptions, function(value, key) {
          if (typeof value == 'string') {
            const template = _.template(value);
            value = template({
              theme: themePath,
              src: config.path.src
            });
          }
          config.sprite[name][key] = value;
        });
      }
    });
  }
};
