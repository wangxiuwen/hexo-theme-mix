/* global hexo */

'use strict';

hexo.on('generateBefore', function () {
  if (hexo.locals.get) {
    var data = hexo.locals.get('data')
    data && data.mix && (hexo.theme.config = data.mix)
  }
})