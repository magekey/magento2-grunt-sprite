/**
 * Copyright © MageKey. All rights reserved.
 */
'use strict';

var _ = require('underscore'),
    fs = require('fs'),
    themes = require('./themes'),
    projectPath = fs.realpathSync('../../../') + '/',
    themeOptions = {},
    defaultOptions = {
        src: 'img/sprite/*.png',
        dest: 'img/sprite.png',
        padding: 5,
        destCss: 'css/source/_sprite.less',
        imgPath: '../img/sprite.png',
        algorithm: 'binary-tree'
    };

_.each(themes, function(theme, name) {
    var themePath = projectPath + 'app/design/' + theme.area + '/' + theme.name + '/web/';
    var opts = _.extend({}, defaultOptions, theme);
    themeOptions[name] = {
        src: themePath + opts.src,
        dest: themePath + opts.dest,
        padding: opts.padding,
        destCss: themePath + opts.destCss,
        imgPath: opts.imgPath,
        algorithm: opts.algorithm
    };
});
module.exports = themeOptions;
