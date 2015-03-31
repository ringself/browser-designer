(function(Sass) {
  'use strict';

  // make sure the namespace is available
  !Sass.maps && (Sass.maps = {});

  // files map for sassmagic 
  Sass.maps.sassmagic = {
    directory: 'sassmagic',
    base: 'stylesheets/sassmagic',
    files: [
      'helpers/mixins/_backgroundTransparent.scss',
      'helpers/mixins/_ellipsis-overflow.scss',
      'helpers/mixins/_float.scss',
      'helpers/mixins/_px2rem.scss',
      'helpers/mixins/_content.scss',
      'helpers/mixins/_resizable.scss',
      'helpers/mixins/_stickyFooter.scss',
      'helpers/mixins/_visuallyHidden.scss'
    ]
  };

})(Sass);