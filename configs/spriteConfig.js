/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
'use strict';

const _ = require('underscore');

module.exports = {
  defaultOptions: {
    src: "<%= project %>/web/images/sprite/*.png",
    dest: "<%= project %>/web/images/sprite.png",
    padding: 5,
    destCss: "<%= project %>/web/css/source/_sprite.less",
    cssTemplate: "<%= src %>/templates/less.template.handlebars",
    imgPath: "../images/sprite.png",
    algorithm: "binary-tree",
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name;
    }
  },
  setup: function (config) {
    let spriteOptions;
    _.each(config.sprite, function(sprite, name) {
      spriteOptions = _.extend({}, config.spriteConfig.defaultOptions, sprite);
      config.sprite[name] = config.updateTemplateVar(spriteOptions);
    });
  }
};
