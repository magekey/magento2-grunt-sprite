/**
 * Copyright © MageKey. All rights reserved.
 */
'use strict';

const _ = require('underscore'),
  fs = require('fs'),
  themes = require('./themes'),
  projectPath = fs.realpathSync('../../../') + '/',
  srcPath = fs.realpathSync('') + '/',
  themeOptions = {},
  defaultOptions = {
    src: 'images/sprite/*.png',
    dest: 'images/sprite.png',
    destCss: 'css/source/_sprite.less',
    imgPath: '../images/sprite.png',
    cssTemplate: 'less.template.handlebars'
  };

_.each(themes, function(theme, name) {
  const themePath = projectPath + 'app/design/' + theme.area + '/' + theme.name + '/web/',
    opts = _.extend({}, defaultOptions, theme);
  themeOptions[name] = {
    src: themePath + opts.src,
    dest: themePath + opts.dest,
    padding: 5,
    destCss: themePath + opts.destCss,
    cssTemplate: srcPath + 'templates/' + opts.cssTemplate,
    imgPath: opts.imgPath,
    algorithm: 'binary-tree',
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name;
    }
  };
});
module.exports = themeOptions;
