(function(Sass) {
  'use strict';

  // make sure the namespace is available
  !Sass.maps && (Sass.maps = {});

  // files map for sassmagic 
  Sass.maps.sassmagic = {
    directory: 'sassmagic',
    base: '/dist/stylesheets/sassmagic',
    files: [
      'helpers/mixins/_backgroundTransparent.scss',
      'helpers/mixins/_ellipsis-overflow.scss',
      'helpers/mixins/_float.scss',
      'helpers/mixins/_px2rem.scss'
    ]
  };

})(Sass);